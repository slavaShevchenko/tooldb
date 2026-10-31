import type { H3Event } from 'h3'
import { tools } from '~/data/tools'
import { RATING_MAX, RATING_MIN } from '~/constants/rating'
import type { ToolRatingState } from '~/types/rating'

export const RATING_COOKIE = 'tdb_vid'

const VOTE_TTL_SECONDS = 60 * 60 * 24 * 365
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365
const MINUTE_WINDOW_SECONDS = 120
const DAY_WINDOW_SECONDS = 86400
const VOTES_PER_MINUTE = 5
const VOTES_PER_DAY = 10
const MIN_TIME_ON_PAGE_MS = 500
const MAX_TIME_ON_PAGE_MS = 1000 * 60 * 60 * 24
const IP_HASH_LENGTH = 32

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const TOOL_SLUGS = new Set(tools.map(tool => tool.slug))

const keys = {
  aggregate: (slug: string) => `rating:${slug}`,
  vote: (slug: string, voterId: string) => `rating:${slug}:v:${voterId}`,
  minute: (hash: string, window: number) => `rl:vote:m:${hash}:${window}`,
  day: (hash: string, day: string) => `rl:vote:d:${hash}:${day}`,
}

interface Aggregate {
  sum: number
  count: number
}

const toAverage = ({ sum, count }: Aggregate): number =>
  count > 0 ? Math.round((sum / count) * 10) / 10 : 0

// HMGET answers with the requested fields in order, so a missing hash yields [null, null].
const parseAggregate = (value: unknown): Aggregate => {
  const [sum, count] = (Array.isArray(value) ? value : []) as (string | null)[]

  return {
    sum: Number(sum) || 0,
    count: Number(count) || 0,
  }
}

const parseVote = (value: unknown): number | null => {
  const vote = Number(value)

  return Number.isInteger(vote) && vote >= RATING_MIN && vote <= RATING_MAX ? vote : null
}

// Marks aggregates that must be refreshed on the next read instead of waiting
// for maxAge: Nitro's cached function has no removal API in this version.
const staleAggregates = new Set<string>()

// Throws when the storage is unreachable so that swr keeps serving the previous
// value instead of caching zeros for the whole maxAge window.
const fetchAggregate = async (slug: string): Promise<Aggregate> => {
  const result = await redisRead([['HMGET', keys.aggregate(slug), 'sum', 'count']])

  if (!result) throw new Error('Rating storage unavailable')

  return parseAggregate(result[0])
}

const readAggregate = defineCachedFunction(fetchAggregate, {
  name: 'tool-rating-aggregate',
  getKey: (slug: string) => slug,
  maxAge: 60,
  // swr would keep serving the pre-vote value after invalidation, so the voter
  // would not see their own rating on reload.
  swr: false,
  shouldInvalidateCache: (slug: string) => staleAggregates.delete(slug),
})

const readVote = async (slug: string, voterId: string): Promise<number | null> => {
  const result = await redisRead([['GET', keys.vote(slug, voterId)]])

  return result ? parseVote(result[0]) : null
}

const requireKnownSlug = (slug: unknown): string => {
  if (typeof slug !== 'string' || !TOOL_SLUGS.has(slug)) {
    throw createError({ statusCode: 404, statusMessage: 'Tool not found' })
  }

  return slug
}

const requireValidScore = (value: unknown): number => {
  const score = Number(value)

  if (!Number.isInteger(score) || score < RATING_MIN || score > RATING_MAX) {
    throw createError({ statusCode: 400, statusMessage: 'Rating must be an integer between 1 and 5' })
  }

  return score
}

const requireHumanTiming = (value: unknown): void => {
  const loadedAt = Number(value)
  const elapsed = Date.now() - loadedAt

  if (!Number.isFinite(elapsed) || elapsed < MIN_TIME_ON_PAGE_MS) {
    throw createError({ statusCode: 400, statusMessage: 'Rating was submitted too quickly' })
  }

  if (elapsed > MAX_TIME_ON_PAGE_MS) {
    throw createError({ statusCode: 400, statusMessage: 'Page session expired, reload to rate this tool' })
  }
}

const cookieVoterId = (event: H3Event): string | null => {
  const value = getCookie(event, RATING_COOKIE)

  return value && UUID_PATTERN.test(value) ? value : null
}

const issueVoterId = (event: H3Event): string => {
  const voterId = crypto.randomUUID()

  setCookie(event, RATING_COOKIE, voterId, {
    httpOnly: true,
    sameSite: 'lax',
    secure: getRequestProtocol(event, { xForwardedProto: true }) === 'https',
    path: '/',
    maxAge: COOKIE_MAX_AGE_SECONDS,
  })

  return voterId
}

