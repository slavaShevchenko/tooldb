import { categories } from '~/data/categories'

export const useCategories = () => {
  const getCategoryBySlug = (slug: string) => {
    return categories.find(category => category.slug === slug)
  }

  return {
    categories,
    getCategoryBySlug,
  }
}