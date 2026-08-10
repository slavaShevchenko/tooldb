import { alternatives } from '~/data/alternatives'
import type { AlternativePage } from '~/types/alternatives'

export const useAlternatives = () => {
  const getAlternatives = () => alternatives as AlternativePage[]

  const getAlternativeBySlug = (slug: string): AlternativePage => {
    const alternative = getAlternatives().find(item => item.slug === slug)

    if (!alternative) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Alternative not found',
      })
    }

    return alternative
  }

  const getPopularToolsCount = () =>
    getAlternatives().length

  const getCategoriesCount = () =>
    new Set(
      getAlternatives().flatMap(item => item.categories)
    ).size

  const getAlternativesCount = () =>
    new Set(
      getAlternatives().flatMap(item =>
        item.alternatives.map(alternative => alternative.slug)
      )
    ).size

  const getAlternativeSlugsByToolSlug = (toolSlug: string): string[] =>
    getAlternatives()
      .filter(page =>
        page.alternatives.some(item => item.slug === toolSlug)
      )
      .map(page => page.slug)

  const getFeaturedAlternatives = (limit = 6, order: 'desc' | 'asc' = 'desc'): AlternativePage[] =>
    [...getAlternatives()]
      .sort((a, b) => order === 'desc' ? Number(b.id) - Number(a.id) : Number(a.id) - Number(b.id))
      .slice(0, limit)

  return {
    getAlternatives,
    getAlternativeBySlug,
    getPopularToolsCount,
    getCategoriesCount,
    getAlternativesCount,
    getAlternativeSlugsByToolSlug,
    getFeaturedAlternatives,
  }
}