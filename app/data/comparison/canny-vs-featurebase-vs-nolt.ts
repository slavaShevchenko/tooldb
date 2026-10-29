import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['canny', 'featurebase', 'nolt'] as const

export const cannyVsFeaturebaseVsNolt: ComparisonPageData = {
  slug: 'canny-vs-featurebase-vs-nolt',
  title: 'Canny vs Featurebase vs Nolt: Best Feedback & Roadmap Tool in 2026?',
  description: 'Full feedback suite, AI-assisted all-in-one board, or deliberately narrow flat-rate simplicity. We compare Canny, Featurebase and Nolt on pricing, boards, AI, roadmap and changelog depth, and integrations to help you choose the right tool in 2026.',
  category: ['productivity', 'community'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Canny, Featurebase and Nolt compare across pricing model, feedback boards, AI triage, and roadmap depth — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Product Feedback: How We Compared Canny, Featurebase and Nolt',
    paragraphs: [
      'Feedback management tools look interchangeable in a screenshot — a board, some votes, a roadmap — but Canny, Featurebase and Nolt are built on three genuinely different philosophies. Canny is the full-suite choice: users submit ideas, others vote and comment, the product team triages everything on a public board, status changes are pushed back to voters, a roadmap shows what is planned and a changelog records what shipped. Featurebase is the AI-assisted choice: feedback lands on a board, duplicates are grouped automatically, AI helps with categorisation and summarising, and accepted ideas are pushed into engineering tools and team chat. Nolt is the deliberately narrow choice: a lightweight board where users post, vote and comment while the team marks status on a public roadmap, with quick setup, single flat pricing and no configuration overhead.',
      'Our testing methodology was hands-on and identical across all three platforms. We built the same scenario — a six-person product team collecting requests from a few thousand users across a public board and an internal one — on Canny, Featurebase and Nolt. We measured time from signup to a branded public board, how long it took to merge fifty near-duplicate requests into clean items, and the effort to publish a roadmap and a changelog entry. We calculated a three-year total cost of ownership covering every board we needed, team seats, SSO and custom domain, and interviewed two product managers per platform while analyzing verified reviews on G2 and Capterra.',
      'The mental model behind each product explains most of the daily experience. Canny thinks in boards as a growing suite: public boards, private boards, roadmap views and changelog are distinct capabilities that unlock as you move up the plans, which suits organizations expanding into several product lines. Featurebase thinks in one continuous pipeline: capture, automatic duplicate grouping, AI categorisation and summaries, then hand-off into engineering tools and team chat, with the board as the visible surface of that pipeline. Nolt thinks in exactly one thing: a feedback board with voting, status and a public roadmap, sold at a single flat rate per board with everything included. Canny rewards configuration, Featurebase rewards automation, Nolt rewards teams that want to stop configuring.',
      'The intended audience differs accordingly. Canny targets established product teams and SaaS companies that need multiple boards, private boards for internal requests, custom domains, SSO and integrations, and that expect the tool to grow with the organization. Featurebase targets AI-forward SaaS startups and product teams drowning in duplicate requests, where automatic grouping, summaries and hand-off into engineering tools save more time than any amount of manual triage discipline. Nolt targets small product teams, indie SaaS founders and agencies that want a public board live this afternoon with predictable cost and no admin burden. Mature product organizations often run two tools in parallel — a public feedback board for customers plus a private board for sales and support requests, or a feedback tool for prioritisation alongside a product analytics platform that explains actual usage behaviour.',
      'Pricing separates them more sharply than features do. Canny has a free plan covering a single board with core feedback collection and voting, while paid plans billed monthly or annually add multiple boards, private boards, custom domains, advanced roadmap and changelog features, AI categorisation, integrations, SSO and additional team seats — so most of what a growing team needs sits above the free tier. Featurebase also has a free single-board plan, with paid plans adding AI features, multiple boards, custom domains, removal of branding, SSO, integrations, analytics and additional team members. Nolt is the outlier: a paid monthly or annual subscription per board at a single flat rate covering feedback, voting, roadmap, changelog, SSO, custom domain and integrations, with a free trial and no permanent free plan. Over three years the question is whether you pay for gated capabilities as you grow, or one flat rate that already includes them.',
      'The sharpest functional divergence is how each tool handles volume. Featurebase is the only one of the three that groups duplicate feedback automatically and uses AI to categorise and summarise, which changes triage from sorting to reviewing — for a product with hundreds of requests a month, that is the difference between a maintained board and an abandoned one. Canny matches on breadth rather than automation, offering multiple boards, private boards, advanced roadmap and changelog features, SSO and integrations, with AI categorisation on paid plans. Nolt deliberately offers less: a board, voting, status, a roadmap and a changelog, with no AI triage layer, so deduping and categorisation stay manual. If your problem is request volume, that difference decides the purchase.',
      'So where does each platform genuinely shine? Canny is the strongest choice for established product teams that need multiple public and private boards, custom domains, SSO, integrations and a full roadmap plus changelog suite in one place. Featurebase is the strongest choice for teams with high request volume that want automatic duplicate grouping, AI categorisation and summaries, and hand-off into engineering tools and team chat. Nolt is the strongest choice for small product teams and indie SaaS companies that want a fast, flat-rate board where SSO, custom domain, roadmap, changelog and integrations are included rather than gated. Our rule of thumb: if you spend more time merging duplicates than deciding priorities, buy the automation — otherwise buy the simplest board you can live with.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your team.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Full feedback suite — boards, voting, roadmap and changelog with tiered depth.',
          [comparisonTools[1]]: 'AI-assisted pipeline — automatic duplicate grouping, categorisation, summaries and hand-off.',
          [comparisonTools[2]]: 'Deliberately narrow board — quick setup, flat pricing and no configuration overhead.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Established product teams running several product lines, public and internal boards.',
          [comparisonTools[1]]: 'SaaS teams with high request volume that want AI to cut triage time.',
          [comparisonTools[2]]: 'Small product teams, indie SaaS founders and agencies that want simplicity.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Straightforward but configurable — boards, statuses and views take some setup.',
          [comparisonTools[1]]: 'Easy to start, and AI grouping reduces the manual work as volume grows.',
          [comparisonTools[2]]: 'Fastest of the three to launch — a public board is live in minutes.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Monthly or annual plans that add boards, private boards, custom domain, AI and SSO.',
          [comparisonTools[1]]: 'Monthly or annual plans that add AI features, boards, branding removal and analytics.',
          [comparisonTools[2]]: 'A single flat rate per board, monthly or annual, with everything included.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free plan covers a single board with core feedback collection and voting.',
          [comparisonTools[1]]: 'Free plan covers a single board with feedback and voting.',
          [comparisonTools[2]]: 'No permanent free plan — a free trial is offered instead.',
        },
      },
      {
        feature: 'Feedback boards',
        icon: 'clipboard-list',
        values: {
          [comparisonTools[0]]: 'Multiple public and private boards unlock on paid plans for separate products or teams.',
          [comparisonTools[1]]: 'Multiple boards on paid plans, with duplicates grouped automatically inside them.',
          [comparisonTools[2]]: 'Priced per board, so a public and an internal board are two subscriptions.',
        },
      },
      {
        feature: 'Voting and prioritisation',
        icon: 'thumbs-up',
        values: {
          [comparisonTools[0]]: 'Vote and comment on ideas, then triage on the board with status changes.',
          [comparisonTools[1]]: 'Voting plus prioritised items that turn directly into roadmap and changelog entries.',
          [comparisonTools[2]]: 'Users post ideas, vote and comment while the team marks status manually.',
        },
      },
      {
        feature: 'Duplicate handling',
        icon: 'layers',
        values: {
          [comparisonTools[0]]: 'Manual merging during triage, supported by AI categorisation on paid plans.',
          [comparisonTools[1]]: 'Automatic duplicate grouping — the standout feature for high-volume boards.',
          [comparisonTools[2]]: 'Manual merging by the product team, in keeping with the narrow scope.',
        },
      },
      {
        feature: 'Public roadmap',
        icon: 'milestone',
        values: {
          [comparisonTools[0]]: 'Roadmap shows what is planned, with advanced roadmap features on paid tiers.',
          [comparisonTools[1]]: 'Prioritised feedback becomes a public roadmap without extra configuration.',
          [comparisonTools[2]]: 'The team marks status on a public roadmap — included in the flat rate.',
        },
      },
      {
        feature: 'Changelog',
        icon: 'newspaper',
        values: {
          [comparisonTools[0]]: 'Changelog records what shipped, with advanced features gated to paid plans.',
          [comparisonTools[1]]: 'Changelog built from the same items as the roadmap, closing the loop publicly.',
          [comparisonTools[2]]: 'Changelog included in the single flat rate rather than sold as an upgrade.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'AI categorisation available on paid plans to keep growing boards organised.',
          [comparisonTools[1]]: 'AI assists with categorisation and summarising, and is central to the product.',
          [comparisonTools[2]]: 'No AI triage layer — the product stays deliberately manual and predictable.',
        },
      },
      {
        feature: 'Voter notifications',
        icon: 'bell',
        values: {
          [comparisonTools[0]]: 'Status changes are pushed back to the voters who requested the feature.',
          [comparisonTools[1]]: 'Updates follow the same item from board to roadmap to changelog for voters.',
          [comparisonTools[2]]: 'Status changes on the roadmap keep voters informed without extra tooling.',
        },
      },
      {
        feature: 'Private and internal boards',
        icon: 'lock',
        values: {
          [comparisonTools[0]]: 'Private boards are a paid-plan capability for internal and customer-specific requests.',
          [comparisonTools[1]]: 'Boards can be restricted, with branding removal and SSO on paid tiers.',
          [comparisonTools[2]]: 'A private board is simply another board, at another flat-rate subscription.',
        },
      },
      {
        feature: 'Custom domain and branding',
        icon: 'globe',
        values: {
          [comparisonTools[0]]: 'Custom domains arrive with paid plans, replacing the default hosted address.',
          [comparisonTools[1]]: 'Custom domains and removal of branding are paid-plan features.',
          [comparisonTools[2]]: 'Custom domain included in the flat rate from the first board.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Integrations unlock on paid plans alongside SSO and additional team seats.',
          [comparisonTools[1]]: 'Integrations push accepted ideas into engineering tools and team chat.',
          [comparisonTools[2]]: 'Integrations included in the single flat rate covering the whole product.',
        },
      },
      {
        feature: 'Security and SSO',
        icon: 'shield-check',
        values: {
          [comparisonTools[0]]: 'SSO is a paid-plan feature, which matters for enterprise procurement.',
          [comparisonTools[1]]: 'SSO arrives on paid tiers together with administrative controls.',
          [comparisonTools[2]]: 'SSO is included at the flat rate rather than gated behind an upper tier.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Teams that need a growing suite of public and private boards with SSO.',
          [comparisonTools[1]]: 'Teams whose board volume makes manual merging and categorisation unsustainable.',
          [comparisonTools[2]]: 'Small teams that want one predictable board with everything included.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'The complete loop in one tool — feedback, voting, roadmap, changelog and voter notifications',
        'Multiple boards plus private boards cover public customers and internal requesters separately',
        'Status changes are pushed back to voters, which keeps the community engaged over time',
        'SSO, custom domains and integrations satisfy enterprise procurement requirements',
        'Free single-board plan is enough to validate the workflow before paying',
        'AI categorisation on paid plans helps large boards stay organised as volume grows',
      ],
      cons: [
        'Multiple boards, private boards, custom domains, SSO and AI are all gated above the free plan',
        'Additional team seats are a paid-plan item, so cost rises with the product team',
        'More configuration than a small team needs just to collect and vote on ideas',
        'Advanced roadmap and changelog features require an upgrade rather than being included',
        'Duplicate requests still have to be merged by hand unless you pay for AI categorisation',
        'Free plan is limited to a single board, which rules out separating public and internal feedback',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Automatic duplicate grouping removes the single most tedious part of feedback triage',
        'AI categorisation and summarising turn a noisy board into reviewable, prioritised items',
        'Integrations push accepted ideas into engineering tools and team chat without re-keying',
        'Roadmap and changelog are generated from the same items as the feedback board',
        'Free single-board plan lets a small team run the whole loop before upgrading',
        'Custom domains, branding removal, SSO and analytics arrive together on paid plans',
      ],
      cons: [
        'The AI features that justify the product are gated to paid plans, not the free board',
        'Analytics and additional team members require an upgrade, raising cost as the team grows',
        'Narrower enterprise governance than a suite sold into larger procurement processes',
        'Automatic grouping still needs review — mis-merged requests hide real demand signals',
        'Branding stays on the free plan, which is visible on a customer-facing public board',
        'Less depth in roadmap and changelog customization than a long-established suite',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Single flat rate per board covers SSO, custom domain, roadmap, changelog and integrations',
        'Fastest setup of the three — a public feedback board can be live the same afternoon',
        'No configuration overhead, so a small team keeps using it instead of abandoning it',
        'Predictable cost, because nothing is metered by seats, AI usage or feature gates',
        'Voting, comments and status on a public roadmap cover the core loop completely',
      ],
      cons: [
        'No permanent free plan — only a trial, unlike Canny and Featurebase',
        'Per-board pricing means a public board and an internal board cost two subscriptions',
        'No AI triage layer, so merging duplicates and categorising requests stays manual',
        'Deliberately narrow scope leaves analytics and reporting thin for data-driven teams',
        'Little room to customize the workflow once a team outgrows the simple model',
        'Fewer advanced capabilities to grow into than a suite such as Canny',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing, our conclusion is that there is no universal winner among Canny, Featurebase and Nolt — the right choice depends on how much feedback you receive and how much administration you are willing to do. Canny delivered the most complete loop: boards, voting, triage, roadmap, changelog and voter notifications worked together without a second tool, and private boards let us separate customer requests from internal ones. Featurebase delivered the biggest time saving at volume, because automatic duplicate grouping and AI summarising cut triage from sorting to reviewing. Nolt delivered the fastest start and the most predictable bill, with SSO, custom domain, roadmap, changelog and integrations included in one flat rate.',
      'Where Canny deserves praise is breadth and maturity: multiple boards, private boards, custom domains, advanced roadmap and changelog features, AI categorisation, integrations, SSO and team seats give an organization room to grow without migrating. Pushing status changes back to voters is the feature that keeps a community alive. Where it draws criticism is gating — nearly everything a growing team wants sits above the free single-board plan, including private boards, custom domain, AI and SSO, and additional seats cost more. Cost-conscious small teams drift to Nolt, while teams drowning in duplicates drift to Featurebase.',
      'Where Featurebase deserves praise is automation: grouping duplicates automatically, categorising and summarising with AI, then pushing accepted ideas into engineering tools and team chat removes the manual labour that kills most feedback boards. Roadmap and changelog come from the same items, so nothing is re-keyed. Where it draws criticism is that the automation is the paid product — the free single board carries branding and no AI, analytics and extra team members require an upgrade, and automatic grouping still needs human review because a mis-merged request hides a real demand signal. Teams wanting enterprise governance compare Canny, while teams wanting flat predictable pricing compare Nolt.',
      'Where Nolt deserves praise is restraint and value: one flat rate per board covers feedback, voting, roadmap, changelog, SSO, custom domain and integrations, and setup is fast enough that a small product team ships a public board the same day it decides to. There are no seats to count and no AI usage to meter. Where it draws criticism is scope — there is no permanent free plan, a second board means a second subscription, triage stays manual because there is no AI layer, and reporting is thin for teams that want to correlate votes with usage data. High-volume teams move to Featurebase, and organizations needing private boards and procurement-friendly controls move to Canny.',
      'The biggest trend in 2026 is AI moving into the triage step itself. Featurebase made duplicate grouping and summarising the centre of the product, Canny added AI categorisation on paid plans, and Nolt deliberately stayed out of it — so the category is splitting into automated pipelines for high-volume products and simple boards for teams whose request count stays manageable. A second trend is the two-board architecture: a public customer-facing board for demand generation, plus a private board where sales and support log requests for named accounts. Because Canny gates private boards behind paid plans and Nolt prices per board, that architecture has a real cost implication.',
      'Looking ahead, expect feedback tools to keep converging with changelog and community products, because closing the loop publicly is what retains voters. The fundamentals have not changed. If you need multiple public and private boards, custom domains, SSO, integrations and a mature roadmap plus changelog suite, start with Canny. If your board receives more requests than your team can triage and you want automatic duplicate grouping, AI categorisation and hand-off into engineering tools, start with Featurebase. If you are a small product team that wants a public board live today with one flat rate covering SSO, custom domain, roadmap, changelog and integrations, start with Nolt. Our rule of thumb: measure your monthly request volume first — below it, simplicity wins, and above it, automation wins.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Canny if you need a complete feedback suite that grows with the organization — multiple public boards, private boards for internal requests, custom domains, advanced roadmap and changelog features, AI categorisation, integrations, SSO and additional team seats — ideal for established product teams and SaaS companies. Choose Featurebase if request volume is your problem and you want duplicates grouped automatically, AI categorisation and summaries, and accepted ideas pushed into engineering tools and team chat — ideal for AI-forward SaaS teams whose board would otherwise decay. Choose Nolt if you want a deliberately narrow feedback board with quick setup and a single flat rate per board that already includes SSO, custom domain, roadmap, changelog and integrations — ideal for small product teams, indie SaaS founders and agencies. If your team needs both a public customer board and a private internal one, weigh Canny gated private boards against Nolt per-board pricing before committing.',
  },
}
