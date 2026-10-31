import type { H3Event } from 'h3'

type RedisCommand = readonly (string | number)[]

interface UpstashConfig {
  url: string
  writeToken: string
  readToken: string
}

interface PipelineItem {
  result?: unknown
  error?: string
}

const REQUEST_TIMEOUT_MS = 1500

// Vercel injects the Upstash REST credentials under the store-specific names below,
// while runtimeConfig keys allow overriding them with NUXT_RATING_* variables.
const resolveConfig = (event?: H3Event): UpstashConfig | null => {
  const config = event ? useRuntimeConfig(event) : useRuntimeConfig()

  const url = config.ratingRedisUrl || process.env.TOOLDB_KV_REST_API_URL || ''
  const writeToken = config.ratingRedisToken || process.env.TOOLDB_KV_REST_API_TOKEN || ''

  if (!url || !writeToken) return null

  const readToken = config.ratingRedisReadOnlyToken
    || process.env.TOOLDB_KV_REST_API_READ_ONLY_TOKEN
    || writeToken

  return { url, writeToken, readToken }
}

const execute = async (
  config: UpstashConfig,
  token: string,
  commands: RedisCommand[],
): Promise<unknown[] | null> => {
  try {
    const response = await fetch(`${config.url}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commands),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })

    if (!response.ok) {
      console.error(`[rating] Upstash responded with ${response.status}`)
      return null
    }

    // The pipeline endpoint answers with a bare array of { result } / { error } items.
    const payload = await response.json() as PipelineItem[] | { error?: string }

    if (!Array.isArray(payload)) {
      console.error(`[rating] Upstash error: ${payload.error ?? 'unknown'}`)
      return null
    }

    return payload.map(item => item.error ? null : item.result)
  } catch (error) {
    console.error('[rating] Upstash request failed:', error instanceof Error ? error.message : error)
    return null
  }
}

export const isRatingStorageEnabled = (event?: H3Event): boolean => resolveConfig(event) !== null

export const redisRead = (commands: RedisCommand[], event?: H3Event): Promise<unknown[] | null> => {
  const config = resolveConfig(event)

  return config ? execute(config, config.readToken, commands) : Promise.resolve(null)
}

export const redisWrite = (commands: RedisCommand[], event?: H3Event): Promise<unknown[] | null> => {
  const config = resolveConfig(event)

  return config ? execute(config, config.writeToken, commands) : Promise.resolve(null)
}

// HMAC key used to hash voter IPs. Falls back to the write token so the rating
// endpoints run without extra configuration; set ratingIpPepper for a dedicated secret.
export const ratingHashSecret = (event?: H3Event): string | null => {
  const config = event ? useRuntimeConfig(event) : useRuntimeConfig()

  return config.ratingIpPepper
    || process.env.RATING_IP_PEPPER
    || config.ratingRedisToken
    || process.env.TOOLDB_KV_REST_API_TOKEN
    || null
}
