import { routes } from '~/constants/routes'
import type { PopularSearch } from '~/types/popularSearch'

export const popularSearches: PopularSearch[] = [
  {
    id: 'ai',
    label: 'AI',
    to: routes.category('ai'),
  },
  {
    id: 'marketing',
    label: 'Marketing',
    to: routes.category('marketing'),
  },
  {
    id: 'productivity',
    label: 'Productivity',
    to: routes.category('productivity'),
  },
  {
    id: 'design',
    label: 'Design',
    to: routes.category('design'),
  },
  {
    id: 'web-development',
    label: 'WebDev',
    to: routes.category('web-development'),
  },
]