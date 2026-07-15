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
    label: 'Compare',
    to: routes.compare(),
  },
  {
    label: 'Collections',
    to: routes.collections(),
  },
] as const