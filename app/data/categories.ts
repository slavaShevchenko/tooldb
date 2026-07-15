import type { Category } from '~/types/category'

export const categories: Category[] = [
  {
    id: '1',
    slug: 'ai',
    name: 'AI',
    description: 'Artificial intelligence tools',
    icon: '🤖',
    toolCount: 18,
  },
  {
    id: '2',
    slug: 'design',
    name: 'Design',
    description: 'Design and prototyping',
    icon: '🎨',
    toolCount: 12,
  },
  {
    id: '3',
    slug: 'developer',
    name: 'Developer',
    description: 'Developer tools',
    icon: '💻',
    toolCount: 26,
  },
  {
    id: '4',
    slug: 'marketing',
    name: 'Marketing',
    description: 'Marketing platforms',
    icon: '📈',
    toolCount: 14,
  },
]