import { computed, ref } from 'vue'

import { alternatives } from '~/data/alternatives'
import { blogPosts } from '~/data/blog'
import { categories } from '~/data/categories'
import { comporisonPosts } from '~/data/comparison'
import { tools } from '~/data/tools'

import type { AlternativePage } from '~/types/alternatives'
import type { BlogPost } from '~/types/blog'
import type { Category } from '~/types/category'
import type { ComparisonPage } from '~/types/comparison'
import type { Tool } from '~/types/tool'

interface ToolSearchResult {
  type: 'tool'
  tool: Tool
}

interface CategorySearchResult {
  type: 'category'
  category: Category
}

interface BlogSearchResult {
  type: 'blog'
  post: BlogPost
}

interface ComparisonSearchResult {
  type: 'comparison'
  comparison: ComparisonPage
}

interface AlternativeSearchResult {
  type: 'alternative'
  alternative: AlternativePage
}

export type SearchResult =
  | ToolSearchResult
  | CategorySearchResult
  | BlogSearchResult
  | ComparisonSearchResult
  | AlternativeSearchResult

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

    const blogResults: BlogSearchResult[] = blogPosts
      .filter(post =>
        post.title.toLowerCase().includes(value)
        || post.description.toLowerCase().includes(value),
      )
      .map(post => ({
        type: 'blog',
        post,
      }))

    const comparisonResults: ComparisonSearchResult[] = comporisonPosts
      .filter(comparison =>
        comparison.title.toLowerCase().includes(value)
        || comparison.description.toLowerCase().includes(value),
      )
      .map(comparison => ({
        type: 'comparison',
        comparison,
      }))

    const alternativeResults: AlternativeSearchResult[] = alternatives
      .filter(alternative =>
        alternative.name.toLowerCase().includes(value)
        || alternative.description.toLowerCase().includes(value),
      )
      .map(alternative => ({
        type: 'alternative',
        alternative,
      }))

    return [
      ...toolResults,
      ...categoryResults,
      ...blogResults,
      ...comparisonResults,
      ...alternativeResults,
    ]
  })

  return {
    query,
    results,
  }
}