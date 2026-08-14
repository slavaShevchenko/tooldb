import { activeCampaignContent } from './activecampaign'
import { amplitudeContent } from './amplitude'
import { amplemarketContent } from './amplemarket'
import { apolloContent } from './apollo'
import { aweberContent } from './aweber'
import { billContent } from './bill'
import { brand24Content } from './brand24'
import { brevoContent } from './brevo'
import { campaignMonitorContent } from './campaignmonitor'
import { circleContent } from './circle'
import { clickUpContent } from './clickup'
import { closeContent } from './close'
import { cognismContent } from './cognism'
import { crowdstrikeContent } from './crowdstrike'
import { crazyEggContent } from './crazyegg'
import { databoxContent } from './databox'
import { deelContent } from './deel'
import { descriptContent } from './descript'
import { dripContent } from './drip'
import { elevenlabsContent } from './elevenlabs'
import { firefliesContent } from './fireflies'
import { freshbooksContent } from './freshbooks'
import { freshdeskContent } from './freshdesk'
import { gammaContent } from './gamma'
import { getResponseContent } from './getresponse'
import { gustoContent } from './gusto'
import { helpscoutContent } from './helpscout'
import { hibobContent } from './hibob'
import { hubstaffContent } from './hubstaff'
import { instantlyContent } from './instantly'
import { kitContent } from './kit'
import { landbotContent } from './landbot'
import { laterContent } from './later'
import { learnWorldsContent } from './learnworlds'
import { lemlistContent } from './lemlist'
import { livestormContent } from './livestorm'
import { lushaContent } from './lusha'
import { miroContent } from './miro'
import { mondaycomContent } from './monday'
import { moosendContent } from './moosend'
import { murfAiContent } from './murfai'
import { netlifyContent } from './netlify'
import { onePasswordContent } from './1password'
import { oysterContent } from './oyster'
import { pandaDocContent } from './pandadoc'
import { papayaGlobalContent } from './papayaglobal'
import { pipedriveContent } from './pipedrive'
import { printifyContent } from './printify'
import { protonContent } from './proton'
import { quickbooksContent } from './quickbooks'
import { replyioContent } from './replyio'
import { respondioContent } from './respondio'
import { restreamContent } from './restream'
import { rocketreachContent } from './rocketreach'
import { runpodContent } from './runpod'
import { sellfyContent } from './sellfy'
import { shipbobContent } from './shipbob'
import { shippoContent } from './shippo'
import { similarwebContent } from './similarweb'
import { socialBeeContent } from './socialbee'
import { surferContent } from './surfer'
import { surveymonkeyContent } from './surveymonkey'
import { thinkificContent } from './thinkific'
import { tidioContent } from './tidio'
import { togglContent } from './toggl'
import { todoistContent } from './todoist'
import { webflowContent } from './webflow'
import { wistiaContent } from './wistia'
import { wrikeContent } from './wrike'
import { xeroContent } from './xero'
import { zendeskContent } from './zendesk'
import { zoominfoContent } from './zoominfo'

import { aircallContent } from './aircall'
import { callrailContent } from './callrail'
import { cloudtalkContent } from './cloudtalk'
import { kixieContent } from './kixie'
import { nextivaContent } from './nextiva'
import { callhippoContent } from './callhippo'
import { quoContent } from './quo'
import { freshserviceContent } from './freshservice'
import { connecteamContent } from './connecteam'
import { processStreetContent } from './processstreet'
import { agencyanalyticsContent } from './agencyanalytics'
import { browseaiContent } from './browseai'
import { bugherdContent } from './bugherd'
import { smartsuiteContent } from './smartsuite'
import { storylaneContent } from './storylane'
import { contractorForemanContent } from './contractorforeman'
import { glideContent } from './glide'
import { guestyContent } from './guesty'
import { housecallProContent } from './housecallpro'
import { softrContent } from './softr'
import { krispcallContent } from './krispcall'
import { motionContent } from './motion'
import { reclaimaiContent } from './reclaimai'
import { saneboxContent } from './sanebox'
import { visualcvContent } from './visualcv'
import { easydmarcContent } from './easydmarc'
import { idriveContent } from './idrive'
import { signableContent } from './signable'
import { testgorillaContent } from './testgorilla'
import { foxitContent } from './foxit'
import { inmotionHostingContent } from './inmotionhosting'
import { pleskContent } from './plesk'
import { ultahostContent } from './ultahost'

