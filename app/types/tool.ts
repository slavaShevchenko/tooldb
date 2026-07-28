import type { ToolCategory } from '~/constants/tool-categories'

export interface Tool {
  id: string
  slug: string

  name: string
  tagline: string
  description: string
  overview: string

  logo: string

  website: string
  websiteLabel: string
  affiliateUrl: string | null

  company: string

  categories: ToolCategory[]
  tags: string[]

  pricing: ToolPricing
  pricingDescription: string

  featured: boolean
  verified: boolean

  rating: number
  reviewCount: number

  lastUpdated: string

  highlights: ToolHighlight[]
  features: ToolFeature[]
  stats: ToolStat[]
  platforms: ToolPlatform[]
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

export interface ToolStat {
  id: string
  label: string
  value: string
}

export type ToolPlatform =
  | 'web'
  | 'windows'
  | 'mac'
  | 'ios'
  | 'android'

export type ToolPricing =
  | 'Free'
  | 'Freemium'
  | 'Paid'