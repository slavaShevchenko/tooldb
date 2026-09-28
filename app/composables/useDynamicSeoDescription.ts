import type { MaybeRefOrGetter } from 'vue'

export const useDynamicSeoDescription = <T>(
  items: MaybeRefOrGetter<T[]>,
  options: { prefix: string; suffix: string; limit?: number; key?: keyof T }
) => {
  return computed(() => {
    const resolvedItems = toValue(items)
    const field = (options.key ?? 'title') as keyof T
    const titles = resolvedItems
      .slice(0, options.limit ?? 3)
      .map(item => String(item[field] ?? ''))
      .join(', ')
    return `${options.prefix}${titles}${options.suffix}`
  })
}
