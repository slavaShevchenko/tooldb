export const useSoftwareApplicationJsonLd = (tool: {
  name: string
  description: string
  slug: string
  pricing: string
  platforms: string[]
  categories: string[]
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

export const useAlternativesJsonLd = (toolName: string, alternatives: { name: string; slug: string }[]) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Alternatives to ${toolName}`,
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${item.name} - Alternative to ${toolName}`,
      url: `https://tooldb.org/tools/${item.slug}`,
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

export const useAuthorJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Slava Shevchenko',
    url: 'https://tooldb.org/about',
    image: 'https://tooldb.org/images/slava.webp',
    jobTitle: 'Frontend Developer',
    description: 'Frontend developer with 10+ years of experience evaluating and using digital tools for web development projects.',
    sameAs: [
      'https://www.linkedin.com/in/slava-shevchenko90210/',
      'https://github.com/slavaShevchenko',
    ],
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

export const useBlogPostingJsonLd = (post: {
  title: string
  description: string
  slug: string
  image?: string
  publishedAt: string
  updatedAt: string
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    url: `https://tooldb.org/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `https://tooldb.org/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: 'Slava Shevchenko',
      url: 'https://tooldb.org/about',
      sameAs: [
        'https://www.linkedin.com/in/slava-shevchenko90210/',
        'https://github.com/slavaShevchenko',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'ToolDB',
      url: 'https://tooldb.org',
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
