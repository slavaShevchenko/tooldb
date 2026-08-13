import { tools } from '~/data/tools'
import { categories } from '~/data/categories'
import { alternatives } from '~/data/alternatives'
import { blogPosts } from '~/data/blog'

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

  const staticUrls: SitemapUrl[] = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/tools', changefreq: 'daily', priority: '0.9' },
    { loc: '/categories', changefreq: 'daily', priority: '0.9' },
    { loc: '/alternatives', changefreq: 'weekly', priority: '0.8' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.7' },
    { loc: '/about', changefreq: 'monthly', priority: '0.5' },
    { loc: '/contact', changefreq: 'monthly', priority: '0.5' },
    { loc: '/privacy-policy', changefreq: 'monthly', priority: '0.3' },
    { loc: '/terms-of-service', changefreq: 'monthly', priority: '0.3' },
    { loc: '/affiliate-disclosure', changefreq: 'monthly', priority: '0.3' },
  ]

  const categoryUrls: SitemapUrl[] = categories.map(category => ({
    loc: `/categories/${category.slug}`,
    changefreq: 'daily',
    priority: '0.7',
  }))

  const toolUrls: SitemapUrl[] = tools.map(tool => ({
    loc: `/tools/${tool.slug}`,
    lastmod: new Date(tool.lastUpdated).toISOString(),
    changefreq: 'weekly',
    priority: '0.8',
  }))

  const alternativeUrls: SitemapUrl[] = alternatives.map(alternative => ({
    loc: `/alternatives/${alternative.slug}`,
    changefreq: 'weekly',
    priority: '0.7',
  }))

  const blogUrls: SitemapUrl[] = blogPosts
    .filter(post => post.published)
    .map(post => ({
      loc: `/blog/${post.slug}`,
      lastmod: new Date(post.updatedAt).toISOString(),
      changefreq: 'monthly',
      priority: '0.6',
    }))

  const allUrls: SitemapUrl[] = [
    ...staticUrls,
    ...categoryUrls,
    ...toolUrls,
    ...alternativeUrls,
    ...blogUrls,
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls.map(url => `  <url>
        <loc>${escapeXml(`${siteUrl}${url.loc}`)}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''}
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>`).join('\n')}
    </urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
})
