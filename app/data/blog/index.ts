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
// NEW BLOG POSTS
import { bestCrmSoftwareForSmallBusiness } from './new/best-crm-software-for-small-business' // +
import { bestSalesAutomationToolsForSmallBusiness } from './new/best-sales-automation-tools-for-small-business' // +
import { bestColdEmailSoftware } from './new/best-cold-email-software'
import { bestBusinessEmailMarketingPlatforms } from './new/best-business-email-marketing-platforms'
import { bestCustomerCommunicationTools } from './new/best-customer-communication-tools'
import { bestAiToolsForSmallBusiness } from './new/best-ai-tools-for-small-business'
import { bestProjectManagementToolsForRemoteTeams } from './new/best-project-management-tools-for-remote-teams'
import { bestEmployeeProductivityToolsForRemoteTeams } from './new/best-employee-productivity-tools-for-remote-teams'
import { bestToolsForOnlineCourseBusiness } from './new/best-tools-for-online-course-business'
import { bestToolsForOnlineBusiness } from './new/best-tools-for-online-business'
import { bestToolsForAccountants } from './new/best-tools-for-accountants'
import { bestToolsForTeachers } from './new/best-tools-for-teachers'
import { bestToolsForSalesReps } from './new/best-tools-for-sales-reps'
import { bestToolsForDigitalMarketers } from './new/best-tools-for-digital-marketers'
import { bestToolsForCustomerSupportTeams } from './new/best-tools-for-customer-support-teams'
import { bestToolsForHrManagers } from './new/best-tools-for-hr-managers'
import { bestToolsForProjectManagers } from './new/best-tools-for-project-managers'
import { bestToolsForFreelancers } from './new/best-tools-for-freelancers'
import { bestToolsForFrontendDevelopers } from './new/best-tools-for-frontend-developers'
import { bestToolsForSmallBusinessOwners } from './new/best-tools-for-small-business-owners'

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
  // NEW BLOG POSTS
  bestCrmSoftwareForSmallBusiness,
  bestSalesAutomationToolsForSmallBusiness,
  bestColdEmailSoftware,
  bestBusinessEmailMarketingPlatforms,
  bestCustomerCommunicationTools,
  bestAiToolsForSmallBusiness,
  bestProjectManagementToolsForRemoteTeams,
  bestEmployeeProductivityToolsForRemoteTeams,
  bestToolsForOnlineCourseBusiness,
  bestToolsForOnlineBusiness,
  bestToolsForAccountants,
  bestToolsForTeachers,
  bestToolsForSalesReps,
  bestToolsForDigitalMarketers,
  bestToolsForCustomerSupportTeams,
  bestToolsForHrManagers,
  bestToolsForProjectManagers,
  bestToolsForFreelancers,
  bestToolsForFrontendDevelopers,
  bestToolsForSmallBusinessOwners
]

export const blogPosts: BlogPost[] = blogPostData.map((post, index) => ({
  ...post,
  id: String(index + 1)
}))