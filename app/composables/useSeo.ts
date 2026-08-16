import type { ComputedRef, Ref } from 'vue'

import { appSeo } from '~/seo'

type MaybeRef<T> = T | Ref<T> | ComputedRef<T>

interface SeoOptions {
  title: MaybeRef<string>
  description: MaybeRef<string>
  image?: MaybeRef<string>
  robots?: MaybeRef<string>
  canonical?: MaybeRef<string>

  appendPageNumber?: boolean
}

export const useSeo = ({
  title,
  description,
  image = appSeo.defaultImage,
  robots = 'index, follow',
  canonical,
  appendPageNumber = false,
}: SeoOptions) => {
  const route = useRoute()
  const config = useRuntimeConfig()

  const page = computed(() => Number(route.query.page ?? 1))

  const seoTitle = computed(() => {
    const value = unref(title)

    if (!appendPageNumber || page.value <= 1) {
      return value
    }

    const separator = appSeo.titleSeparator

    if (!value.includes(separator)) {
      return `${value} (Page ${page.value})`
    }

    const [main, site] = value.split(separator)

    return `${main} (Page ${page.value})${separator}${site}`
  })

  const canonicalUrl = computed(() =>
    unref(canonical) || `${config.public.siteUrl}${route.path}`,
  )

  useSeoMeta({
    title: () => seoTitle.value,
    description: () => unref(description),
    ogTitle: () => seoTitle.value,
    ogDescription: () => unref(description),
    ogSiteName: appSeo.siteName,
    ogImage: () => unref(image),
    ogUrl: () => canonicalUrl.value,
    twitterCard: 'summary_large_image',
    twitterTitle: () => seoTitle.value,
    twitterDescription: () => unref(description),
    twitterImage: () => unref(image),
    robots: () => unref(robots),
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: () => canonicalUrl.value,
      },
    ],
  })
}