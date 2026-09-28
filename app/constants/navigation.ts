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
    label: 'Blog',
    to: routes.blog(),
  },
  {
    label: 'Comparisons',
    to: routes.comparisons(),
  },
] as const
