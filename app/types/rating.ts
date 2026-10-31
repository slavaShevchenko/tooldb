export interface ToolRatingState {
  slug: string
  rating: number
  count: number
  yourVote: number | null
  enabled: boolean
}

export interface ToolRatingAggregate {
  rating: number
  count: number
}

export interface RatingVotePayload {
  slug: string
  rating: number
  loadedAt: number
  email?: string
}
