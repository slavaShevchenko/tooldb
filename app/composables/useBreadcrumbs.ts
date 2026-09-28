import { computed } from 'vue'
import { useRoute } from '#imports'

export interface Breadcrumb {
  label: string
  to?: string
}

export function useBreadcrumbs() {
  const route = useRoute()

  const { getToolBySlug } = useTools()
  const { getBlogPostBySlug } = useBlog()
  const { getCategoryBySlug } = useCategories()
  const { getAlternativeBySlug } = useAlternatives()
  const { getComparisonBySlug } = useComparisons()

  const breadcrumbs = computed<Breadcrumb[]>(() => {
    const items: Breadcrumb[] = [
      {
        label: 'Home',
        to: '/',
      },
    ]

    const path = route.path

    if (path === '/') {
      return []
    }

    const pageBreadcrumb = route.meta.breadcrumb

    if (typeof pageBreadcrumb === 'string') {
      items.push({
        label: pageBreadcrumb,
      })

      return items
    }

    if (path.startsWith('/tools')) {
      items.push({
        label: 'Tools',
        to: '/tools',
      })

      const slug = route.params.slug as string | undefined

      if (slug) {
        const tool = getToolBySlug(slug)

        items.push({
          label: tool?.name ?? slug,
        })
      }
    }

    if (path.startsWith('/categories')) {
      items.push({
        label: 'Categories',
        to: '/categories',
      })

      const slug = route.params.slug as string | undefined

      if (slug) {
        const category = getCategoryBySlug(slug)

        items.push({
          label: category?.name ?? slug,
        })
      }
    }

    if (path.startsWith('/alternatives')) {
      items.push({
        label: 'Alternatives',
        to: '/alternatives',
      })

      const slug = route.params.slug as string | undefined

      if (slug) {
        const alternative = getAlternativeBySlug(slug)

        items.push({
          label: alternative?.name ?? slug,
        })
      }
    }

    if (path.startsWith('/blog')) {
      items.push({
        label: 'Blog',
        to: '/blog',
      })

      const slug = route.params.slug as string | undefined

      if (slug) {
        const post = getBlogPostBySlug(slug)

        items.push({
          label: post.title,
        })
      }
    }

    if (path === '/comparisons') {
      items.push({
        label: 'Comparisons',
      })
    }

    if (path.startsWith('/comparisons/') && path !== '/comparisons') {
      items.push({
        label: 'Comparisons',
        to: '/comparisons',
      })

      const slug = route.params.slug as string | undefined

      if (slug) {
        const comparison = getComparisonBySlug(slug)

        items.push({
          label: comparison?.title ?? slug,
        })
      }
    }

    return items
  })

  return {
    breadcrumbs,
  }
}
