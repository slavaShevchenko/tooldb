import { computed } from 'vue'
import { useRoute } from '#imports'

export interface Breadcrumb {
  label: string
  to?: string
}

export function useBreadcrumbs() {
  const route = useRoute()

  const { getToolBySlug } = useTools()

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
        items.push({
          label: slug,
        })
      }
    }

    return items
  })

  return {
    breadcrumbs,
  }
}