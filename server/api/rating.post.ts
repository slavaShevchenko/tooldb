import type { ToolRatingState } from '~/types/rating'

export default defineEventHandler(async (event): Promise<ToolRatingState> => {
  const body = await readBody<Record<string, unknown>>(event) ?? {}

  return submitVote(event, body)
})
