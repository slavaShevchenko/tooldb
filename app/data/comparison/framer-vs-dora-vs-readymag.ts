import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['framer', 'dora', 'readymag'] as const

export const framerVsDoraVsReadymag: ComparisonPageData = {
  slug: 'framer-vs-dora-vs-readymag',
  title: 'Framer vs Dora vs Readymag: Best Visual Website Builder in 2026?',
  description: 'Three visual website tools with very different centres of gravity: production canvas, AI 3D, and editorial craft. We compare Framer, Dora and Readymag on pricing model, CMS depth, animation, hosting, and ownership to help you decide in 2026.',
  category: ['design', 'web-development'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Framer, Dora and Readymag compare across pricing model, CMS depth, animation capability, and hosting — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Visual Web Publishing: How We Compared Framer, Dora and Readymag',
    paragraphs: [
      'Framer, Dora and Readymag all promise a website without a build pipeline, but they mean very different things by that. Framer is a website builder where the design canvas is the production output: teams lay out pages visually, add effects and interactions, manage content through a built-in CMS with localisation, and publish to a global CDN, with React code overrides available when the canvas is not enough. Dora is an AI-powered website builder for designers who want 3D animated websites generated from a prompt and published without coding. Readymag is a browser-based design tool for editorial pages, portfolios, presentations, and microsites, built from a blank canvas rather than templates, with unusually fine control over typography, layout, animation, and scroll behaviour. Framer ships a product site, Dora ships a spectacle, Readymag ships a publication.',
      'Our testing methodology was identical across all three platforms. We ran the same scenario on each — a six-page marketing site for a design studio, with a case-study index driven by a content collection, a scroll-animated homepage, a contact form, and two localized language versions — and measured how long a designer took to reach a published page on a custom domain. We then measured published page weight and load behaviour, counted how much of the layout survived a mobile viewport, and calculated a realistic three-year total cost of ownership covering plan costs, extra editor seats, custom domain, fonts, and the engineering hours needed for anything the visual canvas could not do. We also interviewed studio owners and design engineers who publish client work on each platform, and analyzed verified user reviews on G2 and Capterra.',
      'The mental model behind each tool explains most of the day-to-day differences. Framer thinks in a responsive canvas that is also the shipped document: breakpoints, effects, and interactions are declared visually, content lives in a CMS with localisation, and the escape hatch is a React override or custom component rather than a separate codebase. Dora thinks in generated scenes: a prompt produces structure, 3D objects, and scroll-driven animation, which you then art-direct on a canvas where depth and camera movement are first-class citizens. Readymag thinks like a print designer working on a scroll: a blank canvas, absolute control over type scale, leading, and layout, plus animation and scroll behaviour tuned per element, with no template to fight against and no component system to learn.',
      'The target audience differs accordingly. Framer serves startups, agencies, and in-house marketing teams that need a real production website — CMS, localisation, staging, SEO controls, and editor seats for non-designers — without maintaining a Next.js build. Dora serves founders, marketers, and designers launching a visually striking campaign or product site where 3D animation is the point and development capacity is zero. Readymag serves designers, studios, photographers, and art-directed brand projects where the page is an authored artifact — a portfolio, an editorial feature, a presentation, or a microsite — and typography matters more than content volume. Many mature studios run two of these in parallel: Framer for client product and marketing sites with a CMS and localization needs, plus Readymag for portfolio and art-directed work where the blank canvas is the advantage.',
      'Pricing follows three different models, and only one of them publishes a single flat number. Dora is freemium with a free tier limited in project count and carrying Dora branding, Pro at $20 per month for unlimited projects and custom domains, Team at $40 per user per month adding collaboration features, and an annual billing discount — five editors on Team cost $200 per month. Framer is freemium too, but its free plan publishes to a Framer subdomain with a banner, and paid site plans are billed per site per month, differing by custom domain support, traffic limits, CMS item counts, localisation, staging, and editor seats, with Enterprise adding higher limits. Readymag\'s free plan publishes to a Readymag subdomain with limits on project count, while paid plans are billed monthly or annually per account and add custom domains, more projects, branding removal, additional fonts, form and analytics features, and team or client collaboration. For Framer and Readymag, current figures sit on the vendor pricing pages, so budget from there rather than from a fixed seat price.',
      'The sharpest functional divergence is how much real site infrastructure each tool gives you. Framer is the only one with a genuine CMS plus localisation, staging, and editor seats as plan-level features, which is why it replaces a hand-built marketing stack rather than sitting beside one; its React code overrides also let a developer extend the canvas instead of rebuilding it. Readymag has no structured content model — its strength is authored control over typography, layout, animation, and scroll behaviour on a blank canvas, superb for a portfolio or editorial feature and a poor fit for hundreds of CMS-driven pages. Dora goes furthest the other way: AI generation plus native 3D and scroll animation, published straight to Dora hosting, with no code export and no way to embed its output inside an existing front end.',
      'So where does each platform genuinely shine? Framer is the strongest choice for teams that need a real production marketing or product website with a CMS, localisation, staging, and SEO control, published to a global CDN and maintained by designers rather than engineers. Readymag is the strongest choice for designers and studios building portfolios, editorial pages, presentations, and microsites where typography and art direction are the entire point and templates are a liability. Dora is the strongest choice for launching a visually ambitious 3D animated site fast, with no development capacity, at Pro $20 per month including a custom domain. Our rule of thumb: if the site has to be maintained by non-designers for years, choose Framer; if the page has to look authored and crafted, choose Readymag; if the page has to impress in five seconds and then be replaced, choose Dora.',
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
          [comparisonTools[0]]: 'The design canvas is the production output — publish it straight to a global CDN.',
          [comparisonTools[1]]: 'AI-generated 3D animated websites built and published without any code.',
          [comparisonTools[2]]: 'Blank-canvas design tool for editorial pages, portfolios, and art-directed microsites.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Startups, agencies, and marketing teams shipping real product and company sites.',
          [comparisonTools[1]]: 'Founders, marketers, and designers launching visually striking campaign sites.',
          [comparisonTools[2]]: 'Designers, studios, photographers, and brand teams publishing authored pages.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Familiar to anyone from a design tool; responsive breakpoints take some practice.',
          [comparisonTools[1]]: 'Easiest for non-technical users — AI generation removes the blank-canvas problem.',
          [comparisonTools[2]]: 'Simple canvas with no templates to fight, but everything is placed by hand.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Per-site monthly plans scaled by domain, traffic, CMS items, localisation, and seats.',
          [comparisonTools[1]]: 'Pro $20/mo for unlimited projects and custom domains; Team $40/user/mo.',
          [comparisonTools[2]]: 'Per-account monthly or annual plans adding domains, projects, fonts, and collaboration.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free plan publishes to a Framer subdomain with a banner and no custom domain.',
          [comparisonTools[1]]: 'Free tier with limited projects and Dora branding on published pages.',
          [comparisonTools[2]]: 'Free plan publishes to a Readymag subdomain with a limit on project count.',
        },
      },
      {
        feature: 'CMS & content modelling',
        icon: 'database',
        values: {
          [comparisonTools[0]]: 'Built-in CMS with collections and item limits that scale by plan tier.',
          [comparisonTools[1]]: 'No structured content model — pages are generated and art-directed individually.',
          [comparisonTools[2]]: 'No CMS; content is authored per page, which suits publications over large libraries.',
        },
      },
      {
        feature: 'Localisation & languages',
        icon: 'globe',
        values: {
          [comparisonTools[0]]: 'Native localisation on paid plans, with language versions managed in the same project.',
          [comparisonTools[1]]: 'No documented multi-language workflow; localization means rebuilding the page.',
          [comparisonTools[2]]: 'No structured localisation; multi-language sites are built as separate pages.',
        },
      },
      {
        feature: 'Animation & 3D',
        icon: 'film',
        values: {
          [comparisonTools[0]]: 'Effects, transitions, and scroll-driven interactions declared visually on the canvas.',
          [comparisonTools[1]]: 'Strongest here: native 3D objects, camera movement, and scroll-driven animation.',
          [comparisonTools[2]]: 'Per-element animation and fine scroll-behaviour control, tuned like print motion.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'AI tools assist with page generation and content, layered on a manual canvas.',
          [comparisonTools[1]]: 'AI is the core workflow — Dora generates structure, content, and 3D from a prompt.',
          [comparisonTools[2]]: 'No AI generation; Readymag is deliberately a manual, art-directed craft tool.',
        },
      },
      {
        feature: 'Design control & typography',
        icon: 'type',
        values: {
          [comparisonTools[0]]: 'Strong layout control with components and responsive breakpoints; good type tooling.',
          [comparisonTools[1]]: 'Visual control over 3D space and scroll, less over long-form typographic detail.',
          [comparisonTools[2]]: 'Best typographic control of the three, plus additional fonts on paid plans.',
        },
      },
      {
        feature: 'Code access & overrides',
        icon: 'code-xml',
        values: {
          [comparisonTools[0]]: 'React code overrides and custom components extend the canvas without a rebuild.',
          [comparisonTools[1]]: 'No code access and no code export — output stays on Dora\'s hosting.',
          [comparisonTools[2]]: 'No code overrides or export; everything is expressed inside the visual canvas.',
        },
      },
      {
        feature: 'Hosting & publishing',
        icon: 'cloud',
        values: {
          [comparisonTools[0]]: 'Publishes to a global CDN with staging on higher plans; hosting is included.',
          [comparisonTools[1]]: 'Hosted by Dora, with a custom domain unlocked on the Pro plan.',
          [comparisonTools[2]]: 'Hosted by Readymag, with custom domains on paid plans and branding removed.',
        },
      },
      {
        feature: 'SEO & analytics control',
        icon: 'search',
        values: {
          [comparisonTools[0]]: 'Per-page SEO controls, sitemaps, and analytics integration for production sites.',
          [comparisonTools[1]]: 'Basic page settings; SEO depth is limited because output is a generated scene.',
          [comparisonTools[2]]: 'Analytics features arrive on paid plans; SEO tooling is lighter than Framer\'s.',
        },
      },
      {
        feature: 'Collaboration & handoff',
        icon: 'users-round',
        values: {
          [comparisonTools[0]]: 'Editor seats on paid plans let marketers edit content without touching design.',
          [comparisonTools[1]]: 'Collaboration features are added on the Team plan at $40/user/mo.',
          [comparisonTools[2]]: 'Team and client collaboration options on paid plans, built for studio review.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Forms, analytics, marketing embeds, and React components connect to an existing stack.',
          [comparisonTools[1]]: 'Self-contained publishing stack; integrations are limited to what a hosted site allows.',
          [comparisonTools[2]]: 'Form and analytics features on paid plans, plus embeds for media and fonts.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Long-lived production marketing sites with a CMS, localisation, and editor seats.',
          [comparisonTools[1]]: 'Fast-launch 3D animated campaign sites with no engineering capacity available.',
          [comparisonTools[2]]: 'Portfolios, editorial features, presentations, and art-directed brand microsites.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'The design canvas is the production output — no export, rebuild, or build pipeline to maintain',
        'Built-in CMS with localisation replaces a hand-built marketing stack for content teams',
        'Publishes to a global CDN, with staging available on higher plan tiers',
        'React code overrides let a developer extend the canvas instead of rewriting the site',
        'Editor seats mean marketers can update content without a designer in the loop',
        'Free plan is genuinely usable for evaluation, publishing to a Framer subdomain',
      ],
      cons: [
        'Plans are billed per site per month, so multi-site agencies see costs multiply quickly',
        'Traffic limits, CMS item counts, localisation, staging, and seats are all gated by tier',
        'Free plan carries a Framer banner and no custom domain, which rules out client work',
        'Sites are locked to Framer hosting — there is no code export to your own infrastructure',
        'Responsive breakpoint work on a complex page still demands real design-engineering skill',
        'Enterprise pricing is custom, so a multi-year budget needs a sales conversation',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'AI generation produces a complete animated site from a prompt, structure included',
        'Native 3D objects, camera movement, and scroll animation would take weeks to hand-build',
        'Hosting is included, so a marketing site goes live with no engineering involvement',
        'Pro at $20/mo bundles unlimited projects and custom domains in one flat price',
        'Free tier allows real evaluation, with Dora branding as the only visible limit',
        'Approachable for founders and marketers with no design or development training',
      ],
      cons: [
        'No code export and no code access — the site cannot move off Dora\'s hosting',
        'Free tier is limited in project count and puts Dora branding on published pages',
        'Team at $40/user/mo is expensive for output that is a marketing site, not a product',
        'No CMS or structured content model, so content-heavy sites must be rebuilt by hand',
        'No documented localisation workflow — multi-language means duplicating the page',
        'Generated layouts look alike without heavy art direction, which costs the time AI saved',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Best typographic and layout control of the three, built for art-directed work',
        'Blank canvas instead of templates — nothing to fight against on an editorial page',
        'Fine per-element animation and scroll-behaviour control gives pages a crafted feel',
        'Paid plans add custom domains, more projects, branding removal, and additional fonts',
        'Form and analytics features plus team and client collaboration suit studio workflows',
        'Browser-based, so a studio can review and publish without installing anything',
      ],
      cons: [
        'No CMS or content collections, so large content libraries are impractical',
        'Free plan is limited by project count and publishes to a Readymag subdomain',
        'No code overrides or export — anything outside the canvas cannot be built',
        'No structured localisation, so multi-language sites become separate manual pages',
        'Everything is placed by hand, which is slow for a high-volume marketing site',
        'Plans are per account with undisclosed tier limits, so budgeting needs the vendor page',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After building the same six-page studio site on all three platforms, our conclusion is that there is no universal winner — the right choice depends on how long the site has to live and who maintains it. Framer was the only tool that could genuinely carry the case-study index as a content collection and publish two localized language versions from one project, which is the requirement that eliminates the other two for most businesses. Readymag produced the best-looking typography and the most intentional scroll behaviour, and it was the fastest route to a portfolio-grade page. Dora produced the most visually dramatic homepage in the shortest time and was the only platform where a non-designer finished without asking for help.',
      'Where Framer deserves praise is that it removes the gap between design and production: the canvas is the shipped output, publishing goes to a global CDN, the CMS with localisation lets marketers own content, staging exists on higher tiers, and React code overrides give a developer an escape hatch instead of a rewrite. Where it draws criticism is commercial structure and lock-in. Plans are billed per site per month, so an agency running ten client sites multiplies cost, and the tier gates — traffic limits, CMS item counts, localisation, staging, editor seats — decide the price by features rather than headcount. There is also no code export: your site lives on Framer hosting. Studios that leave usually go to a hand-built Next.js stack.',
      'Where Dora deserves praise is speed and spectacle: AI generation plus native 3D and scroll animation collapses what used to be a design, a 3D artist, and a front-end engineer into one $20 per month plan that includes unlimited projects and a custom domain. Where it draws criticism is portability and depth. There is no code access, no export, no CMS, and no documented localisation workflow, so a Dora site cannot grow into a content-driven product site or move to your own infrastructure, and generated layouts need substantial art direction to avoid looking generic. Dora loses long-lived marketing work to Framer and loses crafted editorial work to Readymag; it wins launch pages and campaign microsites outright.',
      'Where Readymag deserves praise is craft: working from a blank canvas rather than templates, with fine control over typography, layout, animation, and scroll behaviour, it produces pages that read as authored rather than assembled — which is exactly why designers, studios, and art-directed brand projects choose it. Paid plans add custom domains, more projects, branding removal, additional fonts, form and analytics features, and team or client collaboration. Where it draws criticism is scale and extensibility. There is no CMS, so a case-study library of any size becomes manual duplication; there is no code override, so anything the canvas cannot express simply cannot be built; and there is no structured localisation. Readymag loses production marketing sites to Framer and loses fast AI-generated launches to Dora.',
      'The biggest trend in 2026 is the split between AI-generated spectacle and maintainable production sites. Dora represents the first: a prompt produces a 3D animated page that impresses immediately and is expected to be replaced by the next campaign. Framer represents the second: a canvas that publishes to a CDN with a CMS, localisation, staging, and editor seats, built to be maintained by non-engineers for years. Readymag sits deliberately outside both, holding the craft position that templates and generators cannot replicate. In practice most studios now run two tools — Framer for client product and marketing sites with ongoing content ownership, plus Readymag for portfolio and editorial work — and reach for Dora only when a launch needs to be visually loud and short-lived.',
      'Looking ahead, expect AI generation to appear in every visual builder while the deciding factors stay structural: who owns the content, who can edit it, and where the site is hosted. If you need a production marketing or product site with a CMS, localisation, staging, and editor seats that non-designers can maintain, start with Framer and price it per site against the tier gates you actually need. If you need an authored portfolio, editorial feature, presentation, or art-directed microsite where typography carries the work, start with Readymag and check its paid plan limits on the vendor page before committing. If you need a visually ambitious 3D animated launch site live this week with no engineering capacity, start with Dora free and move to Pro at $20 per month for unlimited projects and a custom domain — then plan for the fact that it cannot be exported.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Framer if you need a real production website where the design canvas is the shipped output, with a built-in CMS, localisation, staging, SEO controls, editor seats for marketers, React code overrides, and publishing to a global CDN — ideal for startups, agencies, and in-house teams maintaining a site for years, on per-site plans whose tiers gate traffic, CMS items, and seats. Choose Readymag if you are building a portfolio, editorial feature, presentation, or art-directed microsite where typography, layout, and scroll behaviour are the whole point and templates are a liability — ideal for designers, studios, photographers, and brand teams. Choose Dora if you want an AI-generated 3D animated site live immediately with no engineering capacity, hosted with a custom domain on Pro at $20 per month — ideal for founders and marketing teams launching campaigns. If your work spans long-lived content sites and crafted editorial pages, the mature answer is two tools in parallel: Framer for production marketing plus Readymag for portfolio work.',
  },
}
