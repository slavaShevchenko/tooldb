import { ref } from 'vue'

export const useAiSearch = () => {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const search = async (query: string): Promise<string[]> => {
    if (!query?.trim()) {
      return []
    }

    isLoading.value = true
    error.value = null

    try {
      const result = await $fetch<{ slugs: string[] }>('/api/ai-search', {
        method: 'POST',
        body: { query: query.trim() },
      })

      return result.slugs
    } catch (err: any) {
      const message = err?.data?.message || err?.message || 'Search failed'
      error.value = message
      console.error('AI search error:', err)
      return []
    } finally {
      isLoading.value = false
    }
  }

  return {
    search,
    isLoading,
    error,
  }
}