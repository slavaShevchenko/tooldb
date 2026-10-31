import type { ToolRatingState } from '~/types/rating'

export default defineEventHandler(async (event): Promise<ToolRatingState> => {
  const { slug } = getQuery(event)

  return withdrawVote(event, String(slug ?? ''))
})
