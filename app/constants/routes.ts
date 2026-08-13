export const routes = {
  home: () => '/',

  tools: () => '/tools',

  tool: (slug: string) => `/tools/${slug}`,

  categories: () => '/categories',

  category: (slug: string) => `/categories/${slug}`,

  alternatives: () => '/alternatives',

  alternative: (slug: string) => `/alternatives/${slug}`,

  blog: () => '/blog',

  blogPost: (slug: string) => `/blog/${slug}`,

  affiliateDisclosure: () => '/affiliate-disclosure',

  privacyPolicy: () => '/privacy-policy',

  termsOfService: () => '/terms-of-service',

  about: () => '/about',

  contact: () => '/contact',
} as const
