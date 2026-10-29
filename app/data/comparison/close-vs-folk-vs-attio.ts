import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['close', 'folk', 'attio'] as const

export const closeVsFolkVsAttio: ComparisonPageData = {
  slug: 'close-vs-folk-vs-attio',
  title: 'Close vs folk vs Attio: Best Sales CRM in 2026?',
  description: 'Three very different takes on the modern sales CRM: built-in communication, relationship-first simplicity, and a flexible data model. We compare Close, folk and Attio on pricing, outreach tooling, customization, automation, and integrations to help you choose in 2026.',
  category: ['crm', 'sales'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Close, folk and Attio compare across pricing, communication tooling, data model flexibility, and target audience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Sales CRM: How We Compared Close, folk and Attio',
    paragraphs: [
      'Choosing a sales CRM in 2026 is less about feature count and more about which philosophy matches how your revenue team actually works. Close is the communication-first choice: calling, email, SMS and a power dialer live inside the record, so high-velocity teams never leave the CRM to touch a prospect. folk is the relationship-first choice: a deliberately lightweight CRM built around people rather than records, with contacts enriched automatically from email and LinkedIn and simple drag-and-drop pipelines that founders, recruiters and agencies can run without an administrator. Attio is the data-model-first choice: custom objects and relationships replace fixed contact and opportunity records, so one workspace can model sales, support, partnerships and fundraising on data the team controls.',
      'Our testing methodology was hands-on and identical across all three platforms. We built the same scenario — a nine-person B2B team running outbound prospecting, an inbound demo pipeline and a partner tracker — on Close, folk and Attio, then measured real task times: importing and enriching 500 contacts, building a pipeline, logging a call, sending a five-step sequence and producing a weekly report. We calculated a three-year total cost of ownership covering seats, enrichment credits and any separate telephony tool a platform forced us to buy, and interviewed two sales leaders per platform while analyzing verified reviews on G2 and Capterra.',
      'The most visible difference is the mental model each CRM imposes. Close thinks in activities: a lead is a person you call, email and text, and the record is organised around that conversation history, with Smart Views filtering what needs attention next. folk thinks in relationships: a contact is a person you know, enriched from their email signature and LinkedIn profile, and the pipeline is a light drag-and-drop board layered on top. Attio thinks in objects: people, companies, deals, tickets, partners and anything else your business defines become first-class records connected by relationships you design, with pipelines and reports derived from that structure. Close and folk are usable the day you sign up, while Attio rewards the teams that invest in designing the model first.',
      'The intended audience differs sharply as well. Close targets inside sales, SDR and high-velocity outbound teams whose reps spend most of the day dialing, where a native power dialer and call recording remove an entire vendor from the stack. folk targets founders, recruiters, talent agencies, consultants and small sales teams that find enterprise CRMs too heavy and will abandon any tool that demands administration. Attio targets product-led and data-driven teams — sales, support, partnerships and fundraising sharing one system of record — that want custom fields, custom objects and reporting they build themselves. Mature revenue organizations often run two tools in parallel: Attio as the system of record with a dedicated outreach or telephony tool on top, or folk for relationship work while Close handles call volume.',
      'Pricing reveals three different business models rather than three price points. Close uses user-based subscription pricing with a free trial, and the structural difference is that communication features — calling, email and SMS — are included in all plans instead of sold as an add-on module. folk is billed per user per month or per year, with tiers that add enrichment credits, email volume, automation, analytics, integrations and administrative controls, so heavy outreach users climb tiers faster than their seat count suggests. Attio is the only one of the three with a genuine free plan, covering small teams with core CRM features and email sync, while paid plans add enrichment credits, automations, reporting, higher API limits, security controls and support, with Enterprise quoted individually. Because none of the three publishes a stable figure, we compared cost shape: bundled communication, rationed credits, or a free entry point.',
      'Built-in communication is where these three platforms diverge most sharply. Close is the only one with native VoIP calling, a power dialer, call recording and SMS sitting directly inside the CRM, which is why high-velocity outbound teams choose it even when a competitor has better reporting. folk and Attio both sync email and calendar and leave phone work to a separate tool, which keeps each product simpler but adds a second subscription and a second place where conversation history can go missing. On the data side the divergence reverses: Attio can represent any object your business cares about, folk stays deliberately contact-centric, and Close keeps a fixed lead and opportunity structure. If your team measures success in dials per rep per day, that gap decides the purchase on its own.',
      'So where does each platform genuinely shine? Close is the strongest choice for inside sales and outbound teams that want calling, SMS and email sequences inside the CRM with no third-party dialer to buy or sync. folk is the strongest choice for founders, recruiters and agencies that need a fast, low-maintenance relationship CRM with automatic enrichment and campaigns in the same workspace. Attio is the strongest choice for teams that want to design their own objects, relationships and reports, start free, and scale into enterprise security controls without replatforming. Our rule of thumb: buy for the way your team sells today — phone volume, relationships, or data structure — not for the org chart you hope to have in three years.',
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
          [comparisonTools[0]]: 'Communication-first CRM — calling, email and SMS are native parts of the sales record.',
          [comparisonTools[1]]: 'Relationship-first CRM — lightweight pipelines built around people, enriched from email and LinkedIn.',
          [comparisonTools[2]]: 'Data-model-first CRM — custom objects and relationships replace fixed contact and opportunity records.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'High-velocity outbound, inside sales and SDR teams that live on the phone all day.',
          [comparisonTools[1]]: 'Founders, recruiters, agencies and small sales teams that find enterprise CRMs too heavy.',
          [comparisonTools[2]]: 'Sales, support, partnerships and fundraising teams that want to design their own data model.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Familiar CRM layout with calling built in — reps are productive within a day.',
          [comparisonTools[1]]: 'Easiest of the three to adopt — drag-and-drop pipelines need almost no configuration.',
          [comparisonTools[2]]: 'Powerful but conceptual — objects, relationships and views require deliberate design before rollout.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'User-based subscription with calling, email and SMS included in every tier — free trial available.',
          [comparisonTools[1]]: 'Per user per month or year — higher tiers add enrichment credits, email volume and automation.',
          [comparisonTools[2]]: 'Per user per month or year — higher tiers add enrichment credits, automations, reporting and API limits.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'No permanent free plan — evaluation happens through the free trial of the paid tiers.',
          [comparisonTools[1]]: 'No permanent free plan — a free trial is offered on the paid subscription.',
          [comparisonTools[2]]: 'Genuine free plan for small teams with core CRM features and email sync included.',
        },
      },
      {
        feature: 'Built-in calling and SMS',
        icon: 'phone',
        values: {
          [comparisonTools[0]]: 'Native VoIP calling, power dialer, call recording and SMS sit directly inside the CRM.',
          [comparisonTools[1]]: 'No native dialer — phone work depends on integrations and external telephony providers.',
          [comparisonTools[2]]: 'No native calling — teams pair Attio with a separate phone or meeting tool.',
        },
      },
      {
        feature: 'Email sequences and campaigns',
        icon: 'send',
        values: {
          [comparisonTools[0]]: 'Email sequences, templates and follow-ups run natively alongside calls and SMS in one workflow.',
          [comparisonTools[1]]: 'Email campaigns sent from the same workspace as the pipeline — simple, direct outreach.',
          [comparisonTools[2]]: 'Email sync from the free plan — sequences and automations expand on paid tiers.',
        },
      },
      {
        feature: 'Data model and customization',
        icon: 'database',
        values: {
          [comparisonTools[0]]: 'Fixed lead and opportunity structure, with Smart Views for saved filtering.',
          [comparisonTools[1]]: 'Flexible pipelines and fields, but the underlying model stays deliberately contact-centric.',
          [comparisonTools[2]]: 'Fully custom objects, relationships and views — the strongest data model of the three.',
        },
      },
      {
        feature: 'Contact enrichment',
        icon: 'user-plus',
        values: {
          [comparisonTools[0]]: 'Enrichment arrives through integrations and data providers rather than as a native core feature.',
          [comparisonTools[1]]: 'Automatic enrichment from email signatures and LinkedIn profiles — a headline differentiator for folk.',
          [comparisonTools[2]]: 'Automatic record enrichment on paid plans, metered through included enrichment credits.',
        },
      },
      {
        feature: 'Pipeline management',
        icon: 'kanban',
        values: {
          [comparisonTools[0]]: 'Visual pipelines with Smart Views that filter leads by status, owner and recent activity.',
          [comparisonTools[1]]: 'Simple drag-and-drop pipeline boards — quick to set up, deliberately limited in depth.',
          [comparisonTools[2]]: 'Custom-designed pipelines with several views per object, all reporting on the same data.',
        },
      },
      {
        feature: 'Automations and workflows',
        icon: 'workflow',
        values: {
          [comparisonTools[0]]: 'Automation rules for calls, emails and lead routing included across the paid plans.',
          [comparisonTools[1]]: 'Automation and sync features arrive on higher tiers rather than the entry plan.',
          [comparisonTools[2]]: 'Automations expand on paid tiers — the free plan focuses on core CRM records.',
        },
      },
      {
        feature: 'Reporting and analytics',
        icon: 'chart-column',
        values: {
          [comparisonTools[0]]: 'Sales reporting and activity dashboards built around communication metrics and rep performance.',
          [comparisonTools[1]]: 'Analytics arrive on higher tiers — the entry plan keeps reporting intentionally light.',
          [comparisonTools[2]]: 'Custom reports built directly on your own objects — the most flexible analytics here.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'AI assistance for call summaries and email drafting layered onto the communication stack.',
          [comparisonTools[1]]: 'AI applied mainly to enrichment and record hygiene rather than a full sales assistant.',
          [comparisonTools[2]]: 'AI layered on top of data the team controls — a core positioning claim for Attio.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Integrations exist, but the strategy keeps calling, email and SMS native instead.',
          [comparisonTools[1]]: 'Integrations and administrative controls unlock on higher tiers, alongside two-way sync.',
          [comparisonTools[2]]: 'API access with plan-based rate limits, plus integrations that widen on paid tiers.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Inside sales teams that want calling, SMS and email sequences inside the CRM itself.',
          [comparisonTools[1]]: 'Small teams and founders who need a fast, low-maintenance relationship CRM.',
          [comparisonTools[2]]: 'Teams that want to model their own data and grow into custom reporting.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Calling, SMS and email are native — no third-party dialer to buy, sync or maintain',
        'Power dialer and call recording suit teams making dozens of outbound calls a day',
        'Communication features are included in every plan instead of sold as an add-on module',
        'Smart Views give reps a filtered working list without building a custom report',
        'Email sequences sit next to call history, so follow-up context is never split',
      ],
      cons: [
        'No permanent free plan — evaluation depends entirely on the free trial',
        'The fixed lead and opportunity model cannot be reshaped the way Attio objects can',
        'User-based pricing rises with every seat while communication stays bundled whether you use it or not',
        'Reporting and analytics are narrower than what a custom-data CRM can produce',
        'The interface is built around outreach volume, which feels heavy for relationship-led selling',
        'Teams that rarely call still pay for a dialer and SMS capability they never touch',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Fastest to adopt of the three — a usable, enriched pipeline exists within an afternoon',
        'Automatic enrichment from email and LinkedIn keeps contact records clean without manual entry',
        'Email campaigns run from the same workspace as the pipeline, avoiding a second tool',
        'Light enough for founders, recruiters and agencies with no CRM administrator on staff',
        'Drag-and-drop boards keep the mental model simple for people who are not in sales',
      ],
      cons: [
        'No permanent free plan — only a trial, unlike the Attio free tier',
        'No native calling or SMS, so phone-heavy teams still need a separate dialer',
        'Enrichment credits and email volume are rationed by tier, which caps heavy outreach use',
        'Analytics and automation arrive only on higher tiers, pushing real usage upmarket',
        'The contact-centric data model gets awkward once you need custom objects or linked records',
        'Reporting depth is limited next to reports built on a custom Attio object model',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'A genuine free plan for small teams, including email sync — the only one of the three',
        'Custom objects and relationships model sales, support, partnerships and fundraising in one place',
        'Reports are built directly on your own data model instead of preset dashboards',
        'Automatic enrichment keeps records populated without a separate data subscription',
        'AI features sit on top of data the team controls rather than an opaque black box',
        'Scales from a small startup to enterprise security controls without a replatforming project',
      ],
      cons: [
        'No native calling, SMS or dialer — phone-driven teams must buy a second tool',
        'The object model demands design work before rollout, which slows first-time adopters',
        'Enrichment credits, automations, API limits and reporting all gate behind paid tiers',
        'Enterprise is quote-based, so total cost stays opaque until you talk to sales',
        'More configuration freedom means more ways to build a CRM nobody can maintain',
        'Communication is not the core, so outbound teams get less out of the box than on Close',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing, our conclusion is that there is no universal winner among Close, folk and Attio — but there is a clearly correct choice for each revenue team shape. Close delivered the strongest communication experience: because calling, SMS and email sequences live inside the record, our test reps never context-switched to a dialer and call history sat next to the pipeline stage that depended on it. folk delivered the fastest time to value: a working pipeline with automatically enriched contacts existed within an afternoon and stayed updated without nagging. Attio delivered the strongest data experience: custom objects let one workspace model sales, support and partner tracking without a second system or a spreadsheet glued to the side.',
      'Where Close deserves praise is communication depth: native VoIP calling, a power dialer, call recording and SMS are included in every plan, which removes an entire vendor from a high-velocity team\'s stack, and Smart Views keep reps working from a filtered list instead of a report. Where it draws criticism is rigidity — the lead and opportunity model cannot be reshaped, there is no permanent free plan, and teams that sell through relationships rather than call volume keep paying for a dialer they rarely touch. Startups comparing entry cost drift toward the Attio free plan, while relationship-led teams evaluate folk first.',
      'Where folk deserves praise is speed and simplicity: enrichment from email and LinkedIn keeps records clean automatically, drag-and-drop pipelines need no administrator, and email campaigns run from the same workspace as the pipeline, which makes it the CRM a founder will actually keep up to date. Where it draws criticism is the ceiling — no native calling, analytics and automation gated behind higher tiers, enrichment credits and email volume rationed by plan, and a contact-centric model that gets awkward once you need custom objects or linked records. Teams that outgrow folk usually land on Attio, while teams that discover they live on the phone move to Close.',
      'Where Attio deserves praise is the data model: custom objects, relationships and reports built on your own structure make it usable for sales, support, partnerships and fundraising at once, and it is the only platform here with a free plan small teams can genuinely run on. Where it draws criticism is the setup burden — objects and views must be designed before rollout, enrichment credits, automations, API limits and reporting all gate behind paid tiers, Enterprise is quote-based, and there is no dialer or SMS. Teams that need volume calling either pair Attio with a telephony tool or consolidate onto Close.',
      'The biggest trend in 2026 is AI layered on top of CRM data you control, and the three platforms approach it from different directions. Attio positions AI as a consumer of its custom object model, so answers reflect your own fields rather than a generic schema. Close applies AI to the communication layer, where call summaries and drafted replies have immediate value for reps on the phone all day. folk concentrates AI on enrichment and record hygiene. Alongside this, two-tool stacks are increasingly normal: Attio as the system of record with a dedicated outreach or telephony tool bolted on, or folk for relationship management while Close handles outbound call volume.',
      'Looking ahead, expect enrichment credits and AI usage to matter more than seat count when you compare real three-year cost, because all three platforms ration those resources by tier. The fundamentals have not changed. If your team lives on the phone and needs calling, SMS and sequences inside the CRM, start with Close. If you are a founder, recruiter or agency that needs a fast, low-maintenance relationship CRM with automatic enrichment, start with folk. If you want to design your own objects, report on them, and grow from a free plan into enterprise controls, start with Attio. Our rule of thumb: buy for the way your team sells today, and only run two tools in parallel when the data model and the phone volume genuinely demand it.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Close if your revenue team lives on the phone and you want native VoIP calling, a power dialer, call recording, SMS and email sequences inside the CRM — ideal for high-velocity outbound, inside sales and SDR teams that would otherwise buy a separate dialer. Choose folk if you need a lightweight relationship CRM that a founder, recruiter or agency can run without an administrator, with contacts enriched automatically from email and LinkedIn and campaigns sent from the same workspace — ideal for small sales teams, talent agencies and early-stage companies that find enterprise CRMs too heavy. Choose Attio if you want to design your own objects, relationships and reports and start on a genuine free plan — ideal for product-led sales, support, partnerships and fundraising teams sharing one data model. If your team spans both phone-heavy outbound and custom data modeling, the mature answer is Attio as the system of record with Close handling call volume.',
  },
}
