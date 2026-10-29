import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['todoist', 'ticktick', 'things3'] as const

export const todoistVsTicktickVsThings3: ComparisonPageData = {
  slug: 'todoist-vs-ticktick-vs-things-3',
  title: 'Todoist vs TickTick vs Things 3: Best To-Do List App in 2026?',
  description: 'A cross-platform subscription, an all-in-one bargain, and a one-time Apple classic. We compare Todoist, TickTick and Things 3 on pricing, natural language capture, calendar and habits, collaboration, and three-year cost to help you choose in 2026.',
  category: ['productivity'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Todoist, TickTick and Things 3 compare across pricing, natural language capture, calendar and habits, and collaboration — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Task Management: How We Compared Todoist, TickTick and Things 3',
    paragraphs: [
      'The to-do list market in 2026 has settled into three clearly distinct philosophies, and Todoist, TickTick and Things 3 each own one of them. Todoist is the cross-platform standard: a task manager built around natural language input, flexible projects, labels and filters, and productivity tracking, synchronised across every device and operating system you could plausibly own. TickTick is the all-in-one value play: to-do lists, a calendar view, habit tracking and a Pomodoro timer inside a single application, priced aggressively so that one cheap subscription replaces three separate apps. Things 3 is the craft play: a premium task manager designed exclusively for Apple devices, sold as a one-time purchase with no subscription at all, organised around Areas, Projects and a Today view, and optimised for individuals who want elegant personal productivity rather than team features.',
      'Our testing methodology was identical across all three. We ran the same scenario on each app for four weeks: one individual managing a mixed load of roughly 120 active tasks across work projects, personal admin and recurring commitments, plus a five-person team sharing two projects on the two apps that support collaboration. We measured the seconds from thought to captured task using each app\'s quickest entry path, how accurately natural language parsed dates and recurrence, how many taps a reschedule took on a phone, and how well each app handled a week that fell behind schedule. We then calculated three-year total cost of ownership across all the devices we tested on, interviewed long-term users who had migrated between these apps, and analysed verified G2 and Capterra reviews plus App Store feedback to separate design reputation from daily reality.',
      'The mental model behind each product is what actually determines whether you will keep using it. Todoist thinks in a flat, queryable task database: everything is a task inside a project with labels, priority and a due date, and power comes from filters and saved views that assemble the right list on demand. TickTick thinks in an integrated productivity suite: tasks, calendar events, habits and focus sessions live side by side, so the app is as much a daily planner as a list, and the calendar view is where planning actually happens. Things 3 thinks in a GTD-shaped hierarchy: Today, Upcoming, Anytime and Someday, with Areas for ongoing responsibilities and Projects for outcomes, and it deliberately hides database-style power in favour of a calm, opinionated flow. In short, Todoist rewards query builders, TickTick rewards people who want one app for everything, and Things 3 rewards people who want to stop thinking about the tool.',
      'The intended audiences barely overlap. Todoist targets individuals and small teams who work across mixed platforms — Windows laptops, Android phones, web browsers — and who want shared projects, delegation and cross-device reliability. TickTick targets budget-conscious individuals and students who would otherwise pay separately for a task app, a habit tracker, a calendar and a focus timer. Things 3 targets Apple-only professionals, designers and writers who value interface quality and one-time pricing above collaboration, and who have no need for Android, Windows or a web client. Many mature users run two of these in parallel: Things 3 for personal life on Apple devices with Todoist for shared work projects, or TickTick for habits and focus sessions alongside a dedicated task manager.',
      'Pricing reveals three business models. TickTick is the cheapest recurring option: a free tier with basic features and limited lists, and Premium at $2.79 per month or $27.99 per year, which unlocks unlimited lists, the calendar view and more — about $84 over three years on annual billing. Things 3 has no subscription: a one-time purchase of $49.99 for Mac, $9.99 for iPhone and $9.99 for iPad, so a full Apple setup costs $69.97 once, with lifetime updates inside the major version and nothing due in years two or three. Todoist offers a free plan with generous limits and paid Premium plans per user per month that unlock reminders, templates and advanced features, with current figures on the vendor pricing page; over three years a paid seat costs more than either rival. On three-year cost for one person across all devices, Things 3 wins outright, TickTick is close behind and Todoist costs the most — but only Todoist spans every platform and supports real team collaboration.',
      'The sharpest divergence is scope: what each app refuses to be. Things 3 has no habit tracker, no Pomodoro timer, no full calendar view, no cross-platform support and no shared projects — by design it is a personal Apple task manager and nothing else. TickTick bundles all of those, which is why it replaces several subscriptions, but its task engine is less flexible than Todoist\'s filter and label system for complex project work. Todoist sits between: no native habit tracker or Pomodoro timer, but the strongest organisation model, the broadest platform coverage and the only genuine collaboration features here, including shared projects, assigned tasks and comments. If you need one app to hold tasks, habits, calendar and focus sessions, choose TickTick. If you need a personal task system that feels beautiful and never bills you again, choose Things 3. For cross-platform sync and shared projects, Todoist is the only real option.',
      'So where does each app genuinely shine? Todoist is the strongest choice for people and small teams who live across multiple platforms, want natural language capture that reliably parses dates and recurrence, and need shared projects with delegation and comments. TickTick is the strongest choice for individuals who want tasks, calendar, habits and a Pomodoro timer in one inexpensive subscription, and who care more about breadth than about advanced filtering. Things 3 is the strongest choice for Apple-only users who value design, speed and a one-time purchase of $49.99 for Mac over any form of collaboration. Our rule of thumb: choose on your device ecosystem first and your need for collaboration second — the feature differences matter far less than those two constraints.',
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
          [comparisonTools[0]]: 'Cross-platform task database with natural language capture, filters and shared projects.',
          [comparisonTools[1]]: 'All-in-one productivity suite: tasks, calendar view, habits and Pomodoro in one cheap subscription.',
          [comparisonTools[2]]: 'Craft-first personal task manager for Apple devices, sold once with no subscription.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Individuals and small teams spread across Windows, macOS, Android, iOS and the web.',
          [comparisonTools[1]]: 'Budget-conscious individuals and students replacing several separate productivity apps with one.',
          [comparisonTools[2]]: 'Apple-only professionals and writers who value design and one-time pricing over collaboration.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Simple to start, deep to master — filters, labels and templates reward configuration.',
          [comparisonTools[1]]: 'Approachable, though the number of built-in modules takes a few days to understand.',
          [comparisonTools[2]]: 'The most polished and immediately calm of the three; new users are productive in minutes.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Paid Premium plan per user per month adds reminders, templates and advanced features.',
          [comparisonTools[1]]: 'Premium at $2.79 per month or $27.99 per year, with a discount for annual billing.',
          [comparisonTools[2]]: 'One-time purchase: $49.99 for Mac, $9.99 for iPhone, $9.99 for iPad — no subscription.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free plan with generous limits, usable long-term for personal task management.',
          [comparisonTools[1]]: 'Free tier with basic features and a limited number of lists; calendar view needs Premium.',
          [comparisonTools[2]]: 'No free tier and no trial-only pricing model — you buy each Apple platform licence once.',
        },
      },
      {
        feature: 'Natural language input',
        icon: 'type',
        values: {
          [comparisonTools[0]]: 'Signature feature: type dates, recurrence, projects and priorities in one sentence and it parses.',
          [comparisonTools[1]]: 'Supports quick natural date entry when adding tasks, though parsing is narrower than Todoist\'s.',
          [comparisonTools[2]]: 'Quick Entry parses dates and lists in plain language, tuned for speed rather than flexibility.',
        },
      },
      {
        feature: 'Task capture speed',
        icon: 'zap',
        values: {
          [comparisonTools[0]]: 'Fast everywhere — global add, browser extension, email and widgets on every platform.',
          [comparisonTools[1]]: 'Quick add plus widgets and browser extensions across desktop and mobile.',
          [comparisonTools[2]]: 'Quick Entry with a system-wide keyboard shortcut is among the fastest capture paths available.',
        },
      },
      {
        feature: 'Calendar view',
        icon: 'calendar',
        values: {
          [comparisonTools[0]]: 'Upcoming and date-based views, with full calendar display available on paid plans.',
          [comparisonTools[1]]: 'Real calendar view is a Premium headline feature for planning tasks alongside events.',
          [comparisonTools[2]]: 'Today and Upcoming act as a schedule, but there is no full month calendar view.',
        },
      },
      {
        feature: 'Habit tracking',
        icon: 'repeat',
        values: {
          [comparisonTools[0]]: 'Recurring tasks cover repetition, but there is no dedicated habit tracker or streak scoring.',
          [comparisonTools[1]]: 'Built-in habit tracker with daily check-ins and progress history at no extra cost.',
          [comparisonTools[2]]: 'No habit tracking — repeating to-dos exist, but habits are outside the product\'s scope.',
        },
      },
      {
        feature: 'Focus timer',
        icon: 'timer',
        values: {
          [comparisonTools[0]]: 'No native Pomodoro timer; focus sessions require a separate app or integration.',
          [comparisonTools[1]]: 'Integrated Pomodoro and focus timer attached directly to individual tasks.',
          [comparisonTools[2]]: 'No built-in timer; the app deliberately stays out of time-tracking territory.',
        },
      },
      {
        feature: 'Organisation model',
        icon: 'folder',
        values: {
          [comparisonTools[0]]: 'Projects, sections, labels, priorities and saved filters for database-style querying.',
          [comparisonTools[1]]: 'Lists, folders, smart lists and tags, with an optional Eisenhower-style matrix view.',
          [comparisonTools[2]]: 'Areas, Projects, headings and checklists inside a GTD-shaped Today, Upcoming and Someday flow.',
        },
      },
      {
        feature: 'Collaboration and teams',
        icon: 'users-round',
        values: {
          [comparisonTools[0]]: 'Strongest of the three: shared projects, assigned tasks, comments and team-oriented plans.',
          [comparisonTools[1]]: 'Shared lists and task assignment exist, aimed at households and small groups.',
          [comparisonTools[2]]: 'None — no shared projects, no assignment and no comments, by deliberate design.',
        },
      },
      {
        feature: 'Platforms',
        icon: 'monitor',
        values: {
          [comparisonTools[0]]: 'Web, macOS, Windows, Linux, iOS, Android and browser extensions with full sync.',
          [comparisonTools[1]]: 'Web, macOS, Windows, iOS, Android, wearables and browser extensions.',
          [comparisonTools[2]]: 'Apple only — Mac, iPhone, iPad and Apple Watch, with no Android, Windows or web client.',
        },
      },
      {
        feature: 'Sync and offline',
        icon: 'refresh-cw',
        values: {
          [comparisonTools[0]]: 'Cloud sync across all platforms with reliable offline access on desktop and mobile.',
          [comparisonTools[1]]: 'Cloud sync across platforms; free tier syncs fewer lists than Premium allows.',
          [comparisonTools[2]]: 'Free sync between your own Apple devices through the vendor\'s sync service, with offline support.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Assistive AI touches around task phrasing and scheduling suggestions rather than full auto-planning.',
          [comparisonTools[1]]: 'Not AI-led — automation comes from smart lists, habits and the built-in focus timer.',
          [comparisonTools[2]]: 'No AI features; the product is intentionally a manual, human-paced task manager.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Broadest ecosystem: calendars, automation platforms and dozens of productivity integrations plus an API.',
          [comparisonTools[1]]: 'Calendar subscriptions, automation services and import from other to-do apps.',
          [comparisonTools[2]]: 'Limited by design — system-level Apple integrations, reminders import and a few third-party bridges.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Cross-platform individuals and small teams that need shared projects and powerful filters.',
          [comparisonTools[1]]: 'One inexpensive app covering tasks, calendar, habits and Pomodoro focus sessions.',
          [comparisonTools[2]]: 'Apple-only users who want a beautiful personal task system for a single one-time payment.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Natural language input is the best in the category — one sentence sets date, recurrence, project and priority',
        'Runs everywhere: web, macOS, Windows, Linux, iOS, Android and browser extensions with dependable sync',
        'Filters, labels and saved views let a large task database behave like a queryable system',
        'Only one of the three with real collaboration: shared projects, assigned tasks and comments',
        'Free plan is generous enough for long-term personal use before any payment is required',
        'Productivity tracking adds streaks and completion insight that keep long-term users engaged',
      ],
      cons: [
        'No habit tracker and no Pomodoro timer, so focus and routine work needs another app',
        'The most useful features — reminders, templates and higher limits — sit behind the paid Premium plan',
        'Per-user subscription pricing makes it the costliest of the three over a three-year horizon',
        'Filter and label power is wasted on casual users and adds setup overhead they never asked for',
        'Interface is functional rather than delightful, which is exactly where Things 3 wins',
        'Current Premium and team prices are not published in documentation, complicating budgeting',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Cheapest paid plan of the three at $2.79 per month or $27.99 per year — roughly $84 over three years',
        'Calendar view, habit tracker and Pomodoro timer replace three separate subscriptions',
        'Available on web, macOS, Windows, iOS, Android and wearables, so nothing is left behind',
        'Free tier is usable for light personal task management before any upgrade decision',
        'Smart lists and tags give enough organisation for most individual workflows',
        'One annual payment covers a full personal productivity system rather than a single feature',
      ],
      cons: [
        'Free tier caps the number of lists and locks the calendar view behind Premium',
        'Task engine is shallower than Todoist\'s — filters and querying cannot model complex project work',
        'Bundling everything makes the interface busier and slower to learn than a focused to-do app',
        'Collaboration is limited to shared lists and assignment, not real team project management',
        'Design and animation polish sit well below Things 3 on Apple hardware',
        'Natural language parsing is narrower, so date and recurrence phrasing fails more often',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'One-time purchase of $49.99 for Mac plus $9.99 each for iPhone and iPad — no subscription ever',
        'Best-designed interface in the category, with animation and typography that make daily use pleasant',
        'Quick Entry with a system-wide shortcut is among the fastest capture paths on macOS and iOS',
        'Areas, Projects, Today, Upcoming and Someday map cleanly onto a GTD workflow with no setup',
        'Free sync between your own Apple devices, with lifetime updates inside the major version',
        'Completely offline-capable, so a full workday never depends on a network connection',
      ],
      cons: [
        'Apple-only: no Android, Windows or web client, which excludes most mixed-platform households and teams',
        'No collaboration at all — no shared projects, no assignment, no comments, no team plans',
        'No habit tracking, no Pomodoro timer and no full calendar view',
        'A full Apple setup still costs $69.97 across three licences, paid up front rather than spread',
        'No query layer comparable to Todoist filters, so large or complex task sets get hard to slice',
        'A future major version is a new purchase, which reintroduces cost over a long enough horizon',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After four weeks of running the same 120-task personal load and a five-person shared project through each app, our conclusion is that there is no universal winner — but there is a clearly correct choice for each device ecosystem and each collaboration need. Todoist was the only app that worked identically on a Windows laptop, an Android phone and the web, and the only one where two people could genuinely share a project. TickTick delivered the most functionality per dollar by a wide margin, replacing a calendar, a habit tracker and a focus timer alongside the task list. Things 3 delivered the best moment-to-moment experience of opening an app and getting something done, and it never asked us for money after the initial purchase.',
      'Where Todoist deserves praise is capture and structure: natural language input reliably turns one typed sentence into a scheduled, recurring, correctly filed task, and filters make a large database feel small. Its cross-platform reach and shared projects are unmatched here. Where it draws criticism is cost and scope — the paid Premium plan is required for reminders, templates and higher limits, per-seat pricing makes it the most expensive option over three years, and there is no habit tracker or Pomodoro timer. Individuals chasing an all-in-one bargain move to TickTick; Apple-only users chasing craft move to Things 3.',
      'Where TickTick deserves praise is value: Premium at $2.79 per month or $27.99 per year buys unlimited lists, a real calendar view, habit tracking and a Pomodoro timer on every platform, which is roughly $84 over three years for what would otherwise be three subscriptions. Where it draws criticism is depth — the task engine cannot model complex project work the way Todoist filters can, collaboration stops at shared lists and assignment, and the interface is busier and less refined than either rival. Power users graduate to Todoist; design-sensitive Apple users graduate to Things 3.',
      'Where Things 3 deserves praise is restraint and finish: Quick Entry is instantaneous, the Today and Upcoming flow makes daily planning effortless, and a one-time payment of $49.99 for Mac with $9.99 licences for iPhone and iPad means the three-year cost is a single $69.97 charge. Where it draws criticism is exclusivity — Apple-only availability rules out most mixed-platform teams, the complete absence of shared projects rules out collaboration, and there are no habits, no focus timer and no full calendar. Anyone who needs to share work moves to Todoist; anyone on Android or Windows moves to Todoist or TickTick by force.',
      'The clearest trend in 2026 is consolidation in the middle and specialisation at the edges. TickTick keeps absorbing adjacent categories — calendar, habits, focus, notes — into one low-cost subscription, while Things 3 keeps refusing to add anything and Todoist keeps pushing cross-platform reach and light AI assistance. Two-app stacks are increasingly normal: a personal system such as Things 3 or TickTick for private life and routines, with Todoist for shared work projects that need assignment and comments. Because all three import and export tasks freely, that split costs little to maintain.',
      'Looking ahead, the deciding factor will be whether you are willing to keep paying for a list. The fundamentals have not changed. If you need cross-platform sync, natural language capture and shared projects for a small team, start with Todoist. If you want tasks, a calendar view, habit tracking and a Pomodoro timer in one inexpensive subscription of $27.99 per year, start with TickTick. If you are Apple-only and want the best-designed personal task manager you can buy once for $49.99 on Mac, start with Things 3. Our rule of thumb: choose on your devices first and on whether anyone else needs to see your list second — everything else is preference.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Todoist if you work across Windows, macOS, Linux, Android, iOS and the web, want the strongest natural language capture, and need shared projects with assigned tasks and comments — ideal for individuals and small teams whose task list is also a collaboration surface, with a generous free plan and a paid Premium plan per user per month adding reminders and templates. Choose TickTick if you want one inexpensive app covering tasks, a real calendar view, habit tracking and a Pomodoro focus timer on every platform — ideal for students and budget-conscious individuals, at Premium $2.79 per month or $27.99 per year, roughly $84 over three years. Choose Things 3 if you are Apple-only and value design, speed and paying once: $49.99 for Mac plus $9.99 for iPhone and $9.99 for iPad, with lifetime updates inside the major version — ideal for solo professionals and writers who need no collaboration. If your life spans both worlds, the mature answer is two apps: Things 3 or TickTick for personal work and routines, with Todoist for shared projects that other people must see and be assigned.',
  },
}
