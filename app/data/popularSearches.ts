import { routes } from '~/constants/routes'
import type { PopularSearch } from '~/types/popularSearch'

export const popularSearches: PopularSearch[] = [
  {
    id: 'ai',
    label: 'AI Tools',
    to: routes.category('ai'),
  },
  {
    id: 'productivity',
    label: 'Productivity',
    to: routes.category('productivity'),
  },
  {
    id: 'no-code',
    label: 'No Code',
    to: routes.category('no-code'),
  },
  {
    id: 'design',
    label: 'Design',
    to: routes.category('design'),
  },
  {
    id: 'writing',
    label: 'Writing',
    to: routes.category('writing'),
  },
]
