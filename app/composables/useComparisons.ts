import { comporisonPosts } from '~/data/comparison'
import { tools } from '~/data/tools'
import type { ComparisonPage } from '~/types/comparison'
import type { Tool } from '~/types/tool'

export const useComparisons = () => {
  const getComparisons = (): ComparisonPage[] =>
    [...comporisonPosts].sort((a, b) => Number(b.id) - Number(a.id))

  const getComparisonBySlug = (slug: string): ComparisonPage | undefined =>
    comporisonPosts.find(comparison => comparison.slug === slug)

  const getComparisonTools = (slugs: string[]): Tool[] =>
    tools.filter(tool => slugs.includes(tool.slug))

  const getRelatedComparisons = (currentSlug: string, limit = 6): ComparisonPage[] => {
    const current = comporisonPosts.find(c => c.slug === currentSlug)
    if (!current) return []

    const currentCategories = new Set(current.category)

    return comporisonPosts
      .filter(c => c.slug !== currentSlug)
      .map(c => ({
        comparison: c,
        matchCount: c.category.filter(cat => currentCategories.has(cat)).length,
      }))
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, limit)
      .map(item => item.comparison)
  }

  const getComparisonsCount = () =>
    comporisonPosts.length

  const getCategoriesCount = () =>
    new Set(
      comporisonPosts.flatMap(item => item.category)
    ).size

  const getToolsCount = () =>
    new Set(
      comporisonPosts.flatMap(item => item.tools)
    ).size

  return {
    getComparisons,
    getComparisonBySlug,
    getComparisonTools,
    getRelatedComparisons,
    getComparisonsCount,
    getCategoriesCount,
    getToolsCount,
  }
}
