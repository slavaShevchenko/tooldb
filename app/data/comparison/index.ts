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
import { woorankVsSeobilityVsSistrix } from './woorank-vs-seobility-vs-sistrix'
import { raventoolsVsAgencyanalyticsVsAccuranker } from './raventools-vs-agencyanalytics-vs-accuranker'
import { seobilityVsSeopowersuiteVsSitebulb } from './seobility-vs-seopowersuite-vs-sitebulb'
import { sistrixVsSearchmetricsVsXovi } from './sistrix-vs-searchmetrics-vs-xovi'
import { brand24VsYouscanVsAwario } from './brand24-vs-youscan-vs-awario'
import { dashthisVsSwydoVsOviondVsReportei } from './dashthis-vs-swydo-vs-oviond-vs-reportei'
import { statusbrewVsSocialpilotVsDashsocial } from './statusbrew-vs-socialpilot-vs-dashsocial'
import { sleekplanVsUpvotyVsFrill } from './sleekplan-vs-upvoty-vs-frill'
import { cursorVsWindsurfVsGithubCopilot } from './cursor-vs-windsurf-vs-github-copilot'
import { v0VsBoltnewVsLovable } from './v0-vs-boltnew-vs-lovable'
import { replitVsCodesandboxVsStackblitz } from './replit-vs-codesandbox-vs-stackblitz'
import { clineVsAiderVsContinue } from './cline-vs-aider-vs-continue'
import { supabaseVsFirebaseVsAppwrite } from './supabase-vs-firebase-vs-appwrite'
import { neonVsPlanetscaleVsMongodbAtlas } from './neon-vs-planetscale-vs-mongodb-atlas'
import { vercelVsNetlifyVsRender } from './vercel-vs-netlify-vs-render'
import { railwayVsFlyioVsHeroku } from './railway-vs-flyio-vs-heroku'
import { midjourneyVsFluxVsStableDiffusion } from './midjourney-vs-flux-vs-stable-diffusion'
import { runwayVsPikaVsLumaAi } from './runway-vs-pika-vs-luma-ai'
import { soraVsKlingAiVsHaiper } from './sora-vs-kling-ai-vs-haiper'
import { sunoVsUdioVsStableAudio } from './suno-vs-udio-vs-stable-audio'
import { playhtVsResembleAiVsWellsaidLabs } from './playht-vs-resemble-ai-vs-wellsaid-labs'
import { opusclipVsVizardVsMunch } from './opusclip-vs-vizard-vs-munch'
import { adobeFireflyVsLeonardoAiVsIdeogram } from './adobe-firefly-vs-leonardo-ai-vs-ideogram'
import { posthogVsLogrocketVsFullstory } from './posthog-vs-logrocket-vs-fullstory'
import { plausibleVsFathomAnalyticsVsPirsch } from './plausible-vs-fathom-analytics-vs-pirsch'
import { mixpanelVsAmplitudeVsHeap } from './mixpanel-vs-amplitude-vs-heap'
import { microsoftClarityVsHotjarVsLuckyOrange } from './microsoft-clarity-vs-hotjar-vs-lucky-orange'
import { metabaseVsLookerVsTableau } from './metabase-vs-looker-vs-tableau'
import { circleVsMightyNetworksVsGeneva } from './circle-vs-mighty-networks-vs-geneva'
import { ghostVsSubstackVsBeehiiv } from './ghost-vs-substack-vs-beehiiv'
import { memberstackVsMemberfulVsOutseta } from './memberstack-vs-memberful-vs-outseta'
import { discourseVsVanillaForumsVsTribe } from './discourse-vs-vanilla-forums-vs-tribe'
import { gumroadVsLemonSqueezyVsPayhip } from './gumroad-vs-lemon-squeezy-vs-payhip'
import { ecwidVsBigcartelVsShopware } from './ecwid-vs-bigcartel-vs-shopware'
import { printifyVsPrintfulVsGelato } from './printify-vs-printful-vs-gelato'
import { shipbobVsShippoVsEasyship } from './shipbob-vs-shippo-vs-easyship'
import { thrivecartVsSamcartVsCartflows } from './thrivecart-vs-samcart-vs-cartflows'
import { stripeVsPaddleVsLemonSqueezy } from './stripe-vs-paddle-vs-lemon-squeezy'
import { figmaVsPenpotVsSketch } from './figma-vs-penpot-vs-sketch'
import { balsamiqVsAxureRpVsUizard } from './balsamiq-vs-axure-rp-vs-uizard'
import { protopieVsPrincipleVsOrigamiStudio } from './protopie-vs-principle-vs-origami-studio'
import { splineVsRiveVsDora } from './spline-vs-rive-vs-dora'
import { framerVsDoraVsReadymag } from './framer-vs-dora-vs-readymag'
import { togglVsHarvestVsClockify } from './toggl-vs-harvest-vs-clockify'
import { motionVsReclaimAiVsSkedpal } from './motion-vs-reclaim-ai-vs-skedpal'
import { obsidianVsLogseqVsRoamResearch } from './obsidian-vs-logseq-vs-roam-research'
import { todoistVsTicktickVsThings3 } from './todoist-vs-ticktick-vs-things-3'
import { fantasticalVsCalendlyVsSavvycal } from './fantastical-vs-calendly-vs-savvycal'
import { testgorillaVsCodilityVsHackerrank } from './testgorilla-vs-codility-vs-hackerrank'
import { ashbyVsGreenhouseVsLever } from './ashby-vs-greenhouse-vs-lever'
import { latticeVs15fiveVsCultureAmp } from './lattice-vs-15five-vs-culture-amp'
import { oysterVsPapayaGlobalVsMultiplier } from './oyster-vs-papaya-global-vs-multiplier'
import { instantlyVsSmartleadVsMailshake } from './instantly-vs-smartlead-vs-mailshake'
import { closeVsFolkVsAttio } from './close-vs-folk-vs-attio'
import { replyioVsOutreachVsSalesloft } from './replyio-vs-outreach-vs-salesloft'
import { crispVsTawktoVsLiveagent } from './crisp-vs-tawkto-vs-liveagent'
import { cannyVsFeaturebaseVsNolt } from './canny-vs-featurebase-vs-nolt'
import { frontVsMissiveVsHiver } from './front-vs-missive-vs-hiver'

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
  woorankVsSeobilityVsSistrix,
  raventoolsVsAgencyanalyticsVsAccuranker,
  seobilityVsSeopowersuiteVsSitebulb,
  sistrixVsSearchmetricsVsXovi,
  brand24VsYouscanVsAwario,
  dashthisVsSwydoVsOviondVsReportei,
  statusbrewVsSocialpilotVsDashsocial,
  sleekplanVsUpvotyVsFrill,
  cursorVsWindsurfVsGithubCopilot,
  v0VsBoltnewVsLovable,
  replitVsCodesandboxVsStackblitz,
  clineVsAiderVsContinue,
  supabaseVsFirebaseVsAppwrite,
  neonVsPlanetscaleVsMongodbAtlas,
  vercelVsNetlifyVsRender,
  railwayVsFlyioVsHeroku,
  midjourneyVsFluxVsStableDiffusion,
  runwayVsPikaVsLumaAi,
  soraVsKlingAiVsHaiper,
  sunoVsUdioVsStableAudio,
  playhtVsResembleAiVsWellsaidLabs,
  opusclipVsVizardVsMunch,
  adobeFireflyVsLeonardoAiVsIdeogram,
  posthogVsLogrocketVsFullstory,
  plausibleVsFathomAnalyticsVsPirsch,
  mixpanelVsAmplitudeVsHeap,
  microsoftClarityVsHotjarVsLuckyOrange,
  metabaseVsLookerVsTableau,
  circleVsMightyNetworksVsGeneva,
  ghostVsSubstackVsBeehiiv,
  memberstackVsMemberfulVsOutseta,
  discourseVsVanillaForumsVsTribe,
  gumroadVsLemonSqueezyVsPayhip,
  ecwidVsBigcartelVsShopware,
  printifyVsPrintfulVsGelato,
  shipbobVsShippoVsEasyship,
  thrivecartVsSamcartVsCartflows,
  stripeVsPaddleVsLemonSqueezy,
  figmaVsPenpotVsSketch,
  balsamiqVsAxureRpVsUizard,
  protopieVsPrincipleVsOrigamiStudio,
  splineVsRiveVsDora,
  framerVsDoraVsReadymag,
  togglVsHarvestVsClockify,
  motionVsReclaimAiVsSkedpal,
  obsidianVsLogseqVsRoamResearch,
  todoistVsTicktickVsThings3,
  fantasticalVsCalendlyVsSavvycal,
  testgorillaVsCodilityVsHackerrank,
  ashbyVsGreenhouseVsLever,
  latticeVs15fiveVsCultureAmp,
  oysterVsPapayaGlobalVsMultiplier,
  instantlyVsSmartleadVsMailshake,
  closeVsFolkVsAttio,
  replyioVsOutreachVsSalesloft,
  crispVsTawktoVsLiveagent,
  cannyVsFeaturebaseVsNolt,
  frontVsMissiveVsHiver,
]

export const comporisonPosts: ComparisonPage[] = comparisionPostData.map((post, index) => ({
  ...post,
  id: String(index + 1)
}))