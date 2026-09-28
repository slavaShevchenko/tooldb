import { comporisonPosts } from '~/data/comparison'
import { tools } from '~/data/tools'
import type { ComparisonPage } from '~/types/comparison'
import type { Tool } from '~/types/tool'

export const useComparisons = () => {
  const getComparisons = (): ComparisonPage[] => comporisonPosts

  const getComparisonBySlug = (slug: string): ComparisonPage | undefined =>
    comporisonPosts.find(comparison => comparison.slug === slug)

  const getComparisonTools = (slugs: string[]): Tool[] =>
    tools.filter(tool => slugs.includes(tool.slug))

  const getRelatedComparisons = (currentSlug: string, limit = 4): ComparisonPage[] =>
    comporisonPosts
      .filter(comparison => comparison.slug !== currentSlug)
      .slice(0, limit)

  return {
    getComparisons,
    getComparisonBySlug,
    getComparisonTools,
    getRelatedComparisons,
  }
}
