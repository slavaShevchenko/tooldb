import { tools } from '~/data/tools'
import { categories } from '~/data/categories'
import { blogPosts } from '~/data/blog'
import { comporisonPosts } from '~/data/comparison'

export default defineEventHandler((event) => {
  setResponseHeader(event, 'content-type', 'application/json')
  setResponseHeader(event, 'access-control-allow-origin', '*')
  
  const baseUrl = 'https://tooldb.org'

  const catalog = {
    version: '0.91',
    identifier: `urn:air:tooldb.org:catalog:main`,
    displayName: 'ToolDB - AI Tools Catalog',
    description: 'Curated catalog of 190+ digital tools for AI agents, covering software discovery, comparison and evaluation.',
    url: `${baseUrl}/.well-known/ard.json`,
    datePublished: '2026-11-08',
    dateModified: new Date().toISOString().split('T')[0],
    publisher: {
      '@type': 'Organization',
      name: 'ToolDB',
      url: baseUrl,
    },
    entries: [
      ...tools.map(tool => ({
        identifier: `urn:air:tooldb.org:tool:${tool.slug}`,
        displayName: tool.name,
        type: 'application/software-application+json',
        url: `${baseUrl}/tools/${tool.slug}`,
        description: tool.description,
        tagline: tool.tagline,
        applicationCategory: tool.categories,
        operatingSystem: tool.platforms,
        pricing: tool.pricing,
        pricingDescription: tool.pricingDescription,
        logo: `${baseUrl}${tool.logo}`,
        website: tool.website,
        rating: tool.rating,
        reviewCount: tool.reviewCount,
        highlights: tool.highlights.map(h => h.text),
        features: tool.features.map(f => ({
          title: f.title,
          description: f.description,
        })),
        tags: tool.tags,
        lastUpdated: tool.lastUpdated,
        representativeQueries: [
          `What is ${tool.name}?`,
          `${tool.name} pricing`,
          `${tool.name} alternatives`,
          `Best ${tool.categories.join(' or ')} tools`,
        ],
      })),
      ...categories.map(cat => ({
        identifier: `urn:air:tooldb.org:category:${cat.slug}`,
        displayName: `${cat.name} Tools`,
        type: 'application/category+json',
        url: `${baseUrl}/categories/${cat.slug}`,
        description: cat.description,
        representativeQueries: [
          `Best ${cat.name.toLowerCase()} tools`,
          `Top ${cat.name.toLowerCase()} software`,
          `${cat.name.toLowerCase()} tools comparison`,
        ],
      })),
      ...comporisonPosts.map(comp => ({
        identifier: `urn:air:tooldb.org:comparison:${comp.slug}`,
        displayName: comp.title,
        type: 'application/article+json',
        url: `${baseUrl}/comparisons/${comp.slug}`,
        description: comp.description,
        datePublished: comp.date,
        tools: comp.tools,
        category: comp.category,
        representativeQueries: [
          comp.title,
          `${comp.tools.join(' vs ')} comparison`,
          `Best ${comp.category.join(' or ')} tools`,
        ],
      })),
      ...blogPosts.map(post => ({
        identifier: `urn:air:tooldb.org:blog:${post.slug}`,
        displayName: post.title,
        type: 'application/blog-posting+json',
        url: `${baseUrl}/blog/${post.slug}`,
        description: post.description,
        datePublished: post.publishedAt,
        author: 'Slava Shevchenko',
        representativeQueries: [
          post.title,
          `Best ${post.title.includes('AI') ? 'AI' : 'software'} tools`,
        ],
      })),
    ],
    editorialPolicy: {
      '@type': 'CreativeWork',
      name: 'ToolDB Editorial Standards',
      description: 'ToolDB provides independently researched information about software products. Recommendations and comparisons are editorially independent and are not influenced by affiliate partnerships.',
      url: `${baseUrl}/about`,
    },
  }

  return catalog
})
