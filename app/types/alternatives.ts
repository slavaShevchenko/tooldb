export interface AlternativeItem {
  slug: string
  bestFor: string
  keyStrengths: string[]
}

export interface AlternativePage {
  id: string
  slug: string
  name: string
  toolDescription: string
  description: string
  logo: string
  categories: string[]
  alternatives: AlternativeItem[]
  why: string[]
}