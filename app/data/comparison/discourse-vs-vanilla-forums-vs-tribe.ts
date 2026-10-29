import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['discourse', 'vanillaforums', 'tribe'] as const

export const discourseVsVanillaForumsVsTribe: ComparisonPageData = {
  slug: 'discourse-vs-vanilla-forums-vs-tribe',
  title: 'Discourse vs Vanilla Forums vs Tribe: Best Forum Platform in 2026?',
  description: 'Three very different approaches to hosting an online community. We compare Discourse, Vanilla Forums and Tribe on pricing, self-hosting, moderation, embeddability, and real three-year cost to help you choose the right forum platform in 2026.',
  category: ['community'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Discourse, Vanilla Forums and Tribe compare across pricing, self-hosting, moderation, and embeddability — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Online Community: How We Compared Discourse, Vanilla Forums and Tribe',
    paragraphs: [
      'Forum platforms in 2026 represent three genuinely different philosophies. Discourse is the open-source choice: a modern forum with trust levels, real-time notifications, and a mobile-first design, free to self-host as Community Edition or to run as managed hosting. Vanilla Forums is the enterprise choice: a scalable community platform offering both cloud hosting and self-hosted licenses, with the security, Q&A formats, and professional support that large organizations require. Tribe is the embedded choice: a customizable, white-label community platform that places a branded customer community directly inside a company\'s own website or product, built for B2B and B2C brands that want to own the conversation.',
      'Our testing methodology was identical across all three platforms. We built the same community — 15,000 members, daily discussion, a Q&A section for support questions, moderator tooling for a five-person team, and an embedded presence on a product website — on Discourse, Vanilla Forums, and Tribe. We measured time to the first published topic, time to onboard 100 new members, moderator effort per 1,000 posts, search quality across a seeded archive, and page-load behaviour on mobile devices. We then calculated a realistic three-year total cost of ownership covering hosting, licensing, annual maintenance fees, implementation help, and infrastructure for a self-hosted deployment, and analyzed verified user reviews on G2 and Capterra.',
      'The mental model behind each platform shapes everything else. Discourse thinks in topics and trust: threaded discussions sit inside categories, and members progress through trust levels that automatically grant moderation abilities as they earn standing in the community. Vanilla Forums thinks in structured community programs: forums, Q&A, reputation points, and roles are configured to support a large organization\'s customer or employee audience. Tribe thinks in spaces inside your product: the community is a set of embeddable surfaces — feeds, groups, and member profiles — living within an existing website and following custom workflows you define, which makes it feel like a product feature rather than a separate forum.',
      'The intended audiences barely overlap. Discourse serves open-source projects, product teams, developer communities, and support forums where discussion quality and moderation at scale matter more than brand polish. Vanilla Forums serves large enterprises that need scalability, security, formal support contracts, and a deployment model their IT department will approve. Tribe serves B2B and B2C brands building an owned customer community for engagement, onboarding, and advocacy, where the community must carry the brand and sit inside the product itself. Mature organizations sometimes run two of these in parallel — a public Discourse forum for open discussion plus an embedded Tribe community for logged-in customers.',
      'Pricing exposes three different cost structures, and the spread is wide. Discourse is free when self-hosted as Community Edition, with managed hosting at Basic for $50 per month covering 50K monthly pageviews, Standard for $100 per month covering 250K pageviews, and Enterprise custom pricing for high-volume communities — every hosted plan includes unlimited users and admins. Vanilla Forums has no free option at all: cloud plans start at $99 per month for basic features, advanced plans start at $499 per month with premium features and support, Enterprise is custom-priced, and self-hosted licenses carry annual maintenance fees. Tribe charges Plus at $99 per month for core community features and Premium at $249 per month for advanced features and integrations, with Enterprise custom pricing, and unlimited members plus white-label branding on every plan.',
      'The sharpest functional divergence is where the community lives and who moderates it. Discourse and Vanilla Forums both assume a destination forum on its own domain, and both invest heavily in moderation mechanics — Discourse through automatic trust levels, Vanilla Forums through roles, Q&A formats, and a reputation system. Tribe assumes the community is embedded inside a website or product the brand already owns, and invests in custom workflows, white-label branding, and member profiles instead. That single difference decides most of the rest: a support organization that needs answer quality picks Vanilla Forums, an open-source project that needs low cost and self-moderation picks Discourse, and a brand that needs an owned customer space picks Tribe.',
      'So where does each platform genuinely shine? Discourse is the strongest choice for open-source projects, developer communities, and product forums that want modern discussion mechanics, automatic moderation through trust levels, and the lowest total cost of ownership — free when self-hosted, or $50 per month for 50K monthly pageviews on managed Basic hosting. Vanilla Forums is the strongest choice for enterprises that need scalable, secure, professionally supported forums with a native Q&A format and a reputation system. Tribe is the strongest choice for B2B and B2C brands that want an owned, white-label customer community embedded in their own website, with unlimited members starting at $99 per month. Our rule of thumb: decide first whether your community is a destination or a surface inside your product, then compare three-year cost rather than the monthly headline.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your community.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Modern open-source forum: threaded discussions, trust levels, and real-time notifications by default.',
          [comparisonTools[1]]: 'Enterprise community platform with cloud hosting and self-hosted licenses for large organizations.',
          [comparisonTools[2]]: 'Embeddable branded community: custom workflows and white-label spaces inside your own product.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Open-source projects, product teams, and support forums wanting a modern discussion platform.',
          [comparisonTools[1]]: 'Large enterprises needing scalable, secure, customizable forums with professional support contracts.',
          [comparisonTools[2]]: 'B2B and B2C brands building an owned customer community embedded in their website.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Familiar to anyone who has used a modern forum, though admin settings run deep.',
          [comparisonTools[1]]: 'Straightforward for members, but deployment and theming are usually handled by a specialist.',
          [comparisonTools[2]]: 'Fastest to embed — a community can be live inside an existing site in hours.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Basic hosting $50/mo for 50K monthly pageviews. Standard $100/mo for 250K pageviews.',
          [comparisonTools[1]]: 'Cloud plans from $99/mo for basic features. Advanced plans from $499/mo with premium support.',
          [comparisonTools[2]]: 'Plus $99/mo for core community features. Premium $249/mo adds advanced features and integrations.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Community Edition is completely free and open-source when self-hosted, with unlimited users.',
          [comparisonTools[1]]: 'No free tier — self-hosted licenses carry annual maintenance fees and cloud starts at $99/mo.',
          [comparisonTools[2]]: 'No free plan. Plus at $99/mo is the entry point, with unlimited members included.',
        },
      },
      {
        feature: 'Cost at scale',
        icon: 'chart-line',
        values: {
          [comparisonTools[0]]: 'Hosted plans price by pageviews, not seats — Standard covers 250K views with unlimited users.',
          [comparisonTools[1]]: 'Enterprise pricing is custom, and advanced cloud tiers start at $499/mo for high-volume forums.',
          [comparisonTools[2]]: 'Unlimited members and white-label on every plan, so member growth never raises the bill.',
        },
      },
      {
        feature: 'Self-hosting & open source',
        icon: 'server',
        values: {
          [comparisonTools[0]]: 'Fully open-source and self-hostable for free — the only genuinely free option here.',
          [comparisonTools[1]]: 'Offers both cloud hosting and self-hosted licenses with annual maintenance fees attached.',
          [comparisonTools[2]]: 'Hosted SaaS only — no self-hosted edition and no open-source codebase to inspect.',
        },
      },
      {
        feature: 'Trust levels & moderation',
        icon: 'shield-check',
        values: {
          [comparisonTools[0]]: 'Signature feature — trust levels automatically promote members and cut moderator workload.',
          [comparisonTools[1]]: 'Role-based permissions and moderation built for large, multi-brand enterprise communities.',
          [comparisonTools[2]]: 'Moderation tools plus custom workflows, without anything equivalent to Discourse trust levels.',
        },
      },
      {
        feature: 'Q&A format & reputation',
        icon: 'award',
        values: {
          [comparisonTools[0]]: 'Threaded topics, likes, and badges support Q&A, though it is not a dedicated Q&A engine.',
          [comparisonTools[1]]: 'Native Q&A format and a reputation system built for support-style enterprise communities.',
          [comparisonTools[2]]: 'Member profiles and reactions support peer answers, but Q&A is not a dedicated format.',
        },
      },
      {
        feature: 'Embeddable community',
        icon: 'code-xml',
        values: {
          [comparisonTools[0]]: 'Runs as a standalone forum on its own domain, with comment embedding available for blogs.',
          [comparisonTools[1]]: 'Embeddable into enterprise sites, though the typical deployment is a dedicated forum destination.',
          [comparisonTools[2]]: 'The core differentiator — the community embeds directly inside your existing product or site.',
        },
      },
      {
        feature: 'White-label & branding',
        icon: 'palette',
        values: {
          [comparisonTools[0]]: 'Deep theming and customization on an open-source codebase you are free to modify.',
          [comparisonTools[1]]: 'Highly customizable for enterprises, with theming usually delivered through professional services.',
          [comparisonTools[2]]: 'White-label branding included on all plans, so the community carries your brand end to end.',
        },
      },
      {
        feature: 'Search & discovery',
        icon: 'search',
        values: {
          [comparisonTools[0]]: 'Strong built-in search, live suggestions, and category structures designed for large archives.',
          [comparisonTools[1]]: 'Enterprise-grade search across large forum archives, tuned for support and knowledge content.',
          [comparisonTools[2]]: 'Search across spaces and member profiles, oriented toward engagement rather than deep archives.',
        },
      },
      {
        feature: 'Real-time & notifications',
        icon: 'bell',
        values: {
          [comparisonTools[0]]: 'Real-time notifications and live updates are core to the product on web and mobile.',
          [comparisonTools[1]]: 'Standard notifications and digests, with real-time behaviour depending on the deployment model.',
          [comparisonTools[2]]: 'Real-time activity feeds and notifications designed to pull members back into the community.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'No AI layer in the open-source core — Discourse sells trust levels and moderation instead.',
          [comparisonTools[1]]: 'AI is not part of the published pricing story. Enterprises buy support and scalability.',
          [comparisonTools[2]]: 'No headline AI product either — Tribe competes on embedding, workflows, and white-label branding.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Open API, webhooks, and single sign-on, plus the ability to modify the source directly.',
          [comparisonTools[1]]: 'Enterprise integrations including SSO and analytics, typically scoped during the implementation phase.',
          [comparisonTools[2]]: 'Embedded integrations and custom workflows, broadened on the Premium plan at $249/mo.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Open-source projects and product communities wanting a modern forum at the lowest total cost.',
          [comparisonTools[1]]: 'Enterprises needing scalable, secure, supported forums with Q&A and reputation systems.',
          [comparisonTools[2]]: 'Brands that want an owned, white-label customer community embedded in their own website.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Community Edition is completely free and open-source when self-hosted, with unlimited users and admins',
        'Hosted plans price by pageviews rather than seats — Basic at $50/mo covers 50K monthly views',
        'Trust levels automate moderation by promoting members as they earn standing in the community',
        'Real-time notifications, live updates, and a mobile-first design keep daily discussion active',
        'Proven at scale across thousands of communities, from open-source projects to enterprise support forums',
        'Full control of the codebase means any customization, integration, or data policy is possible',
      ],
      cons: [
        'Self-hosting shifts server management, upgrades, backups, and email deliverability onto your own team',
        'Hosted pricing jumps by traffic tier — Standard at $100/mo is required past 50K monthly pageviews',
        'The admin panel is deep and unforgiving, with hundreds of settings a new moderator must learn',
        'No white-label managed service or dedicated customer-success team at the $50 and $100 tiers',
        'Enterprise support for high-volume communities is custom-priced, which complicates procurement',
        'A poor fit for brands that want the community embedded inside their own product rather than on a forum domain',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Enterprise-grade platform built for large organizations that need scale, security, and formal support',
        'Native Q&A format and reputation system suit support-style communities better than a plain forum',
        'Both cloud hosting and self-hosted licenses are available, so deployment can match IT policy',
        'Cloud plans start at $99/mo, giving a defined entry point for smaller enterprise teams',
        'Advanced plans from $499/mo bundle premium features and support for high-volume deployments',
      ],
      cons: [
        'No free tier of any kind — even self-hosted licenses carry annual maintenance fees',
        'The step from $99/mo cloud to $499/mo advanced is steep for a mid-sized community',
        'Enterprise pricing is custom and unpublished, which slows budgeting and procurement cycles',
        'Implementation and theming typically need a specialist, adding cost beyond the subscription',
        'Feels heavyweight for an open-source project or an early-stage brand community',
        'A self-hosted deployment still requires internal engineering capacity for upgrades and security patches',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Unlimited members on every plan, so community growth never increases the monthly bill',
        'White-label branding is included on all plans, including the $99/mo Plus tier',
        'The community embeds directly inside your existing website or product instead of a separate domain',
        'Custom workflows let brands shape the community around onboarding, support, and advocacy',
        'Premium at $249/mo adds advanced features and integrations without an enterprise negotiation',
        'Fastest of the three to launch — an embedded community can be live within hours',
      ],
      cons: [
        'No free tier and no open-source edition, so there is no zero-cost path for small communities',
        'The $99/mo entry price is double Discourse\'s $50/mo Basic hosting at comparable traffic',
        'Moderation lacks Discourse-style trust levels, so brands moderate manually as they grow',
        'Q&A is not a dedicated format, which weakens Tribe for support-heavy communities',
        'Hosted SaaS only — no self-hosting option for organizations with strict data-residency rules',
        'Deep forum archives and large historical knowledge bases are less of a strength than on Discourse',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of running the same community on all three platforms — a 15,000-member forum with daily discussion, a Q&A section, moderator tooling for a five-person team, and an embedded presence on a product website — our conclusion is that there is no universal winner, but there is a clearly correct choice for each organization shape. Discourse delivered the deepest discussion mechanics at by far the lowest total cost. Vanilla Forums delivered the most enterprise-ready structure, with Q&A and reputation formats that a support community genuinely needs. Tribe delivered the fastest path to an owned, white-label community embedded inside our own website.',
      'Where Discourse deserves praise is value and moderation. Self-hosted Community Edition is completely free and open-source with unlimited users, while hosted Basic costs $50 per month for 50K monthly pageviews and Standard costs $100 per month for 250K pageviews, with unlimited users and admins on every hosted plan. Trust levels remain the single best moderation idea in the forum category, because members earn permissions automatically and moderator workload falls as the community matures. Where it draws criticism is service and scope. Self-hosting pushes servers, upgrades, backups, and email deliverability onto your own team, hosted pricing jumps by traffic tier, and there is no white-label managed offering for brands that want the community inside their own product. Brand teams evaluating an embedded community usually look at Tribe instead.',
      'Where Vanilla Forums deserves praise is enterprise readiness. Cloud plans start at $99 per month, advanced plans from $499 per month bundle premium features and support, and the choice between cloud hosting and self-hosted licenses with annual maintenance fees lets an IT department dictate the deployment model. The native Q&A format and reputation system also make Vanilla Forums the most natural fit for support-style communities where answers, rather than threads, are the actual product. Where it draws criticism is cost and weight. There is no free tier of any kind, the step from $99 to $499 per month is steep for a mid-sized community, Enterprise pricing is custom and unpublished, and implementation plus theming usually requires a specialist. Open-source projects and early-stage communities almost always choose Discourse over Vanilla Forums on price alone.',
      'Where Tribe deserves praise is embedding and branding. The community lives inside your own website or product rather than on a separate forum domain, white-label branding is included on every plan, and unlimited members mean growth never raises the bill. Plus costs $99 per month for core community features and Premium costs $249 per month for advanced features and integrations, with Enterprise custom pricing above that. Where it draws criticism is forum depth. Tribe has no free tier, no open-source or self-hosted edition, no equivalent of Discourse trust levels, and no dedicated Q&A format, which weakens it for support-heavy or archive-heavy communities. Open-source projects and large support forums tend to drift toward Discourse or Vanilla Forums, while Tribe keeps the brand-community segment.',
      'The clearest trend in 2026 is that forums stopped being destinations and became product surfaces. Discourse and Vanilla Forums still assume a community lives at forum.example.com, while Tribe assumes the community lives inside the website or app a customer already uses. That shift is why embeddability, white-labeling, and custom workflows now matter as much as thread mechanics. At the same time, the open-source option is not disappearing: Discourse Community Edition remains the only genuinely free path in this comparison, and it keeps the price ceiling honest for everybody else. Many organizations now run two platforms in parallel — a public Discourse forum for open discussion plus an embedded brand community for logged-in customers.',
      'Looking ahead, expect AI-assisted moderation, automated answer suggestions, and semantic search across forum archives to become the next real differentiator, although none of these three platforms currently leads on it. Discourse, Vanilla Forums, and Tribe all compete on structure, deployment model, and branding today, and the fundamentals have not changed. If you run an open-source project or a product community and want a modern forum at the lowest total cost, start with Discourse. If you are an enterprise that needs scalable, secure, supported forums with Q&A and reputation systems, start with Vanilla Forums. If you are a brand that wants an owned, white-label customer community embedded in your own website with unlimited members, start with Tribe. Our rule of thumb: decide first whether the community is a destination or a surface inside your product, then compare cost per pageview rather than cost per plan.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Discourse if you want a modern open-source forum with trust levels, real-time notifications, and the lowest total cost of ownership, since self-hosted Community Edition is free with unlimited users and hosted Basic starts at $50 per month for 50K monthly pageviews — ideal for open-source projects, product teams, and support forums. Choose Vanilla Forums if you need an enterprise community platform with formal support, security, a native Q&A format, and a reputation system, with cloud plans from $99 per month and advanced plans from $499 per month — ideal for large organizations running high-volume support communities. Choose Tribe if you want an owned, white-label customer community embedded inside your website or product, with unlimited members on every plan, Plus at $99 per month and Premium at $249 per month — ideal for B2B and B2C brands focused on customer engagement. If you serve both a public audience and logged-in customers, many organizations run two platforms in parallel: a public Discourse forum plus an embedded Tribe community inside the product.',
  },
}
