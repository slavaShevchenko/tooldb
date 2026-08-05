import type { ToolCategory } from '~/constants/tool-categories'

export interface Category {
  id: string
  slug: ToolCategory
  name: string
  description: string
  icon: string

  toolCount?: number

  isSeeMore?: boolean
  to?: string
}