// IP + User-Agent are hashed with a server-side secret: raw IPs are never stored,
// and without the secret the hash cannot be reversed by brute force.
const hashVoter = async (event: H3Event): Promise<string> => {
  const ip = getRequestIP(event, { xForwardedFor: true })?.address || 'unknown'
  const userAgent = getHeader(event, 'user-agent') || 'unknown'
  const secret = ratingHashSecret(event) || 'tooldb-rating'
  const encoder = new TextEncoder()

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(`${ip}|${userAgent}`))

  return [...new Uint8Array(signature)]
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, IP_HASH_LENGTH)
}

export const readRatingState = async (event: H3Event, slug: string): Promise<ToolRatingState> => {
  requireKnownSlug(slug)

  const voterId = cookieVoterId(event)

  try {
    const [aggregate, yourVote] = await Promise.all([
      readAggregate(slug),
      voterId ? readVote(slug, voterId) : Promise.resolve(null),
    ])

    return {
      slug,
      rating: toAverage(aggregate),
      count: aggregate.count,
      yourVote,
      enabled: true,
    }
  } catch {
    return { slug, rating: 0, count: 0, yourVote: null, enabled: false }
  }
}

export const submitVote = async (
  event: H3Event,
  payload: { slug: unknown, rating: unknown, loadedAt: unknown, email?: unknown },
): Promise<ToolRatingState> => {
  if (!isRatingStorageEnabled(event)) {
    throw createError({ statusCode: 503, statusMessage: 'Ratings are not configured' })
  }

  requireHumanTiming(payload.loadedAt)

  const slug = requireKnownSlug(payload.slug)
  const score = requireValidScore(payload.rating)

  // Honeypot: bots fill the hidden field, so answer with a plausible success
  // without touching the storage and without revealing the rule.
  if (payload.email) return readRatingState(event, slug)

  const voterId = cookieVoterId(event) ?? issueVoterId(event)
  const voterHash = await hashVoter(event)
  const minuteKey = keys.minute(voterHash, Math.floor(Date.now() / 60000))
  const dayKey = keys.day(voterHash, new Date().toISOString().slice(0, 10))

  const checks = await redisWrite([
    ['INCR', minuteKey],
    ['EXPIRE', minuteKey, MINUTE_WINDOW_SECONDS, 'NX'],
    ['INCR', dayKey],
    ['EXPIRE', dayKey, DAY_WINDOW_SECONDS, 'NX'],
    ['GET', keys.vote(slug, voterId)],
  ], event)

  if (!checks) {
    throw createError({ statusCode: 503, statusMessage: 'Rating service unavailable' })
  }

  if (Number(checks[0]) > VOTES_PER_MINUTE || Number(checks[2]) > VOTES_PER_DAY) {
    throw createError({ statusCode: 429, statusMessage: 'Too many ratings from your connection' })
  }

  const previous = parseVote(checks[4])
  const aggregateKey = keys.aggregate(slug)

  const written = await redisWrite([
    ['HINCRBY', aggregateKey, 'sum', score - (previous ?? 0)],
    ['HINCRBY', aggregateKey, 'count', previous === null ? 1 : 0],
    ['SET', keys.vote(slug, voterId), score, 'EX', VOTE_TTL_SECONDS],
    ['HMGET', aggregateKey, 'sum', 'count'],
  ], event)

  if (!written) {
    throw createError({ statusCode: 503, statusMessage: 'Rating service unavailable' })
  }

  staleAggregates.add(slug)

  const aggregate = parseAggregate(written[3])

  return {
    slug,
    rating: toAverage(aggregate),
    count: aggregate.count,
    yourVote: score,
    enabled: true,
  }
}

export const withdrawVote = async (event: H3Event, slug: unknown): Promise<ToolRatingState> => {
  if (!isRatingStorageEnabled(event)) {
    throw createError({ statusCode: 503, statusMessage: 'Ratings are not configured' })
  }

  const tool = requireKnownSlug(slug)
  const voterId = cookieVoterId(event)

  if (!voterId) return readRatingState(event, tool)

  const aggregateKey = keys.aggregate(tool)
  const removed = await redisWrite([
    ['GETDEL', keys.vote(tool, voterId)],
  ], event)

  if (!removed) {
    throw createError({ statusCode: 503, statusMessage: 'Rating service unavailable' })
  }

  const previous = parseVote(removed[0])

  if (previous === null) return readRatingState(event, tool)

  const written = await redisWrite([
    ['HINCRBY', aggregateKey, 'sum', -previous],
    ['HINCRBY', aggregateKey, 'count', -1],
    ['HMGET', aggregateKey, 'sum', 'count'],
  ], event)

  if (!written) {
    throw createError({ statusCode: 503, statusMessage: 'Rating service unavailable' })
  }

  staleAggregates.add(tool)

  const aggregate = parseAggregate(written[2])

  return {
    slug: tool,
    rating: toAverage(aggregate),
    count: aggregate.count,
    yourVote: null,
    enabled: true,
  }
}
