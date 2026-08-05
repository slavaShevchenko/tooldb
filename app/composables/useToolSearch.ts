import { computed, ref } from 'vue'

import { categories } from '~/data/categories'
import { tools } from '~/data/tools'

import type { Tool } from '~/types/tool'
import type { Category } from '~/types/category'

interface ToolSearchResult {
  type: 'tool'
  tool: Tool
}

interface CategorySearchResult {
  type: 'category'
  category: Category
}

export type SearchResult =
  | ToolSearchResult
  | CategorySearchResult

export const useToolSearch = () => {
  const query = ref('')

  const results = computed<SearchResult[]>(() => {
    const value = query.value.trim().toLowerCase()

    if (value.length < 2) {
      return []
    }

    const toolResults: ToolSearchResult[] = tools
      .filter(tool =>
        tool.name.toLowerCase().includes(value),
      )
      .map(tool => ({
        type: 'tool',
        tool,
      }))

    const categoryResults: CategorySearchResult[] = categories
      .filter(category =>
        category.name.toLowerCase().includes(value),
      )
      .map(category => ({
        type: 'category',
        category,
      }))

    return [
      ...toolResults,
      ...categoryResults,
    ]
  })

  return {
    query,
    results,
  }
}