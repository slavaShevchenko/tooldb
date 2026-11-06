import type { ComparisonPage } from '~/types/comparison'
import type { Tool } from '~/types/tool'

export const useComparisonJsonLd = (
  comparison: ComparisonPage,
  comparisonTools: Tool[],
) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    // Article closes the GSC "article pages" gap for comparisons,
    // WebPage keeps the existing page-level signals.
    '@type': ['WebPage', 'Article'],
    name: comparison.title,
    headline: comparison.title,
    description: comparison.description,
    datePublished: comparison.date,
    dateModified: comparison.date,
    author: {
      '@type': 'Organization',
      name: 'ToolDB',
      url: 'https://tooldb.org',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: comparison.title,
      numberOfItems: comparisonTools.length,
      itemListElement: comparisonTools.map((tool, index) => ({
        '@type': 'SoftwareApplication',
        position: index + 1,
        name: tool.name,
        description: tool.description,
        url: `https://tooldb.org/tools/${tool.slug}`,
      })),
    },
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(jsonLd),
      },
    ],
  })
}