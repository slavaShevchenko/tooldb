import type { BlogPost, BlogPostData } from '~/types/blog'

import { bestEmailMarketingToolsForSmallBusiness } from './best-email-marketing-tools-for-small-business'
import { freeVsPaidCrmWhenToUpgrade } from './free-vs-paid-crm-when-to-upgrade'
import { howToChooseProjectManagementTool } from './how-to-choose-project-management-tool'
import { mailchimpAlternativesWorthSwitchingTo } from './mailchimp-alternatives-worth-switching-to'
import { notionVsClickUpVsObsidian } from './notion-vs-clickup-vs-obsidian'
import { bestAiMeetingAssistants } from './best-ai-meeting-assistants'
import { bestSalesProspectingTools } from './best-sales-prospecting-tools'
import { bestCustomerSupportSoftware } from './best-customer-support-software'
import { bestWebsiteBuildersForSmallBusiness } from './best-website-builders-for-small-business'
import { bestGlobalPayrollSoftwareForRemoteTeams } from './best-global-payroll-software-for-remote-teams'

const blogPostData: BlogPostData[] = [
  bestEmailMarketingToolsForSmallBusiness,
  howToChooseProjectManagementTool,
  freeVsPaidCrmWhenToUpgrade,
  mailchimpAlternativesWorthSwitchingTo,
  notionVsClickUpVsObsidian,
  bestAiMeetingAssistants,
  bestSalesProspectingTools,
  bestCustomerSupportSoftware,
  bestWebsiteBuildersForSmallBusiness,
  bestGlobalPayrollSoftwareForRemoteTeams,
]

export const blogPosts: BlogPost[] = blogPostData.map((post, index) => ({
  ...post,
  id: String(index + 1),
}))