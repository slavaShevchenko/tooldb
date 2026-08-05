import { appSeo } from '~/seo'

interface SeoOptions {
  title: string
  description: string
  image?: string
  robots?: string
  canonical?: string
}

export const useSeo = ({
  title,
  description,
  image = appSeo.defaultImage,
  robots = 'index, follow',
  canonical,
}: SeoOptions) => {
  const route = useRoute()
  const config = useRuntimeConfig()
  
  const canonicalUrl = canonical || `${config.public.siteUrl}${route.path}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogSiteName: appSeo.siteName,
    ogImage: image,
    ogUrl: canonicalUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    robots,
  })

  useHead({
    link: [
      { rel: 'canonical', href: canonicalUrl },
    ],
  })
}