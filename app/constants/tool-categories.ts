export const TOOL_CATEGORIES = {
  AI: {
    id: 'ai',
    title: 'AI',
  },
  ANALYTICS: {
    id: 'analytics',
    title: 'Analytics',
  },
  COMMUNICATION: {
    id: 'communication',
    title: 'Communication',
  },
  COMMUNITY: {
    id: 'community',
    title: 'Community',
  },
  CRM: {
    id: 'crm',
    title: 'CRM',
  },
  DESIGN: {
    id: 'design',
    title: 'Design',
  },
  ECOMMERCE: {
    id: 'ecommerce',
    title: 'Ecommerce',
  },
  EDUCATION: {
    id: 'education',
    title: 'Education',
  },
  FINANCE: {
    id: 'finance',
    title: 'Finance',
  },
  HR: {
    id: 'hr',
    title: 'HR',
  },
  MARKETING: {
    id: 'marketing',
    title: 'Marketing',
  },
  MEDIA: {
    id: 'media',
    title: 'Media',
  },
  PRODUCTIVITY: {
    id: 'productivity',
    title: 'Productivity',
  },
  SALES: {
    id: 'sales',
    title: 'Sales',
  },
  SECURITY: {
    id: 'security',
    title: 'Security',
  },
  SEO: {
    id: 'seo',
    title: 'SEO',
  },
  WEB_DEVELOPMENT: {
    id: 'web-development',
    title: 'WebDev',
  },
} as const

export type ToolCategory =
  typeof TOOL_CATEGORIES[keyof typeof TOOL_CATEGORIES]['id']