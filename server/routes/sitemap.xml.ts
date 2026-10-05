import { PAGINATION } from '~/constants/pagination'
import { routes } from '~/constants/routes'

import { tools } from '~/data/tools'
import { categories } from '~/data/categories'
import { alternatives } from '~/data/alternatives'
import { blogPosts } from '~/data/blog'
import { comporisonPosts } from '~/data/comparison'

type SitemapUrl = {
  loc: string
  changefreq: string
  priority: string
  lastmod?: string
}

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl

  const alternativesPages = Math.ceil(
    alternatives.length / PAGINATION.alternatives,
  )

  const blogPages = Math.ceil(
    blogPosts.filter(post => post.published).length / PAGINATION.blog,
  )

  const comparisonPages = Math.ceil(
    comporisonPosts.length / PAGINATION.comparisons,
  )

  const staticUrls: SitemapUrl[] = [
    { loc: routes.home(), changefreq: 'daily', priority: '1.0' },
    { loc: routes.tools(), changefreq: 'daily', priority: '0.9' },
    { loc: routes.categories(), changefreq: 'daily', priority: '0.9' },
    { loc: routes.alternatives(), changefreq: 'weekly', priority: '0.8' },
    { loc: routes.blog(), changefreq: 'weekly', priority: '0.7' },
    { loc: routes.comparisons(), changefreq: 'weekly', priority: '0.7' },
    { loc: routes.about(), changefreq: 'monthly', priority: '0.5' },
    { loc: routes.contact(), changefreq: 'monthly', priority: '0.5' },
    { loc: routes.privacyPolicy(), changefreq: 'monthly', priority: '0.3' },
    { loc: routes.termsOfService(), changefreq: 'monthly', priority: '0.3' },
    { loc: routes.affiliateDisclosure(), changefreq: 'monthly', priority: '0.3' },
  ]

  const alternativesPaginationUrls: SitemapUrl[] = Array.from(
    { length: Math.max(alternativesPages - 1, 0) },
    (_, index) => ({
      loc: `${routes.alternatives()}?page=${index + 2}`,
      changefreq: 'weekly',
      priority: '0.7',
    }),
  )

  const blogPaginationUrls: SitemapUrl[] = Array.from(
    { length: Math.max(blogPages - 1, 0) },
    (_, index) => ({
      loc: `${routes.blog()}?page=${index + 2}`,
      changefreq: 'weekly',
      priority: '0.6',
    }),
  )

  const categoryUrls: SitemapUrl[] = categories.map(category => ({
    loc: routes.category(category.slug),
    changefreq: 'daily',
    priority: '0.7',
  }))

  const toolUrls: SitemapUrl[] = tools.map(tool => ({
    loc: routes.tool(tool.slug),
    lastmod: new Date(tool.lastUpdated).toISOString(),
    changefreq: 'weekly',
    priority: '0.8',
  }))

  const alternativeUrls: SitemapUrl[] = alternatives.map(alternative => ({
    loc: routes.alternative(alternative.slug),
    changefreq: 'weekly',
    priority: '0.7',
  }))

  const blogUrls: SitemapUrl[] = blogPosts
    .filter(post => post.published)
    .map(post => ({
      loc: routes.blogPost(post.slug),
      lastmod: new Date(post.updatedAt).toISOString(),
      changefreq: 'monthly',
      priority: '0.6',
    }))

  const comparisonPaginationUrls: SitemapUrl[] = Array.from(
    { length: Math.max(comparisonPages - 1, 0) },
    (_, index) => ({
      loc: `${routes.comparisons()}?page=${index + 2}`,
      changefreq: 'weekly',
      priority: '0.6',
    }),
  )

  const comparisonUrls: SitemapUrl[] = comporisonPosts.map(comparison => ({
    loc: routes.comparison(comparison.slug),
    changefreq: 'monthly',
    priority: '0.6',
  }))

  const allUrls: SitemapUrl[] = [
    ...staticUrls,
    ...alternativesPaginationUrls,
    ...blogPaginationUrls,
    ...comparisonPaginationUrls,
    ...categoryUrls,
    ...toolUrls,
    ...alternativeUrls,
    ...blogUrls,
    ...comparisonUrls,
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    url => `<url>
  <loc>${escapeXml(`${siteUrl}${url.loc}`)}</loc>${url.lastmod ? `\n  <lastmod>${url.lastmod}</lastmod>` : ''}
  <changefreq>${url.changefreq}</changefreq>
  <priority>${url.priority}</priority>
</url>`,
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
})
