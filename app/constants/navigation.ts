import { routes } from './routes'

export const navigation = [
  {
    label: 'Tools',
    to: routes.tools(),
  },
  {
    label: 'Categories',
    to: routes.categories(),
  },
  {
    label: 'Alternatives',
    to: routes.alternatives(),
  },
  {
    label: 'Comparisons',
    to: routes.comparisons(),
  },
  {
    label: 'Blog',
    to: routes.blog(),
  },
] as const
