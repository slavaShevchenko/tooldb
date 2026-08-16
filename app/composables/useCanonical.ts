export const useCanonical = () => {
  const route = useRoute()
  const config = useRuntimeConfig()

  return computed(() => {
    const url = new URL(route.path, config.public.siteUrl)

    const page = Number(route.query.page ?? 1)

    if (page > 1) {
      url.searchParams.set('page', String(page))
    }

    return url.toString()
  })
}