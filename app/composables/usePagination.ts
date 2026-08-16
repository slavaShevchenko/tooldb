import { computed } from 'vue'

export const usePagination = <T>(
  items: T[],
  perPage = 5,
) => {
  const route = useRoute()

  const currentPage = computed(() => {
    const value = Number(route.query.page ?? 1)

    if (!Number.isInteger(value) || value < 1) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
      })
    }

    return value
  })

  const total = computed(() => items.length)

  const totalPages = computed(() =>
    Math.max(1, Math.ceil(total.value / perPage)),
  )

  if (currentPage.value > totalPages.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
    })
  }

  const from = computed(() =>
    (currentPage.value - 1) * perPage + 1,
  )

  const to = computed(() =>
    Math.min(from.value + perPage - 1, total.value),
  )

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * perPage

    return items.slice(start, start + perPage)
  })

  const hasPrev = computed(() =>
    currentPage.value > 1,
  )

  const hasNext = computed(() =>
    currentPage.value < totalPages.value,
  )

  return {
    items: paginatedItems,

    total,

    from,
    to,

    perPage,

    currentPage,
    totalPages,

    hasPrev,
    hasNext,
  }
}