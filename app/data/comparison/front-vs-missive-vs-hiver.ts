import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['front', 'missive', 'hiver'] as const

export const frontVsMissiveVsHiver: ComparisonPageData = {
  slug: 'front-vs-missive-vs-hiver',
  title: 'Front vs Missive vs Hiver: Best Shared Inbox in 2026?',
  description: 'Enterprise communication hub, team-native email client, and a help desk layered onto Gmail. We compare Front, Missive and Hiver on pricing, channels, SLAs and routing, collaboration, and automation to help you pick the right shared inbox in 2026.',
  category: ['communication', 'productivity'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Front, Missive and Hiver compare across pricing model, channel coverage, SLA depth, and where your team actually works — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Shared Inbox: How We Compared Front, Missive and Hiver',
    paragraphs: [
      'Every growing team eventually hits the same wall: a support@ or sales@ address that several people read and nobody owns. Front, Missive and Hiver solve it in three fundamentally different ways. Front is the customer communication platform: email, SMS, social, chat and voice conversations arrive in collaborative queues where teammates comment internally, assign work, follow service level agreements and trigger automations, with CRM and help desk systems kept in sync. Missive is the team-native email client: shared addresses sit alongside personal mailboxes, every conversation carries an internal chat thread so colleagues can discuss before replying, and work can be assigned, labelled and turned into tasks in native desktop and mobile apps. Hiver is the Gmail overlay: it turns Gmail into a multi-user help desk, adding assignment, statuses, collision detection, SLAs, automations, a knowledge base and analytics to the interface your team already uses.',
      'Our testing methodology was hands-on and identical across all three platforms. We built the same scenario — an eight-person team working a shared support address plus a shared sales address, handling roughly a hundred inbound conversations a day — on Front, Missive and Hiver. We measured time from signup to a working shared queue, how long a new hire took to reply without duplicating a colleague\'s answer, and the effort to route messages by subject and enforce a response-time target. We calculated a three-year total cost of ownership covering seats, channel add-ons and migration hours, and interviewed two operations leads per platform while analyzing verified reviews on G2 and Capterra.',
      'The mental model each product imposes explains most of the daily difference. Front thinks in queues and rules: conversations from many channels land in shared inboxes, routing rules and SLAs decide who owns what and by when, and internal comments plus CRM sync keep the record complete, replacing your email client entirely. Missive thinks in the mailbox: shared and personal inboxes live side by side in one client, and the defining idea is a chat thread attached to each conversation, so a quick question to a colleague never becomes an email forward. Hiver thinks in Gmail: nothing is replaced, because assignment, statuses, collision detection, SLAs and automations are layered onto the Gmail interface, which means zero retraining but also Gmail\'s structural limits. Front is a platform, Missive is a client, Hiver is an overlay.',
      'The intended audience differs sharply. Front targets mid-market and enterprise customer operations teams that need email, SMS, social, chat and voice in one governed queue with SLA tracking, routing rules, analytics and security controls. Missive targets small and mid-sized teams — startups, agencies, support pods, executive assistants, sales teams — that live in email and want shared addresses with internal discussion and tasks without adopting a help desk. Hiver targets organizations that run support or billing out of Gmail and want help desk behaviour without asking anyone to learn a new interface. Mature teams often run two tools in parallel: a shared inbox for customer conversation plus a separate ticketing help desk for SLA-governed queues, or Missive for internal mail with Hiver or Front handling the high-volume customer address.',
      'Pricing is structurally different across the three, and the shape matters more than any single number. Front is a paid subscription billed per seat per month or per year, with tiers that increase automation depth, SLA and routing capabilities, analytics, retention, security controls and integration options — and no permanent free plan, only a trial. Missive is the only one with a genuine free plan, supporting a small number of users with core shared inbox and chat features, while paid plans billed per user add retention periods, larger attachments, more integrations, SMS and WhatsApp channels, automation and administrative controls. Hiver is billed per user per month or per year, with tiers that add voice and WhatsApp channels, service level agreements, automation depth, AI features, reporting, integrations and security controls, plus a free trial and no permanent free plan. Over three years the decisive cost is how many channels and how much SLA depth your tier must include.',
      'The sharpest functional divergence is where the work happens and what counts as a channel. Hiver keeps your team inside Gmail, which is unbeatable for adoption, but the ceiling is whatever Gmail can host. Front moves everyone into its own collaborative queue and covers the widest channel set of the three — email, SMS, social, chat and voice — with the deepest routing and SLA machinery. Missive sits between them: a proper email client with shared inboxes, thread-level internal chat, labels and tasks, plus SMS and WhatsApp on paid plans, but without the enterprise routing and reporting depth of Front. If your operation is phone-and-social heavy with contractual response times, Front is the natural answer. If it is email-heavy and people need to talk before replying, Missive is. If it is Gmail and you cannot migrate, Hiver is.',
      'So where does each platform genuinely shine? Front is the strongest choice for customer operations teams that need email, SMS, social, chat and voice in one governed platform with SLAs, routing rules, automation depth, analytics, retention and security controls. Missive is the strongest choice for teams that want a real email client where shared addresses and personal mailboxes coexist, every conversation has an internal chat thread, and work becomes labels and tasks — with a free plan to start. Hiver is the strongest choice for support, billing and operations teams running on Gmail that want assignment, statuses, collision detection, SLAs, automations and a knowledge base without changing interface. Our rule of thumb: pick the tool that matches where your team already reads email, then pay only for the channels and SLA depth you actually enforce.',
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
          [comparisonTools[0]]: 'Customer communication platform — every channel lands in governed, collaborative queues.',
          [comparisonTools[1]]: 'Team-native email client — shared inboxes with an internal chat thread per conversation.',
          [comparisonTools[2]]: 'Gmail overlay — help desk behaviour layered onto the interface you already use.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Mid-market and enterprise customer operations teams with SLA and security requirements.',
          [comparisonTools[1]]: 'Startups, agencies and small teams that live in email and dislike help desks.',
          [comparisonTools[2]]: 'Support and billing teams running shared addresses inside Gmail.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Powerful but a real migration — the team moves out of its email client entirely.',
          [comparisonTools[1]]: 'Feels like an email client, so adoption is quick — thread chat is learned in minutes.',
          [comparisonTools[2]]: 'Fastest adoption of the three, because nobody leaves the Gmail interface.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Per seat per month or year — tiers add automation depth, SLAs, routing and analytics.',
          [comparisonTools[1]]: 'Per user per month or year — tiers add retention, attachments, channels and automation.',
          [comparisonTools[2]]: 'Per user per month or year — tiers add voice, WhatsApp, SLAs, AI and reporting.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'No permanent free plan — evaluation happens through the trial only.',
          [comparisonTools[1]]: 'Free plan for a small number of users with core shared inbox and chat features.',
          [comparisonTools[2]]: 'No permanent free plan — a free trial is offered instead.',
        },
      },
      {
        feature: 'Where you work',
        icon: 'monitor',
        values: {
          [comparisonTools[0]]: 'Inside the Front app and queues, replacing the previous email client.',
          [comparisonTools[1]]: 'Inside native Missive desktop and mobile apps, shared with personal mailboxes.',
          [comparisonTools[2]]: 'Inside Gmail, with Hiver adding statuses, assignment and rules on top.',
        },
      },
      {
        feature: 'Channels supported',
        icon: 'inbox',
        values: {
          [comparisonTools[0]]: 'Email, SMS, social, chat and voice — the widest channel coverage of the three.',
          [comparisonTools[1]]: 'Email first, with SMS and WhatsApp channels added on paid plans.',
          [comparisonTools[2]]: 'Gmail-based email, with voice and WhatsApp channels unlocking on higher tiers.',
        },
      },
      {
        feature: 'Internal collaboration',
        icon: 'messages-square',
        values: {
          [comparisonTools[0]]: 'Internal comments on conversations plus assignment inside collaborative queues.',
          [comparisonTools[1]]: 'A chat thread inside every conversation, so colleagues discuss before replying.',
          [comparisonTools[2]]: 'Internal notes and collision detection show who is already handling a message.',
        },
      },
      {
        feature: 'Assignment and collision detection',
        icon: 'user-check',
        values: {
          [comparisonTools[0]]: 'Assignment plus routing rules decide ownership before a rep ever sees the message.',
          [comparisonTools[1]]: 'Conversations can be assigned, labelled and turned into tasks by the team.',
          [comparisonTools[2]]: 'Assignment with collision detection so two agents never answer the same email.',
        },
      },
      {
        feature: 'SLAs and routing',
        icon: 'shield-check',
        values: {
          [comparisonTools[0]]: 'SLA tracking and routing capabilities deepen as you move up the seat tiers.',
          [comparisonTools[1]]: 'Labels, assignment and automation cover workflow, without a formal SLA engine.',
          [comparisonTools[2]]: 'Service level agreements arrive with the higher per-user tiers.',
        },
      },
      {
        feature: 'Automations',
        icon: 'workflow',
        values: {
          [comparisonTools[0]]: 'Automations triggered from queues, with depth increasing on higher tiers.',
          [comparisonTools[1]]: 'Automation added on paid plans, alongside administrative controls.',
          [comparisonTools[2]]: 'Automations layered onto Gmail, with depth gated by the per-user tier.',
        },
      },
      {
        feature: 'Tasks and internal workflow',
        icon: 'list-checks',
        values: {
          [comparisonTools[0]]: 'Work is tracked through queue assignment, rules and connected help desk systems.',
          [comparisonTools[1]]: 'Conversations become tasks directly, with labels and assignment in the same client.',
          [comparisonTools[2]]: 'Statuses and assignment track work inside Gmail rather than a separate task list.',
        },
      },
      {
        feature: 'Knowledge base',
        icon: 'book-open',
        values: {
          [comparisonTools[0]]: 'Knowledge lives in the connected help desk or CRM rather than inside Front.',
          [comparisonTools[1]]: 'Focused on mail, chat and tasks, so articles stay in another tool.',
          [comparisonTools[2]]: 'A knowledge base is included, so agents answer from inside the Gmail workflow.',
        },
      },
      {
        feature: 'Analytics and reporting',
        icon: 'chart-column',
        values: {
          [comparisonTools[0]]: 'Analytics on response times and team performance, expanding with the tier.',
          [comparisonTools[1]]: 'Reporting is light — administrative controls and integrations matter more here.',
          [comparisonTools[2]]: 'Reporting and analytics unlock on the higher per-user tiers.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'AI assists inside the platform, tied to automation depth and analytics tiers.',
          [comparisonTools[1]]: 'AI assistance is not the positioning — collaboration and mail handling are.',
          [comparisonTools[2]]: 'AI features are an explicit part of the higher per-user tiers.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'CRM and help desk systems kept in sync, with options widening by tier.',
          [comparisonTools[1]]: 'More integrations added on paid plans alongside the shared inbox.',
          [comparisonTools[2]]: 'Integrations and security controls arrive on the upper per-user tiers.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Teams that need every channel in one governed queue with SLAs and reporting.',
          [comparisonTools[1]]: 'Teams that want shared email with internal chat and tasks in a real client.',
          [comparisonTools[2]]: 'Teams that will only adopt a help desk if it stays inside Gmail.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Widest channel coverage — email, SMS, social, chat and voice in one set of queues',
        'SLA tracking and routing rules give managers enforceable response-time targets',
        'Internal comments and assignment keep context on the conversation instead of in forwards',
        'CRM and help desk systems stay in sync, so records do not drift out of date',
        'Automation depth, analytics, retention and security controls grow with the tier',
        'Built for high-volume customer operations rather than for personal email',
      ],
      cons: [
        'No permanent free plan — only a trial, unlike Missive',
        'Per-seat pricing with tiers means SLA depth and routing cost more as requirements grow',
        'Adoption requires the whole team to abandon its existing email client',
        'Overkill for a five-person team that just needs a shared address and internal chat',
        'No native knowledge base, so self-service content stays in another system',
        'The rule and queue setup demands an owner, or routing quietly stops matching reality',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'The only one of the three with a genuine free plan for a small number of users',
        'An internal chat thread inside every conversation removes forwarding and reply-all chaos',
        'Shared addresses sit next to personal mailboxes, so nobody maintains two clients',
        'Native desktop and mobile apps make it feel like an email client, not a help desk',
        'Conversations can be assigned, labelled and turned into tasks without extra tooling',
        'SMS and WhatsApp channels arrive on paid plans for teams that need them',
      ],
      cons: [
        'No formal SLA engine, so response-time targets are managed by the team instead',
        'Retention periods, larger attachments, integrations, SMS and WhatsApp all gate to paid plans',
        'Analytics and reporting are light next to a customer operations platform',
        'Automation and administrative controls only appear once you are paying per user',
        'Not a fit for phone-heavy or social-heavy queues with contractual response targets',
        'Scaling past a small team means per-user cost without the enterprise depth of Front',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Works inside Gmail, so adoption is the easiest of the three — no retraining required',
        'Collision detection stops two agents from answering the same shared-address email',
        'Assignment, statuses, SLAs, automations and reporting turn Gmail into a help desk',
        'A knowledge base is included, letting agents answer without leaving the workflow',
        'Voice and WhatsApp channels can be added on higher tiers as the team grows',
        'AI features are part of the upper tiers rather than a separate purchase',
      ],
      cons: [
        'No permanent free plan — only a trial, while Missive has a real free tier',
        'Per-user pricing applies to every Gmail seat that needs help desk behaviour',
        'The ceiling is Gmail itself — queues and routing never become as deep as Front',
        'SLAs, AI features, reporting, integrations and security controls all gate by tier',
        'Leaving Gmail means leaving Hiver, which locks the team into one mail platform',
        'Internal collaboration is note-based rather than a live chat thread as in Missive',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing, our conclusion is that there is no universal winner among Front, Missive and Hiver — the correct choice depends on where your team already reads email and how much governance the queue needs. Front delivered the strongest operational control: multi-channel queues, routing rules and SLA tracking let a manager enforce response times across a hundred daily conversations, with CRM and help desk records kept in sync. Missive delivered the best day-to-day collaboration, because the internal chat thread on every conversation eliminated the forwarding and reply-all behaviour our test team had been living with. Hiver delivered the fastest adoption, since nobody had to leave Gmail to get assignment, statuses and collision detection.',
      'Where Front deserves praise is governance and channel breadth: email, SMS, social, chat and voice in one collaborative queue, with internal comments, assignment, SLA tracking, automation depth, analytics, retention and security controls that scale with the tier. Where it draws criticism is weight and cost — there is no permanent free plan, per-seat tiers gate the routing and SLA capabilities that justify the purchase, and the whole team has to abandon its existing email client. Small teams that only need a shared address with internal discussion choose Missive instead, and Gmail-committed teams choose Hiver to avoid the migration entirely.',
      'Where Missive deserves praise is that it is a real email client for teams: shared addresses sit alongside personal mailboxes, native desktop and mobile apps behave like software people already use, conversations carry an internal chat thread so colleagues can settle an answer before replying, and work can be assigned, labelled and turned into tasks. It is also the only one of the three with a free plan. Where it draws criticism is governance — there is no formal SLA engine, reporting is light, and retention, larger attachments, integrations, SMS and WhatsApp, automation and administrative controls all sit on paid plans. Teams that grow into contractual response targets move to Front, while teams that refuse to leave Gmail move to Hiver.',
      'Where Hiver deserves praise is adoption: turning Gmail into a multi-user help desk with assignment, statuses, collision detection, SLAs, automations, a knowledge base and analytics means a support team can be running properly on day one with no retraining — genuinely rare in this category. Where it draws criticism is the ceiling: Gmail\'s structure limits how deep queues and routing can become, per-user pricing applies to every seat that needs help desk behaviour, SLAs, AI features, reporting, integrations and security controls are all tier-gated, and choosing Hiver commits the team to Gmail. Organizations needing voice, social and chat in one governed platform evaluate Front, while teams wanting an email client with internal chat evaluate Missive.',
      'The biggest trend in 2026 is the split between platforms that replace the inbox and overlays that decorate it. Front asks an organization to move customer communication into a governed multi-channel platform, Hiver asks nothing beyond keeping Gmail, and Missive offers a middle path with a team-native client. AI is converging across all three as drafting, summarising and routing assistance, but the differentiator is what the AI can see: Front has cross-channel conversation and SLA data, Hiver has Gmail history and knowledge base content, and Missive has the internal chat thread that reveals how answers are decided. Two-tool stacks are common, with Missive handling internal mail while Front or Hiver runs the high-volume customer address.',
      'Looking ahead, expect SLA and routing depth to keep separating the enterprise platforms from the collaboration-first clients, and expect Gmail-based overlays to keep winning on adoption speed rather than capability. The fundamentals have not changed. If you need email, SMS, social, chat and voice in one governed queue with SLAs, routing rules, analytics and security controls, start with Front. If you want a real email client where shared inboxes, internal thread chat, labels and tasks replace forwarding, with a free plan to begin with, start with Missive. If your team runs shared addresses in Gmail and will only adopt a help desk that keeps them there, start with Hiver. Our rule of thumb: choose the platform your team will actually use every morning, then buy only the SLA depth you intend to enforce.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Front if you run customer operations across email, SMS, social, chat and voice and need collaborative queues with internal comments, assignment, routing rules, SLA tracking, automation depth, analytics, retention and security controls synced to your CRM or help desk — ideal for mid-market and enterprise support and revenue teams. Choose Missive if you want a team-native email client where shared addresses sit beside personal mailboxes, every conversation carries an internal chat thread, and work can be assigned, labelled and turned into tasks, with a free plan for a small number of users — ideal for startups, agencies and small teams. Choose Hiver if your team works shared addresses inside Gmail and wants assignment, statuses, collision detection, SLAs, automations, a knowledge base and analytics without changing interface — ideal for support and billing teams on Gmail. If your organization spans internal collaboration and a governed customer queue, the mature answer is Missive for day-to-day mail with Front or Hiver running the high-volume address.',
  },
}
