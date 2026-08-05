import type { ToolCategory } from '~/constants/tool-categories'
import type { ToolContent } from './toolContent'

export interface Tool {
  id: string
  slug: string

  name: string
  tagline: string
  description: string
  overview: string

  logo: string

  website: string
  affiliateUrl: string | null

  categories: ToolCategory[]
  tags: string[]

  pricing: ToolPricing
  pricingDescription: string

  featured: boolean

  rating: number
  reviewCount: number

  lastUpdated: string

  highlights: ToolHighlight[]
  features: ToolFeature[]
  platforms: ToolPlatform[]
}

export type ToolDetails = Tool & {
  content?: ToolContent
}

export interface ToolHighlight {
  id: string
  text: string
}

export interface ToolFeature {
  id: string
  title: string
  description: string
  icon: string
}

export type ToolPlatform =
  | 'web'
  | 'windows'
  | 'mac'
  | 'ios'
  | 'android'
  | 'linux'

export type ToolPricing =
  | 'Free'
  | 'Freemium'
  | 'Paid'