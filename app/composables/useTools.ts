import { computed } from 'vue'

import { categories } from '~/data/categories'
import { tools } from '~/data/tools'
import type { ToolCategory } from '~/constants/tool-categories'
import type { ToolDetails, Tool } from '~/types/tool'
import { getToolContent } from '~/data/toolContent'
import {
  HOMEPAGE_RECENTLY_ADDED_TOOLS_LIMIT,
  HOMEPAGE_TRENDING_TOOLS_LIMIT,
  HOMEPAGE_FEATURED_TOOLS_LIMIT,
} from '~/constants/tools'

export const useTools = () => {
  /**
   * Returns the highest-rated tools.
   * Tools are sorted by rating first and review count second.
   */
  const trendingTools = computed(() =>
    [...tools]
      .sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating
        }

        return b.reviewCount - a.reviewCount
      })
      .slice(0, HOMEPAGE_TRENDING_TOOLS_LIMIT),
  )

  /**
   * Returns all tools marked as featured.
   */
  const featuredTools = computed(() =>
    tools.filter(tool => tool.featured)
    .slice(0, HOMEPAGE_FEATURED_TOOLS_LIMIT),
  )

  /**
   * Returns the most recently updated tools.
   * Tools are sorted by the last updated date.
   */
  const recentlyAddedTools = computed(() =>
    [...tools]
      .sort((a, b) => Number(b.id) - Number(a.id))
      .slice(0, HOMEPAGE_RECENTLY_ADDED_TOOLS_LIMIT)
  )

  /**
   * Returns all categories with the number of tools in each category.
   */
  const toolCategories = computed(() =>
    categories.map(category => ({
      ...category,
      toolCount: tools.filter(tool =>
        tool.categories.includes(category.slug),
      ).length,
    })),
  )

  /**
   * Returns categories that contain at least one tool.
   */
  const availableToolCategories = computed(() =>
    toolCategories.value.filter(category =>
      category.toolCount > 0,
    ),
  )

  /**
   * Returns all categories together with their tools.
   * Categories without tools are excluded.
   */
  const toolCategoriesWithTools = computed(() =>
    categories
      .map(category => {
        const categoryTools = tools.filter(tool =>
          tool.categories.includes(category.slug),
        )

        return {
          ...category,
          toolCount: categoryTools.length,
          tools: categoryTools,
        }
      })
      .filter(category => category.toolCount > 0),
  )

  /**
   * Finds a tool by its slug.
   *
   * @param slug Tool slug.
   * @returns The matching tool or undefined.
   */
  const getToolBySlug = (slug: string): ToolDetails | undefined => {
    const tool = tools.find(tool => tool.slug === slug)

    if (!tool) {
      return undefined
    }

    return {
      ...tool,
      content: getToolContent(slug),
    }
  }

  /**
   * Returns all tools belonging to the specified category.
   *
   * @param categorySlug Category slug.
   * @returns Array of tools.
   */
  const getToolsByCategory = (slug: string) => {
    return tools.filter(tool =>
      tool.categories.some(category => category === slug),
    )
  }

  /**
   * Finds a category by its slug.
   *
   * @param slug Category slug.
   * @returns The matching category or undefined.
   */
  const getCategoryBySlug = (slug: ToolCategory) => {
    return categories.find(category =>
      category.slug === slug,
    )
  }

  /**
   * Returns related tools based on shared categories.
   * Tools with the highest number of matching categories are returned first.
   *
   * @param slug Current tool slug.
   * @param limit Maximum number of related tools.
   * @returns Array of related tools.
   */
  const getRelatedTools = (
    slug: string,
    limit = 6,
  ): Tool[] => {
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

  const getRelatedToolsData = (
    tool: Tool,
    limit = 5,
  ) => {
    const category = getCategoryBySlug(tool.categories[0])

    return {
      category,
      tools: getRelatedTools(tool.slug, limit),
    }
  }

  return {
    tools,
    trendingTools,
    featuredTools,
    recentlyAddedTools,
    toolCategories,
    availableToolCategories,
    toolCategoriesWithTools,
    getToolBySlug,
    getToolsByCategory,
    getCategoryBySlug,
    getRelatedTools,
    getRelatedToolsData,
  }
}