import { routes } from '~/constants/routes'
import type { FooterBrand, FooterLinkGroup } from '~/types/footer'

export const footerBrand: FooterBrand = {
  title: 'ToolDB',
  description: 'The largest database of digital tools. Find. Compare. Choose.',
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Navigation',
    links: [
      {
        label: 'Categories',
        to: routes.categories(),
      },
      {
        label: 'Collections',
        to: routes.collections(),
      },
      {
        label: 'Compare',
        to: routes.compare(),
      },
    ],
  },
]
