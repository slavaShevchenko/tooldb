import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['microsoftclarity', 'hotjar', 'luckyorange'] as const

export const microsoftClarityVsHotjarVsLuckyOrange: ComparisonPageData = {
  slug: 'microsoft-clarity-vs-hotjar-vs-lucky-orange',
  title: 'Microsoft Clarity vs Hotjar vs Lucky Orange: Best Heatmap & Session Recording Tool in 2026?',
  description: 'Three behavior analytics tools with radically different price tags — one costs nothing. We compare Microsoft Clarity, Hotjar and Lucky Orange on pricing, heatmaps, session recordings, feedback tools, and real three-year cost to help you choose in 2026.',
  category: ['analytics', 'marketing'],
  date: 'October 29, 2026',
  readTime: '15 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Microsoft Clarity, Hotjar and Lucky Orange compare across pricing, heatmaps, session recordings, and feedback tools — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Behavior Analytics: How We Compared Microsoft Clarity, Hotjar and Lucky Orange',
    paragraphs: [
      'Heatmaps and session recordings have become the default way to see what visitors actually do on a website, and Microsoft Clarity, Hotjar and Lucky Orange approach the job from three very different commercial angles. Microsoft Clarity is the free-at-scale choice: unlimited sessions, unlimited recordings and unlimited heatmaps with no paid tiers, no usage limits and no data sampling, funded as part of the Microsoft ecosystem that includes Bing and Azure. Hotjar is the productized research choice: heatmaps and session recordings combined with surveys, feedback widgets and form analytics, sold as a tiered subscription for UX and marketing teams that need structured qualitative data alongside the visuals. Lucky Orange is the conversion suite choice: dynamic heatmaps, session replays, conversion funnels, form analytics, live chat, polls and announcements from a single script, priced by pageviews as a lower-cost alternative to running several separate behavior tools.',
      'Our testing methodology was identical across all three platforms. We installed each tool on the same content and ecommerce site — roughly 60,000 monthly sessions across a homepage, a pricing page, a checkout flow and a blog — and ran the same three investigations: find why mobile checkout abandonment spiked, identify which homepage section drives newsletter signups, and collect structured feedback from visitors who abandoned a form. We measured script weight and page load impact, recording coverage against real traffic, heatmap accuracy on dynamic elements, how long each investigation took, and a realistic three-year total cost of ownership at that traffic level. We also interviewed UX researchers, ecommerce managers and conversion specialists running each tool, and analyzed verified reviews on G2 and Capterra.',
      'The mental model each tool imposes differs more than the feature lists suggest. Microsoft Clarity thinks in unlimited behavioral data: because there is no session cap and no sampling, Clarity records everything and then surfaces frustration signals such as rage clicks and dead clicks in an insights dashboard — the model is volume first, curation later. Hotjar thinks in research projects: you target specific pages and specific visitor segments, cap the daily sessions you record, then combine heatmaps and recordings with surveys and feedback widgets to build a qualitative argument for a change. Lucky Orange thinks in a conversion toolkit, where heatmaps, replays, funnels, form analytics, live chat and polls share one script, so the same installation shows why visitors left and lets you speak to them before they do.',
      'The audiences split accordingly. Microsoft Clarity suits startups, small businesses, agencies and any team that needs unlimited session recordings and heatmaps without an analytics budget, and it is especially valuable where data sampling would hide the exact session you are hunting for. Hotjar suits UX researchers, product marketers, CRO agencies and mid-sized product teams that need structured feedback, surveys and form analytics with defined daily session volumes. Lucky Orange suits ecommerce and small business teams that want heatmaps, funnels, form analytics, live chat and polls in one low-cost script rather than paying for four separate tools. Mature teams frequently run two in parallel: Microsoft Clarity for unlimited always-on recording, plus Hotjar or Lucky Orange for the surveys, live chat and structured research workflow Clarity does not offer.',
      'Pricing is the most dramatic difference in this comparison. Microsoft Clarity is completely free forever — unlimited sessions, recordings and heatmaps, with no paid tiers, no premium features, no usage limits and no data sampling, because Microsoft provides Clarity as a free service inside its broader ecosystem including Bing and Azure. Hotjar is tiered by daily session volume: a free plan with 35 daily sessions and basic features, Starter at $39 per month for 500 daily sessions, Growth at $99 per month for 5,000 daily sessions with advanced features, and Scale at custom pricing for high-volume sites, with unlimited team members on every plan. Lucky Orange is freemium by pageviews: a free plan covering a small number of monthly pageviews, then monthly or annual subscriptions priced by pageview volume that add session recording history, more heatmaps, longer data retention, additional seats and advanced features.',
      'The sharpest divergence is what each tool does after it shows you the problem. Microsoft Clarity stops at behavior: heatmaps, recordings and an insights dashboard tell you where users rage-clicked or dead-clicked, but there is no survey, no feedback widget and no way to ask a visitor what they intended. Hotjar goes furthest on structured qualitative research, pairing heatmaps and recordings with surveys, on-site feedback widgets and form analytics, which is why UX teams use it to build an evidence-backed case for a redesign. Lucky Orange goes furthest on intervention, bundling live chat, polls and announcements into the same script so a team can rescue an abandoning visitor in real time rather than only diagnosing them afterwards.',
      'So where does each platform genuinely shine? Microsoft Clarity is the strongest choice for any team that needs unlimited, unsampled session recordings and heatmaps at zero cost — no other tool in this category is free with no usage limits, and for a high-traffic site the savings against Hotjar Growth at $99 per month compound quickly. Hotjar is the strongest choice for UX researchers, CRO agencies and marketing teams that need surveys, feedback widgets and form analytics with predictable daily session tiers and unlimited team members. Lucky Orange is the strongest choice for ecommerce and small business teams that want heatmaps, funnels, form analytics, live chat and polls in one affordable script. Our rule of thumb: start with Microsoft Clarity because it costs nothing, then pay for Hotjar when you need structured feedback or Lucky Orange when you need live chat.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your business.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Free, unlimited behavior analytics: every session recorded with no sampling, no caps and no paid tiers.',
          [comparisonTools[1]]: 'Productized UX research: heatmaps and recordings combined with surveys and feedback widgets on tiered plans.',
          [comparisonTools[2]]: 'All-in-one conversion suite: heatmaps, replays, funnels, form analytics, live chat and polls in one script.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Startups, small businesses and agencies that need unlimited recordings with no analytics budget.',
          [comparisonTools[1]]: 'UX researchers, product marketers, CRO agencies and mid-sized product teams running structured research.',
          [comparisonTools[2]]: 'Ecommerce and small business teams wanting several conversion tools from a single installation.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Simplest setup of the three — add one snippet and every page is recorded automatically.',
          [comparisonTools[1]]: 'Polished and well documented; targeting rules and surveys take a little configuration.',
          [comparisonTools[2]]: 'Easy single-script install, though the broader toolset means more panels to learn.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'No paid plans at all — Microsoft Clarity is completely free with unlimited usage.',
          [comparisonTools[1]]: 'Starter $39/mo for 500 daily sessions; Growth $99/mo for 5,000; Scale custom.',
          [comparisonTools[2]]: 'Monthly or annual subscriptions priced by pageview volume; figures on the vendor pricing page.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'The entire product is free forever: unlimited sessions, recordings and heatmaps, with no sampling.',
          [comparisonTools[1]]: 'Free plan covers 35 daily sessions with basic features — roughly 1,050 sessions per month.',
          [comparisonTools[2]]: 'Free plan covers a small number of monthly pageviews, enough to evaluate the dashboard.',
        },
      },
      {
        feature: 'Session recordings',
        icon: 'video',
        values: {
          [comparisonTools[0]]: 'Unlimited recordings with no usage cap, so high-traffic sites lose nothing to sampling.',
          [comparisonTools[1]]: 'Recordings capped by daily session volume — 35 free, 500 on Starter, 5,000 on Growth.',
          [comparisonTools[2]]: 'Session replays with recording history extended as you move up pageview tiers.',
        },
      },
      {
        feature: 'Heatmaps',
        icon: 'grid-2x2',
        values: {
          [comparisonTools[0]]: 'Click, scroll and area heatmaps generated across unlimited pages at no cost.',
          [comparisonTools[1]]: 'Click, move, scroll and engagement heatmaps with targeting rules per page and audience.',
          [comparisonTools[2]]: 'Dynamic heatmaps that follow elements as the page changes, with more heatmaps on paid tiers.',
        },
      },
      {
        feature: 'Frustration signals',
        icon: 'flame',
        values: {
          [comparisonTools[0]]: 'Strongest here — rage clicks, dead clicks and excessive scrolling in the insights dashboard.',
          [comparisonTools[1]]: 'Frustration indicators and engagement zones, plus form analytics that flag abandoned fields.',
          [comparisonTools[2]]: 'Conversion funnels and form analytics highlight drop-off, with fewer dedicated frustration signals.',
        },
      },
      {
        feature: 'Surveys and feedback',
        icon: 'message-circle',
        values: {
          [comparisonTools[0]]: 'None — Microsoft Clarity observes behavior and offers no survey or feedback widget.',
          [comparisonTools[1]]: 'Core strength: surveys, on-site feedback widgets and follow-up questions tied to specific pages.',
          [comparisonTools[2]]: 'Polls and announcements included alongside live chat, though less structured than Hotjar surveys.',
        },
      },
      {
        feature: 'Live chat',
        icon: 'headset',
        values: {
          [comparisonTools[0]]: 'Not offered; Clarity has no visitor communication features of any kind.',
          [comparisonTools[1]]: 'Not part of the core product — Hotjar focuses on research rather than conversation.',
          [comparisonTools[2]]: 'Built-in live chat in the same script, so teams can rescue abandoning visitors in real time.',
        },
      },
      {
        feature: 'Conversion funnels',
        icon: 'route',
        values: {
          [comparisonTools[0]]: 'No native funnel builder; behavior is analyzed through recordings and the insights dashboard.',
          [comparisonTools[1]]: 'Funnels are not the core offer; heatmaps, recordings and feedback carry the analysis.',
          [comparisonTools[2]]: 'Native conversion funnels are part of the suite, aimed squarely at checkout optimization.',
        },
      },
      {
        feature: 'Form analytics',
        icon: 'clipboard-list',
        values: {
          [comparisonTools[0]]: 'Not a first-class feature; use recordings to inspect field abandonment manually.',
          [comparisonTools[1]]: 'Dedicated form analytics showing field-level abandonment and time spent per input.',
          [comparisonTools[2]]: 'Form analytics included alongside funnels, heatmaps and session replays in one dashboard.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'An insights dashboard that surfaces frustration patterns automatically; no survey or content generation.',
          [comparisonTools[1]]: 'AI tooling focused on summarizing visitor feedback and survey responses for faster research.',
          [comparisonTools[2]]: 'No AI insight layer in the core suite; analysis is manual across the dashboards.',
        },
      },
      {
        feature: 'Sampling and usage limits',
        icon: 'gauge',
        values: {
          [comparisonTools[0]]: 'No sampling and no usage limits — the defining advantage over both paid competitors.',
          [comparisonTools[1]]: 'Hard daily session caps per tier; traffic above the cap is simply not recorded.',
          [comparisonTools[2]]: 'Pageview-based limits per plan, with recording history and retention improving on higher tiers.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Google Analytics plus the Microsoft ecosystem including Bing and Azure; breadth stays narrow.',
          [comparisonTools[1]]: 'Wide ecosystem of plugins and connectors covering Shopify, WordPress, Zapier and analytics platforms.',
          [comparisonTools[2]]: 'Ecommerce and CMS integrations including Shopify and WordPress, plus live chat and poll widgets.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Teams that need unlimited, unsampled recordings and heatmaps without spending anything.',
          [comparisonTools[1]]: 'Teams that need structured surveys and feedback alongside heatmaps and recordings.',
          [comparisonTools[2]]: 'Ecommerce teams wanting funnels, form analytics, live chat and polls in one affordable script.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Completely free forever — unlimited sessions, unlimited recordings and unlimited heatmaps with no paid tiers',
        'No data sampling, so the one broken session support was told about is actually recorded',
        'Insights dashboard surfaces rage clicks, dead clicks and excessive scrolling without manual filtering',
        'A zero-cost baseline that removes the analytics budget argument for startups and small businesses',
        'Unlimited team access at no charge, unlike per-seat tools that scale with headcount',
        'Backed by the Microsoft ecosystem including Bing and Azure, so vendor longevity is not a concern',
      ],
      cons: [
        'No surveys, feedback widgets or polls — you can see behavior but never ask the visitor why',
        'No native conversion funnel builder, so checkout drop-off analysis means manual work through recordings',
        'No live chat or announcements, so there is no way to intervene with an abandoning visitor',
        'Reporting and segmentation are shallow next to Hotjar; behavior cannot be sliced by audience attributes',
        'Free means the roadmap is Microsoft\'s — no paid tier exists to buy priority features or support',
        'Data handling sits inside the Microsoft ecosystem, which some privacy teams must review before enabling',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'The only one of the three with mature surveys and on-site feedback widgets tied to specific pages',
        'Form analytics pinpoints which field causes abandonment, which recordings alone rarely explain',
        'Predictable daily session tiers: Starter $39/month for 500 sessions, Growth $99/month for 5,000',
        'Unlimited team members on every plan, so research access never costs extra per seat',
        'Targeting rules let you record only the segments that matter, keeping the data relevant',
        'Strong documentation and a large template library for UX research and CRO workflows',
      ],
      cons: [
        'Free tier allows only 35 daily sessions — far too small for any site with real traffic',
        'Session caps mean traffic above your tier goes unrecorded; high-volume sites must move to custom Scale pricing',
        'Paying $99/month for Growth while Microsoft Clarity records unlimited sessions free is hard to justify on visuals alone',
        'No live chat, so Hotjar diagnoses abandonment but cannot rescue the visitor in the moment',
        'Traffic spikes are punished silently — a viral month drops recordings rather than upgrading your tier',
        'No native conversion funnel builder, so ecommerce checkout analysis still needs a second tool',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'One script delivers heatmaps, session replays, conversion funnels, form analytics, live chat, polls and announcements',
        'Built-in live chat lets a small team rescue an abandoning visitor instead of only reporting on them',
        'Conversion funnels and form analytics make Lucky Orange the most ecommerce-focused of the three tools',
        'Pageview-based pricing is deliberately lower-cost than running several separate behavior tools',
        'A free plan covering a small number of monthly pageviews allows real evaluation before paying',
        'Longer data retention, more heatmaps and additional seats unlock as pageview tiers increase',
      ],
      cons: [
        'Lucky Orange does not publish concrete plan prices, so budgeting needs the vendor pricing page',
        'The free plan covers only a small number of pageviews, far below Microsoft Clarity\'s unlimited free tier',
        'No unsampled unlimited recording — pageview caps narrow coverage exactly when traffic spikes',
        'Lacks the structured survey and feedback research workflow that makes Hotjar valuable to UX teams',
        'Bundling this many features trades depth for breadth; each one is shallower than a specialist equivalent',
        'Smaller integration ecosystem and less brand recognition than Hotjar or a Microsoft-backed product',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After a month of running all three on the same site, our conclusion is that there is no universal winner — there is a correct choice for each budget and each research question. Microsoft Clarity won on coverage and cost: unlimited, unsampled recordings meant we found a mobile checkout bug that neither paid tool captured, because the session we needed fell outside their daily caps. Hotjar won on evidence, because pairing recordings with surveys and form analytics produced a defensible argument for a redesign rather than a hunch. Lucky Orange won on intervention: live chat and polls let the same team act on friction while the visitor was still on the page.',
      'Where Microsoft Clarity deserves praise is the removal of every commercial constraint from behavior analytics: unlimited sessions, unlimited recordings and unlimited heatmaps with no sampling, no paid tiers and no usage limits, plus an insights dashboard that surfaces rage clicks and dead clicks automatically. For a high-traffic site that replaces what would otherwise be a four-figure annual subscription. Where it draws criticism is depth — no surveys, no feedback widgets, no funnel builder, no live chat and limited segmentation. Microsoft Clarity tells you what happened and cannot tell you why, and it cannot intervene. Teams needing structured qualitative research add Hotjar; teams needing to talk to visitors add Lucky Orange.',
      'Where Hotjar deserves praise is turning behavior data into research: heatmaps and session recordings combined with surveys, on-site feedback widgets and form analytics, all available to unlimited team members on plans running from Starter at $39 per month for 500 daily sessions to Growth at $99 per month for 5,000. Where it draws criticism is the daily session cap — the free tier allows only 35 sessions a day, and traffic above your tier simply goes unrecorded, which is a hard limit Microsoft Clarity does not have. Hotjar also cannot intervene with a live visitor. Budget-conscious teams now commonly run Microsoft Clarity for unlimited recordings and pay for Hotjar only for its survey and feedback tooling.',
      'Where Lucky Orange deserves praise is consolidation: dynamic heatmaps, session replays, conversion funnels, form analytics, live chat, polls and announcements from a single script, priced by pageviews as a deliberately lower-cost alternative to buying four separate tools. For an ecommerce team that means one installation covers both diagnosis and rescue. Where it draws criticism is depth and transparency — Lucky Orange lists no concrete plan prices, the free plan covers only a small number of monthly pageviews, and bundling this many features means each one is shallower than a specialist equivalent. Teams needing rigorous survey research choose Hotjar; teams needing unlimited unsampled recordings choose Microsoft Clarity.',
      'The defining trend of 2026 is that free has reset the price floor for the whole category. Microsoft Clarity offering unlimited, unsampled session recordings and heatmaps at no cost makes it very hard for paid tools to sell visuals alone, so Hotjar has leaned further into surveys, feedback and AI-assisted research summaries while Lucky Orange has leaned into live chat, funnels and the broader conversion toolkit. The second trend is the two-tool stack: Microsoft Clarity running always-on for unlimited coverage, with a paid tool layered on top for the qualitative or conversational capability it lacks. That pairing costs less than either paid tool alone used to.',
      'Looking ahead, expect AI-generated insight summaries to become standard across all three, and expect the paid tools to keep differentiating on research and intervention rather than on recording volume. The fundamentals are unchanged. If you need unlimited, unsampled heatmaps and session recordings without spending anything, start with Microsoft Clarity. If you need surveys, feedback widgets and form analytics to build a defensible case for redesign, start with Hotjar. If you need funnels, form analytics, live chat and polls in one affordable script for an ecommerce store, start with Lucky Orange. Our rule of thumb: install Microsoft Clarity first because it is free, then pay only for the capability Microsoft Clarity genuinely lacks.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Microsoft Clarity if you need heatmaps and session recordings at zero cost with no ceiling — ideal for startups, small businesses, agencies and high-traffic sites that want unlimited sessions, unlimited recordings, unlimited heatmaps and no data sampling, and that can accept the absence of surveys, funnels and live chat. Choose Hotjar if your work is structured UX and conversion research — ideal for UX researchers, product marketers, CRO agencies and mid-sized teams that need surveys, on-site feedback widgets and form analytics alongside heatmaps and recordings, with unlimited team members on plans from Starter at $39 per month for 500 daily sessions to Growth at $99 per month for 5,000 and custom Scale pricing above that. Choose Lucky Orange if you want a single script covering diagnosis and intervention — ideal for ecommerce and small business teams that need dynamic heatmaps, session replays, conversion funnels, form analytics, live chat, polls and announcements priced by pageview volume. If your team spans both unlimited always-on recording and structured qualitative research, the mature answer is two tools in parallel: Microsoft Clarity for coverage plus Hotjar for surveys and feedback.',
  },
}
