import { appSeo } from '~/seo'

interface SeoOptions {
  title: string
  description: string

  image?: string

  robots?: string
}

export const useSeo = ({
  title,
  description,
  image = appSeo.defaultImage,
  robots = 'index, follow',
}: SeoOptions) => {
  useSeoMeta({
    title,

    description,

    ogTitle: title,

    ogDescription: description,

    ogSiteName: appSeo.siteName,

    ogImage: image,

    twitterCard: 'summary_large_image',

    twitterTitle: title,

    twitterDescription: description,

    twitterImage: image,

    robots,
  })
}