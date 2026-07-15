export interface Tool {
  id: string
  slug: string

  name: string
  tagline: string
  description: string

  logo: string

  website: string

  category: string

  pricing: ToolPricing

  featured: boolean

  rating: number

  reviewCount: number
}

export type ToolPricing =
  | 'Free'
  | 'Freemium'
  | 'Paid'