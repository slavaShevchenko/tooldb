import type { ComparisonPage, ComparisonPageData } from '~/types/comparison'

import { webflowVsWordpress } from './webflow-vs-wordpress'
import { sellfyVsShopifyVsWooCommerceVsBigCommerce } from './sellfy-vs-shopify-vs-woocommerce-vs-bigcommerce'
import { clickupVsAsanaVsTrelloVsJira } from './clickup-vs-asana-vs-trello-vs-jira'
import { mondayVsNotionVsBasecamp } from './monday-vs-notion-vs-basecamp'
import { pipedriveVsHubspotVsSalesforce } from './pipedrive-vs-hubspot-vs-salesforce'
import { apolloVsZoominfoVsLinkedinSalesNavigator } from './apollo-vs-zoominfo-vs-linkedin-sales-navigator'
import { activecampaignVsMailchimpVsKlaviyoVsKit } from './activecampaign-vs-mailchimp-vs-klaviyo-vs-kit'
import { brevoVsConstantContactVsAweber } from './brevo-vs-constant-contact-vs-aweber'
import { gammaVsCanvaVsPowerpointVsBeautifulAi } from './gamma-vs-canva-vs-powerpoint-vs-beautiful-ai'
import { descriptVsSynthesiaVsHeygenVsPremierePro } from './descript-vs-synthesia-vs-heygen-vs-premiere-pro'
import { elevenlabsVsMurfVsLovoaiVsSpeechify } from './elevenlabs-vs-murf-vs-lovoai-vs-speechify'
import { firefliesVsOtterVsGongVsFathom } from './fireflies-vs-otter-vs-gong-vs-fathom'
import { quickbooksVsXeroVsFreshbooksVsNetsuite } from './quickbooks-vs-xero-vs-freshbooks-vs-netsuite'
import { pandadocVsDocusignVsAdobesignVsDropboxsign } from './pandadoc-vs-docusign-vs-adobesign-vs-dropboxsign'
import { deelVsRemoteVsAdpVsRippling } from './deel-vs-remote-vs-adp-vs-rippling'
import { gustoVsBamboohrVsWorkdayVsRippling } from './gusto-vs-bamboohr-vs-workday-vs-rippling'
import { zendeskVsFreshdeskVsIntercomVsSalesforceservicecloud } from './zendesk-vs-freshdesk-vs-intercom-vs-salesforceservicecloud'
import { helpscoutVsLivechatVsDriftVsTidio } from './helpscout-vs-livechat-vs-drift-vs-tidio'
import { landbotVsIntercomVsManychatVsChatfuel } from './landbot-vs-intercom-vs-manychat-vs-chatfuel'
import { surveymonkeyVsTypeformVsJotformVsGoogleforms } from './surveymonkey-vs-typeform-vs-jotform-vs-googleforms'
import { surferVsAhrefsVsSemrushVsMoz } from './surfer-vs-ahrefs-vs-semrush-vs-moz'
import { similarwebVsSpyfuVsSerankingVsAhrefs } from './similarweb-vs-spyfu-vs-seranking-vs-ahrefs'
import { brand24VsSproutsocialVsHootsuiteVsMention } from './brand24-vs-sproutsocial-vs-hootsuite-vs-mention'

const comparisionPostData: ComparisonPageData[] = [
  webflowVsWordpress,
  sellfyVsShopifyVsWooCommerceVsBigCommerce,
  clickupVsAsanaVsTrelloVsJira,
  mondayVsNotionVsBasecamp,
  pipedriveVsHubspotVsSalesforce,
  apolloVsZoominfoVsLinkedinSalesNavigator,
  activecampaignVsMailchimpVsKlaviyoVsKit,
  brevoVsConstantContactVsAweber,
  gammaVsCanvaVsPowerpointVsBeautifulAi,
  descriptVsSynthesiaVsHeygenVsPremierePro,
  elevenlabsVsMurfVsLovoaiVsSpeechify,
  firefliesVsOtterVsGongVsFathom,
  quickbooksVsXeroVsFreshbooksVsNetsuite,
  pandadocVsDocusignVsAdobesignVsDropboxsign,
  deelVsRemoteVsAdpVsRippling,
  gustoVsBamboohrVsWorkdayVsRippling,
  zendeskVsFreshdeskVsIntercomVsSalesforceservicecloud,
  helpscoutVsLivechatVsDriftVsTidio,
  landbotVsIntercomVsManychatVsChatfuel,
  surveymonkeyVsTypeformVsJotformVsGoogleforms,
  surferVsAhrefsVsSemrushVsMoz,
  similarwebVsSpyfuVsSerankingVsAhrefs,
  brand24VsSproutsocialVsHootsuiteVsMention,
]

export const comporisonPosts: ComparisonPage[] = comparisionPostData.map((post, index) => ({
  ...post,
  id: String(index + 1)
}))