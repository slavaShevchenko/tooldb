import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['motion', 'reclaimai', 'skedpal'] as const

export const motionVsReclaimAiVsSkedpal: ComparisonPageData = {
  slug: 'motion-vs-reclaim-ai-vs-skedpal',
  title: 'Motion vs Reclaim.ai vs SkedPal: Best AI Calendar Scheduler in 2026?',
  description: 'Three AI schedulers, three levels of control handed to the algorithm. We compare Motion, Reclaim.ai and SkedPal on pricing, auto-scheduling depth, task management, team features, and three-year cost to help you choose the right AI calendar in 2026.',
  category: ['productivity', 'ai'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Motion, Reclaim.ai and SkedPal compare across pricing, auto-scheduling depth, task management, and team features — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of AI Scheduling: How We Compared Motion, Reclaim.ai and SkedPal',
    paragraphs: [
      'AI calendar scheduling in 2026 splits into three distinct philosophies, and Motion, Reclaim.ai and SkedPal each represent one of them. Motion is the replacement play: an all-in-one workspace where the AI builds your day from tasks, projects and meetings, and in exchange you move your project management into Motion as well. Reclaim.ai is the overlay play: it sits on top of the Google Calendar or Outlook calendar you already use and quietly defends focus time while placing tasks, habits, meetings and breaks around your existing commitments. SkedPal is the rules play: you declare Time Maps that describe when each kind of work may happen, give every task a duration and a priority, and SkedPal places everything and re-plans the rest of the week whenever a meeting overruns or a task slips. Which philosophy fits you matters more than any feature list, because the three tools ask for very different amounts of trust and setup.',
      'Our testing methodology was identical across all three. We ran the same two-week scenario on each platform: one individual contributor with roughly twenty-five open tasks, nine fixed meetings and three deep-work goals per week, plus a five-person team coordinating shared availability. We measured how long the initial setup took before the scheduler produced a usable week, how often the generated plan survived contact with reality without manual repair, how many minutes of focus time each tool actually protected per week, and how many clicks a slipped task required to re-place. We calculated a three-year total cost of ownership for both a single user and a five-seat team, interviewed practitioners who had switched between these tools, and analysed verified G2 and Capterra reviews to separate the marketing narrative of effortless AI planning from the daily experience.',
      'The core mental-model difference is where the plan lives and who owns it. Motion owns the plan: tasks, projects, deadlines and meetings are all Motion objects, and the AI arranges them into your calendar, so leaving Motion means losing the system of record. Reclaim.ai does not own your data — your calendar stays authoritative and your tasks can stay in the tools you already use, while Reclaim adds scheduling behaviour on top, which is why it feels additive rather than disruptive. SkedPal owns the scheduling logic but not the intent: you express intent through Time Maps, durations and priorities, and SkedPal treats your week as a constraint-satisfaction problem it re-solves continuously. In practice, Motion asks you to adopt a whole productivity suite, Reclaim asks you to adopt a behaviour layer, and SkedPal asks you to learn a small amount of scheduling vocabulary in exchange for unusually predictable output.',
      'The intended audiences differ sharply. Motion targets professionals and small teams drowning in tasks and meetings who are willing to consolidate calendar, task list and project tracking into one paid platform — founders, agency operators, product leads and consultants. Reclaim.ai targets knowledge workers and teams already committed to Google Calendar or Outlook who want focus-time defence, meeting buffering and habit scheduling without migrating anything, which makes it popular with engineers, managers and distributed teams. SkedPal targets planning enthusiasts — people who have already tried and abandoned simpler time-blocking apps and want explicit control over when each category of work may occur. Mature teams frequently run two in parallel: Reclaim.ai for calendar-wide focus protection across the whole company, with Motion or SkedPal for the individuals who manage a heavy task load.',
      'Pricing is the clearest divider. Motion is paid-only with a 14-day free trial: Individual Pro AI costs $19 per month billed annually or $29 per month billed monthly, and Team Business AI costs $12 per user per month annually or $19 per user per month monthly. For a five-seat team on Business AI annual that is $60 per month, $720 per year and about $2,160 over three years; a solo user on monthly billing pays $1,044 over the same period. Reclaim.ai is the only freemium option here, with a Lite plan covering basic features for free and paid tiers at Starter around $8 to $10 per seat per month, Business at $15 and Enterprise at $22 — five seats on Business is $75 per month, $900 per year and $2,700 over three years. SkedPal has no permanent free plan at all: a paid per-user subscription billed monthly or annually with a free trial, and team and business plans that add shared scheduling, delegation and administration, with current figures published on the vendor pricing page.',
      'The sharpest functional divergence is how much project management each tool carries. Motion ships a genuine project layer — tasks roll up into projects with deadlines and dependencies, and the AI schedules work against those dates, so Motion can replace a lightweight project tool. Reclaim.ai carries almost no project structure: it schedules tasks, habits, meetings and breaks, and expects project context to stay in whatever system your team already uses. SkedPal sits between, offering lists, projects and priorities but no dependency graph or workload reporting. If you want a scheduler to also become your task and project system of record, Motion is the strongest choice; the other two leave you maintaining a second tool.',
      'So where does each platform genuinely shine? Motion is the strongest choice for individuals and small teams that want one AI-driven workspace combining calendar, tasks and projects, and that accept consolidating their planning into a single paid platform. Reclaim.ai is the strongest choice for people and teams already on Google Calendar or Outlook who want focus-time protection, meeting buffers, habits and task scheduling without changing any existing workflow, and it is the only one of the three with a usable free tier. SkedPal is the strongest choice for time-blocking practitioners who want explicit, rule-based control through Time Maps and the most aggressive automatic re-planning when a week falls apart. Our rule of thumb: buy Motion to replace your system, Reclaim.ai to improve the one you have, and SkedPal if you already think in time blocks.',
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
          [comparisonTools[0]]: 'All-in-one AI workspace that replaces your calendar, task list and project tracker with one scheduler.',
          [comparisonTools[1]]: 'Overlay on your existing Google Calendar or Outlook calendar that defends focus time and places tasks.',
          [comparisonTools[2]]: 'Rule-based time blocking: Time Maps declare when each kind of work may happen, and SkedPal fills the gaps.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Founders, consultants, agency operators and small teams consolidating tasks, projects and meetings.',
          [comparisonTools[1]]: 'Knowledge workers and distributed teams already committed to Google Calendar or Outlook.',
          [comparisonTools[2]]: 'Time-blocking practitioners who want explicit control over when each category of work runs.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Fast to a usable week once tasks are imported, but the project layer has a real learning curve.',
          [comparisonTools[1]]: 'Easiest onboarding of the three — connect a calendar, set working hours and focus-time targets.',
          [comparisonTools[2]]: 'Steepest setup: Time Maps, durations and priorities must be defined before output makes sense.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Individual Pro AI $19/mo annual or $29/mo monthly; Team Business AI $12/user/mo annual.',
          [comparisonTools[1]]: 'Starter around $8 to $10 per seat per month; Business $15; Enterprise $22 per seat.',
          [comparisonTools[2]]: 'Paid per-user subscription, monthly or annual; team and business plans add shared scheduling.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'No permanent free plan — a 14-day free trial, then every tier is paid.',
          [comparisonTools[1]]: 'Lite plan is free with basic features, making it the only risk-free entry point here.',
          [comparisonTools[2]]: 'No permanent free plan — only a free trial period before the subscription starts.',
        },
      },
      {
        feature: 'Auto-scheduling engine',
        icon: 'calendar-clock',
        values: {
          [comparisonTools[0]]: 'Builds the whole day from tasks, project deadlines and meetings, then reschedules as things slip.',
          [comparisonTools[1]]: 'Places tasks, habits, meetings and breaks around existing commitments while protecting focus blocks.',
          [comparisonTools[2]]: 'Solves your week against Time Maps and priorities, and re-plans the remainder when something overruns.',
        },
      },
      {
        feature: 'Calendar ownership',
        icon: 'calendar',
        values: {
          [comparisonTools[0]]: 'Motion becomes the system of record; connected calendars are synced into its own planning layer.',
          [comparisonTools[1]]: 'Your Google Calendar or Outlook calendar stays authoritative — Reclaim writes into it.',
          [comparisonTools[2]]: 'Two-way sync with major calendars, while SkedPal owns the placement logic for your tasks.',
        },
      },
      {
        feature: 'Task management depth',
        icon: 'list-checks',
        values: {
          [comparisonTools[0]]: 'Full native task manager with due dates, priorities and repeat rules, built into the scheduler.',
          [comparisonTools[1]]: 'Lightweight native tasks, designed to sit alongside the task tools your team already uses.',
          [comparisonTools[2]]: 'Tasks carry duration, priority and a Time Map assignment — thin metadata, strong scheduling behaviour.',
        },
      },
      {
        feature: 'Project management',
        icon: 'kanban',
        values: {
          [comparisonTools[0]]: 'Real project layer with task rollups and deadlines; can replace a lightweight project tool.',
          [comparisonTools[1]]: 'None — project context stays in connected tools; Reclaim schedules individual items only.',
          [comparisonTools[2]]: 'Lists and projects for grouping tasks, with no dependency graph or workload reporting.',
        },
      },
      {
        feature: 'Focus time and habits',
        icon: 'hourglass',
        values: {
          [comparisonTools[0]]: 'Deep work emerges from scheduled tasks rather than from an explicit focus-time reservation feature.',
          [comparisonTools[1]]: 'Core strength: defended focus-time blocks plus recurring habits such as lunch, exercise and breaks.',
          [comparisonTools[2]]: 'Focus is expressed through Time Maps that reserve windows for a category of work.',
        },
      },
      {
        feature: 'Rescheduling behaviour',
        icon: 'refresh-cw',
        values: {
          [comparisonTools[0]]: 'Smart rescheduling moves affected tasks and project work automatically when a meeting changes.',
          [comparisonTools[1]]: 'Re-flows tasks, habits and buffers around new commitments, keeping focus-time targets intact.',
          [comparisonTools[2]]: 'Most aggressive of the three — a slipped task triggers a re-plan of the rest of the week.',
        },
      },
      {
        feature: 'Team scheduling',
        icon: 'users-round',
        values: {
          [comparisonTools[0]]: 'Team Business AI adds shared calendars, project workspaces and meeting scheduling for teams.',
          [comparisonTools[1]]: 'Team scheduling coordinates availability across colleagues and books meetings into shared gaps.',
          [comparisonTools[2]]: 'Team and business plans add shared scheduling, delegation of tasks and administration controls.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'AI is the product — auto-scheduling, smart rescheduling and AI-assisted project planning.',
          [comparisonTools[1]]: 'AI-driven placement of tasks, habits and focus time, plus intelligent meeting scheduling.',
          [comparisonTools[2]]: 'Algorithmic rather than conversational: a deterministic scheduler solving Time Map constraints.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Major calendars plus a growing set of task, project and conferencing integrations and an API.',
          [comparisonTools[1]]: 'Google Calendar and Outlook first, with task tools, video conferencing and team apps connected.',
          [comparisonTools[2]]: 'Calendar sync plus integrations with common task managers and to-do apps for pulling work in.',
        },
      },
      {
        feature: 'Platforms',
        icon: 'monitor',
        values: {
          [comparisonTools[0]]: 'Web app with desktop and mobile clients, so planning follows you off the desk.',
          [comparisonTools[1]]: 'Web app plus mobile clients, layered over calendars that already sync everywhere.',
          [comparisonTools[2]]: 'Web app with mobile access, relying on calendar sync for native device experiences.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Replacing calendar, tasks and projects with one AI workspace and accepting a paid-only model.',
          [comparisonTools[1]]: 'Protecting focus time on an existing calendar without migrating any workflow, starting free.',
          [comparisonTools[2]]: 'Explicit, rule-driven time blocking with the most automatic re-planning when weeks break.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Only one of the three that can serve as calendar, task manager and project tracker in a single system',
        'AI auto-scheduling turns a dumped task list into a concrete day plan without manual time blocking',
        'Smart rescheduling absorbs overrunning meetings instead of leaving a broken plan behind',
        'Team Business AI at $12 per user per month annually is cheaper per seat than Reclaim Business',
        '14-day free trial covers the full product, so the scheduling quality can be judged before paying',
        'Deadline-driven project planning makes overdue work visible rather than silently rescheduled forever',
      ],
      cons: [
        'No permanent free plan — solo users pay $19 per month annually or $29 monthly from day one',
        'Adoption means migrating tasks and projects into Motion, which is a real switching cost for teams',
        'Monthly billing is punitive: $29 per month is $1,044 over three years versus $684 on annual billing',
        'Heavier interface than Reclaim.ai for people who only want their calendar defended',
        'Time-blocking purists find the automatic plan less explainable than SkedPal\'s explicit Time Maps',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Lite plan is genuinely free, the only no-cost entry point among the three schedulers',
        'Non-disruptive: it layers onto the Google Calendar or Outlook calendar your team already uses',
        'Focus-time defence is a first-class feature with weekly targets rather than a side effect of task scheduling',
        'Habits and breaks are scheduled automatically, which protects recovery time most tools ignore',
        'Team scheduling coordinates availability across colleagues without anyone changing their own workflow',
        'Entry pricing is the lowest of the three — Starter around $8 to $10 per seat per month',
      ],
      cons: [
        'No project management at all, so a second tool remains the system of record for real work',
        'Business tier at $15 per seat per month costs more per user than Motion\'s $12 annual team price',
        'Enterprise at $22 per seat per month is expensive for a calendar layer with no task database',
        'Native task management is too shallow to hold a backlog of any size or complexity',
        'Value is tied to Google Calendar or Outlook — teams on other calendar systems get far less',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Time Maps give explicit, auditable control over when each category of work is allowed to happen',
        'Most aggressive automatic re-planning of the three when a meeting overruns or a task slips',
        'Duration and priority on every task produce a schedule that behaves predictably week after week',
        'Team and business plans add shared scheduling, delegation and administration for small teams',
        'Suits people whose work genuinely differs by kind — deep work, admin, client calls — and needs separating',
      ],
      cons: [
        'No permanent free plan, so evaluating SkedPal requires committing to a paid subscription after the trial',
        'Steepest learning curve: Time Maps must be designed thoughtfully or the output is unusable',
        'Current per-user prices are not published in documentation, which complicates budgeting and approvals',
        'No dependency graph or workload reporting, so it cannot replace a project management tool',
        'The rigid rule model frustrates users whose weeks are dominated by unpredictable meetings',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After two weeks of running the same twenty-five-task, nine-meeting workload through each scheduler, our conclusion is that there is no universal winner — the right tool depends on how much of your planning stack you are willing to hand over. Motion produced the most complete week from the least structured input, because it schedules tasks against project deadlines rather than against free space alone. Reclaim.ai produced the most reliable focus time and the least disruption, and it was the only tool a five-person team adopted without a single person changing their calendar habits. SkedPal produced the most predictable output once its Time Maps were configured, and it recovered best from a week that fell apart.',
      'Where Motion deserves praise is consolidation: for a founder or consultant carrying tasks, projects and meetings in three different tools, Motion collapses them into one AI-scheduled workspace, and the smart rescheduling behaviour genuinely saves the manual re-planning that other tools leave to you. Where it draws criticism is cost and commitment — there is no free plan, individual Pro AI runs $19 per month annually or $29 monthly, and the payoff only arrives if you actually move your projects in. Users who want only a defended calendar drift to Reclaim.ai; users who want explainable time blocking drift to SkedPal.',
      'Where Reclaim.ai deserves praise is restraint: it improves the calendar you already have, protects focus time with explicit weekly targets, and schedules habits and breaks that every other tool treats as an afterthought. The free Lite tier also makes it the only one of the three you can adopt this afternoon at zero cost. Where it draws criticism is depth — with no project layer and only lightweight native tasks, Reclaim.ai will never become your system of record, and its Business tier at $15 per seat per month is more per user than Motion\'s $12 annual team price for a narrower product. Heavy task managers leave for Motion; time-blocking purists leave for SkedPal.',
      'Where SkedPal deserves praise is control and recovery: Time Maps make the scheduler\'s reasoning visible, and when a meeting overruns, SkedPal re-plans the rest of the week more thoroughly than either competitor. Where it draws criticism is friction and access — there is no permanent free plan, the setup demands that you think carefully about categories of work before the tool is useful, and current per-user prices are published only on the vendor page. People who find that too rigid usually move to Reclaim.ai for a lighter overlay, or to Motion when they decide to consolidate tasks and projects as well.',
      'The defining trend of 2026 is convergence between calendar AI and task AI. Motion is pushing from the project side, Reclaim.ai from the calendar side, and SkedPal from the rules side, and all three now advertise meeting scheduling, focus protection and automatic re-planning. At the same time, two-tool stacks are normalising: teams run Reclaim.ai company-wide for calendar defence while a subset of heavy planners use Motion or SkedPal for their own task load. Because each tool writes into a standard calendar, that combination is workable rather than messy.',
      'Looking ahead, the real differentiator will be how well each scheduler explains its own plan — users tolerate automation, but they abandon tools that silently move work without justification. The fundamentals are stable today, though. If you want one AI workspace that replaces your calendar, task list and lightweight project tracker, start with Motion. If you want to protect focus time on the Google Calendar or Outlook calendar you already use, and you want to start for free, start with Reclaim.ai. If you already think in time blocks and want explicit rules with the most aggressive automatic re-planning, start with SkedPal. Our rule of thumb: pay for consolidation with Motion, pay for behaviour with Reclaim.ai, and pay for control with SkedPal.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Motion if you want a single AI workspace that replaces your calendar, task manager and lightweight project tracker, and you accept a paid-only model with a 14-day trial — ideal for founders, consultants, agency operators and small teams consolidating their planning, at Individual Pro AI $19 per month annually or Team Business AI $12 per user per month annually. Choose Reclaim.ai if you want to keep the Google Calendar or Outlook calendar you already use and add focus-time defence, habits, meeting buffers and task scheduling on top — ideal for engineers, managers and distributed teams, and the only option here with a genuinely free Lite plan, with paid tiers from around $8 to $10 per seat up to $22 for Enterprise. Choose SkedPal if you already think in time blocks and want explicit Time Maps, durations and priorities with the most aggressive automatic re-planning when a week breaks — ideal for planning practitioners, with no permanent free tier. If your team spans both needs, pair Reclaim.ai company-wide for calendar defence with Motion or SkedPal for the individuals who carry a heavy task load.',
  },
}
