export interface ComparisonDifferenceItem {
  feature: string
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

export interface ComparisonOverview {
  title: string
  description: string
}

export interface ComparisonVerdict {
  title: string
  description: string
}

export interface ComparisonPage {
  id: string
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: string
  tools: readonly string[]
  overview: ComparisonOverview
  differences: ComparisonDifferences
  prosAndCons: ComparisonProsAndCons[]
  verdict: ComparisonVerdict
}