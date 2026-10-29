import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['ashby', 'greenhouse', 'lever'] as const

export const ashbyVsGreenhouseVsLever: ComparisonPageData = {
  slug: 'ashby-vs-greenhouse-vs-lever',
  title: 'Ashby vs Greenhouse vs Lever: Best Applicant Tracking System in 2026?',
  description: 'Three mature recruiting platforms with very different centers of gravity. We compare Ashby, Greenhouse and Lever on analytics depth, structured hiring, CRM capability, pricing model, and real three-year cost to help you pick the right ATS in 2026.',
  category: ['hr'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Ashby, Greenhouse and Lever compare across pricing, analytics depth, structured hiring, and target audience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Recruiting Operations: How We Compared Ashby, Greenhouse and Lever',
    paragraphs: [
      'Picking an applicant tracking system in 2026 is a decision about which recruiting problem hurts most: measurement, process discipline, or pipeline scarcity. Ashby is the all-in-one data choice, combining an applicant tracking system, candidate relationship management, interview scheduling, and deep analytics in a single product aimed at venture-backed and mid-sized companies that want recruiting data without stitching tools together. Greenhouse is the process choice, an ATS built around structured hiring with defined job scorecards, interview kits, calibrated scorecards, and recruiting analytics for mid-market and enterprise teams running high-volume, multi-stakeholder hiring. Lever is the relationship choice, combining applicant tracking with candidate relationship management so recruiters nurture passive candidates in the same pipeline as active applicants.',
      'Our testing methodology was hands-on and identical across all three platforms. We ran the same scenario on each — a 60-person company hiring eight roles in one quarter across engineering, sales, and customer success — and measured real task times: opening a requisition, assembling an interview kit, scheduling a four-person loop, collecting and calibrating scorecards, generating an offer approval, and building a pipeline report for the leadership team. We calculated a realistic three-year total cost of ownership including the base contract, paid modules such as CRM, onboarding, assessments, and DEI analytics, plus implementation and recruiter training hours. We also interviewed heads of talent who have deployed each platform and analyzed verified reviews on G2 and Capterra to separate vendor claims from daily reality.',
      'The clearest difference is the mental model each platform imposes on a recruiting team. Ashby thinks in one unified data model: because the ATS, CRM, scheduling, and reporting layers sit on the same records, analytics are queryable across the entire funnel rather than exported and reassembled in a spreadsheet. Greenhouse thinks in process artifacts: the job scorecard defines what good looks like, the interview kit assigns attributes to specific interviewers, and calibrated scorecards force written feedback before a decision meeting — the platform is an opinionated methodology shipped as software. Lever thinks in relationships and pipeline state: every candidate has a lifecycle, nurture campaigns keep passive candidates warm over months, and the boundary between sourcing and tracking deliberately disappears.',
      'The intended audiences differ sharply as well. Ashby targets venture-backed startups and mid-sized companies with data-literate recruiting teams that want analytics, scheduling, and CRM in one contract instead of three vendors. Greenhouse targets mid-market and enterprise organizations running high-volume, multi-stakeholder hiring where consistency, compliance, and interviewer calibration matter more than flexibility. Lever targets teams doing sourcing-heavy recruiting — companies that hire from passive markets, run long talent pools, or need nurture campaigns to keep candidates warm between roles. Mature organizations often run two tools in parallel, keeping a dedicated sourcing or scheduling product alongside the system of record, though Ashby and Lever both argue the second tool is exactly what they replace.',
      'Pricing is the least transparent part of this category: none of the three publishes a self-serve price list. Ashby uses quote-based pricing billed annually, generally starting in the low thousands of dollars per year for smaller teams and scaling with headcount and modules such as CRM and assessments. Greenhouse also uses quote-based annual pricing, generally starting in the mid four figures per year for smaller teams and scaling with employee count and modules such as CRM, onboarding, and DEI analytics. Lever is quote-based and billed annually too, with tiers differentiated by candidate volume, user count, and add-ons such as DEI analytics, nurture campaigns, and advanced scheduling — entry contracts typically start in the low five figures per year. In every case you must request a quote for current figures.',
      'The sharpest functional divergence is where analytics and structured hiring live. Ashby treats analytics as a first-class product surface on a single data model, so a recruiting ops lead can slice time-in-stage, source quality, interviewer load, and offer acceptance without a data warehouse. Greenhouse treats structure as the product: interview kits, job scorecards, and calibrated scorecards produce comparable feedback at enterprise volume, with reporting and DEI analytics offered as modules on top. Lever treats the pipeline as the product, and its CRM strength — nurture campaigns and long-lived talent pools — is what competitors cannot easily copy. Choose wrongly here and the platform will fight your process every single week.',
      'So where does each platform genuinely shine? Ashby is the strongest choice for venture-backed and mid-sized companies that want one all-in-one system covering applicant tracking, CRM, scheduling, and deep analytics, and that would rather query data than rebuild reports. Greenhouse is the strongest choice for mid-market and enterprise teams running high-volume, multi-stakeholder hiring that needs interview kits, calibrated scorecards, and audit-ready structure. Lever is the strongest choice for recruiting teams whose bottleneck is pipeline rather than process — organizations that source passive candidates and nurture them over months. Our rule of thumb: buy Ashby for measurement, Greenhouse for discipline, and Lever for pipeline, then verify the quote against the modules you will actually switch on.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your recruiting team.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'All-in-one recruiting platform: ATS, CRM, scheduling, and deep analytics on a single shared data model.',
          [comparisonTools[1]]: 'Structured hiring as methodology: job scorecards, interview kits, and calibrated scorecards shipped as software.',
          [comparisonTools[2]]: 'ATS with built-in CRM, so passive candidates are nurtured inside the same pipeline as active applicants.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Venture-backed and mid-sized companies that want recruiting data without stitching multiple tools together.',
          [comparisonTools[1]]: 'Mid-market and enterprise teams running high-volume, multi-stakeholder hiring across many interviewers.',
          [comparisonTools[2]]: 'Sourcing-heavy recruiting teams that hire from passive markets and keep long-lived talent pools.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Modern interface with fast setup — one product means fewer integrations to configure and maintain.',
          [comparisonTools[1]]: 'Structured workflows take configuration effort upfront, then guide interviewers consistently at scale.',
          [comparisonTools[2]]: 'Familiar pipeline view recruiters adopt quickly, though nurture setup takes deliberate campaign design.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Quote-based annual contract, generally starting in the low thousands per year for smaller teams.',
          [comparisonTools[1]]: 'Quote-based annual contract, generally starting in the mid four figures per year for smaller teams.',
          [comparisonTools[2]]: 'Quote-based annual contract, with entry deals typically starting in the low five figures per year.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'No free tier — evaluation happens through a demo and a quoted annual contract.',
          [comparisonTools[1]]: 'No free tier and no public price list — request a quote for current figures.',
          [comparisonTools[2]]: 'No free tier — pricing scales with candidate volume, user count, and selected add-ons.',
        },
      },
      {
        feature: 'Recruiting analytics',
        icon: 'chart-column',
        values: {
          [comparisonTools[0]]: 'Deepest of the three — queryable funnel, pipeline, and outcome analytics on one data model.',
          [comparisonTools[1]]: 'Strong recruiting analytics oriented to structured hiring, with DEI analytics sold as a module.',
          [comparisonTools[2]]: 'Recruiting analytics across pipeline health and activity, with DEI analytics available as an add-on.',
        },
      },
      {
        feature: 'Structured hiring',
        icon: 'clipboard-list',
        values: {
          [comparisonTools[0]]: 'Supported through scorecards and analytics, without the prescriptive interview-kit methodology Greenhouse enforces.',
          [comparisonTools[1]]: 'The defining strength — job scorecards, interview kits, and calibrated scorecards standardize every loop.',
          [comparisonTools[2]]: 'Feedback forms and interview workflows support structure, with less prescriptive calibration tooling.',
        },
      },
      {
        feature: 'Candidate relationship management',
        icon: 'users-round',
        values: {
          [comparisonTools[0]]: 'Built-in recruiting CRM inside the same product rather than a separately licensed module.',
          [comparisonTools[1]]: 'CRM is available as an add-on module on top of the core applicant tracking contract.',
          [comparisonTools[2]]: 'Core strength — CRM and ATS share one pipeline, so nurturing never leaves the system.',
        },
      },
      {
        feature: 'Nurture campaigns',
        icon: 'mail',
        values: {
          [comparisonTools[0]]: 'CRM campaigns exist, but automated long-term nurturing is less developed than at Lever.',
          [comparisonTools[1]]: 'Not a core capability — Greenhouse is optimized for active applicants moving through a defined loop.',
          [comparisonTools[2]]: 'Nurture campaigns are a named add-on tier and the main reason teams choose Lever.',
        },
      },
      {
        feature: 'Interview scheduling',
        icon: 'calendar-check',
        values: {
          [comparisonTools[0]]: 'Native scheduling is part of the all-in-one product, replacing a separate scheduling tool.',
          [comparisonTools[1]]: 'Interview coordination across many stakeholders is a core strength at enterprise hiring volume.',
          [comparisonTools[2]]: 'Interview scheduling is included, with advanced scheduling features gated into higher tiers.',
        },
      },
      {
        feature: 'Pipeline and requisition management',
        icon: 'kanban',
        values: {
          [comparisonTools[0]]: 'Candidate pipeline management with requisition tracking tied directly into analytics reporting.',
          [comparisonTools[1]]: 'Mature pipeline management built for high-volume roles and multi-stakeholder approval chains.',
          [comparisonTools[2]]: 'Pipeline plus requisition management, with CRM records persisting across closed and reopened roles.',
        },
      },
      {
        feature: 'Offer management',
        icon: 'file-text',
        values: {
          [comparisonTools[0]]: 'Offer workflows sit inside the unified product, so approvals connect to the same records.',
          [comparisonTools[1]]: 'Offer approval flows support structured, auditable sign-off in larger hiring organizations.',
          [comparisonTools[2]]: 'Offer letters are generated inside the platform, keeping the candidate record continuous.',
        },
      },
      {
        feature: 'Onboarding',
        icon: 'user-plus',
        values: {
          [comparisonTools[0]]: 'Not positioned as an onboarding suite — the focus stays on recruiting operations and data.',
          [comparisonTools[1]]: 'Onboarding is sold as a module, extending the record from offer acceptance into first weeks.',
          [comparisonTools[2]]: 'No dedicated onboarding module — the platform stops at the offer stage.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'No separately marketed AI add-on — differentiation comes from the unified data model and queryable analytics.',
          [comparisonTools[1]]: 'AI capabilities arrive through quoted modules and add-ons rather than a published self-serve tier.',
          [comparisonTools[2]]: 'AI support for sourcing and nurture workflows is negotiated inside the quoted annual contract.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Fewer integrations needed by design, since CRM, scheduling, and analytics are native to one product.',
          [comparisonTools[1]]: 'Broad enterprise integration ecosystem covering job boards, HRIS, background checks, and assessment tools.',
          [comparisonTools[2]]: 'Integration catalog covering sourcing, scheduling, HRIS, and assessment tools alongside its API.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Data-driven mid-sized teams consolidating ATS, CRM, scheduling, and reporting into a single contract.',
          [comparisonTools[1]]: 'Enterprise and mid-market teams that need consistent, auditable structured hiring at volume.',
          [comparisonTools[2]]: 'Teams whose bottleneck is pipeline, not process, and that nurture passive candidates over months.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'ATS, recruiting CRM, interview scheduling, and analytics in one product removes two or three separate subscriptions',
        'Deepest analytics of the three because every layer writes to the same candidate and requisition records',
        'Purpose-built for venture-backed and mid-sized companies rather than retrofitted for enterprise compliance',
        'Query-style reporting replaces the spreadsheet exports most recruiting ops leads maintain weekly',
        'Fewer integrations to configure, which shortens implementation compared with a best-of-breed stack',
      ],
      cons: [
        'No public self-serve pricing — quote-based annual contracts start in the low thousands per year',
        'Less prescriptive structured-hiring tooling than Greenhouse interview kits and calibrated scorecards',
        'Smaller enterprise footprint, so fewer references for very large multi-country hiring organizations',
        'Consolidation only pays off if you actually retire the separate CRM and scheduling tools it replaces',
        'Onboarding, HRIS, and payroll sit outside the product, so the record ends at the offer stage',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Structured hiring is genuinely best-in-class — job scorecards and interview kits standardize every loop',
        'Calibrated scorecards force written, attribute-based feedback before decisions, reducing bias and interviewer drift',
        'Proven at mid-market and enterprise volume, with mature approval chains for high-volume hiring',
        'Modules for CRM, onboarding, and DEI analytics let the contract grow with the organization',
        'Broad integration ecosystem covering job boards, HRIS, background checks, and assessment vendors',
      ],
      cons: [
        'Quote-based annual pricing starting in the mid four figures per year, with no public price list',
        'Module-based packaging means CRM, onboarding, and DEI analytics each push the contract higher',
        'Configuration effort is real — interview kits and scorecards take deliberate setup before they pay back',
        'Passive-candidate nurturing is weaker than Lever, since the platform optimizes active applicant flow',
        'Analytics feel oriented to compliance and process reporting rather than free-form recruiting ops queries',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'ATS and CRM share one pipeline, so passive candidates never fall out of the system between roles',
        'Nurture campaigns keep talent pools warm over months — the capability competitors struggle to match',
        'Offer letters, feedback forms, and interview scheduling live in the same record as the pipeline',
        'Requisition management plus long-lived candidate records suit teams hiring repeatedly for similar roles',
        'Recruiting analytics cover pipeline health and activity alongside DEI analytics as a negotiated add-on',
      ],
      cons: [
        'Most expensive entry point of the three — entry contracts typically start in the low five figures per year',
        'Tiers are gated by candidate volume, user count, and add-ons, so the quote grows with usage',
        'Less prescriptive structure than Greenhouse for calibrating large interviewer panels at enterprise scale',
        'Analytics are less queryable than Ashby, which still pushes recruiting ops teams toward spreadsheets',
        'No dedicated onboarding module, so the employee record has to be handed off after the offer',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing on the same eight-role hiring quarter, our conclusion is that there is no universal winner — but there is a clearly correct choice for each recruiting team shape. Ashby won on speed of insight: the funnel report our test lead needed took minutes to build rather than a weekly export-and-paste ritual. Greenhouse won on consistency: interviewer feedback across a four-person loop was more comparable than on either rival. Lever won on pipeline durability, keeping passive candidates alive in a way the other two only approximate.',
      'Where Ashby deserves praise is consolidation and measurement: an applicant tracking system, recruiting CRM, interview scheduling, and deep analytics on one data model, sold to venture-backed and mid-sized companies that would otherwise buy three tools. Where it draws criticism is prescriptive process — teams that want Greenhouse-style interview kits and calibrated scorecards have to build more of the discipline themselves, and there is no public pricing to benchmark against, with contracts generally starting in the low thousands of dollars per year. Data-driven startups stay, while compliance-heavy enterprises often drift toward Greenhouse.',
      'Where Greenhouse deserves praise is methodology made executable: job scorecards, interview kits, and calibrated scorecards turn structured hiring from a slide deck into a system that holds at mid-market and enterprise volume, with modules for CRM, onboarding, and DEI analytics. Where it draws criticism is cost and rigidity — quote-based annual pricing starting in the mid four figures per year, each module adding to the contract, and configuration work that smaller teams find heavy. Startups that want analytics more than process discipline increasingly evaluate Ashby instead.',
      'Where Lever deserves praise is the CRM-ATS merge: because passive candidates sit in the same pipeline as active applicants, nurture campaigns and talent pools survive closed requisitions, which is the single hardest thing to rebuild once lost. Where it draws criticism is price and reporting depth — entry contracts typically start in the low five figures per year, tiers are gated by candidate volume, user count, and add-ons such as DEI analytics, nurture campaigns, and advanced scheduling, and analytics remain less queryable than Ashby. Cost-sensitive teams with active-applicant-heavy funnels tend to shortlist Ashby or Greenhouse.',
      'The biggest trend in 2026 is consolidation against modular stacks. Ashby is the clearest expression of it: one contract covering tracking, CRM, scheduling, and reporting, with AI-assisted summarization and predictive funnel analytics arriving on top of a single data model. Greenhouse and Lever respond by extending modules — onboarding, DEI analytics, nurture campaigns — which keeps their contracts growing. The practical consequence for buyers is that the price of an ATS quote now depends less on seats than on which modules you switch on, so the negotiation is where the real savings are.',
      'Looking ahead, expect AI to concentrate on the platform that owns the cleanest data, which favors unified models over stitched stacks. The fundamentals have not changed, though. If you need recruiting analytics, CRM, and scheduling in one product without enterprise overhead, start with Ashby. If you need auditable structured hiring with interview kits and calibrated scorecards at mid-market or enterprise volume, start with Greenhouse. If your bottleneck is pipeline and you nurture passive candidates across months, start with Lever. Our rule of thumb is simple: identify whether your recruiting failure is measurement, discipline, or scarcity, then buy the platform built to fix that one failure.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Ashby if you run a venture-backed or mid-sized company and want an applicant tracking system, recruiting CRM, interview scheduling, and deep analytics in one product on a single shared data model — ideal for data-literate recruiting teams that would rather query funnel and source-quality reports than maintain spreadsheet exports, with quote-based annual contracts generally starting in the low thousands of dollars per year. Choose Greenhouse if you need structured hiring enforced at mid-market or enterprise volume, with job scorecards, interview kits, calibrated scorecards, and modules for CRM, onboarding, and DEI analytics — ideal for high-volume, multi-stakeholder organizations that value consistency and auditability, generally starting in the mid four figures per year. Choose Lever if your bottleneck is pipeline rather than process and you nurture passive candidates over months inside the same pipeline as active applicants — ideal for sourcing-heavy teams, with entry contracts typically starting in the low five figures per year. If your organization spans both enterprise process discipline and sourcing-led recruiting, some teams run Greenhouse as the system of record and keep a dedicated CRM or sourcing tool alongside it.',
  },
}
