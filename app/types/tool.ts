import type { ToolCategory } from '~/constants/tool-categories'

export interface Tool {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  logo: string
  website: string
  affiliateUrl: string | null
  company: string
  categories: ToolCategory[]
  tags: string[]
  pricing: ToolPricing
  featured: boolean
  rating: number
  reviewCount: number
  lastUpdated: string
}

export type ToolPricing =
  | 'Free'
  | 'Freemium'
  | 'Paid'