import { navigation } from '~/constants/navigation'
import { routes } from '~/constants/routes'
import type { FooterBrand, FooterLinkGroup } from '~/types/footer'

export const footerBrand: FooterBrand = {
  title: 'ToolDB',
  description: 'The largest database of digital tools. Find. Compare. Choose.',
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Navigation',
    links: [...navigation],
  },
  {
    title: 'Legal',
    links: [
      {
        label: 'Affiliate Disclosure',
        to: routes.affiliateDisclosure(),
      },
      {
        label: 'Privacy Policy',
        to: routes.privacyPolicy(),
      },
      {
        label: 'Terms of Service',
        to: routes.termsOfService(),
      },
      {
        label: 'About Us',
        to: routes.about(),
      },
      {
        label: 'Contact',
        to: routes.contact(),
      },
    ],
  },
]