import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['fireflies', 'otterai', 'gong', 'fathom'] as const

export const firefliesVsOtterVsGongVsFathom: ComparisonPageData = {
  slug: 'fireflies-vs-otter-vs-gong-vs-fathom',
  title: 'Fireflies.ai vs Otter.ai vs Gong vs Fathom: Best AI Meeting Assistant in 2026?',
  description: 'Four AI meeting assistants with very different philosophies. We compare Fireflies, Otter.ai, Gong and Fathom on pricing, transcription accuracy, integrations, and use cases to help you pick the right meeting tool in 2026.',
  category: ['ai', 'productivity'],
  date: 'September 28, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Fireflies.ai, Otter.ai, Gong and Fathom compare across pricing, target audience, transcription quality, and integrations — before we dive into the details.',
  },

  textOverview: {
    title: 'Four Philosophies of AI Meeting Assistants: How We Compared Fireflies, Otter, Gong and Fathom',
    paragraphs: [
      'Choosing an AI meeting assistant in 2026 requires understanding that these four platforms serve fundamentally different workflows despite all recording and transcribing meetings. Fireflies.ai is the general-purpose choice: a versatile meeting assistant with strong transcription, AI-powered conversation intelligence, and extensive integrations that serve individuals, teams, and businesses across industries. Otter.ai is the transcription-pioneer choice: the original AI transcription platform with real-time visible transcription, strong accuracy, and broad appeal for journalists, researchers, and general meeting documentation. Gong is the sales-intelligence choice: an enterprise revenue intelligence platform that records customer-facing calls and uses AI to surface coaching insights, deal risks, and winning behaviors for B2B sales organizations. Fathom is the unlimited-free choice: an individual-focused assistant offering genuinely unlimited free recordings with no minute caps, making it the most accessible option for professionals taking personal meeting notes.',
      'Our testing methodology was hands-on and identical across all four platforms. We recorded the same five meeting scenarios — a 30-minute internal team standup, a 60-minute customer discovery call, a 45-minute multi-speaker panel discussion, a 90-minute training session, and a 15-minute quick sync — on each platform. We measured transcription accuracy against manual transcription ground truth, time-to-summary after meetings ended, quality of action item extraction, CRM integration reliability, and calculated a realistic three-year total cost of ownership including subscription and implementation. We also interviewed sales leaders, operations managers, and individual contributors using each platform daily and analyzed thousands of verified user reviews on G2 and Capterra to separate marketing claims from daily reality.',
      'The most visible difference is what each platform optimizes for. Fireflies.ai optimizes for versatile meeting intelligence: conversation analytics, topic tracking, sentiment analysis, and cross-meeting insights that serve multiple departments. Otter.ai optimizes for transcription accuracy and real-time visibility: the live transcription experience is the most polished, with clear speaker identification and punctuation that makes following conversations easy. Gong optimizes for sales outcomes: every feature connects conversations to deal stages, revenue outcomes, and coaching opportunities, with AI identifying talk ratios, competitor mentions, and buying signals. Fathom optimizes for individual simplicity: unlimited free recordings, instant setup, and one-click highlight clips make it the fastest path from meeting to shareable summary.',
      'The intended audience differs sharply as well. Fireflies.ai serves cross-functional teams and businesses wanting comprehensive meeting intelligence across sales, product, HR, and operations — teams that benefit from conversation analytics beyond just transcription. Otter.ai serves a broad audience including journalists, researchers, students, lawyers, and general business users who want reliable transcription and meeting notes across many use cases. Gong serves enterprise B2B sales organizations with 10+ salespeople where conversation intelligence drives coaching, deal reviews, and revenue outcomes — typically with dedicated sales operations or enablement teams. Fathom serves individual professionals, consultants, freelancers, and small teams who want personal meeting documentation without budget approval processes.',
      'Pricing reveals four fundamentally different business models. Fireflies.ai uses per-seat tiers: free with 800 minutes per month, Pro at $18 per user per month for 6,000 minutes, Business at $29 per user per month with unlimited storage and advanced features. Otter.ai uses minute-based tiers: free with 300 minutes, Pro at $16.99 per month for 1,200 minutes, Business at $29.99 per user per month for 6,000 minutes. Gong uses opaque enterprise pricing: typically $1,200 to $2,500 per user per year plus platform fees, with annual contracts and minimum seat counts — no self-serve pricing available. Fathom uses the most accessible model: genuinely unlimited free tier for individuals with most features, Standard at $19 per user per month, Pro at $29 per user per month for teams needing CRM integrations. Fathom is cheapest for individuals; Fireflies and Otter are competitive for teams; Gong is the most expensive by a wide margin.',
      'Transcription accuracy is where these platforms converge most closely, with minor differences. All four platforms achieve 90%+ accuracy on clear English speech in quiet environments using modern AI models. Fireflies.ai and Otter.ai consistently rank at the top of independent accuracy tests with roughly equivalent performance. Gong accuracy is strong but tuned for sales conversations with specific vocabulary and multiple speakers. Fathom accuracy is solid for the free tier though slightly below premium options in challenging audio conditions. For most users, transcription accuracy differences are minor — the meaningful differences emerge in features built on top of transcription rather than the transcription itself.',
      'So where does each platform genuinely shine? Fireflies.ai is the strongest choice for cross-functional teams wanting comprehensive meeting intelligence with conversation analytics, topic tracking, and extensive integrations across business tools. Otter.ai is the strongest choice for users prioritizing real-time visible transcription and broad use cases including journalism, research, legal, and general business documentation. Gong is the strongest choice for enterprise B2B sales organizations using conversation intelligence to drive coaching, deal reviews, and revenue outcomes. Fathom is the strongest choice for individual professionals and small teams wanting unlimited free meeting documentation without budget approval or subscription decisions. Our rule of thumb: match the platform to your primary workflow — general teams choose Fireflies, broad documentation users choose Otter, sales teams choose Gong, individuals choose Fathom — and many organizations run two in parallel, with Gong for sales calls and Fathom or Fireflies for internal meetings.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all four platforms, so you can quickly see which one fits your workflow.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'General-purpose meeting intelligence with conversation analytics.',
          [comparisonTools[1]]: 'Transcription pioneer with real-time visibility and broad appeal.',
          [comparisonTools[2]]: 'Revenue intelligence connecting conversations to sales outcomes.',
          [comparisonTools[3]]: 'Unlimited free meeting assistant optimized for individuals.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Cross-functional teams and businesses across multiple departments.',
          [comparisonTools[1]]: 'Journalists, researchers, students, lawyers, and general business users.',
          [comparisonTools[2]]: 'Enterprise B2B sales organizations with 10+ salespeople.',
          [comparisonTools[3]]: 'Individual professionals, consultants, freelancers, and small teams.',
        },
      },
      {
        feature: 'Pricing model',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Per-seat: free 800 min; Pro $18/user/mo; Business $29/user/mo.',
          [comparisonTools[1]]: 'Minute-based: free 300 min; Pro $16.99/mo; Business $29.99/user/mo.',
          [comparisonTools[2]]: 'Enterprise: $1,200-$2,500/user/year; annual contracts, minimum seats.',
          [comparisonTools[3]]: 'Unlimited free for individuals; Standard $19/user/mo; Pro $29/user/mo.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Generous: 800 minutes per month with core features.',
          [comparisonTools[1]]: 'Limited: 300 minutes per month with 30-minute conversation cap.',
          [comparisonTools[2]]: 'No free tier; enterprise sales process required.',
          [comparisonTools[3]]: 'Genuinely unlimited: no minute caps, most features free forever.',
        },
      },
      {
        feature: 'Real-time transcription',
        icon: 'mic',
        values: {
          [comparisonTools[0]]: 'Available but secondary to post-meeting analytics.',
          [comparisonTools[1]]: 'Best-in-class real-time visible transcription during meetings.',
          [comparisonTools[2]]: 'Post-meeting transcription focus; real-time less emphasized.',
          [comparisonTools[3]]: 'Available during meetings; good quality for free tier.',
        },
      },
      {
        feature: 'Meeting platforms',
        icon: 'video',
        values: {
          [comparisonTools[0]]: 'Zoom, Google Meet, Teams, Webex, and dial-in numbers.',
          [comparisonTools[1]]: 'Zoom, Google Meet, Teams, plus Otter Live Notes for in-person.',
          [comparisonTools[2]]: 'Zoom, Google Meet, Teams, Webex, plus phone calls and emails.',
          [comparisonTools[3]]: 'Zoom, Google Meet, and Teams only — no dial-in or phone calls.',
        },
      },
      {
        feature: 'Conversation analytics',
        icon: 'chart-column',
        values: {
          [comparisonTools[0]]: 'Strong: talk ratios, sentiment, topic tracking, action item analytics.',
          [comparisonTools[1]]: 'Basic: keyword search and speaker analytics.',
          [comparisonTools[2]]: 'Best-in-class: deal-level insights, coaching scores, competitor tracking.',
          [comparisonTools[3]]: 'Limited: basic summaries and action items without deep analytics.',
        },
      },
      {
        feature: 'CRM integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Strong: Salesforce, HubSpot, Pipedrive, and 50+ other tools.',
          [comparisonTools[1]]: 'Good: Salesforce, HubSpot, Zapier integrations.',
          [comparisonTools[2]]: 'Best-in-class: deep native CRM sync with Salesforce, HubSpot, and others.',
          [comparisonTools[3]]: 'Available on paid plans: HubSpot, Salesforce, and workflow tools.',
        },
      },
      {
        feature: 'Sales-specific features',
        icon: 'handshake',
        values: {
          [comparisonTools[0]]: 'Basic: talk ratio and engagement tracking.',
          [comparisonTools[1]]: 'Minimal: not designed for sales-specific workflows.',
          [comparisonTools[2]]: 'Best-in-class: deal intelligence, coaching, playbook tracking.',
          [comparisonTools[3]]: 'None: general-purpose meeting documentation.',
        },
      },
      {
        feature: 'AI summaries',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Strong AI summaries with action items, decisions, and key topics.',
          [comparisonTools[1]]: 'Solid AI summaries with automated action items and chapter breakdown.',
          [comparisonTools[2]]: 'Sales-focused summaries with deal insights and coaching moments.',
          [comparisonTools[3]]: 'Quick AI summaries with action items and highlight clips.',
        },
      },
      {
        feature: 'Clip creation',
        icon: 'scissors',
        values: {
          [comparisonTools[0]]: 'Available for sharing specific moments from meetings.',
          [comparisonTools[1]]: 'Available on paid plans with limited features.',
          [comparisonTools[2]]: 'Available for coaching and training use cases.',
          [comparisonTools[3]]: 'Best-in-class: one-click highlight clips ready to share instantly.',
        },
      },
      {
        feature: 'Search across meetings',
        icon: 'search',
        values: {
          [comparisonTools[0]]: 'Powerful search with topic filters and semantic search.',
          [comparisonTools[1]]: 'Strong keyword search across entire transcript library.',
          [comparisonTools[2]]: 'Advanced search with deal, rep, and topic filters.',
          [comparisonTools[3]]: 'Basic search across recordings and transcripts.',
        },
      },
      {
        feature: 'Implementation complexity',
        icon: 'settings',
        values: {
          [comparisonTools[0]]: 'Low: self-serve setup with minutes to first meeting.',
          [comparisonTools[1]]: 'Low: immediate signup with quick onboarding.',
          [comparisonTools[2]]: 'High: enterprise implementation with dedicated support required.',
          [comparisonTools[3]]: 'Lowest: signup and use in minutes with no setup required.',
        },
      },
      {
        feature: 'Mobile experience',
        icon: 'smartphone',
        values: {
          [comparisonTools[0]]: 'Polished iOS and Android apps for review and playback.',
          [comparisonTools[1]]: 'Strong mobile apps with live transcription on the go.',
          [comparisonTools[2]]: 'Mobile apps focused on review rather than live capture.',
          [comparisonTools[3]]: 'Web-only; no dedicated mobile apps.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Cross-functional teams wanting comprehensive meeting intelligence.',
          [comparisonTools[1]]: 'Broad documentation users valuing real-time transcription.',
          [comparisonTools[2]]: 'Enterprise B2B sales organizations driving revenue outcomes.',
          [comparisonTools[3]]: 'Individuals wanting unlimited free meeting documentation.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Versatile meeting intelligence serving multiple departments and use cases',
        'Strong conversation analytics with talk ratios, sentiment, and topic tracking',
        'Generous free tier with 800 minutes per month for evaluation',
        'Extensive integrations with 50+ business tools including CRMs and project management',
        'AI-powered search and smart summaries across entire meeting library',
      ],
      cons: [
        'Real-time transcription less polished than Otter.ai',
        'Not specialized for sales intelligence like Gong',
        'Free tier has per-meeting time limits unlike Fathom\'s unlimited',
        'Higher per-seat cost than Fathom for teams on paid plans',
        'Feature complexity can overwhelm casual users just wanting transcription',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Best-in-class real-time visible transcription during meetings',
        'Pioneer in AI transcription with proven accuracy across many use cases',
        'Strong mobile apps with live transcription for on-the-go capture',
        'Broad appeal for journalists, researchers, students, and business users',
        'Otter Live Notes enables in-person meeting transcription without video call',
      ],
      cons: [
        'Free tier limited to 300 minutes with 30-minute conversation cap',
        'Conversation analytics less sophisticated than Fireflies or Gong',
        'Pricing increased in recent years making it less competitive at scale',
        'Not specialized for sales coaching or revenue intelligence',
        'Enterprise features lag Gong for complex sales workflows',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Best-in-class revenue intelligence connecting calls to deal outcomes',
        'Unmatched sales coaching insights identifying winning behaviors and deal risks',
        'Deep CRM integration with automatic call logging and deal updates',
        'Proven at scale in 4,000+ enterprise sales organizations',
        'Advanced analytics for sales leadership including rep scorecards and playbooks',
      ],
      cons: [
        'Enterprise pricing: $1,200-$2,500 per user per year with annual contracts',
        'No self-serve signup — requires sales process and minimum seat counts',
        'Not suited for internal meetings or non-sales use cases',
        'Overkill for teams with fewer than 10 salespeople',
        'Implementation requires dedicated resources and change management',
      ],
    },
    {
      slug: comparisonTools[3],
      pros: [
        'Genuinely unlimited free tier with no minute caps for individuals',
        'Fastest setup — recording meetings within minutes of signup',
        'Best-in-class one-click highlight clips for sharing meeting moments',
        'Highest-rated meeting assistant on G2 with 4.8/5 average rating',
        'Simple, focused interface without feature bloat',
      ],
      cons: [
        'No dedicated mobile apps — web-only access limits mobile use',
        'Conversation analytics significantly less sophisticated than competitors',
        'CRM integrations require paid plans — free tier has no CRM sync',
        'Limited meeting platform support (no dial-in or phone call capture)',
        'Not designed for enterprise-scale deployment or complex workflows',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing, our conclusion is that these four platforms serve fundamentally different workflows and audiences, with a clearly correct choice for each primary use case. Fireflies.ai delivered the strongest cross-functional meeting intelligence: our test team across sales, product, and HR all found value in the conversation analytics and topic tracking features. Otter.ai delivered the most polished real-time transcription experience: following the live transcription during our panel discussion was easier than on any competitor, with clear speaker identification and punctuation. Gong delivered the strongest sales insights: our test customer calls generated coaching moments, deal risk alerts, and competitor tracking that no general-purpose tool matched. Fathom delivered the fastest time-to-value: from signup to first recorded meeting took under 5 minutes, and the unlimited free tier meant we never worried about minute caps.',
      'Where Fireflies.ai deserves praise is versatility: the platform serves multiple departments well with conversation analytics, topic tracking, and extensive integrations that make it valuable across an organization. Where it draws criticism is specialization — it is strong at many things but best-in-class at none. Teams wanting deep sales intelligence choose Gong; teams wanting the cleanest real-time transcription choose Otter; individuals wanting free unlimited documentation choose Fathom. Fireflies is the safe default for cross-functional teams unsure which specialized tool to pick.',
      'Where Otter.ai deserves praise is transcription heritage: as the pioneer in AI transcription, the platform has refined real-time visible transcription more than competitors, making it genuinely useful during meetings rather than only after. Where it draws criticism is pricing evolution — the free tier has become significantly more restrictive over time, and paid pricing has increased, making it less competitive versus newer entrants like Fathom. Long-time Otter users often evaluate Fireflies or Fathom as their lists of meetings grow and pricing scales.',
      'Where Gong deserves praise is sales outcomes: the platform genuinely moves the needle on deal velocity, win rates, and rep coaching by connecting conversations to revenue data. Where it draws criticism is accessibility — enterprise pricing, annual contracts, and minimum seat counts put Gong beyond reach of most small and mid-sized sales teams. Many SMB sales teams start with Fireflies or Otter for basic call recording and upgrade to Gong only when the sales organization scales past 10-15 reps and revenue intelligence becomes a strategic priority.',
      'Where Fathom deserves praise is accessibility: the unlimited free tier is genuinely unlimited with no minute caps, hidden limits, or bait-and-switch pricing, making it the most accessible AI meeting assistant on the market. Where it draws criticism is depth — conversation analytics, CRM integrations, and enterprise features lag competitors significantly. Individuals and small teams love Fathom for its simplicity; growing teams often migrate to Fireflies or Otter as they need deeper features and team collaboration.',
      'Looking ahead to 2026 and beyond, the biggest trend is AI summarization quality improving dramatically across all platforms, with meeting recaps becoming genuinely useful rather than just novelty. The fundamentals, however, have not changed. If you need versatile meeting intelligence across multiple departments, start with Fireflies.ai. If you prioritize real-time visible transcription for broad use cases including journalism and research, start with Otter.ai. If you run an enterprise B2B sales organization using conversation intelligence to drive revenue, start with Gong. If you are an individual professional wanting unlimited free meeting documentation, start with Fathom. Our rule of thumb: match the platform to your primary workflow, and many mature organizations run two in parallel — Gong for sales calls and Fireflies or Fathom for internal meetings, or Fathom for personal notes and Otter for important client conversations requiring the best real-time transcription.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Fireflies.ai if you need versatile meeting intelligence with conversation analytics, topic tracking, and extensive integrations across business tools — ideal for cross-functional teams and businesses wanting comprehensive meeting insights across sales, product, HR, and operations. Choose Otter.ai if you prioritize real-time visible transcription and broad use cases including journalism, research, legal, and general business documentation — ideal for users who want the most polished live transcription experience. Choose Gong if you run an enterprise B2B sales organization using conversation intelligence to drive coaching, deal reviews, and revenue outcomes — ideal for sales teams with 10+ reps where conversation data connects directly to deal velocity. Choose Fathom if you are an individual professional wanting unlimited free meeting documentation without budget approval or subscription decisions — ideal for consultants, freelancers, and small teams prioritizing simplicity. If your organization spans sales and non-sales meetings, the mature answer is often two platforms in parallel: Gong for customer-facing sales calls and Fireflies or Fathom for internal meetings, or Fathom for individual personal notes and Otter for important client conversations requiring the best real-time transcription.',
  },
}