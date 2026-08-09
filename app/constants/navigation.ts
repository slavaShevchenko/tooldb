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
] as const