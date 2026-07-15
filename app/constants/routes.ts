export const routes = {
  home: () => '/',

  tools: () => '/tools',

  tool: (slug: string) => `/tools/${slug}`,

  categories: () => '/categories',

  category: (slug: string) => `/categories/${slug}`,

  compare: () => '/compare',

  comparison: (slug: string) => `/compare/${slug}`,

  collections: () => '/collections',

  collection: (slug: string) => `/collections/${slug}`,
} as const