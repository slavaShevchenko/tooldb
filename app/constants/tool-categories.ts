export const TOOL_CATEGORIES = {
  AI: {
    id: 'ai',
    title: 'AI',
  },
  ANALYTICS: {
    id: 'analytics',
    title: 'Analytics',
  },
  AUTOMATION: {
    id: 'automation',
    title: 'Automation',
  },
  COLLABORATION: {
    id: 'collaboration',
    title: 'Collaboration',
  },
  DESIGN: {
    id: 'design',
    title: 'Design',
  },
  DEVELOPER: {
    id: 'developer',
    title: 'Developer',
  },
  MARKETING: {
    id: 'marketing',
    title: 'Marketing',
  },
  NO_CODE: {
    id: 'no-code',
    title: 'No-Code',
  },
  PRODUCTIVITY: {
    id: 'productivity',
    title: 'Productivity',
  },
  SALES: {
    id: 'sales',
    title: 'Sales',
  },
  WRITING: {
    id: 'writing',
    title: 'Writing',
  },
} as const

export type ToolCategory =
  typeof TOOL_CATEGORIES[keyof typeof TOOL_CATEGORIES]['id']

export const TOOL_CATEGORY_LIST = Object.values(TOOL_CATEGORIES)