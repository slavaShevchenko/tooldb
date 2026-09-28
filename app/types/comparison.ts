export interface ComparisonTool {
  slug: string
  name: string
  logo: string
  description: string
  website: string
  tagline: string
}

export interface ComparisonDifferenceItem {
  feature: string
  icon: string
  values: Record<string, string>
}

export interface ComparisonDifferences {
  title: string
  description: string
  items: ComparisonDifferenceItem[]
}

export interface ComparisonProsAndCons {
  slug: string
  pros: string[]
  cons: string[]
}

export interface ComparisonTextBlock {
  title: string
  description: string
}

export interface ComparisonBigTextBlock {
  title: string
  paragraphs: string[]
}

export interface ComparisonPage {
  id: string
  slug: string
  title: string
  description: string
  category: readonly string[]
  date: string
  readTime: string
  tools: readonly string[]
  overview: ComparisonTextBlock
  textOverview: ComparisonBigTextBlock
  differences: ComparisonDifferences
  prosAndCons: ComparisonProsAndCons[]
  textOverall: ComparisonBigTextBlock
  verdict: ComparisonTextBlock
}

export type ComparisonPageData = Omit<ComparisonPage, 'id'>