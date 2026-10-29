import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['lattice', '15five', 'cultureamp'] as const

export const latticeVs15fiveVsCultureAmp: ComparisonPageData = {
  slug: 'lattice-vs-15five-vs-culture-amp',
  title: 'Lattice vs 15Five vs Culture Amp: Best Performance Management Platform in 2026?',
  description: 'Three people platforms anchored on different jobs — reviews, weekly check-ins, or engagement surveys. We compare Lattice, 15Five and Culture Amp on module breadth, benchmarking, manager tooling, pricing, and real three-year cost to help you choose in 2026.',
  category: ['hr'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Lattice, 15Five and Culture Amp compare across pricing, module breadth, engagement analytics, and target audience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of People Management: How We Compared Lattice, 15Five and Culture Amp',
    paragraphs: [
      'People management platforms in 2026 disagree about what actually drives performance. Lattice is the platform play: a people management suite combining performance reviews, OKRs and goals, engagement surveys, one-on-ones, compensation planning, career paths, and an HRIS, sold as modular products that all share one employee record. 15Five is the habit play: a performance management platform built around weekly check-ins, one-on-one agendas, goal tracking, feedback, and engagement surveys, aimed at managers and HR teams that want continuous performance conversations instead of a single annual review cycle. Culture Amp is the listening play: an employee experience platform running engagement, effectiveness, and development surveys alongside performance reviews and goal setting, with benchmark data from a large company database and tools for turning survey results into action plans.',
      'Our testing methodology was hands-on and identical across all three platforms. We ran the same scenario on each — a 120-person company completing one review cycle, one engagement survey, and one quarterly OKR reset — and measured how long it took to configure a review template, launch a survey, run a one-on-one cycle, build a compensation view, and produce an action plan from results. We timed manager-side work such as writing a review, setting a goal, and responding to survey findings, then calculated a realistic three-year total cost of ownership covering per-user subscription, minimum seat commitments, extra modules, implementation, and HR admin hours. We also interviewed people leads who run each platform and analyzed verified reviews on G2 and Capterra to separate vendor claims from daily reality.',
      'The clearest difference is the mental model each platform imposes on an HR team. Lattice thinks in modules around one employee record, so reviews, goals, engagement, compensation, career paths, and HRIS data connect without an integration project — power comes from breadth, and cost comes from stacking modules. 15Five thinks in cadence: the weekly check-in is the atomic unit, and reviews, goals, feedback, and surveys hang off a rhythm managers already keep, which makes the product feel lighter but less exhaustive. Culture Amp thinks in survey instruments and benchmarks: engagement, effectiveness, and development surveys generate comparative data against a large company database, and the platform then pushes teams from results into action plans.',
      'The intended audiences differ sharply as well. Lattice targets scaling companies and mid-market HR organizations that want performance, engagement, compensation, and eventually HRIS on one platform with people analytics attached. 15Five targets manager-led teams and HR partners who believe continuous conversations beat annual cycles — often companies between roughly 50 and 1,000 employees that want an approachable, coach-oriented tool. Culture Amp targets employee-experience and people-analytics teams at larger organizations that treat engagement data, benchmarking, and action planning as the core discipline. Mature organizations frequently run two in parallel, keeping a specialist survey or HRIS product next to a performance tool, which is exactly the overlap all three vendors are trying to close.',
      'Pricing models differ more than the sticker numbers suggest. Lattice uses modular per-user per-month pricing, historically around $11 per user for engagement, $11 for performance, and $10 for compensation, with HRIS priced higher and bundles discounted — most plans require an annual contract and a minimum seat count, so the real floor is higher than the per-user headline. 15Five bills per user per month with an annual commitment, historically around $4 per user for engagement features, $10 for performance management, and $16 for the full platform including objectives and reviews, making it the cheapest entry point of the three. Culture Amp is quote-based and billed annually, generally charged per employee per year with minimum contract sizes, and modules for engagement, performance, and development priced separately or bundled — you must request a quote for current figures.',
      'The sharpest functional divergence is where depth actually sits. Culture Amp owns engagement and benchmarking: its survey instruments, comparative data from a large company database, and action-planning workflow are the reason employee-experience teams shortlist it, while its performance and goal modules remain the newer part of the product. Lattice owns breadth: compensation planning, career paths, and an HRIS alongside reviews, goals, engagement, and one-on-ones, which no rival here matches in one contract. 15Five owns the manager ritual — weekly check-ins and one-on-one agendas that make continuous feedback stick — but it does not try to be an HRIS or a compensation engine, and its benchmarking is narrower than Culture Amp.',
      'So where does each platform genuinely shine? Lattice is the strongest choice for scaling companies that want performance reviews, OKRs, engagement surveys, compensation planning, career paths, and HRIS on one employee record, and that accept modular per-user pricing to get there. 15Five is the strongest choice for manager-led teams that want continuous check-ins, one-on-ones, goals, feedback, and engagement surveys at the lowest per-user entry price of the three. Culture Amp is the strongest choice for people-analytics and employee-experience teams that need survey depth plus external benchmarks and disciplined action planning. Our rule of thumb: buy the platform that matches the habit you can actually sustain — a weekly check-in, a quarterly review cycle, or a twice-yearly survey.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your HR workflow.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Modular people suite: reviews, OKRs, engagement, compensation, career paths, and HRIS on one employee record.',
          [comparisonTools[1]]: 'Continuous performance management built around weekly check-ins, one-on-one agendas, goals, and feedback.',
          [comparisonTools[2]]: 'Employee experience platform: engagement, effectiveness, and development surveys with benchmarks and action plans.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Scaling and mid-market HR teams consolidating performance, engagement, compensation, and HRIS data.',
          [comparisonTools[1]]: 'Manager-led teams and HR partners replacing the annual review with continuous performance conversations.',
          [comparisonTools[2]]: 'Employee experience and people analytics teams at larger organizations that benchmark externally.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Polished but broad — configuration effort grows with the number of modules you switch on.',
          [comparisonTools[1]]: 'Lightest of the three — the weekly check-in is simple enough that managers keep the habit.',
          [comparisonTools[2]]: 'Survey launch is straightforward, while turning results into action plans takes HR facilitation.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Modular per user per month, historically around $11 for engagement, $11 for performance, $10 for compensation.',
          [comparisonTools[1]]: 'Per user per month with annual commitment, historically around $4 for engagement and $10 for performance management.',
          [comparisonTools[2]]: 'Quote-based annual contract charged per employee per year, with minimum contract sizes applying.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'No free tier — most plans require an annual contract and a minimum seat count.',
          [comparisonTools[1]]: 'No free tier — paid plans are billed per user per month on an annual commitment.',
          [comparisonTools[2]]: 'No free tier — engagement, performance, and development modules are quoted per employee per year.',
        },
      },
      {
        feature: 'Performance reviews',
        icon: 'clipboard-list',
        values: {
          [comparisonTools[0]]: 'Core module: configurable review cycles, 360 feedback, and calibration tied to the same employee record.',
          [comparisonTools[1]]: 'Reviews are part of the full platform tier and build directly on weekly check-in history.',
          [comparisonTools[2]]: 'Performance reviews exist alongside surveys, but they are newer than the engagement core.',
        },
      },
      {
        feature: 'Goals and OKRs',
        icon: 'milestone',
        values: {
          [comparisonTools[0]]: 'OKRs and goal tracking are a first-class module, cascading from company objectives to individual goals.',
          [comparisonTools[1]]: 'Goal tracking included, with objectives and reviews bundled into the full platform tier.',
          [comparisonTools[2]]: 'Goal setting available next to survey results, so objectives connect to engagement findings.',
        },
      },
      {
        feature: 'One-on-ones and check-ins',
        icon: 'messages-square',
        values: {
          [comparisonTools[0]]: 'One-on-one agendas supported inside the engagement and performance modules.',
          [comparisonTools[1]]: 'The defining strength — weekly check-ins and one-on-one agendas drive the entire product.',
          [comparisonTools[2]]: 'Manager conversations supported through action plans rather than a dedicated weekly check-in ritual.',
        },
      },
      {
        feature: 'Engagement surveys',
        icon: 'chart-pie',
        values: {
          [comparisonTools[0]]: 'Engagement surveys included as a module priced around $11 per user per month.',
          [comparisonTools[1]]: 'Engagement surveys included, historically around $4 per user per month on the engagement tier.',
          [comparisonTools[2]]: 'Core capability — engagement, effectiveness, and development surveys are the reason teams buy it.',
        },
      },
      {
        feature: 'Benchmark data',
        icon: 'chart-column',
        values: {
          [comparisonTools[0]]: 'People analytics across modules, with internal comparison rather than a large external survey database.',
          [comparisonTools[1]]: 'Benchmarking available but narrower than a dedicated employee experience platform.',
          [comparisonTools[2]]: 'Best of the three — benchmark data drawn from a large company database for external comparison.',
        },
      },
      {
        feature: 'Feedback and recognition',
        icon: 'heart',
        values: {
          [comparisonTools[0]]: 'Continuous feedback and praise features sit alongside reviews and engagement data.',
          [comparisonTools[1]]: 'Feedback is central to the weekly rhythm, so recognition happens in the same flow as check-ins.',
          [comparisonTools[2]]: 'Feedback tools support action planning after surveys rather than day-to-day peer recognition.',
        },
      },
      {
        feature: 'Compensation planning',
        icon: 'wallet',
        values: {
          [comparisonTools[0]]: 'Dedicated compensation module, historically around $10 per user per month, linked to review outcomes.',
          [comparisonTools[1]]: 'Not a core module — compensation cycles typically stay in spreadsheets or an HRIS.',
          [comparisonTools[2]]: 'Not a core module — the platform focuses on engagement, effectiveness, and development data.',
        },
      },
      {
        feature: 'Career paths and growth',
        icon: 'trending-up',
        values: {
          [comparisonTools[0]]: 'Career paths and growth frameworks included as part of the modular suite.',
          [comparisonTools[1]]: 'Development conversations supported through goals and check-ins rather than formal career pathing.',
          [comparisonTools[2]]: 'Development surveys feed individual and team growth plans built from survey findings.',
        },
      },
      {
        feature: 'HRIS and employee records',
        icon: 'database',
        values: {
          [comparisonTools[0]]: 'Has an HRIS module priced higher than the other products, making it a system of record.',
          [comparisonTools[1]]: 'No HRIS — integrates with your existing system of record for employee data.',
          [comparisonTools[2]]: 'No HRIS — employee records are synced in from payroll or HRIS systems.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'AI-assisted summaries and insights across the shared employee record on paid modules.',
          [comparisonTools[1]]: 'AI support for check-in prompts, feedback drafting, and survey analysis within paid tiers.',
          [comparisonTools[2]]: 'AI-assisted survey analysis and action planning negotiated inside the quoted annual contract.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Broadest of the three, since HRIS and compensation modules reduce the need for outside systems.',
          [comparisonTools[1]]: 'HRIS, payroll, and communication integrations feed employee data into the check-in rhythm.',
          [comparisonTools[2]]: 'HRIS and collaboration integrations sync employee data and distribute survey results and action plans.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Scaling companies consolidating performance, engagement, compensation, and HRIS on one employee record.',
          [comparisonTools[1]]: 'Manager-led teams that want continuous check-ins and one-on-ones at the lowest entry price.',
          [comparisonTools[2]]: 'People analytics teams that need survey depth, external benchmarks, and disciplined action planning.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Broadest suite of the three — reviews, OKRs, engagement, one-on-ones, compensation, career paths, and an HRIS',
        'Modular pricing lets you start with one product around $11 per user per month and add modules later',
        'One shared employee record means analytics span performance, engagement, and pay without an integration project',
        'Compensation planning linked to review outcomes replaces the spreadsheet exercise most HR teams dread',
        'Bundles are discounted, so total cost per user falls as the number of modules rises',
      ],
      cons: [
        'Stacking modules gets expensive fast — engagement plus performance plus compensation is roughly $32 per user per month',
        'Most plans require an annual contract and a minimum seat count, which excludes very small teams',
        'HRIS is priced higher than the other modules, so the system-of-record ambition carries a real premium',
        'Breadth creates configuration overhead: reviews, cycles, and career frameworks all need HR admin time',
        'Engagement survey depth and external benchmarking trail Culture Amp for employee-experience specialists',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Cheapest entry point of the three — engagement features historically around $4 per user per month',
        'Weekly check-ins and one-on-one agendas build a habit managers actually keep between review cycles',
        'Continuous performance conversations replace the once-a-year review panic with ongoing written feedback',
        'Full platform tier around $16 per user per month adds objectives and reviews without a second vendor',
        'Approachable enough for manager-led teams that have no dedicated people analytics function',
      ],
      cons: [
        'No HRIS and no compensation planning module, so those cycles stay in spreadsheets or another system',
        'Benchmarking is narrower than Culture Amp, which limits external comparison for larger HR teams',
        'All plans need an annual commitment billed per user per month — there is no free tier to pilot with',
        'Weekly cadence depends on manager discipline: if one-on-ones lapse, the product loses most of its value',
        'Less suited to enterprise-grade calibration, complex review hierarchies, and multi-country pay cycles',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Deepest survey capability — engagement, effectiveness, and development instruments in one platform',
        'Benchmark data from a large company database gives context a single company cannot generate alone',
        'Action planning tools push teams from survey results to owned commitments rather than dashboards nobody reads',
        'Performance reviews and goal setting sit next to the survey data that explains them',
        'Strong fit for employee experience and people analytics teams that treat listening as the core discipline',
      ],
      cons: [
        'Quote-based pricing charged per employee per year with minimum contract sizes — no published figures',
        'Modules for engagement, performance, and development are priced separately or bundled, so quotes vary widely',
        'Performance and goal features are newer than the survey core and lag Lattice for reviews and calibration',
        'No compensation planning, career pathing, or HRIS, so the platform cannot consolidate your people stack',
        'Survey-led rhythm produces insight in cycles, leaving less day-to-day manager tooling than 15Five check-ins',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing through one review cycle, one engagement survey, and one quarterly OKR reset, our conclusion is that there is no universal winner — but there is a clearly correct choice for each HR operating model. Lattice delivered the most consolidated experience, replacing several point tools with modules on one employee record. 15Five delivered the highest manager adoption, because a weekly check-in is a habit rather than a project. Culture Amp delivered the most trustworthy engagement data, since external benchmarks turned internal scores into decisions.',
      'Where Lattice deserves praise is breadth on one record: performance reviews, OKRs, engagement surveys, one-on-ones, compensation planning, career paths, and an HRIS, with modular per-user pricing historically around $11 for engagement, $11 for performance, and $10 for compensation, and discounts once you bundle. Where it draws criticism is accumulated cost and configuration — stacking three modules approaches $32 per user per month, HRIS is priced higher again, and minimum seat counts with annual contracts put the platform out of reach for very small teams. HR leads who only need listening often re-evaluate Culture Amp.',
      'Where 15Five deserves praise is cadence and cost: weekly check-ins, one-on-one agendas, goals, feedback, and engagement surveys at historically around $4 per user per month for engagement, $10 for performance management, and $16 for the full platform including objectives and reviews. Where it draws criticism is scope — there is no HRIS, no compensation planning module, and narrower benchmarking than Culture Amp, so the platform cannot consolidate a people stack, and its value collapses if managers stop doing one-on-ones. Growing companies that need pay cycles and career frameworks typically migrate to Lattice.',
      'Where Culture Amp deserves praise is listening discipline: engagement, effectiveness, and development surveys paired with benchmark data from a large company database and action-planning tools that force ownership of results. Where it draws criticism is commercial transparency and module gaps — pricing is quote-based, charged per employee per year with minimum contract sizes, and engagement, performance, and development modules are priced separately or bundled, so the quote depends heavily on negotiation. Performance and goal features also remain newer than the survey core, which pushes review-heavy teams toward Lattice.',
      'The biggest trend in 2026 is the collision between suite consolidation and survey specialization, with AI in the middle. Lattice is expanding downward into HRIS and compensation so the whole employee record lives in one place, Culture Amp is expanding outward from surveys into performance and development, and 15Five is deepening manager coaching with AI-assisted prompts and summaries. For buyers the practical consequence is that module boundaries matter more than logos: a quote that looks cheap on one module can cost more than a rival bundle once you add the second and third.',
      'Looking ahead, expect AI-assisted review drafting, survey summarization, and manager coaching to become standard on every tier, which will shift the buying question from features to data quality. The fundamentals have not changed, though. If you need performance, engagement, compensation, career paths, and HRIS on one employee record, start with Lattice. If you need continuous check-ins and one-on-ones that managers actually keep, at the lowest per-user entry price, start with 15Five. If you need engagement surveys with external benchmarks and disciplined action planning, start with Culture Amp. Our rule of thumb is simple: buy the platform that matches the habit your managers will sustain, not the feature list your HR team finds most impressive.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Lattice if you are consolidating a people stack and want performance reviews, OKRs and goals, engagement surveys, one-on-ones, compensation planning, career paths, and an HRIS on one shared employee record — ideal for scaling and mid-market HR teams, with modular per-user pricing historically around $11 per user per month for engagement, $11 for performance, and $10 for compensation, discounted in bundles but subject to annual contracts and minimum seat counts. Choose 15Five if you believe continuous performance conversations beat an annual cycle and you want weekly check-ins, one-on-one agendas, goals, feedback, and engagement surveys at the lowest entry price — ideal for manager-led teams, historically around $4 per user per month for engagement, $10 for performance management, and $16 for the full platform. Choose Culture Amp if engagement data, external benchmarks, and action planning are your core discipline — ideal for employee experience and people analytics teams at larger organizations, on quote-based per-employee-per-year contracts. If your company spans both continuous manager coaching and enterprise-grade listening, some teams run 15Five for the weekly rhythm alongside Culture Amp for benchmarked engagement surveys.',
  },
}
