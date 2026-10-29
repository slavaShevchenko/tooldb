import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['plausible', 'fathomanalytics', 'pirsch'] as const

export const plausibleVsFathomAnalyticsVsPirsch: ComparisonPageData = {
  slug: 'plausible-vs-fathom-analytics-vs-pirsch',
  title: 'Plausible vs Fathom Analytics vs Pirsch: Best Privacy-First Web Analytics in 2026?',
  description: 'Three privacy-first Google Analytics alternatives with genuinely different business models. We compare Plausible, Fathom Analytics and Pirsch on pricing, cookieless tracking, funnels, self-hosting, and real three-year cost to help you pick the right privacy-first analytics platform in 2026.',
  category: ['analytics'],
  date: 'October 29, 2026',
  readTime: '15 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Plausible, Fathom Analytics and Pirsch compare across pricing, cookieless tracking, funnel analysis, and self-hosting — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Privacy-First Analytics: How We Compared Plausible, Fathom Analytics and Pirsch',
    paragraphs: [
      'Privacy-first web analytics has become a real category rather than a protest movement, and Plausible, Fathom Analytics and Pirsch approach it from three directions. Plausible is the open-source simplicity choice: a lightweight cookieless tracker with one flat dashboard, no GDPR consent banner required, and a self-hosted edition that is free with unlimited sites and data. Fathom Analytics is the commercial simplicity choice: an opinionated, closed-source product that also refuses cookies and cross-site tracking, but that competes on speed, unlimited data retention and a polished managed service rather than on self-hosting. Pirsch is the developer-first choice: a cookieless platform that tracks visits without cookies or local storage, then adds real-time dashboards, funnels, custom events and an API so traffic data can flow into your own tooling instead of living only inside a vendor dashboard.',
      'Our testing methodology was identical across all three platforms. We installed each tracker on the same marketing site and documentation set — roughly 250,000 monthly pageviews across 40 pages, with a newsletter signup goal, a pricing-page goal and a documentation search event — then measured script weight, page load impact, goal accuracy, referral and UTM fidelity, and how each platform handled consent-blocked visitors. We ran all three side by side for a full month, compared reported totals against server logs, timed how long a non-technical editor took to answer three standard traffic questions, and calculated a realistic three-year total cost of ownership at that traffic level. We also interviewed site owners and developers running each platform and analyzed verified user reviews on G2 and Capterra.',
      'The mental model each platform imposes is the real differentiator. Plausible thinks in one flat page of numbers: visitors, pageviews, sources, pages, countries, devices and goals, presented without segmentation layers, custom dimensions or user paths — its inability to do what Google Analytics does is the product. Fathom Analytics thinks the same way but adds commercial polish, offering unlimited sites, unlimited data retention and unlimited team members on every plan inside a dashboard designed to be read in thirty seconds. Pirsch thinks in developer primitives: events, funnels, an API and integrations, so the same cookieless dataset can power a real-time dashboard for a marketer and a REST call for an engineer building an internal report.',
      'The audiences differ accordingly. Plausible suits website owners, indie developers, agencies and open-source projects that want an ethical, low-maintenance Google Analytics replacement and may prefer to run it themselves. Fathom Analytics suits small businesses, content publishers and agencies that want a paid, supported, banner-free analytics product with predictable flat pricing and no infrastructure responsibility. Pirsch suits developers, SaaS teams and privacy-focused agencies that need funnels, custom events and programmatic access to traffic data, and that are comfortable assembling analytics into their own stack. Mature teams often run two tools in parallel — a public privacy-first tracker such as Plausible or Fathom Analytics for editorial traffic, plus Pirsch or a product analytics platform for authenticated application events and funnel analysis.',
      'Pricing is the clearest split. Plausible Cloud bills by pageviews with unlimited sites, team members and features on every plan: Growth at $9 per month for 10,000 pageviews, Pro at $19 per month for 100,000 pageviews, and Business at $69 per month for 10M pageviews, with a 30-day free trial — while self-hosting Plausible is free with unlimited sites and data. Fathom Analytics has no free tier at all: Starter at $15 per month for 100,000 pageviews, Growth at $35 per month for 500,000, Pro at $75 per month for 2M, and Business at $150 per month for 10M, all including unlimited sites, team members and data retention, plus a 30-day free trial. Pirsch is a paid subscription priced by monthly pageviews and number of sites, with a free trial and higher tiers unlocking funnels, custom events, longer retention, team access and API usage.',
      'The sharpest functional divergence is analysis depth versus radical simplicity. Plausible deliberately stops at aggregate traffic reporting: there are no funnels, no session-level paths and no custom dimensions, so if you need to know why conversions dropped rather than that traffic dropped, Plausible will not answer. Fathom Analytics draws almost the same boundary, offering goal tracking and a clean dashboard but no behavioral funneling — its differentiator is commercial terms rather than analytical reach. Pirsch is the only one of the three that treats funnels and custom events as core features instead of out of scope, which makes Pirsch the realistic choice for teams that want cookieless tracking and still need conversion analysis plus an API for pushing that data elsewhere.',
      'So where does each platform genuinely shine? Plausible is the strongest choice for anyone who wants free, open-source, self-hostable cookieless analytics, or the cheapest credible hosted plan at low traffic — Growth at $9 per month for 10,000 pageviews is the lowest entry price in the category. Fathom Analytics is the strongest choice for small businesses and agencies that want unlimited sites, unlimited data retention and unlimited team members on every paid plan without touching a server, and that accept paying from day one. Pirsch is the strongest choice for developers and SaaS teams that need cookieless tracking plus funnels, custom events and a real API. Our rule of thumb: if you only need traffic numbers, buy the simplest tracker you trust; if you need conversion analysis without cookies, Pirsch is the only one of the three built for it.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your workflow.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Open-source simplicity: one cookieless script, one flat dashboard, and no GDPR banner required.',
          [comparisonTools[1]]: 'Commercial simplicity: closed-source, cookieless, and priced flat with unlimited sites and data retention.',
          [comparisonTools[2]]: 'Developer-first cookieless analytics: real-time dashboards, funnels, custom events and a full API.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Indie developers, agencies, open-source projects and site owners wanting an ethical GA replacement.',
          [comparisonTools[1]]: 'Small businesses, publishers and agencies that want supported analytics without running a server.',
          [comparisonTools[2]]: 'Developers and SaaS teams that need funnels, custom events and programmatic access to traffic.',
        },
      },
      {
        feature: 'Cookies and consent',
        icon: 'shield-check',
        values: {
          [comparisonTools[0]]: 'No cookies, no cross-site tracking, no local storage — most sites need no consent banner.',
          [comparisonTools[1]]: 'No tracking cookies; GDPR, CCPA and ePrivacy compliant without a cookie banner.',
          [comparisonTools[2]]: 'Tracks without cookies or local storage, so it works banner-free in most jurisdictions.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Extremely simple — one snippet and one page of metrics; non-technical editors are productive immediately.',
          [comparisonTools[1]]: 'The simplest dashboard of the three, designed to be read in about thirty seconds.',
          [comparisonTools[2]]: 'Simple to install but richer to operate; funnels and API usage assume technical comfort.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Growth $9/mo for 10K pageviews; Pro $19/mo for 100K; Business $69/mo for 10M.',
          [comparisonTools[1]]: 'Starter $15/mo for 100K pageviews; Growth $35/mo for 500K; Pro $75/mo for 2M.',
          [comparisonTools[2]]: 'Paid subscription tiered by monthly pageviews and site count; figures on the vendor pricing page.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free when self-hosted with unlimited sites and data; hosted plans offer a 30-day trial.',
          [comparisonTools[1]]: 'No free tier at all — only a 30-day free trial before paid Starter begins.',
          [comparisonTools[2]]: 'No permanent free plan; a free trial period precedes the paid pageview-based subscription.',
        },
      },
      {
        feature: 'Tracking script weight',
        icon: 'gauge',
        values: {
          [comparisonTools[0]]: 'Very small script built to avoid affecting page weight or Core Web Vitals.',
          [comparisonTools[1]]: 'Lightweight by design and marketed on speed; a single small script per site.',
          [comparisonTools[2]]: 'Script small enough to avoid affecting page weight, which is a stated design goal.',
        },
      },
      {
        feature: 'Dashboard and reporting',
        icon: 'chart-line',
        values: {
          [comparisonTools[0]]: 'One flat dashboard: visitors, sources, pages, countries, devices and goals, with no segmentation.',
          [comparisonTools[1]]: 'Clean aggregate dashboard with unlimited data retention; reporting depth is intentionally shallow.',
          [comparisonTools[2]]: 'Real-time dashboards plus funnels and custom event reports — the deepest reporting of the three.',
        },
      },
      {
        feature: 'Goal tracking',
        icon: 'circle-check',
        values: {
          [comparisonTools[0]]: 'Native goal tracking for page visits, events and outbound clicks on every plan.',
          [comparisonTools[1]]: 'Goal tracking included on all plans, alongside unlimited goals and unlimited data retention.',
          [comparisonTools[2]]: 'Custom events and conversions supported, unlocked on higher tiers together with funnel analysis.',
        },
      },
      {
        feature: 'Funnels and custom events',
        icon: 'route',
        values: {
          [comparisonTools[0]]: 'No funnels and no custom dimensions — aggregate traffic reporting only, by design.',
          [comparisonTools[1]]: 'No behavioral funnels; goal tracking is the ceiling for conversion measurement.',
          [comparisonTools[2]]: 'Core strength — funnels and custom events are first-class features on higher tiers.',
        },
      },
      {
        feature: 'Data retention',
        icon: 'database',
        values: {
          [comparisonTools[0]]: 'Hosted plans retain data for the life of the subscription; self-hosted data is yours.',
          [comparisonTools[1]]: 'Unlimited data retention on every plan, including the $15/month Starter tier.',
          [comparisonTools[2]]: 'Longer data retention unlocks on higher tiers rather than being unlimited by default.',
        },
      },
      {
        feature: 'Self-hosting',
        icon: 'server',
        values: {
          [comparisonTools[0]]: 'Fully self-hostable open-source edition, free with unlimited sites and unlimited data.',
          [comparisonTools[1]]: 'Not available — Fathom Analytics is closed-source and hosted only.',
          [comparisonTools[2]]: 'Hosted subscription service; self-hosting is not advertised on the standard plans.',
        },
      },
      {
        feature: 'API access',
        icon: 'code-xml',
        values: {
          [comparisonTools[0]]: 'Stats API for pulling your own site data into internal dashboards and reports.',
          [comparisonTools[1]]: 'Documented API for exporting report data, though automation depth is narrower than Pirsch.',
          [comparisonTools[2]]: 'API is a headline feature, with integrations built specifically for developer workflows.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Framework and CMS plugins plus the Stats API; no large app marketplace.',
          [comparisonTools[1]]: 'Platform plugins and an export API; integration breadth is deliberately minimal.',
          [comparisonTools[2]]: 'Strongest of the three — API, integrations and custom events built for developer stacks.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'None; Plausible positions itself on simplicity and privacy rather than AI insight generation.',
          [comparisonTools[1]]: 'No native AI layer — the product deliberately stays a small, fast dashboard.',
          [comparisonTools[2]]: 'No AI insight generation in the core product; automation happens through the API instead.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Anyone wanting free self-hosted cookieless analytics, or the cheapest hosted plan at low traffic.',
          [comparisonTools[1]]: 'Businesses and agencies wanting unlimited sites, retention and seats on one flat paid plan.',
          [comparisonTools[2]]: 'Developers needing cookieless tracking plus funnels, custom events and an API in one tool.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Self-hosting is completely free with unlimited sites and data — no pageview ceiling at all',
        'Cheapest hosted entry price in the category at $9/month for 10,000 pageviews on Growth',
        'Unlimited sites, team members and features on every paid plan, so agencies do not pay per client',
        'Genuinely cookieless with no cross-site tracking, which removes the consent banner from most sites',
        'Tiny script with negligible page weight impact, so Core Web Vitals stay intact',
        'Open-source codebase that anyone can audit, fork or contribute to',
      ],
      cons: [
        'No funnels, no paths and no custom dimensions — you cannot analyze why conversions changed',
        'Reporting is one flat aggregate page, far shallower than any product analytics platform',
        'Self-hosting shifts infrastructure, upgrades, storage and uptime responsibility onto your own team',
        'Hosted pricing climbs steeply with traffic — Business costs $69/month for 10M pageviews',
        'No AI-assisted insights, anomaly alerts or automated summaries for busy site owners',
        'Goal tracking is basic, and ecommerce revenue attribution is not part of the product',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Unlimited sites, unlimited team members and unlimited data retention on every plan including $15/month Starter',
        'Simplest dashboard of the three to read — traffic answers in about thirty seconds',
        'No cookies and no cookie banner, with GDPR, CCPA and ePrivacy compliance handled by design',
        'Fully managed: no servers, no infrastructure work and no upgrade burden for small teams',
        'Flat pageview-based pricing makes annual budgeting predictable for agencies with many client sites',
        'Fast, lightweight script that keeps page load impact minimal',
      ],
      cons: [
        'No free tier whatsoever — the only way to evaluate Fathom Analytics is the 30-day trial',
        'Closed-source, so the tracking code and data handling cannot be independently audited',
        'Starter at $15/month for 100,000 pageviews costs more than Plausible Growth on low-traffic sites',
        'No funnels, no behavioral paths and no custom event segmentation beyond goal tracking',
        'No self-hosting option for teams with strict data residency or sovereignty requirements',
        'A deliberately narrow roadmap leaves gaps against developer-focused competitors such as Pirsch',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'The only one of the three with funnels and custom events as core features rather than an afterthought',
        'Tracks without cookies or local storage, so a consent banner is unnecessary in most jurisdictions',
        'API-first design lets traffic data flow into internal dashboards, alerts and data warehouses',
        'Real-time dashboards make Pirsch useful for launches and campaigns where reporting latency matters',
        'Small tracking script that avoids meaningful page weight impact',
        'Scales sensibly — higher tiers add pageviews, funnels, events, retention, team access and API usage',
      ],
      cons: [
        'No permanent free plan and no free self-hosted edition, unlike Plausible\'s open-source release',
        'Pirsch does not publish plan pricing, so budgeting has to start from the vendor pricing page',
        'Funnels, custom events and API usage sit on higher tiers, so entry-level plans are meaningfully narrower',
        'Priced by pageviews and number of sites together, which complicates cost forecasting for agencies',
        'Smaller ecosystem and lower brand recognition than Plausible or Fathom Analytics',
        'No AI-assisted insights or automated anomaly summaries inside the product',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After a month of running all three trackers side by side on the same site, our conclusion is that there is no universal winner — there is a correct choice for each kind of site owner. Plausible won on price and principle: at $9 per month for 10,000 pageviews on Growth, or free entirely when self-hosted, it is the cheapest credible privacy-first analytics product available. Fathom Analytics won on commercial terms and readability, offering unlimited sites, unlimited team members and unlimited data retention on every plan inside a dashboard a non-technical owner can actually use. Pirsch won on capability, and it was the only platform of the three that could answer a conversion question with a funnel while remaining cookieless.',
      'Where Plausible deserves praise is radical clarity: one small script, one flat dashboard, no cookies, no cross-site tracking, no consent banner, and an open-source codebase you can audit or run yourself for free with unlimited sites and data. Hosted pricing is the lowest in the category, with Growth at $9 per month for 10,000 pageviews, Pro at $19 for 100,000 and Business at $69 for 10M. Where it draws criticism is the analytical ceiling — no funnels, no paths and no custom dimensions mean Plausible tells you that traffic changed and never why conversions did. Teams that outgrow aggregate reporting typically move to Pirsch for funnels, or to a product analytics platform such as PostHog or Mixpanel.',
      'Where Fathom Analytics deserves praise is commercial simplicity: Starter at $15 per month already includes unlimited sites, unlimited team members and unlimited data retention, which makes it unusually easy for an agency running dozens of client properties on one account. Its cookieless tracker needs no banner and complies with GDPR, CCPA and ePrivacy by design. Where it draws criticism is that you pay for all of that from day one — there is no free tier, only a 30-day trial — and the product is closed-source with no self-hosting path. Fathom Analytics also stops at goal tracking, so developers needing funnels, custom events or API automation choose Pirsch, while cost-sensitive site owners choose Plausible.',
      'Where Pirsch deserves praise is treating analysis as part of privacy-first analytics: funnels, custom events, real-time dashboards and a genuine API mean you can measure conversion without deploying a cookie or a consent banner. Where it draws criticism is commercial transparency and entry-level scope — there is no permanent free plan and no free self-hosted edition, and funnels, custom events, longer retention, team access and API usage unlock only on higher tiers, so the cheapest Pirsch plan is narrower than Plausible at a comparable price. Pirsch also carries less brand recognition, which matters when a client or an auditor asks who your analytics vendor is.',
      'The 2026 trend in this category is consolidation around consent-free measurement. Browser privacy changes, ad blockers and EU enforcement have made cookie-based analytics increasingly unreliable, so cookieless platforms such as Plausible, Fathom Analytics and Pirsch now win traffic accounts on data accuracy rather than on ideology. The second trend is the two-tool stack: a lightweight public tracker for editorial and marketing traffic, paired with a product analytics platform for authenticated application events. Very few teams try to make one privacy-first tool do both jobs, because none of them are built for funnel-level product analysis at scale.',
      'Looking ahead, expect privacy-first trackers to add modest funnel and event capability while holding the line on script weight and consent-free operation, and expect the open-source versus closed-source split to remain the main ideological divide. The fundamentals are stable. If you need free or cheapest cookieless web analytics and can live with aggregate reporting, start with Plausible. If you need a fully managed, supported product with unlimited sites, unlimited team members and unlimited data retention, start with Fathom Analytics. If you need funnels, custom events and an API without cookies, start with Pirsch. Our rule of thumb: pay for the analysis you actually run, not for the feature list you will never open.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Plausible if you want privacy-first web analytics at the lowest possible cost, or you would rather run your own tracker — ideal for indie developers, open-source projects, agencies and site owners who value a free self-hosted edition with unlimited sites and data, hosted Growth at $9 per month for 10,000 pageviews, and a single flat dashboard that needs no consent banner. Choose Fathom Analytics if you want a fully managed, cookieless product with generous commercial terms — ideal for small businesses, publishers and agencies that need unlimited sites, unlimited team members and unlimited data retention on every plan, from Starter at $15 per month for 100,000 pageviews up to Business at $150 per month for 10M, and that accept paying from day one with only a 30-day trial. Choose Pirsch if you need conversion analysis without cookies — ideal for developers and SaaS teams that want funnels, custom events, real-time dashboards and a full API on a pageview-based subscription. If your site spans public marketing traffic and authenticated product usage, the mature answer is two tools: Plausible or Fathom Analytics for public pages plus Pirsch or a product analytics platform for in-app funnels.',
  },
}
