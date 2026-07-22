import { tools } from '~/data/tools'

export const useTools = () => {
  const featuredTools = tools.filter(tool => tool.featured)
  const recentlyAddedTools = tools.slice(0, 3)

  const getToolBySlug = (slug: string) => {
    return tools.find(tool => tool.slug === slug)
  }

  const getToolsByCategory = (categoryId: string) => {
    return tools.filter(tool =>
      tool.categories.includes(categoryId)
    )
  }

  return {
    tools,
    featuredTools,
    recentlyAddedTools,
    getToolBySlug,
    getToolsByCategory,
  }
}
