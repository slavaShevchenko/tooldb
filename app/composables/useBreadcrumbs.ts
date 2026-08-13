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
        items.push({
          label: slug,
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
        items.push({
          label: slug,
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

    return items
  })

  return {
    breadcrumbs,
  }
}
