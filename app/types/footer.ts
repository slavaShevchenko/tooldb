export interface FooterBrand {
  title: string
  description: string
}

export interface FooterLink {
  label: string
  to: string
}

export interface FooterLinkGroup {
  title: string
  links: FooterLink[]
}
