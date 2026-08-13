import type { BlogPost, BlogPostData } from '~/types/blog'


import { bestEmailMarketingToolsForSmallBusiness } from './best-email-marketing-tools-for-small-business'
import { freeVsPaidCrmWhenToUpgrade } from './free-vs-paid-crm-when-to-upgrade'
import { howToChooseProjectManagementTool } from './how-to-choose-project-management-tool'
import { mailchimpAlternativesWorthSwitchingTo } from './mailchimp-alternatives-worth-switching-to'
import { notionVsClickUpVsObsidian } from './notion-vs-clickup-vs-obsidian'


const blogPostData: BlogPostData[] = [
  bestEmailMarketingToolsForSmallBusiness,
  howToChooseProjectManagementTool,
  freeVsPaidCrmWhenToUpgrade,
  mailchimpAlternativesWorthSwitchingTo,
  notionVsClickUpVsObsidian,
]

export const blogPosts: BlogPost[] = blogPostData.map((post, index) => ({
  ...post,
  id: String(index + 1),
}))
