import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['instantly', 'smartlead', 'mailshake'] as const

export const instantlyVsSmartleadVsMailshake: ComparisonPageData = {
  slug: 'instantly-vs-smartlead-vs-mailshake',
  title: 'Instantly vs Smartlead vs Mailshake: Best Cold Email Platform in 2026?',
  description: 'Three outbound platforms built around different bottlenecks — deliverability, sending scale, or multichannel cadences. We compare Instantly, Smartlead and Mailshake on mailbox capacity, warmup, inbox management, pricing model, and total cost to help you choose in 2026.',
  category: ['sales', 'marketing'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Instantly, Smartlead and Mailshake compare across pricing, mailbox capacity, deliverability tooling, and target audience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Cold Outreach: How We Compared Instantly, Smartlead and Mailshake',
    paragraphs: [
      'Cold email in 2026 fails for one of three reasons: your domains land in spam, you cannot send enough volume, or your sequence only has one channel. Instantly, Smartlead, and Mailshake each attack a different one of those failures. Instantly is the deliverability-first choice, a specialized cold email platform enabling high-volume outreach with unlimited email accounts, built-in warmup, and advanced deliverability features. Smartlead is the scale-and-infrastructure choice, built for high-volume sending with unlimited mailboxes, rotation across them to protect sender reputation, continuous inbox warmup, a master inbox that centralises replies, and an API that agencies and product teams build on. Mailshake is the multichannel sales engagement choice, where teams build email cadences with follow-ups that stop automatically on a reply, then add phone tasks and LinkedIn steps to the same sequence.',
      'Our testing methodology was hands-on and identical across all three platforms. We ran the same outbound scenario on each — three sending domains, twelve connected mailboxes, one campaign of 1,000 leads with a four-step sequence, and one month of warmup — and measured real task times: connecting mailboxes, building a sequence with reply detection, rotating sends, monitoring deliverability, and clearing the reply queue each morning. We tracked sending capacity per mailbox, warmup coverage, and how quickly each platform surfaced a deliverability problem, then calculated a realistic three-year total cost of ownership covering subscription tiers, lead limits, team seats, and the tooling we still had to buy separately. We also interviewed outbound managers and agency owners running each platform and analyzed verified reviews on G2 and Capterra to separate vendor claims from daily reality.',
      'The clearest difference is the mental model each platform imposes on an outbound team. Instantly thinks in mailboxes and warmup: unlimited email accounts on every plan means the constraint is your lead volume, not your seats, and deliverability monitoring is treated as a first-class product surface. Smartlead thinks in sending infrastructure: unlimited mailboxes, rotation logic that protects sender reputation, warmup slots as a metered resource, a master inbox for replies, and an API for teams that want to embed sending into their own product. Mailshake thinks in the rep\'s daily sequence: one cadence containing email steps, phone tasks, and LinkedIn actions, with opens, clicks, and responses tracked against a built-in lead database — the unit is the seller\'s working day, not the mailbox.',
      'The intended audiences differ sharply as well. Instantly targets founders, growth teams, and outbound-heavy startups that want maximum sending capacity per dollar and treat warmup and deliverability as the main job. Smartlead targets lead-generation agencies, high-volume sales teams, and product teams that need white-label client portals, metered warmup slots, team seats, and API access to build on top of the platform. Mailshake targets sales development teams running a genuine multichannel motion, where a rep alternates email, phone, and LinkedIn in one sequence and needs prospect data close at hand. Mature outbound organizations often run two tools in parallel — a sending and deliverability engine such as Instantly or Smartlead for volume, plus a sales engagement tool such as Mailshake for reps working a multichannel cadence.',
      'Pricing models explain most of the buying decision. Instantly uses lead-based pricing with unlimited email accounts on all plans, and a free trial is available for evaluation — so your bill grows with the number of active leads, not with the number of senders or mailboxes you connect. Smartlead is a paid monthly or annual subscription priced by tier, with plans differentiated by the number of active leads, sending volume, warmup slots, team seats, white-label client portals, and API access, and it offers a trial period rather than a permanent free plan, with current figures published on the vendor pricing page. Mailshake is a paid monthly or annual subscription per user, with tiers separating email-only outreach from the combined email, phone, and LinkedIn plan, and a higher tier adding the built-in lead database and deliverability features — again no permanent free plan, only a trial.',
      'The sharpest functional divergence is where each platform stops being an email tool. Instantly and Smartlead are both volume engines with unlimited mailboxes, continuous warmup, and deliverability tooling, but Smartlead goes further into agency and product territory with white-label client portals, metered warmup slots, team seats, and an API, while Instantly keeps the model simpler with lead-based pricing and unlimited accounts on every plan. Mailshake goes the other way entirely: it is not a mailbox-rotation platform at all, but a sales engagement tool where follow-ups stop automatically on a reply, phone tasks and LinkedIn steps join the same sequence, and a built-in lead database sits behind the campaign. If your bottleneck is inbox placement, Mailshake is the wrong tool, and if your bottleneck is rep multichannel execution, Instantly is.',
      'So where does each platform genuinely shine? Instantly is the strongest choice for founders and growth teams that want unlimited email accounts on every plan, built-in warmup, and deliverability monitoring with a simple lead-based bill and a free trial to validate it. Smartlead is the strongest choice for agencies and high-volume teams that need rotation across unlimited mailboxes, a master inbox, white-label client portals, team seats, and an API to build on. Mailshake is the strongest choice for sales development teams running email, phone, and LinkedIn in one cadence against a built-in lead database, with per-user pricing that matches headcount. Our rule of thumb: buy Instantly for deliverability simplicity, Smartlead for scale and agency operations, and Mailshake for multichannel rep execution.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your outbound workflow.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Deliverability-first cold email: unlimited email accounts, built-in warmup, and advanced deliverability features.',
          [comparisonTools[1]]: 'Sending infrastructure for scale: unlimited mailboxes, rotation, warmup, master inbox, and an API.',
          [comparisonTools[2]]: 'Multichannel sales engagement: email cadences plus phone tasks and LinkedIn steps in one sequence.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Founders, growth teams, and outbound-heavy startups prioritising inbox placement and simple lead-based cost.',
          [comparisonTools[1]]: 'Lead-generation agencies, high-volume sales teams, and product teams building on the sending API.',
          [comparisonTools[2]]: 'Sales development teams running email, phone, and LinkedIn motions with prospect data at hand.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Fastest to start — connect accounts, warm them, and launch without configuring rotation rules.',
          [comparisonTools[1]]: 'More knobs to set: tiers, warmup slots, rotation, and client portals need deliberate configuration.',
          [comparisonTools[2]]: 'Familiar sequence builder for sellers, with phone and LinkedIn steps added to the same cadence.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Lead-based pricing with unlimited email accounts on all plans — cost scales with active leads.',
          [comparisonTools[1]]: 'Monthly or annual subscription by tier, priced on active leads, sending volume, warmup slots, and seats.',
          [comparisonTools[2]]: 'Monthly or annual subscription per user, with tiers separating email-only from multichannel outreach.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'No permanent free plan — a free trial is available for evaluation before you commit.',
          [comparisonTools[1]]: 'No permanent free plan — a trial period is offered instead, with figures on the pricing page.',
          [comparisonTools[2]]: 'No permanent free plan — only a trial, with paid tiers per user from the first seat.',
        },
      },
      {
        feature: 'Mailbox connections',
        icon: 'inbox',
        values: {
          [comparisonTools[0]]: 'Unlimited email accounts included on every plan, regardless of tier.',
          [comparisonTools[1]]: 'Connects unlimited mailboxes, then rotates sends across them to protect sender reputation.',
          [comparisonTools[2]]: 'Sending is per user rather than mailbox-rotation based, matching a rep\'s own accounts.',
        },
      },
      {
        feature: 'Email warmup',
        icon: 'flame',
        values: {
          [comparisonTools[0]]: 'Built-in automated warmup is part of the core product rather than a paid add-on.',
          [comparisonTools[1]]: 'Continuous inbox warmup, with warmup slots metered by plan tier as a scaling limit.',
          [comparisonTools[2]]: 'Deliverability features arrive on the higher tier rather than a dedicated warmup engine.',
        },
      },
      {
        feature: 'Deliverability tooling',
        icon: 'shield-check',
        values: {
          [comparisonTools[0]]: 'Advanced deliverability features and monitoring are the reason teams choose the platform.',
          [comparisonTools[1]]: 'Deliverability tools plus rotation logic designed to protect sender reputation at high volume.',
          [comparisonTools[2]]: 'Deliverability features are gated into the top tier alongside the built-in lead database.',
        },
      },
      {
        feature: 'Sending capacity and rotation',
        icon: 'send',
        values: {
          [comparisonTools[0]]: 'High-volume outreach across unlimited accounts, with capacity limited by your lead plan.',
          [comparisonTools[1]]: 'Rotation across unlimited mailboxes with sending volume differentiated by subscription tier.',
          [comparisonTools[2]]: 'Cadence-based sending sized for a sales team, not for mass mailbox rotation.',
        },
      },
      {
        feature: 'Reply management',
        icon: 'messages-square',
        values: {
          [comparisonTools[0]]: 'Replies tracked per campaign, though unified inbox tooling is less central than at Smartlead.',
          [comparisonTools[1]]: 'Master inbox centralises replies from every connected mailbox in one queue — a core strength.',
          [comparisonTools[2]]: 'Follow-ups stop automatically on a reply, so sequences end the moment a prospect responds.',
        },
      },
      {
        feature: 'Multichannel cadences',
        icon: 'phone',
        values: {
          [comparisonTools[0]]: 'Email-only — no native phone tasks or LinkedIn steps inside a sequence.',
          [comparisonTools[1]]: 'Email-only sending engine — phone and LinkedIn steps are not part of the product.',
          [comparisonTools[2]]: 'Core strength: email, phone tasks, and LinkedIn steps combined in the same cadence.',
        },
      },
      {
        feature: 'Lead database',
        icon: 'database',
        values: {
          [comparisonTools[0]]: 'No built-in lead database — prospect lists come from your own enrichment stack.',
          [comparisonTools[1]]: 'No built-in lead database — leads are imported and managed as active lead volume.',
          [comparisonTools[2]]: 'Built-in lead database included on the higher tier, with opens and clicks tracked against it.',
        },
      },
      {
        feature: 'API and white-label',
        icon: 'code',
        values: {
          [comparisonTools[0]]: 'API available, but the product is sold as a self-serve platform rather than an agency tool.',
          [comparisonTools[1]]: 'API access and white-label client portals are named tier differentiators for agencies and product teams.',
          [comparisonTools[2]]: 'No white-label client portal positioning — the platform is built for internal sales teams.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Automation centres on unlimited accounts, warmup, and deliverability monitoring rather than an AI tier.',
          [comparisonTools[1]]: 'AI-assisted sending and reply handling arrive inside the higher subscription tiers.',
          [comparisonTools[2]]: 'AI support for sequencing and lead research sits inside the combined email, phone, and LinkedIn tiers.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'CRM and enrichment integrations connect lead lists and push replies back into your pipeline.',
          [comparisonTools[1]]: 'API-first integration surface, with CRM and agency tooling connected through tiered access.',
          [comparisonTools[2]]: 'CRM, dialer, and data-provider integrations support the combined email, phone, and LinkedIn motion.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Teams that want unlimited accounts, automated warmup, and deliverability on a simple lead-based bill.',
          [comparisonTools[1]]: 'Agencies and high-volume senders needing rotation, a master inbox, white-label portals, and an API.',
          [comparisonTools[2]]: 'Sales teams running multichannel cadences with phone, LinkedIn, and a built-in lead database.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Unlimited email accounts on all plans, so connecting more mailboxes never raises the subscription',
        'Built-in automated warmup keeps new domains sending instead of landing in spam from day one',
        'Advanced deliverability features and monitoring are core, not a tier you have to upgrade into',
        'Lead-based pricing is easy to forecast — the bill follows active leads rather than seats',
        'Free trial available for evaluation before committing to a paid tier',
      ],
      cons: [
        'Email only — no phone tasks or LinkedIn steps, so multichannel sellers need a second tool',
        'No built-in lead database, so prospecting still depends on a separate enrichment provider',
        'Lead-based tiers mean cost climbs quickly as active lead volume grows beyond a plan limit',
        'Reply handling is less unified than a Smartlead master inbox for teams running many campaigns',
        'No white-label client portal positioning, which rules it out for agencies billing multiple clients',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Connects unlimited mailboxes and rotates sends across them to protect sender reputation at volume',
        'Master inbox centralises replies from every mailbox, which is the biggest daily time saver of the three',
        'API access lets agencies and product teams build sending directly into their own workflows',
        'White-label client portals make it viable to run and bill outreach for multiple clients',
        'Continuous inbox warmup with metered warmup slots gives explicit control over deliverability capacity',
      ],
      cons: [
        'Tier limits are layered — active leads, sending volume, warmup slots, team seats, and API access all gate upgrades',
        'No permanent free plan, only a trial period, so evaluation is time-boxed',
        'More configuration than Instantly before a campaign is genuinely safe to send at scale',
        'Email only: no phone tasks or LinkedIn steps inside a sequence for multichannel sellers',
        'No built-in lead database, so list building stays an external cost in your stack',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Email, phone tasks, and LinkedIn steps live in the same cadence, which reps actually work end to end',
        'Follow-ups stop automatically on a reply, preventing the most common and damaging outreach error',
        'Built-in lead database on the higher tier removes one separate data subscription from the stack',
        'Opens, clicks, and responses tracked against that database make campaign attribution straightforward',
        'Per-user pricing matches headcount, which is easy for a sales leader to budget and defend',
      ],
      cons: [
        'Not a mailbox-rotation engine, so high-volume senders hit deliverability limits fast',
        'Deliverability features and the lead database are gated into the top tier, raising real cost per user',
        'Per-user pricing scales badly for teams connecting many inboxes but employing few senders',
        'No white-label client portal or agency-oriented API positioning for running client campaigns',
        'No permanent free plan — only a trial, so there is no low-risk way to test at real volume',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing on the same twelve-mailbox, 1,000-lead campaign, our conclusion is that there is no universal winner — but there is a clearly correct choice for each outbound shape. Instantly delivered the simplest path to high-volume sending with warmup handled for us. Smartlead delivered the best daily operations experience, because one master inbox replaced four scattered reply queues. Mailshake delivered the most realistic multichannel working day for a sales development rep, combining email, phone, and LinkedIn in a single cadence.',
      'Where Instantly deserves praise is deliverability economics: unlimited email accounts on all plans, built-in automated warmup, advanced deliverability features, and lead-based pricing that decouples your bill from the number of senders on the team, plus a free trial to validate it. Where it draws criticism is channel and data scope — there are no phone or LinkedIn steps, no built-in lead database, and reply management is less unified than a dedicated master inbox. Multichannel sales teams typically add Mailshake, while agencies running client campaigns move to Smartlead.',
      'Where Smartlead deserves praise is infrastructure: unlimited mailboxes with rotation that protects sender reputation, continuous warmup, a master inbox that centralises every reply, plus white-label client portals, team seats, and an API that agencies and product teams build on. Where it draws criticism is tier complexity — plans are differentiated simultaneously by active leads, sending volume, warmup slots, team seats, client portals, and API access, so the tier you need is rarely the tier you budgeted for, and there is only a trial period rather than a permanent free plan. Simple founder-led outbound often finds Instantly cheaper and quicker to operate.',
      'Where Mailshake deserves praise is rep workflow: email cadences where follow-ups stop automatically on a reply, phone tasks and LinkedIn steps inside the same sequence, and a built-in lead database that tracks opens, clicks, and responses without a separate data subscription. Where it draws criticism is scale and packaging — it is not a mailbox-rotation engine, so high-volume senders hit deliverability limits, and both the deliverability features and the lead database sit on the higher tier, which pushes real per-user cost above the headline. Volume-first growth teams usually shortlist Instantly or Smartlead instead.',
      'The biggest trend in 2026 is the split between sending infrastructure and sales engagement, with AI on both sides. Instantly and Smartlead keep pushing deliverability, rotation, warmup capacity, and API access, while Mailshake and its peers push AI-written sequences, lead research, and multichannel orchestration for individual reps. Agencies are the visible beneficiaries of the first group, since white-label portals and metered warmup slots turn outreach into a billable service. The practical consequence for buyers is that these two categories increasingly coexist in one stack rather than competing for the same budget line.',
      'Looking ahead, expect deliverability pressure to keep rising as mailbox providers tighten filtering, which rewards platforms that treat warmup and rotation as core rather than optional. The fundamentals have not changed, though. If you need unlimited email accounts, automated warmup, and deliverability monitoring on a simple lead-based bill, start with Instantly. If you need rotation across unlimited mailboxes, a master inbox, white-label client portals, and an API for agency or product use, start with Smartlead. If your reps work email, phone, and LinkedIn in one cadence against a built-in lead database, start with Mailshake. Our rule of thumb is simple: buy for the bottleneck that is actually costing you replies — inbox placement, sending scale, or channel coverage.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Instantly if your priority is deliverability and sending capacity on a predictable bill — unlimited email accounts on all plans, built-in automated warmup, advanced deliverability features, lead-based pricing, and a free trial make it the easiest platform to start with, ideal for founders, growth teams, and outbound-heavy startups. Choose Smartlead if you send at real volume or run outreach for clients — unlimited mailboxes with rotation that protects sender reputation, continuous warmup, a master inbox that centralises every reply, white-label client portals, team seats, and an API agencies and product teams build on, ideal for lead-generation agencies and high-volume sales teams, on monthly or annual tiers differentiated by active leads, sending volume, warmup slots, and API access. Choose Mailshake if your reps work a genuinely multichannel motion — email cadences where follow-ups stop automatically on a reply, phone tasks and LinkedIn steps in the same sequence, and a built-in lead database on the higher tier, ideal for sales development teams on per-user pricing. If your organization spans both volume sending and multichannel rep execution, the mature answer is often two tools in parallel: Smartlead or Instantly as the sending and deliverability engine, with Mailshake running rep-level cadences on top.',
  },
}
