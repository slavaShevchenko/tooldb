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
   * Sorted by id descending, so the newest featured tools
   * (with the highest ids) are selected first.
   */
  const featuredTools = computed(() =>
    tools
      .filter(tool => tool.featured)
      .sort((a, b) => Number(b.id) - Number(a.id))
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

  /**
   * Returns neighbouring tools from the same category together with
   * the primary category of the given tool.
   *
   * The pool is limited to tools sharing the primary category
   * (the first entry of the tool categories array). Inside that pool
   * tools that follow the current id are taken first. If the end of
   * the category is reached and there are not enough followers to fill
   * the limit, the missing amount is wrapped around and taken from the
   * very beginning of the category (ids 1, 2, 3...), so the user always
   * loops back to the start instead of being trapped at the tail.
   *
   * Examples (limit = 5, pool of 20 tools in the category):
   * - current id 1  -> [2, 3, 4, 5, 6]
   * - current id 18 -> [1, 2, 3, 19, 20]
   * - current id 20 -> [1, 2, 3, 4, 5]
   *
   * The result never includes the current tool itself and contains
   * no duplicates.
   *
   * @param tool Current tool.
   * @param limit Maximum number of related tools.
   * @returns Object with the primary category and neighbouring tools.
   */
  const getRelatedToolsData = (
    tool: Tool,
    limit = 5,
  ) => {
    const primaryCategory = tool.categories[0]
    const category = getCategoryBySlug(primaryCategory)

    const categoryTools = tools
      .filter(candidate =>
        candidate.categories.includes(primaryCategory),
      )
      .sort((a, b) => Number(a.id) - Number(b.id))

    const currentIndex = categoryTools.findIndex(
      item => item.id === tool.id,
    )

    if (currentIndex === -1) {
      return {
        category,
        tools: [] as Tool[],
      }
    }

    const followingTools = categoryTools.slice(
      currentIndex + 1,
      currentIndex + 1 + limit,
    )

    const missingCount = limit - followingTools.length

    // Wrap around to the start of the category: take the smallest ids
    // that are not the current tool and not already in followingTools.
    const followingIds = new Set(followingTools.map(item => item.id))

    const wrappingTools = missingCount > 0
      ? categoryTools
          .filter(item =>
            item.id !== tool.id && !followingIds.has(item.id),
          )
          .slice(0, missingCount)
      : []

    return {
      category,
      tools: [...wrappingTools, ...followingTools],
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