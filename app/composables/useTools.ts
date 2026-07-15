import { tools } from '~/data/tools'

export const useTools = () => {
  const featuredTools = tools.filter(tool => tool.featured)

  const getToolBySlug = (slug: string) => {
    return tools.find(tool => tool.slug === slug)
  }

  const getToolsByCategory = (categorySlug: string) => {
    return tools.filter(tool => tool.category === categorySlug)
  }

  return {
    tools,
    featuredTools,
    getToolBySlug,
    getToolsByCategory,
  }
}