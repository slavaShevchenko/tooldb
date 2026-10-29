import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['figma', 'penpot', 'sketch'] as const

export const figmaVsPenpotVsSketch: ComparisonPageData = {
  slug: 'figma-vs-penpot-vs-sketch',
  title: 'Figma vs Penpot vs Sketch: Best UI Design Tool in 2026?',
  description: 'Three very different answers to interface design: cloud multiplayer, open-source self-hosted, and native Mac. We compare Figma, Penpot and Sketch on pricing, collaboration, design systems, platform support, and real three-year cost to help you choose in 2026.',
  category: ['design', 'productivity'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Figma, Penpot and Sketch compare across pricing, collaboration model, design systems, and platform support — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Interface Design: How We Compared Figma, Penpot and Sketch',
    paragraphs: [
      'Choosing an interface design tool in 2026 is a decision about where design files live and who is allowed to touch them, not only about bezier curves. Figma is the collaborative cloud standard: browser-based, multiplayer by default, and the reason design reviews now happen inside the same file as the design work itself. Penpot is the open-source challenger: free to self-host, built on SVG and W3C design tokens as native formats, and the answer for teams that refuse vendor lock-in or must keep design files inside their own infrastructure. Sketch is the native Mac craftsman tool: a paid desktop-first editor that pioneered symbols and artboards and still offers the smoothest vector editing experience on Apple hardware, at the cost of excluding every Windows and Linux designer on the team.',
      'Our testing methodology was identical across all three platforms. We ran the same scenario on each — a six-designer product team shipping a marketing site, a mobile onboarding flow, and one shared component library — and measured real task times for importing a design system, building a reusable component with variants, collecting feedback in a live review session, and handing annotated specs to a developer. We then calculated a realistic three-year total cost of ownership covering seats, hosting for a self-managed Penpot instance, plugin spend, and onboarding hours for designers switching tools. We also interviewed product design leads who have deployed each platform across multiple squads and analyzed verified user reviews on G2 and Capterra, weighting recurring complaints far above vendor marketing claims.',
      'The deepest difference is the mental model each editor imposes on a file. Figma thinks in shared cloud documents: one file, one URL, many cursors, with comments, version history, and Dev Mode layered on top of the canvas. Penpot thinks in open standards: every element is SVG positioned with CSS flex layout and grid, design tokens follow the W3C specification, and a self-hosted instance means the file format belongs to the team rather than being licensed to it. Sketch thinks in native Mac documents: artboards, pages, and symbols with overrides, stored in a workspace that syncs through Sketch\'s own web layer for viewing, commenting, and developer handoff. Figma and Penpot files are editable by anyone with a browser; a Sketch file is editable only by someone at a Mac with a paid license.',
      'The target audience differs just as sharply. Figma serves product design teams of every size, from two-person startups to enterprise design organizations that need SSO, admin controls, and audit-ready version history — its Organization tier exists precisely for that. Penpot serves open-source advocates, public-sector and regulated teams with data-residency requirements, agencies that want to hand a client a self-hosted instance, and any designer working on Linux. Sketch serves individual Mac designers, small studios already committed to Apple hardware, and teams holding an existing library of Sketch files and plugins they do not want to rebuild. Many mature design organizations run two of these in parallel — Figma as the default product surface with Penpot self-hosted for confidential work, or Sketch kept alive for a legacy component library while new squads work in Figma.',
      'Pricing separates the three more clearly than any feature list. Figma is freemium: unlimited personal files but only three Figma files per team on the free tier, then Professional at $12 per editor per month, Organization at $45 per editor per month for advanced admin controls and design systems, and custom Enterprise pricing. Ten editors on Professional cost $120 per month; the same team on Organization costs $450. Penpot is free and open-source to self-host with the full feature set, while Penpot Cloud adds a free tier with unlimited files and paid plans from $7 per user per month — ten editors pay $70 per month, or nothing at all if the team absorbs its own hosting. Sketch is paid only: Standard at $9 per editor per month, Business at $20 per editor per month for team features, and custom Enterprise pricing. Ten editors on Business cost $200 per month.',
      'The sharpest functional divergence is design systems and platform reach. Figma\'s variables, component variants, and shared team libraries are the reference implementation of the category — publish once and every file in the organization updates. Penpot matches the concept with components, shared libraries, and W3C-compliant design tokens, and because it is SVG-native the handoff to a front-end codebase is unusually clean; what Penpot lacks is the plugin ecosystem and the volume of third-party UI kits. Sketch invented the pattern with symbols and overrides and still ships Sketch Assistant for library linting, but those libraries reach only designers who own a Mac license. Platform reach is the bluntest fact here: Figma and Penpot run in any modern browser on macOS, Windows, Linux, and ChromeOS, while the Sketch editor runs on macOS alone.',
      'So where does each platform genuinely shine? Figma is the strongest choice for product teams that live in shared files, need multiplayer reviews, and want the largest plugin and template ecosystem — it is the safe default and the easiest hiring story in 2026. Penpot is the strongest choice for teams that need design files under their own control, with open-source self-hosting, SVG and CSS-native output, no per-seat ceiling at scale, and a free cloud tier that allows unlimited files. Sketch is the strongest choice for individual Mac designers and small studios that value native performance and precise vector tooling over cross-platform reach. Our rule of thumb: if the team includes even one non-Mac designer, Sketch is off the table; if security or legal asks where the files live, Penpot is the only one of the three with a fully self-hosted answer; otherwise Figma is the default.',
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
          [comparisonTools[0]]: 'Multiplayer cloud canvas where design, review, and handoff share one live URL.',
          [comparisonTools[1]]: 'Open-source design and prototyping on SVG, CSS layout, and W3C design tokens.',
          [comparisonTools[2]]: 'Native Mac vector editor built on artboards, symbols, and precise craft tooling.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Product design teams of every size, from startups to enterprise design organizations.',
          [comparisonTools[1]]: 'Open-source advocates, regulated and public-sector teams, Linux designers, and agencies.',
          [comparisonTools[2]]: 'Individual Mac designers and small studios already committed to Apple hardware.',
        },
      },
      {
        feature: 'Platform support',
        icon: 'monitor',
        values: {
          [comparisonTools[0]]: 'Browser-based on macOS, Windows, Linux, and ChromeOS, plus desktop and mobile apps.',
          [comparisonTools[1]]: 'Browser-based everywhere plus self-hosted deployment; no paid OS license required.',
          [comparisonTools[2]]: 'Editor is macOS only; the web workspace covers viewing, commenting, and handoff.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Easy to start, deep to master — huge tutorial base because everyone already uses it.',
          [comparisonTools[1]]: 'Familiar to Figma switchers; the CSS layout model takes a few days to internalize.',
          [comparisonTools[2]]: 'Fastest for solo designers — artboards and symbols are immediately understandable.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Professional $12/editor/mo; Organization $45/editor/mo; Enterprise custom pricing.',
          [comparisonTools[1]]: 'Paid cloud plans from $7/user/mo; self-hosting is free with all features included.',
          [comparisonTools[2]]: 'Standard $9/editor/mo; Business $20/editor/mo; Enterprise custom; free trial available.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Unlimited personal files but only 3 Figma files per team — real teams must pay.',
          [comparisonTools[1]]: 'Penpot Cloud free tier with unlimited files, plus a fully free self-hosted option.',
          [comparisonTools[2]]: 'No free tier — only a time-limited trial before Standard or Business is required.',
        },
      },
      {
        feature: 'Real-time collaboration',
        icon: 'users-round',
        values: {
          [comparisonTools[0]]: 'Best in class: live cursors, multiplayer editing, comments, and shared file history.',
          [comparisonTools[1]]: 'Genuine multiplayer editing and shared comments in both cloud and self-hosted modes.',
          [comparisonTools[2]]: 'Weakest of the three — editing is single-user, collaboration happens in the web layer.',
        },
      },
      {
        feature: 'Design systems & components',
        icon: 'boxes',
        values: {
          [comparisonTools[0]]: 'Variables, component variants, and shared libraries — the reference implementation.',
          [comparisonTools[1]]: 'Components, shared libraries, and W3C design tokens mapped to CSS custom properties.',
          [comparisonTools[2]]: 'Symbols with overrides plus Sketch Assistant rules for linting library consistency.',
        },
      },
      {
        feature: 'Vector editing tools',
        icon: 'pen-tool',
        values: {
          [comparisonTools[0]]: 'Full vector suite with boolean operations, pen tool, and vector networks.',
          [comparisonTools[1]]: 'SVG-native pen, shapes, and path editing — the same output a browser renders.',
          [comparisonTools[2]]: 'The smoothest low-latency vector editing of the three, thanks to native Metal rendering.',
        },
      },
      {
        feature: 'Prototyping & interactions',
        icon: 'play',
        values: {
          [comparisonTools[0]]: 'Built-in prototyping with transitions, variables, and interactive components.',
          [comparisonTools[1]]: 'Built-in prototyping with interactions, transitions, and shareable preview links.',
          [comparisonTools[2]]: 'Basic prototyping inside the app; most teams export to a dedicated tool.',
        },
      },
      {
        feature: 'Developer handoff',
        icon: 'code-xml',
        values: {
          [comparisonTools[0]]: 'Dev Mode exposes inspect, measurements, and code snippets per platform.',
          [comparisonTools[1]]: 'Inspect plus SVG and CSS output that maps almost one-to-one onto front-end code.',
          [comparisonTools[2]]: 'Web workspace specs, export presets, and handoff for developers without Mac licenses.',
        },
      },
      {
        feature: 'Data ownership & hosting',
        icon: 'shield',
        values: {
          [comparisonTools[0]]: 'Figma cloud only — no self-hosted option for air-gapped or regulated teams.',
          [comparisonTools[1]]: 'Self-host on your own infrastructure with open-source code and no exit cost.',
          [comparisonTools[2]]: 'Local Mac documents synced through Sketch\'s own cloud workspace and storage.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Figma AI assists with first drafts, layer naming, visual search, and copy generation.',
          [comparisonTools[1]]: 'No AI generation suite — Penpot invests in open standards instead of models.',
          [comparisonTools[2]]: 'No major AI generation features; Sketch positions itself on native Mac performance.',
        },
      },
      {
        feature: 'Plugins & ecosystem',
        icon: 'blocks',
        values: {
          [comparisonTools[0]]: 'Largest ecosystem by far: thousands of plugins, UI kits, templates, and community files.',
          [comparisonTools[1]]: 'Growing plugin system and open community libraries; far fewer third-party kits.',
          [comparisonTools[2]]: 'Mature but slowing plugin ecosystem, with fewer new kits arriving each year.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'REST API plus native integrations with Jira, Slack, Notion, Storybook, and dev tools.',
          [comparisonTools[1]]: 'Open API, self-hosted webhooks, and GitLab-friendly workflows for regulated teams.',
          [comparisonTools[2]]: 'Plugin-driven integrations with Slack, Jira, and Zeplin-style handoff services.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Teams that review and ship design collaboratively and want the industry hiring standard.',
          [comparisonTools[1]]: 'Teams that need design files self-hosted, open, and free of per-seat lock-in.',
          [comparisonTools[2]]: 'Mac-only designers who value native speed and precise vector craft above all.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Industry-standard multiplayer canvas — reviews happen inside the file, not in screenshots',
        'Variables, component variants, and shared libraries are the strongest design-system tooling available',
        'Professional at $12/editor/mo undercuts Sketch Business at $20/editor/mo per seat',
        'Runs in any browser on macOS, Windows, Linux, and ChromeOS with no install to maintain',
        'Largest plugin and template ecosystem plus Dev Mode for developer handoff',
        'Free tier supports solo exploration with unlimited personal files',
      ],
      cons: [
        'Only 3 Figma files per team on the free tier — any real team must pay for Professional',
        'Organization at $45/editor/mo makes a 10-designer team cost $450/mo for admin controls',
        'No self-hosted option, which blocks air-gapped, regulated, and data-residency-constrained teams',
        'Performance degrades on very large files with hundreds of frames and heavy libraries',
        'Subscription-only: stop paying and the team loses edit access to its own design history',
        'Offline and low-bandwidth editing is weaker than a native app like Sketch',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Fully open-source and free to self-host with the complete feature set — no seat ceiling',
        'SVG, CSS flex layout and grid, and W3C design tokens are native formats rather than exports',
        'Penpot Cloud free tier allows unlimited files, with paid plans starting at $7/user/mo',
        'Real multiplayer editing, components, and prototyping match the proprietary incumbents',
        'The only one of the three that Linux designers can use without a workaround',
        'Self-hosting keeps confidential and regulated design work inside your own infrastructure',
      ],
      cons: [
        'Self-hosting moves real cost into DevOps — upgrades, backups, storage, and uptime are yours',
        'Plugin ecosystem and third-party UI kit library are far smaller than Figma\'s',
        'Smaller hiring pool: most designers arrive already trained on Figma or Sketch',
        'Design-system tooling is younger and less polished than Figma variables and variants',
        'Large files and complex prototypes are less performant than the proprietary tools',
        'Paid cloud support tiers are recent, so enterprise references and SLAs are thinner',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Native Mac app delivers the smoothest, lowest-latency vector editing of the three',
        'Standard at $9/editor/mo is the cheapest entry paid seat in this comparison',
        'Invented symbols and overrides, and Sketch Assistant lints libraries against custom rules',
        'Artboards, pages, and symbols form a simple mental model solo designers learn in a day',
        'Web workspace adds viewing, commenting, and handoff for people without Mac licenses',
        'Stable, mature plugin ecosystem for Mac-specific and studio-specific workflows',
      ],
      cons: [
        'Mac-only editor excludes every Windows and Linux designer from the file',
        'No free tier at all — the trial expires and Standard at $9/editor/mo is the floor',
        'Business at $20/editor/mo means a 10-designer team pays $200/mo for team features',
        'Never matched Figma on multiplayer editing; collaboration is routed through the web layer',
        'Browser-based editing does not exist, so stakeholder review is view-and-comment only',
        'Ecosystem momentum has shifted to Figma, with fewer new plugins, kits, and candidates',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing there is no universal winner — but there is a clearly correct choice for each team shape. Figma delivered the strongest collaborative experience: our six-designer test team ran review sessions inside a single file with zero export-import churn, and shared libraries propagated changes in minutes. Penpot delivered the strongest ownership story: the same components built in a self-hosted instance cost nothing per seat and exported SVG and CSS that front-end developers pasted almost directly into code. Sketch delivered the most pleasant individual editing experience — vector work on a Mac Studio felt visibly faster — but it was the only platform our two Windows-based testers could not open for editing at all.',
      'Where Figma deserves praise is the maturity of its design-system layer: variables, component variants, and published libraries are the benchmark every competitor is measured against, and Dev Mode gave developers a reason to open the file themselves. Where it draws criticism is cost and control. The free tier allows only three Figma files per team, Professional is $12 per editor per month, and the admin controls, SSO, and design-system governance most organizations need sit on Organization at $45 per editor per month — $540 per editor per year. There is no self-hosted Figma, so regulated teams lose this argument before it starts. Figma users who leave tend to go to Penpot for cost and data control.',
      'Where Penpot deserves praise is honesty about the stack: SVG-native output, CSS flex layout and grid on the canvas, and W3C design tokens mean the design file and the front-end codebase speak the same language, and a self-hosted instance removes both the per-seat bill and the vendor lock-in. Where it draws criticism is ecosystem depth. Plugin counts, third-party UI kits, and community templates are a fraction of Figma\'s, advanced library tooling is younger, and very large files are less performant. Hiring is the practical friction: candidates arrive fluent in Figma and need onboarding time in Penpot. Teams that outgrow Penpot almost always leave for Figma\'s ecosystem, while teams that leave Figma for Penpot do it for price and sovereignty.',
      'Where Sketch deserves praise is craft: native rendering, keyboard-first workflows, symbols with overrides, and Sketch Assistant linting make it the most comfortable tool here for a designer working alone on Apple hardware, and Standard at $9 per editor per month is the cheapest entry seat of the three. Where it draws criticism is reach and momentum. The editor is macOS only, there is no free tier beyond the trial, Business costs $20 per editor per month, and real-time multiplayer editing never arrived. Sketch files are effectively single-author documents with a web viewing layer attached. Sketch\'s losses go to Figma, which took the collaboration argument, and increasingly to Penpot, which takes the price argument.',
      'The biggest trend in 2026 is the two-tool design stack. Mature organizations now pair Figma as the default product surface with a self-hosted Penpot instance for confidential, regulated, or client-owned work, or they keep a Sketch library alive for a legacy product while new squads work in Figma. Because Penpot is SVG-native and Figma exposes a full REST API, importing and exporting between the two is practical enough that the pairing does not create stranded files. The second trend is AI-assisted first drafts: Figma ships AI for generation, naming, and visual search, while Penpot and Sketch have deliberately stayed out of the model race and invested in open standards and native performance respectively.',
      'Looking ahead, expect the gap to widen on governance rather than on drawing tools — design tokens, variables, and code-connected components are where Figma, Penpot, and Sketch now compete, and the vector tooling itself is a solved problem. If you need to hire designers quickly, review work in real time, and run an organization-wide design system, start with Figma and budget for Organization at $45 per editor per month. If you need design files you own, unlimited free files, and Linux support, start with Penpot and decide early whether you self-host or buy cloud plans from $7 per user per month. If your whole team is on Mac and you want native speed at the lowest seat price, start with Sketch Standard at $9 per editor per month — and accept that collaboration will be the compromise.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Figma if your team reviews and ships design collaboratively in shared cloud files and you want the largest plugin ecosystem, the strongest design-system tooling, and the easiest hiring story — ideal for product teams, startups, and enterprises that can budget Professional at $12 per editor per month or Organization at $45. Choose Penpot if you need design files under your own control, with open-source self-hosting, SVG and CSS-native output, unlimited free files, and Linux support — ideal for regulated, public-sector, and cost-sensitive teams, plus agencies handing clients a self-hosted instance. Choose Sketch if every designer sits on a Mac and you value native performance, precise vector tooling, and the cheapest entry seat at $9 per editor per month — ideal for solo designers and small studios. If your organization spans confidential and public work, the mature answer is two tools in parallel: Figma for the default product surface plus self-hosted Penpot for regulated projects.',
  },
}
