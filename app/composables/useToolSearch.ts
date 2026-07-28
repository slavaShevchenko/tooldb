import { computed, ref } from 'vue'

import { tools } from '~/data/tools'

import type { Tool } from '~/types/tool'

interface SearchMatch {
  type: 'name' | 'tag'
  value: string
}

interface SearchResult {
  tool: Tool
  matches: SearchMatch[]
}

export const useToolSearch = () => {
  const query = ref('')

  const searchIndex = tools.map(tool => ({
    tool,
    text: [
      tool.name,
      ...tool.tags,
    ]
      .join(' ')
      .toLowerCase(),
  }))

  const results = computed<SearchResult[]>(() => {
    const value = query.value.trim().toLowerCase()

    if (value.length < 2) {
      return []
    }

    return tools
      .map(tool => {
        const matches: SearchMatch[] = []

        if (tool.name.toLowerCase().includes(value)) {
          matches.push({
            type: 'name',
            value: tool.name,
          })
        }

        tool.tags.forEach(tag => {
          if (tag.toLowerCase().includes(value)) {
            matches.push({
              type: 'tag',
              value: tag,
            })
          }
        })

        return {
          tool,
          matches,
        }
      })
      .filter(result => result.matches.length)
  })

  return {
    query,
    results,
  }
}