export const getToolContent = (slug: string) => {
  return toolContent[slug as keyof typeof toolContent]
}

export const toolContent = {
  '1password': onePasswordContent,
  activecampaign: activeCampaignContent,
  amplitude: amplitudeContent,
  amplemarket: amplemarketContent,
  apollo: apolloContent,
  aweber: aweberContent,
  bill: billContent,
  brand24: brand24Content,
  brevo: brevoContent,
  campaignmonitor: campaignMonitorContent,
  circle: circleContent,
  clickup: clickUpContent,
  close: closeContent,
  cognism: cognismContent,
  crowdstrike: crowdstrikeContent,
  crazyegg: crazyEggContent,
  databox: databoxContent,
  deel: deelContent,
  descript: descriptContent,
  drip: dripContent,
  elevenlabs: elevenlabsContent,
  fireflies: firefliesContent,
  freshbooks: freshbooksContent,
  freshdesk: freshdeskContent,
  gamma: gammaContent,
  getresponse: getResponseContent,
  gusto: gustoContent,
  helpscout: helpscoutContent,
  hibob: hibobContent,
  hubstaff: hubstaffContent,
  instantly: instantlyContent,
  kit: kitContent,
  landbot: landbotContent,
  later: laterContent,
  learnworlds: learnWorldsContent,
  lemlist: lemlistContent,
  livestorm: livestormContent,
  lusha: lushaContent,
  miro: miroContent,
  mondaycom: mondaycomContent,
  moosend: moosendContent,
  murfai: murfAiContent,
  netlify: netlifyContent,
  oyster: oysterContent,
  pandadoc: pandaDocContent,
  papayaglobal: papayaGlobalContent,
  pipedrive: pipedriveContent,
  printify: printifyContent,
  proton: protonContent,
  quickbooks: quickbooksContent,
  replyio: replyioContent,
  respondio: respondioContent,
  restream: restreamContent,
  rocketreach: rocketreachContent,
  runpod: runpodContent,
  sellfy: sellfyContent,
  shipbob: shipbobContent,
  shippo: shippoContent,
  similarweb: similarwebContent,
  socialbee: socialBeeContent,
  surfer: surferContent,
  surveymonkey: surveymonkeyContent,
  thinkific: thinkificContent,
  tidio: tidioContent,
  toggl: togglContent,
  todoist: todoistContent,
  webflow: webflowContent,
  wistia: wistiaContent,
  wrike: wrikeContent,
  xero: xeroContent,
  zendesk: zendeskContent,
  zoominfo: zoominfoContent,

  aircall: aircallContent,
  callrail: callrailContent,
  cloudtalk: cloudtalkContent,
  kixie: kixieContent,
  nextiva: nextivaContent,
  callhippo: callhippoContent,
  connecteam: connecteamContent,
  freshservice: freshserviceContent,
  processstreet: processStreetContent,
  quo: quoContent,
  agencyanalytics: agencyanalyticsContent,
  browseai: browseaiContent,
  bugherd: bugherdContent,
  smartsuite: smartsuiteContent,
  storylane: storylaneContent,
  contractorforeman: contractorForemanContent,
  glide: glideContent,
  guesty: guestyContent,
  housecallpro: housecallProContent,
  softr: softrContent,
  krispcall: krispcallContent,
  motion: motionContent,
  reclaimai: reclaimaiContent,
  sanebox: saneboxContent,
  visualcv: visualcvContent,
  easydmarc: easydmarcContent,
  idrive: idriveContent,
  signable: signableContent,
  testgorilla: testgorillaContent,
  foxit: foxitContent,
  inmotionhosting: inmotionHostingContent,
  plesk: pleskContent,
  ultahost: ultahostContent,
} as const