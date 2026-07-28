import { computed } from 'vue'

import { categories } from '~/data/categories'
import { tools } from '~/data/tools'
import type { ToolCategory } from '~/constants/tool-categories'

export const useTools = () => {
  const featuredTools = computed(() =>
    tools.filter(tool => tool.featured),
  )

  const recentlyAddedTools = computed(() =>
    tools.slice(0, 3),
  )

  const toolCategories = computed(() =>
    categories
      .map(category => ({
        ...category,
        tools: tools.filter(tool =>
          tool.categories.includes(category.slug),
        ),
      }))
      .filter(category => category.tools.length > 0),
  )

  const getToolBySlug = (slug: string) => {
    return tools.find(tool => tool.slug === slug)
  }

  const getToolsByCategory = (categorySlug: ToolCategory) => {
    return tools.filter(tool =>
      tool.categories.includes(categorySlug),
    )
  }

  const getCategoryBySlug = (slug: ToolCategory) => {
    return categories.find(category =>
      category.slug === slug,
    )
  }

  const getRelatedTools = (
    slug: string,
    limit = 6,
  ) => {
    const tool = getToolBySlug(slug)

    if (!tool) {
      return []
    }

    return tools
      .filter(candidate => candidate.slug !== slug)
      .map(candidate => {
        const score = candidate.categories.reduce(
          (total, category) =>
            tool.categories.includes(category)
              ? total + 1
              : total,
          0,
        )

        return {
          tool: candidate,
          score,
        }
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.tool)
  }

  return {
    tools,
    featuredTools,
    recentlyAddedTools,
    toolCategories,
    getToolBySlug,
    getToolsByCategory,
    getCategoryBySlug,
    getRelatedTools,
  }
}