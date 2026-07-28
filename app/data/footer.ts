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
    ],
  },
]
