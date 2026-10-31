import { apiRoutes } from '~/constants/routes'
import { RATING_MAX, RATING_MIN } from '~/constants/rating'
import type { RatingVotePayload, ToolRatingAggregate, ToolRatingState } from '~/types/rating'

const emptyState = (slug: string): ToolRatingState => ({
  slug,
  rating: 0,
  count: 0,
  yourVote: null,
  enabled: false,
})

const toAverage = (sum: number, count: number): number =>
  count > 0 ? Math.round((sum / count) * 10) / 10 : 0

const failureMessage = (caught: unknown, fallback: string): string => {
  const statusCode = (caught as { statusCode?: number }).statusCode

  if (statusCode === 429) return 'Too many ratings from your connection. Please try again in a few minutes.'
  if (statusCode === 503) return 'Ratings are temporarily unavailable. Please try again later.'

  return fallback
}

export const useToolRating = async (slug: string) => {
  // The voter id lives in an httpOnly cookie, and a plain $fetch made on the
  // server would not forward it, so the own vote would be missing from the SSR HTML.
  const requestFetch = useRequestFetch()

  const { data } = await useAsyncData(
    `tool-rating:${slug}`,
    () => requestFetch<ToolRatingState>(apiRoutes.rating(), { query: { slug } }),
    { default: () => emptyState(slug) },
  )

  const pending = ref(false)
  const error = ref<string | null>(null)
  const honeypot = ref('')
  const loadedAt = Date.now()

  const average = computed(() => data.value.rating)
  const count = computed(() => data.value.count)
  const yourVote = computed(() => data.value.yourVote)
  const enabled = computed(() => data.value.enabled)

  const aggregate = computed<ToolRatingAggregate | null>(() =>
    count.value > 0 ? { rating: average.value, count: count.value } : null
  )

  // Local re-calculation keeps the stars in sync before the server answers;
  // the response then replaces it with the authoritative numbers.
  const predict = (state: ToolRatingState, vote: number | null): ToolRatingState => {
    const previous = state.yourVote
    const sum = state.rating * state.count - (previous ?? 0) + (vote ?? 0)
    const nextCount = state.count - (previous ? 1 : 0) + (vote ? 1 : 0)

    return { ...state, yourVote: vote, count: nextCount, rating: toAverage(sum, nextCount) }
  }

  const send = async (
    request: () => Promise<ToolRatingState>,
    predicted: ToolRatingState,
    fallback: string,
  ): Promise<void> => {
    if (pending.value) return

    const snapshot = data.value

    data.value = predicted
    pending.value = true
    error.value = null

    try {
      data.value = await request()
    } catch (caught) {
      data.value = snapshot
      error.value = failureMessage(caught, fallback)
    } finally {
      pending.value = false
    }
  }

  const vote = (value: number): Promise<void> => {
    if (value < RATING_MIN || value > RATING_MAX) return Promise.resolve()

    const payload: RatingVotePayload = {
      slug,
      rating: value,
      loadedAt,
      email: honeypot.value || undefined,
    }

    return send(
      () => $fetch<ToolRatingState>(apiRoutes.rating(), { method: 'POST', body: payload }),
      predict(data.value, value),
      'We could not save your rating. Please try again.',
    )
  }

  const withdraw = (): Promise<void> => send(
    () => $fetch<ToolRatingState>(apiRoutes.rating(), { method: 'DELETE', query: { slug } }),
    predict(data.value, null),
    'We could not remove your rating. Please try again.',
  )

  return {
    aggregate,
    average,
    count,
    yourVote,
    enabled,
    pending,
    error,
    honeypot,
    vote,
    withdraw,
  }
}
