import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['metabase', 'looker', 'tableau'] as const

export const metabaseVsLookerVsTableau: ComparisonPageData = {
  slug: 'metabase-vs-looker-vs-tableau',
  title: 'Metabase vs Looker vs Tableau: Best Business Intelligence Platform in 2026?',
  description: 'Three business intelligence platforms aimed at three different budgets and buyers. We compare Metabase, Looker and Tableau on pricing, data modeling, self-service analytics, deployment, and real three-year cost to help you choose the right BI platform in 2026.',
  category: ['analytics', 'productivity'],
  date: 'October 29, 2026',
  readTime: '15 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Metabase, Looker and Tableau compare across pricing, data modeling, self-service analytics, and deployment — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Business Intelligence: How We Compared Metabase, Looker and Tableau',
    paragraphs: [
      'Business intelligence in 2026 spans a price range from zero to well over half a million dollars a year, and Metabase, Looker and Tableau sit at three points along it. Metabase is the open-source democratizer: a free self-hosted edition with unlimited users, a no-code question builder, a SQL editor and dashboards, built to take a team from zero to insights in minutes rather than quarters. Looker is the semantic-layer enterprise: a Google Cloud platform built on LookML, a modeling language that defines metrics once so every dashboard, explore and embedded view answers with the same number. Tableau is the visualization benchmark: the industry-leading drag-and-drop analytics platform sold by Salesforce, known for expressive charts, deep data connections and Tableau Prep for shaping messy data before analysis.',
      'Our testing methodology was identical across all three platforms. We connected each tool to the same Postgres warehouse plus a CSV extract — a mid-sized ecommerce dataset of orders, customers, marketing spend and product catalog, roughly 12 million rows — and asked the same five business questions: monthly revenue by channel, cohort retention by signup month, marketing return on ad spend, inventory turnover by category, and a churn-risk view for the executive dashboard. We measured time from install to first published dashboard, how long a non-analyst took to answer a new question unaided, how each platform handled a metric definition change, and a realistic three-year total cost of ownership including licenses, modeling time and infrastructure. We also interviewed analytics engineers and BI leads, and analyzed verified reviews on G2 and Capterra.',
      'The mental-model difference defines who succeeds on each platform. Metabase thinks in questions: a user picks a table, applies filters and groupings in a visual builder or drops into SQL, saves the result and pins it to a dashboard — there is no enforced semantic layer, which makes it fast to start and easy to end up with two dashboards that disagree. Looker thinks in a governed model: LookML defines dimensions, measures and relationships once, and the Explore interface lets anyone query that model without writing SQL, so consistency is structural rather than cultural. Tableau thinks in visual analysis: you drag fields onto a canvas and the software infers the visualization, which rewards analyst skill and produces the most expressive output of the three, but leaves metric definitions dependent on the workbook author.',
      'The audiences barely overlap. Metabase suits startups, small businesses and internal teams that need self-serve reporting without a BI budget or an analytics engineering function. Looker suits mid-market and enterprise organizations with an analytics engineering team, a data warehouse already in place, embedded analytics requirements and Google Cloud alignment. Tableau suits organizations with dedicated analysts and business users who live in dashboards, especially where visual exploration, complex blending and presentation-quality output matter more than a governed semantic layer. Mature organizations commonly run two in parallel: Looker or Tableau as the governed platform for finance and executive reporting, with Metabase deployed cheaply for internal teams that only need ad-hoc answers.',
      'Pricing is where the three separate most violently. Metabase is free and open-source for self-hosting with unlimited users, and Metabase Cloud runs Starter at $85 per month for 5 users, Pro at $200 per month for 10 users with advanced features, and Enterprise at custom pricing with SSO — all with unlimited questions and dashboards, priced by user count. Tableau uses per-seat licensing with three distinct roles: Creator at $75 per user per month for full analytics capabilities, Explorer at $42 per user per month for interacting with curated content, and Viewer at $15 per user per month for consuming dashboards, deployed on managed Tableau Cloud or self-hosted Tableau Server, with Tableau Public free for open data sharing. Looker has no published list price at all — enterprise custom pricing requiring a sales engagement, priced by users, data volume and deployment scope, with typical implementations ranging from $50,000 to over $500,000 annually.',
      'The sharpest functional divergence is where metric definitions live. In Metabase a metric is whatever someone saved in a question or a SQL snippet — fast to create, easy to duplicate, and hard to govern once fifty dashboards reference slightly different revenue logic. In Tableau, definitions live inside workbooks and calculated fields built by Creators, so quality depends heavily on analyst discipline and on how workbooks are published and reused. In Looker, definitions live in LookML, version-controlled and deployed like code, which means one change to a revenue measure propagates everywhere consistently — and it also means every metric change requires an analytics engineer. That trade-off, governance versus speed, is the real decision in this comparison.',
      'So where does each platform genuinely shine? Metabase is the strongest choice for teams that need working dashboards this week at minimal cost — the open-source edition is free with unlimited users, and Metabase Cloud Starter at $85 per month for 5 users is the cheapest managed entry point here. Looker is the strongest choice for enterprises that need one governed definition of every metric, embedded analytics inside their own product and deep Google Cloud integration, and that can fund both the license and an analytics engineering team. Tableau is the strongest choice for organizations where visual analysis, data blending and presentation-quality dashboards drive decisions, and where role-based licensing gives Creators full power while Viewers pay $15 per user per month. Our rule of thumb: buy the governance level your organization can actually staff.',
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
          [comparisonTools[0]]: 'Open-source BI for everyone: a no-code question builder, SQL editor and dashboards with fast setup.',
          [comparisonTools[1]]: 'Governed semantic layer: LookML defines metrics once so every explore and dashboard agrees.',
          [comparisonTools[2]]: 'Visual analytics first: drag-and-drop exploration producing the most expressive charts of the three.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Startups, small businesses and internal teams without a BI budget or analytics engineering function.',
          [comparisonTools[1]]: 'Mid-market and enterprise organizations with analytics engineers, a warehouse and embedded analytics needs.',
          [comparisonTools[2]]: 'Enterprises and analyst-led teams where visual exploration and presentation dashboards drive decisions.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Fastest from zero to insights — a non-technical teammate can build a useful question unaided.',
          [comparisonTools[1]]: 'Easy to query, hard to build: Explores are simple, but LookML demands engineering skill.',
          [comparisonTools[2]]: 'Intuitive for analysts; the drag-and-drop canvas has real depth, so beginners need onboarding.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Cloud Starter $85/mo for 5 users; Pro $200/mo for 10 users; Enterprise custom with SSO.',
          [comparisonTools[1]]: 'No published list price — enterprise custom pricing, typically $50K to $500K+ annually.',
          [comparisonTools[2]]: 'Creator $75/user/mo; Explorer $42/user/mo; Viewer $15/user/mo for dashboard consumers.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Best value here — the open-source edition is completely free self-hosted with unlimited users.',
          [comparisonTools[1]]: 'No free tier; Looker requires a sales engagement before any pricing is disclosed.',
          [comparisonTools[2]]: 'Tableau Public is free but publishes data openly, so it is unusable for business data.',
        },
      },
      {
        feature: 'Semantic layer',
        icon: 'layers',
        values: {
          [comparisonTools[0]]: 'None enforced — metrics live inside saved questions and SQL snippets rather than a model.',
          [comparisonTools[1]]: 'Core strength: LookML is a version-controlled semantic layer defining dimensions, measures and relationships.',
          [comparisonTools[2]]: 'Data model and calculated fields live in workbooks; governance depends on analyst discipline.',
        },
      },
      {
        feature: 'No-code query builder',
        icon: 'blocks',
        values: {
          [comparisonTools[0]]: 'A visual question builder lets anyone filter, group and aggregate without touching SQL.',
          [comparisonTools[1]]: 'The Explore interface gives business users governed self-service querying over the LookML model.',
          [comparisonTools[2]]: 'The drag-and-drop canvas is the most powerful visual query surface of the three.',
        },
      },
      {
        feature: 'SQL editor',
        icon: 'code',
        values: {
          [comparisonTools[0]]: 'First-class native SQL editor with variables, saved snippets and dashboard parameters.',
          [comparisonTools[1]]: 'SQL is available through derived tables and the SQL Runner, but LookML stays primary.',
          [comparisonTools[2]]: 'Custom SQL supported per data source; most analysis happens visually rather than in SQL.',
        },
      },
      {
        feature: 'Visualization quality',
        icon: 'palette',
        values: {
          [comparisonTools[0]]: 'Clean, restrained charts that are quick to build but limited in expressive range.',
          [comparisonTools[1]]: 'Functional and consistent visualizations that prioritize governed correctness over visual polish.',
          [comparisonTools[2]]: 'Industry benchmark — the richest chart types, formatting control and presentation-quality output.',
        },
      },
      {
        feature: 'Data preparation',
        icon: 'wrench',
        values: {
          [comparisonTools[0]]: 'Light preparation; Metabase expects a reasonably clean warehouse and does not replace ETL.',
          [comparisonTools[1]]: 'Transformations live in LookML and persistent derived tables rather than a visual prep tool.',
          [comparisonTools[2]]: 'Tableau Prep is a dedicated visual tool for shaping, joining and cleaning messy data.',
        },
      },
      {
        feature: 'Data sources and connectors',
        icon: 'plug',
        values: {
          [comparisonTools[0]]: 'Broad database support including Postgres, MySQL and modern warehouses, plus CSV and sample data.',
          [comparisonTools[1]]: 'Wide connector list optimized for cloud warehouses and the Google Cloud Platform ecosystem.',
          [comparisonTools[2]]: 'Extensive native connectors across files, databases, cloud warehouses and Salesforce-owned sources.',
        },
      },
      {
        feature: 'Dashboards and sharing',
        icon: 'presentation',
        values: {
          [comparisonTools[0]]: 'Dashboards with unlimited questions, scheduled email and Slack delivery, and simple permissions.',
          [comparisonTools[1]]: 'Dashboards and Looks with granular permissions, scheduling and delivery built for enterprise governance.',
          [comparisonTools[2]]: 'Polished interactive dashboards published to Tableau Cloud or Server with role-based access.',
        },
      },
      {
        feature: 'Embedded analytics',
        icon: 'code-xml',
        values: {
          [comparisonTools[0]]: 'Embedding available on paid plans for putting questions and dashboards inside your product.',
          [comparisonTools[1]]: 'A core selling point — embedded analytics with the same governed LookML model behind it.',
          [comparisonTools[2]]: 'Embedding supported through Tableau Cloud and Server APIs, aimed at internal and partner portals.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Lightweight AI assistance for question building, without an enterprise-grade predictive analytics suite.',
          [comparisonTools[1]]: 'AI and machine-learning features delivered through the Google Cloud ecosystem rather than standalone.',
          [comparisonTools[2]]: 'Tableau Pulse and AI-driven explain-the-change insights surface anomalies inside dashboards.',
        },
      },
      {
        feature: 'Deployment options',
        icon: 'server',
        values: {
          [comparisonTools[0]]: 'Self-host the open-source edition free, or use managed Metabase Cloud from $85/month.',
          [comparisonTools[1]]: 'Hosted Google Cloud service; deployment scope is negotiated rather than picked from a menu.',
          [comparisonTools[2]]: 'Managed Tableau Cloud or self-hosted Tableau Server — the broadest deployment choice here.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Database connectors, Slack and email delivery, plus an API for embedding and automation.',
          [comparisonTools[1]]: 'Deepest enterprise integration set, aligned with Google Cloud Platform, BigQuery and embedded use cases.',
          [comparisonTools[2]]: 'Large connector and partner ecosystem, with tight Salesforce integration following the acquisition.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Teams needing useful self-serve dashboards fast, at minimal or zero license cost.',
          [comparisonTools[1]]: 'Enterprises needing one governed metric definition across every dashboard, explore and embedded view.',
          [comparisonTools[2]]: 'Organizations where analysts drive visual exploration and executives consume rich dashboards.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'The open-source edition is completely free self-hosted with unlimited users — no BI license cost at all',
        'Metabase Cloud Starter at $85/month for 5 users is the cheapest managed entry point in this comparison',
        'Unlimited questions and dashboards on every plan, so adoption is never throttled by usage caps',
        'A no-code question builder that genuinely works for non-technical teammates, with a full SQL editor beside it',
        'Fastest setup of the three — a first useful dashboard is achievable the same day',
        'Simple permissions plus scheduled Slack and email delivery cover most internal reporting needs',
      ],
      cons: [
        'No enforced semantic layer, so two dashboards can report different revenue without anyone being warned',
        'Visualization range and formatting control fall well short of Tableau for executive presentations',
        'Cloud pricing climbs steeply by user count — Pro costs $200/month for only 10 users',
        'Little data preparation capability; Metabase assumes your warehouse already delivers clean tables',
        'Self-hosting means you own upgrades, backups, performance tuning and the underlying infrastructure',
        'SSO and enterprise governance features are locked behind custom-priced Enterprise plans',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'LookML provides a version-controlled semantic layer, so one metric definition powers every dashboard and explore',
        'Governed self-service: business users query freely while analytics engineers control what the numbers mean',
        'Embedded analytics is a core strength, letting products expose governed metrics to their own customers',
        'Deep alignment with Google Cloud Platform and BigQuery across storage, compute and identity',
        'Handles complex multi-source modeling that Metabase and Tableau workbooks struggle to express cleanly',
        'Enterprise support, granular permissions and auditability built for regulated organizations',
      ],
      cons: [
        'No published pricing — every evaluation begins with a sales engagement and a custom quote',
        'Typical implementations run $50,000 to over $500,000 annually, excluding most small and mid-sized teams',
        'Requires analytics engineers; without them LookML becomes a bottleneck rather than an accelerator',
        'Slowest of the three from kickoff to first dashboard, because the model must be built first',
        'Visualizations prioritize consistency over polish and are less expressive than Tableau output',
        'Metric changes need a LookML pull request and deployment, which feels heavy for ad-hoc questions',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Industry benchmark for visualization quality — the richest chart types, formatting control and presentation output',
        'Role-based licensing keeps costs controllable, with Viewer seats at $15/user/month for dashboard consumers',
        'Tableau Prep adds a dedicated visual tool for shaping, joining and cleaning messy source data',
        'Extensive native connectors across files, databases, cloud warehouses and the Salesforce ecosystem',
        'Both managed Tableau Cloud and self-hosted Tableau Server — the broadest deployment choice of the three',
        'A large analyst community, training material and template ecosystem reduce onboarding friction',
      ],
      cons: [
        'Creator licenses at $75/user/month add up fast — a 20-analyst team costs $1,500/month',
        'No free tier for business use; Tableau Public publishes data openly and is unusable for real data',
        'Metric definitions live in workbooks and calculated fields, so governance depends on analyst discipline',
        'Self-service for non-analysts is weaker than Metabase; Explorer and Viewer seats cannot author freely',
        'Total cost of ownership is understated by license price alone — modeling and maintenance take real hours',
        'Large extracts and complex blends often need tuning, aggregation or a faster warehouse to perform well',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After connecting all three platforms to the same warehouse and asking the same five business questions, our conclusion is that there is no universal winner — there is a correct choice for each organization shape and budget. Metabase reached a published dashboard fastest by a wide margin, and it cost nothing to run on our own infrastructure. Looker produced the most trustworthy numbers, because a single LookML definition of revenue could not drift between dashboards. Tableau produced the most persuasive visual analysis, and it was the platform our non-analyst testers actually enjoyed using once someone had published a workbook for them.',
      'Where Metabase deserves praise is accessibility and cost: the open-source edition is free to self-host with unlimited users, Metabase Cloud Starter runs $85 per month for 5 users and Pro $200 per month for 10 users, and every plan includes unlimited questions and dashboards. Our non-technical testers answered a new question unaided in minutes. Where it draws criticism is governance and expressive range — with no enforced semantic layer, two saved questions can define revenue differently and nobody is warned, and the charting cannot match Tableau for a board presentation. Teams that outgrow Metabase usually leave for Looker when metric consistency becomes a real problem, or for Tableau when visual depth does.',
      'Where Looker deserves praise is the semantic layer: defining dimensions, measures and relationships once in version-controlled LookML means every explore, dashboard and embedded view answers with the same number, which is genuinely valuable at enterprise scale and for customer-facing embedded analytics inside Google Cloud Platform. Where it draws criticism is cost and staffing — there is no published price, typical implementations run $50,000 to over $500,000 annually, and Looker without analytics engineers becomes a bottleneck rather than an accelerator. Time to first dashboard was the longest of the three by a significant margin. Smaller teams that need governed metrics on a budget routinely choose Metabase and accept the discipline cost instead.',
      'Where Tableau deserves praise is visual analysis: the drag-and-drop canvas, the chart range, Tableau Prep for shaping messy data and the depth of native connectors make it the platform where an analyst can answer a question nobody anticipated. Role-based licensing is also unusually sensible — Creator at $75 per user per month, Explorer at $42 and Viewer at $15 means a company can give full power to a small analyst team and cheap dashboard access to everyone else. Where it draws criticism is governance and self-service: metric definitions live inside workbooks and calculated fields, so quality depends entirely on analyst discipline, and Explorer or Viewer seats cannot author freely.',
      'The 2026 trend in business intelligence is the semantic-layer arms race combined with AI querying. Every vendor now sells governed metric definitions and natural-language questions, so the historical split between Tableau\'s visual freedom, Looker\'s modeling rigor and Metabase\'s simplicity is narrowing. The second trend is the two-tier stack: a governed enterprise platform for finance, executive and customer-facing reporting, with a cheap or free tool such as Metabase deployed for internal ad-hoc questions. That avoids paying Creator or enterprise licenses to people who only need to run an occasional query, and it was the pattern we saw most often in the organizations we interviewed.',
      'Looking ahead, expect AI-assisted querying to become table stakes and the durable differentiator to be the quality of the semantic layer, because a natural-language question is only as trustworthy as the metric definitions behind it. The fundamentals are unchanged. If you need useful dashboards this week at minimal or zero license cost, start with Metabase. If you need one governed definition of every metric across dashboards, explores and embedded analytics, and you can fund an analytics engineering team, start with Looker. If you need the deepest visual analysis, serious data preparation and role-based licensing for a large organization, start with Tableau. Our rule of thumb: buy the governance level your organization can actually staff, and do not pay enterprise prices for a problem a free tool already solves.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Metabase if you need working dashboards quickly at minimal cost — ideal for startups, small businesses and internal teams without an analytics engineering function, where the open-source edition is free to self-host with unlimited users and Metabase Cloud runs from Starter at $85 per month for 5 users to Pro at $200 per month for 10 users, with unlimited questions and dashboards on every plan. Choose Looker if metric consistency and governance matter more than speed — ideal for mid-market and enterprise organizations with analytics engineers, a cloud warehouse and embedded analytics requirements, where LookML defines every metric once and typical implementations run $50,000 to over $500,000 annually under custom pricing. Choose Tableau if visual analysis drives your decisions — ideal for enterprises and analyst-led teams that need the deepest charting, Tableau Prep for data shaping, and role-based licensing with Creator at $75 per user per month, Explorer at $42 and Viewer at $15, deployed on Tableau Cloud or self-hosted Tableau Server. If your organization spans governed executive reporting and cheap internal ad-hoc queries, the mature answer is two tools in parallel: Looker or Tableau as the governed platform plus Metabase for internal self-service.',
  },
}
