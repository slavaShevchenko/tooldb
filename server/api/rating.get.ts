import type { ToolRatingState } from '~/types/rating'

export default defineEventHandler(async (event): Promise<ToolRatingState> => {
  // The response contains the caller's own vote, so it must never be cached.
  setHeader(event, 'cache-control', 'no-store')

  const { slug } = getQuery(event)

  return readRatingState(event, String(slug ?? ''))
})
