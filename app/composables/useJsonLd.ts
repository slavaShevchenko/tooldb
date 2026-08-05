export const useSoftwareApplicationJsonLd = (tool: {
  name: string
  description: string
  slug: string
  rating: number
  reviewCount: number
  pricing: string
  platforms: string[]
  categories: string[]
  website: string
}) => {
  const platformMap: Record<string, string> = {
    web: 'WebApplication',
    ios: 'IOSApplication',
    android: 'AndroidApplication',
    windows: 'WindowsApplication',
    mac: 'MacOSApplication',
    linux: 'LinuxApplication',
  }

  const applicationCategory = tool.categories.includes('web-development')
    ? 'DeveloperApplication'
    : tool.categories.includes('security')
      ? 'SecurityApplication'
      : tool.categories.includes('education')
        ? 'EducationalApplication'
        : 'BusinessApplication'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    url: `https://tooldb.org/tools/${tool.slug}`,
    applicationCategory,
    operatingSystem: tool.platforms.map(p => platformMap[p] || p).join(', '),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: tool.pricing,
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

export const useBreadcrumbJsonLd = (items: { name: string; url: string }[]) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://tooldb.org${item.url}`,
    })),
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

export const useItemListJsonLd = (items: { name: string; url: string; position: number }[], listName: string) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `https://tooldb.org${item.url}`,
    })),
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