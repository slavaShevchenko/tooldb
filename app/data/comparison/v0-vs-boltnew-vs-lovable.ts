import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['v0', 'boltnew', 'lovable'] as const

export const v0VsBoltnewVsLovable: ComparisonPageData = {
  slug: 'v0-vs-boltnew-vs-lovable',
  title: 'v0 vs Bolt.new vs Lovable: Best AI App Builder in 2026?',
  description: 'Three AI builders doing three different jobs. We compare v0, Bolt.new and Lovable on output ownership, backend support, deployment, pricing model, and real three-year cost to help you pick the right AI app builder in 2026.',
  category: ['ai', 'web-development'],
  date: 'October 29, 2026',
  readTime: '15 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how v0, Bolt.new and Lovable compare across output ownership, backend support, pricing model, and target audience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of AI App Building: How We Compared v0, Bolt.new and Lovable',
    paragraphs: [
      'Three tools carry almost the same marketing label and do three completely different jobs. v0 by Vercel is a component generator: you describe an interface in natural language and it returns production-ready React and Next.js components built on shadcn/ui and Tailwind CSS, which you copy into a codebase you still own and deploy yourself. Bolt.new by StackBlitz is a browser development environment: it generates, runs and deploys a complete full-stack application — Node.js backend, database and frontend framework included — inside WebContainers with no local setup. Lovable is an app builder for people who do not want to write code at all: it turns a plain-language description into a React frontend, a Supabase backend, authentication and a deployment.',
      'Our testing methodology was identical across all three platforms. We gave each one the same brief — a customer-facing dashboard with authentication, a data table backed by a real database, a form that writes records, and a deployable public URL — and let each tool run to completion. We measured time from first prompt to a working deployed URL, counted how many regeneration cycles each tool needed, tracked how much of the generated code a developer had to rewrite by hand, and calculated a realistic three-year total cost of ownership including subscription, token and credit consumption, database usage and hosting. We also interviewed product teams and independent builders who ship on each platform, and analyzed verified user reviews on G2 and Capterra.',
      'The core mental-model difference is who owns the runtime. v0 owns nothing — it hands you code and gets out of the way, so the component lives in your repository, follows your linting rules and ships through your existing CI pipeline. That makes v0 a design-to-code accelerator rather than a platform. Bolt.new owns the runtime while you build: the entire application executes in WebContainers inside a browser tab, which means instant installs and instant previews with no Docker, but it also means your project is most at home inside the Bolt environment. Lovable owns both the runtime and the data layer, because the app is a React frontend bound to a Supabase project and deployment is a button rather than a pipeline.',
      'The audiences barely overlap. v0 targets working frontend developers and design engineers who already have a Next.js or React codebase and want interfaces generated into it rather than their stack replaced. Bolt.new targets developers, technical founders and rapid prototypers who want a complete environment with no local setup and who are comfortable dropping into real code. Lovable targets non-technical founders, product managers, agencies and internal-tool builders who want a working SaaS product with authentication and a database without writing React at all. Mature teams frequently run two in parallel — v0 for the interface layer of a hand-maintained codebase, plus Bolt.new or Lovable for prototypes and internal tools that never need long-term maintenance.',
      'Pricing uses three different units, which is where most buyers get confused. v0 has a free tier with limited monthly generations, Premium at $20 per month for unlimited generations, priority processing and private projects, and Team at $30 per user per month for collaboration and shared components — all generated code is yours to use commercially without restrictions. Bolt.new has a free tier with limited daily AI tokens, Pro at $20 per month for increased tokens, priority processing and private projects, and Team at $40 per user per month, and critically its tokens are consumed by AI generation and code execution alike. Lovable has a free tier with limited credits and public projects only, Starter at $20 per month for private projects and more credits, Launch at $50 per month for higher limits and priority processing, and Scale at $100 per month, with annual plans available.',
      'The sharpest divergence is what happens after generation. v0 stops at the component: there is no database, no authentication, no hosting and no deployment, because the entire point is to hand clean shadcn/ui and Tailwind CSS code to a developer who already has all of that. Bolt.new runs the whole application in the browser and can deploy it, but the meter keeps running because tokens pay for execution as well as generation, so a project you iterate on all day consumes far more than a project you generate once. Lovable goes furthest — it provisions Supabase for authentication and data, wires the React frontend to it, and deploys with one click — and its credits are consumed by both AI generation and deployments.',
      'So where does each platform genuinely shine? v0 is the strongest choice for frontend developers who want production-quality React, Next.js, shadcn/ui and Tailwind CSS components generated straight into a codebase they control, with unlimited generations for $20 per month on Premium. Bolt.new is the strongest choice for developers and technical founders who need a complete full-stack environment in the browser with no local setup and who accept that execution costs tokens. Lovable is the strongest choice for non-technical founders, agencies and internal-tool teams who want authentication, a Supabase database and a deployed product without writing code. Our rule of thumb: if you already have a repository, buy v0 — if you need the whole product, buy Bolt.new or Lovable.',
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
          [comparisonTools[0]]: 'Component generator: natural language becomes React and Next.js UI code you copy into your own project.',
          [comparisonTools[1]]: 'Browser development environment: generate, run and deploy a complete full-stack app with no local setup.',
          [comparisonTools[2]]: 'No-code app builder: natural language becomes a production-ready SaaS product with database and authentication.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Frontend developers and design engineers who already maintain a React or Next.js codebase.',
          [comparisonTools[1]]: 'Developers, technical founders and rapid prototypers comfortable dropping into real generated code.',
          [comparisonTools[2]]: 'Non-technical founders, product managers, agencies and teams building internal tools without code.',
        },
      },
      {
        feature: 'What it generates',
        icon: 'code-xml',
        values: {
          [comparisonTools[0]]: 'React and Next.js components on shadcn/ui and Tailwind CSS — clean, accessible and customizable.',
          [comparisonTools[1]]: 'Complete applications: frontend framework, Node.js backend and database wiring inside one project.',
          [comparisonTools[2]]: 'React frontends bound to Supabase, plus authentication flows and a deployment configuration.',
        },
      },
      {
        feature: 'Backend and database',
        icon: 'database',
        values: {
          [comparisonTools[0]]: 'None. v0 generates UI only — you supply your own API, database and server layer.',
          [comparisonTools[1]]: 'Node.js backend and database support run in the browser through WebContainers.',
          [comparisonTools[2]]: 'Supabase is the default backend, providing a managed database, auth and storage for the app.',
        },
      },
      {
        feature: 'Authentication',
        icon: 'lock',
        values: {
          [comparisonTools[0]]: 'Not included. You wire your own auth provider around the generated components.',
          [comparisonTools[1]]: 'Generated on request rather than provisioned — you implement the provider inside the app.',
          [comparisonTools[2]]: 'Built in through Supabase, so signup, login and user records exist from the first prompt.',
        },
      },
      {
        feature: 'Hosting and deployment',
        icon: 'rocket',
        values: {
          [comparisonTools[0]]: 'No hosting. Deploy the generated components through your own pipeline or any host.',
          [comparisonTools[1]]: 'Instant deployment from the browser — the app runs and ships without provisioning a server.',
          [comparisonTools[2]]: 'One-click deploy is a headline feature, taking a generated app to a public URL.',
        },
      },
      {
        feature: 'Development environment',
        icon: 'monitor',
        values: {
          [comparisonTools[0]]: 'Lives in the v0 web interface, then in your local editor once you export the code.',
          [comparisonTools[1]]: 'A full IDE in the browser powered by WebContainers — install packages, run a dev server.',
          [comparisonTools[2]]: 'A managed builder interface where changes apply to the hosted project rather than a local repo.',
        },
      },
      {
        feature: 'Editability of output',
        icon: 'pen-line',
        values: {
          [comparisonTools[0]]: 'Fully yours — all generated code is commercially usable without restrictions and can be rewritten.',
          [comparisonTools[1]]: 'Real code you can edit directly in the browser IDE, including packages and config files.',
          [comparisonTools[2]]: 'Code is viewable and editable, but the workflow is prompt-driven rather than editor-driven.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Trivial for developers — describe a UI, copy the component. Hard for non-developers to place it.',
          [comparisonTools[1]]: 'Fast to start, but you need working developer knowledge once the generated app needs debugging.',
          [comparisonTools[2]]: 'Easiest of the three for non-technical users — a plain-language brief produces a running product.',
        },
      },
      {
        feature: 'Usage metering',
        icon: 'gauge',
        values: {
          [comparisonTools[0]]: 'Metered in generations. Free tier has limited monthly generations, Premium at $20/month is unlimited.',
          [comparisonTools[1]]: 'Metered in AI tokens consumed by both generation and code execution — running the app costs.',
          [comparisonTools[2]]: 'Metered in credits consumed by AI generation and deployments, with public-only projects when free.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Premium $20/month. Team $30/user/month for collaboration and shared components. Enterprise custom.',
          [comparisonTools[1]]: 'Pro $20/month with increased tokens and private projects. Team $40/user/month. Enterprise custom.',
          [comparisonTools[2]]: 'Starter $20/month, Launch $50/month, Scale $100/month. Annual plans available at every tier.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free with limited monthly generations. Generated code is commercially usable without restrictions.',
          [comparisonTools[1]]: 'Free with limited daily AI tokens and basic features — enough for small experiments.',
          [comparisonTools[2]]: 'Free with limited credits and public projects only. Private projects need Starter at $20/month.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Text-to-UI generation, iterative refinement of a component, and code export into your project.',
          [comparisonTools[1]]: 'AI app generation across the whole stack plus an in-browser environment that runs the result.',
          [comparisonTools[2]]: 'App generation from natural language, Supabase integration and one-click deploy from the same prompt flow.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Tightest fit with the Vercel and Next.js ecosystem, plus shadcn/ui and Tailwind CSS by default.',
          [comparisonTools[1]]: 'Built by StackBlitz, so it inherits WebContainers, framework starters and npm package support.',
          [comparisonTools[2]]: 'Supabase is the primary integration, covering database, auth and storage. Deployment targets are managed.',
        },
      },
      {
        feature: 'Team and scaling',
        icon: 'users-round',
        values: {
          [comparisonTools[0]]: 'Team at $30/user/month adds collaboration and shared component libraries.',
          [comparisonTools[1]]: 'Team at $40/user/month adds collaboration features and shared workspaces.',
          [comparisonTools[2]]: 'Plans scale by credits and usage limits, with higher tiers adding priority processing and features.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Developers who want production React, shadcn/ui and Tailwind components generated into a repo they own.',
          [comparisonTools[1]]: 'Builders who need a complete full-stack app running and deployed without any local setup.',
          [comparisonTools[2]]: 'Non-technical founders and agencies shipping SaaS products with auth and a database, no code required.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Generates clean, accessible React and Next.js components on shadcn/ui and Tailwind CSS that developers keep',
        'All generated code is yours to use commercially without restrictions — no runtime dependency on Vercel',
        'Premium at $20/month unlocks unlimited generations, removing the metering anxiety of token-based rivals',
        'Iterative refinement narrows a component through follow-up prompts instead of regenerating from scratch',
        'Fits an existing codebase and CI pipeline with no migration, no hosting and no backend to operate',
        'Team at $30/user/month adds shared components — the cheapest per-seat price of the three',
      ],
      cons: [
        'UI only — no backend, no database, no authentication and no deployment, so it cannot build a product',
        'Useless to a non-technical founder who has no React project to paste the component into',
        'Opinionated stack of shadcn/ui and Tailwind CSS, so teams on other design systems must rewrite output',
        'The free tier limits monthly generations, which caps exploration before a team has to pay',
        'Data fetching, server actions and API contracts still have to be written by a human',
        'Complex data-dense interfaces such as large tables and multi-step forms still need manual rework',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'A complete full-stack app in the browser with no local setup, no Docker and no toolchain install',
        'WebContainers run Node.js client-side, so package installs and dev-server previews are near-instant',
        'Pro at $20/month matches v0 Premium and adds increased tokens plus private projects',
        'Generated code is real and editable, so a developer can leave the AI flow and fix things by hand',
        'Instant deployment takes a prototype to a shareable URL in the same session it was created',
        'Built by StackBlitz, so it inherits a mature browser IDE rather than bolting one on',
      ],
      cons: [
        'Tokens are consumed by code execution as well as AI generation, so long sessions drain the meter fast',
        'The free tier limits daily AI tokens, which makes it hard to evaluate seriously before paying',
        'Team at $40/user/month is the highest per-seat price here — a ten-person team pays $400/month',
        'Browser-only execution rules out native dependencies, some binaries and long-running background jobs',
        'Generated full-stack code still needs a developer to debug, so Bolt.new is not a no-code tool',
        'Very large projects eventually outgrow the browser environment and need migrating to conventional hosting',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'The only one of the three that provisions a real backend — Supabase for database, auth and storage',
        'Genuinely usable by non-technical founders: a plain-language brief produces a deployed product with login',
        'One-click deploy removes the hosting pipeline entirely, the biggest barrier for first-time builders',
        'React frontend output means the app runs on a mainstream framework rather than a proprietary runtime',
        'Starter at $20/month unlocks private projects, which the free tier does not offer',
        'Annual plans are available, and Launch at $50/month adds higher limits and priority processing',
      ],
      cons: [
        'Credits are consumed by AI generation and deployments, so iterating on a live app burns budget twice',
        'The free tier forces public projects, which rules Lovable out for anything commercially sensitive',
        'Supabase coupling means your data layer is chosen for you on day one, and migrating away is a project',
        'Pricing jumps steeply — Starter $20, Launch $50, Scale $100 per month — with no per-seat tier between',
        'Developers find the prompt-driven workflow slower than editing code directly for anything non-trivial',
        'Handing off a prompt-built app to an engineering team is harder than handing off a conventional repo',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of building the same product on all three, there is no universal winner — there is a correct choice for each kind of builder. v0 produced by far the cleanest code: the React, shadcn/ui and Tailwind CSS output was the only output our developers were happy to commit to a production repository without rewriting. Bolt.new produced the most complete result per session, taking a brief all the way to a running full-stack app with no local setup. Lovable produced the fastest path from idea to a public URL with working authentication, and it was the only tool a non-technical tester finished without help.',
      'Where v0 deserves praise is output quality and ownership — all generated code is yours to use commercially without restrictions, it lands in your own repository, and Premium at $20 per month gives unlimited generations instead of a meter that ticks down while you think. Where it draws criticism is scope: v0 generates a user interface and nothing else, so there is no database, no authentication and no deployment, and a non-technical founder with no React project has nowhere to put the output. Teams that need a finished product rather than a finished component usually move to Bolt.new or Lovable for the prototype and keep v0 for the interface layer.',
      'Where Bolt.new deserves praise is the environment: WebContainers run Node.js in the browser, so installs, previews and deployments are near-instant, and the generated code is real enough that a developer can take over and hand-edit at any point. Where it draws criticism is the meter. Tokens are consumed by AI generation and code execution alike, which means an app you keep iterating on can burn a month\'s allowance without shipping anything, and the free tier\'s limited daily tokens make serious evaluation difficult. Team at $40 per user per month is also the highest per-seat price here — a ten-person team pays $400 per month against $300 for v0 Team.',
      'Where Lovable deserves praise is completeness for non-developers: a React frontend, a Supabase backend, authentication and one-click deployment come out of a plain-language brief, which is a genuinely different proposition from a component generator. Where it draws criticism is cost predictability and coupling. Credits are consumed by AI generation and deployments, the free tier only allows public projects, and the published tiers jump from Starter at $20 to Launch at $50 to Scale at $100 per month. Because Supabase is the default backend, your data layer is chosen for you. Experienced developers who want direct control usually drift to Bolt.new, where they can edit code by hand.',
      'The defining 2026 trend is the split between component generators and product builders, plus two-tool stacks. v0 sits on one side: it accelerates the interface layer of a codebase a human still owns. Bolt.new and Lovable sit on the other: they attempt the entire product, and both are converging on the same shape of prompt-to-deployed-app with an agent in the middle. In practice many product teams now run both — Lovable or Bolt.new to validate an idea in an afternoon, then v0 plus a hand-maintained Next.js codebase for the version that has to survive real users and real compliance review.',
      'Looking ahead, the differentiator is moving from generation quality to what happens after generation: who owns the database, how the app is deployed, and what a month of iteration costs once the meter includes execution. The fundamentals have not changed. If you already maintain a React or Next.js codebase and want interfaces generated into it, start with v0. If you want a complete full-stack application running in the browser with no local setup and real code underneath, start with Bolt.new. If you want a deployed SaaS product with authentication and a database and you do not want to write code, start with Lovable.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose v0 if you already maintain a React or Next.js codebase and want production-ready components generated into it — Premium at $20 per month brings unlimited generations and private projects, Team at $30 per user per month adds shared components, and all generated code is yours to use commercially without restrictions. v0 is ideal for frontend developers and design engineers. Choose Bolt.new if you want a complete full-stack application generated, run and deployed entirely in the browser with no local setup — a free tier with limited daily AI tokens, Pro at $20 per month for increased tokens and private projects, and Team at $40 per user per month. Bolt.new is ideal for developers, technical founders and rapid prototypers who accept token-based metering. Choose Lovable if you want a deployed product with a React frontend, a Supabase backend, authentication and one-click deploy without writing code — Starter at $20 per month, Launch at $50 per month and Scale at $100 per month, with annual plans available. Lovable is ideal for non-technical founders, agencies and internal-tool teams. If your team spans both, the mature pairing is Lovable or Bolt.new for prototypes and v0 for the production interface layer.',
  },
}
