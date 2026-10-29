import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['spline', 'rive', 'dora'] as const

export const splineVsRiveVsDora: ComparisonPageData = {
  slug: 'spline-vs-rive-vs-dora',
  title: 'Spline vs Rive vs Dora: Best Interactive Web Animation Tool in 2026?',
  description: '3D scenes, state-machine animation, and AI-generated websites are three different kinds of interactive web work. We compare Spline, Rive and Dora on pricing, runtime performance, editor depth, AI features, and export options to help you decide in 2026.',
  category: ['design', 'web-development'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Spline, Rive and Dora compare across pricing, 3D capability, runtime performance, and target audience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Interactive Web Design: How We Compared Spline, Rive and Dora',
    paragraphs: [
      'Spline, Rive and Dora are frequently shortlisted together, but they ship three different kinds of artifact. Spline is a 3D design tool for creating interactive 3D scenes and animations for websites without coding: a visual editor with real-time collaboration that exports embeddable web content. Rive is a real-time interactive animation tool for apps, games, and websites, where the differentiator is a state machine that responds to user input and live application state through runtime libraries on every major platform. Dora is an AI-powered 3D website builder that generates whole animated sites from a prompt and publishes them, rather than producing an asset for someone else\'s site. Spline gives you a scene, Rive gives you a component, Dora gives you a website.',
      'Our testing methodology was identical across all three platforms. We ran the same scenario on each — an animated product hero for a SaaS marketing page, with a scroll-triggered transition, a hover state, and a control that reacts to real user input — and measured how long it took to reach a published, embeddable result. We then measured the weight of the runtime asset as it actually loads in a browser, tested the same page on a mid-range Android device and on a throttled connection, and calculated a realistic three-year total cost of ownership covering editor seats, hosting, and the engineering hours needed to integrate each output. We also interviewed front-end developers and design engineers who ship this kind of work in production, and analyzed verified user reviews on G2 and Capterra.',
      'The mental model behind each tool is the real dividing line. Spline thinks in a 3D scene: objects, materials, lights, cameras, keyframed animation, and event-based interactions such as mouse move, click, and scroll, all edited visually and exported as an embed or a React component. Rive thinks in a state machine: you draw states on a graph, define transitions between them, expose numeric and boolean inputs, and the runtime drives the animation based on what your application actually tells it — which is why Rive animations feel alive inside a real product rather than being a decoration on top of it. Dora thinks in pages: a canvas where 3D objects, scroll behaviour, and AI-generated sections combine into a complete published site, with no separate integration step because Dora is also the host.',
      'The target audience differs accordingly. Spline serves designers and design engineers who want 3D on the web without writing WebGL, plus marketing teams building hero sections and product visuals. Rive serves product teams building apps and games, design engineers who need animation tied to real state, and organizations that must ship the same motion across web, iOS, Android, and Flutter. Dora serves founders, marketers, and designers who want a visually striking animated site live without a development team at all. Many mature teams run two of these in parallel: Dora for a standalone campaign or launch microsite, with Spline or Rive embedded into the main product site that engineering owns — the two workflows rarely compete for the same job.',
      'Pricing separates them cleanly. Spline is freemium with a free tier carrying Spline branding, then Pro at $9 per editor per month, Team at $19 per editor per month with collaboration features, and custom Enterprise pricing. Rive is freemium with a free tier limited to 3 files, Starter at $12 per editor per month for unlimited files, Pro at $48 per editor per month adding advanced features and team collaboration, and custom Enterprise pricing. Dora is freemium with a free tier limited in project count and carrying Dora branding, Pro at $20 per month for unlimited projects and custom domains, Team at $40 per user per month, and an annual discount. A five-editor team therefore costs $95 per month on Spline Team, $240 on Rive Pro, or $200 on Dora Team.',
      'The sharpest functional divergence is where the artifact runs and how heavy it is. Rive is built for production runtimes: the same file drives animation on web, iOS, Android, Flutter, React Native, and game engines, and Rive files are famously small because the runtime is vector-based rather than raster or geometry-heavy — a state machine can react to real app data such as form validation, playback position, or a loading flag. Spline is built for the browser and is the only one of the three with a true 3D editor, but a WebGL scene carries a real payload, and mobile performance plus initial load weight is the most common complaint from teams that ship Spline heroes to production traffic. Dora does not produce an embeddable asset at all — it produces a hosted site, so there is no integration step and equally no way to drop Dora output into an existing front-end codebase.',
      'So where does each platform genuinely shine? Spline is the strongest choice for designers who want interactive 3D on the web without writing WebGL, at the lowest entry price here with Pro at $9 per editor per month. Rive is the strongest choice for production motion that must respond to real application state and ship across web and native platforms, and it is the only one of the three that a mobile team can use unchanged. Dora is the strongest choice for launching a complete animated website with no engineering involvement, including a custom domain on Pro at $20 per month. Our rule of thumb: if the animation has to react to data, use Rive; if it has to be three-dimensional, use Spline; if the whole page is the deliverable, use Dora.',
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
          [comparisonTools[0]]: 'Visual 3D design tool that exports interactive scenes for the web without coding.',
          [comparisonTools[1]]: 'Real-time animation driven by state machines that respond to user input and app state.',
          [comparisonTools[2]]: 'AI-powered website builder that generates and hosts complete 3D animated sites.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Designers and design engineers adding 3D heroes and product visuals to websites.',
          [comparisonTools[1]]: 'Product, app, and game teams needing motion tied to real state across platforms.',
          [comparisonTools[2]]: 'Founders, marketers, and designers shipping a full site with no development team.',
        },
      },
      {
        feature: 'What you actually ship',
        icon: 'globe',
        values: {
          [comparisonTools[0]]: 'An embeddable 3D scene, React component, or exported 3D asset for your own site.',
          [comparisonTools[1]]: 'A compact animation file plus a runtime library call inside your app or game.',
          [comparisonTools[2]]: 'A complete published website hosted by Dora, including a custom domain on Pro.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Approachable 3D editor; scene setup, lighting, and materials take some practice.',
          [comparisonTools[1]]: 'Timeline and state-machine graph are learnable, but inputs need developer agreement.',
          [comparisonTools[2]]: 'Easiest for non-technical users — AI generation removes the blank-canvas problem.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Pro $9/editor/mo; Team $19/editor/mo with collaboration; Enterprise custom.',
          [comparisonTools[1]]: 'Starter $12/editor/mo unlimited files; Pro $48/editor/mo; Enterprise custom.',
          [comparisonTools[2]]: 'Pro $20/mo unlimited projects and custom domains; Team $40/user/mo.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free tier with basic features and Spline branding on published output.',
          [comparisonTools[1]]: 'Free tier limited to 3 files with basic features — enough to evaluate one component.',
          [comparisonTools[2]]: 'Free tier with limited projects and Dora branding; no custom domain.',
        },
      },
      {
        feature: '3D capability',
        icon: 'boxes',
        values: {
          [comparisonTools[0]]: 'Full 3D editor: modelling, materials, lighting, cameras, 3D text, and scene events.',
          [comparisonTools[1]]: '2D vector, mesh, and bone-based animation — no 3D scene editor at all.',
          [comparisonTools[2]]: '3D objects and 3D scroll animation inside a page, generated and placed visually.',
        },
      },
      {
        feature: 'Animation & interactivity',
        icon: 'film',
        values: {
          [comparisonTools[0]]: 'Keyframed animation plus event-driven interactions: click, hover, mouse, and scroll.',
          [comparisonTools[1]]: 'State machines with transitions and exposed inputs driving animation in real time.',
          [comparisonTools[2]]: 'Scroll-triggered animation and transitions applied across generated page sections.',
        },
      },
      {
        feature: 'Logic & state handling',
        icon: 'workflow',
        values: {
          [comparisonTools[0]]: 'Event and state-based interactions inside a scene; no application-level logic.',
          [comparisonTools[1]]: 'Deepest of the three — boolean and numeric inputs react to live application data.',
          [comparisonTools[2]]: 'Page-level behaviour only; there is no state machine for a developer to drive.',
        },
      },
      {
        feature: 'Runtime performance',
        icon: 'gauge',
        values: {
          [comparisonTools[0]]: 'WebGL scene payload can be heavy; mobile frame rate needs active optimization.',
          [comparisonTools[1]]: 'Optimized runtimes and very small files — built for 60fps on mid-range devices.',
          [comparisonTools[2]]: 'Performance depends on the generated page and Dora\'s own hosting and delivery.',
        },
      },
      {
        feature: 'Platform runtimes',
        icon: 'smartphone',
        values: {
          [comparisonTools[0]]: 'Web first, with embeds and React integration; native mobile support is limited.',
          [comparisonTools[1]]: 'Web, iOS, Android, Flutter, React Native, and game engine runtimes from one file.',
          [comparisonTools[2]]: 'Browser-delivered website only — there is no native runtime to embed.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Spline AI generates 3D objects, scenes, and textures from text and image prompts.',
          [comparisonTools[1]]: 'No text-to-animation generation; the intelligence is in deterministic state machines.',
          [comparisonTools[2]]: 'AI is the product — Dora generates page structure, content, and 3D from a prompt.',
        },
      },
      {
        feature: 'Real-time collaboration',
        icon: 'users-round',
        values: {
          [comparisonTools[0]]: 'Multiplayer editing in the browser, with collaboration on the Team plan.',
          [comparisonTools[1]]: 'Team collaboration and shared files on the Pro plan at $48/editor/mo.',
          [comparisonTools[2]]: 'Collaboration features arrive on the Team plan at $40/user/mo.',
        },
      },
      {
        feature: 'Export & embedding',
        icon: 'code-xml',
        values: {
          [comparisonTools[0]]: 'Embed code, React component, and 3D asset exports for your own front end.',
          [comparisonTools[1]]: 'Runtime libraries and a hosted file URL; you control where and how it renders.',
          [comparisonTools[2]]: 'No code export — the site lives on Dora\'s hosting under your custom domain.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'React and web embeds plus 3D asset pipelines for existing front-end projects.',
          [comparisonTools[1]]: 'First-class SDKs for web, mobile, and game engines, integrated by developers.',
          [comparisonTools[2]]: 'Self-contained publishing stack; integrations are limited to what a hosted site allows.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Designers who want interactive 3D web scenes without writing WebGL themselves.',
          [comparisonTools[1]]: 'Teams shipping production motion that reacts to real data across web and native apps.',
          [comparisonTools[2]]: 'Teams launching a complete animated website with AI and no engineering capacity.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Full 3D editor in the browser — modelling, materials, lighting, cameras, and 3D text',
        'Spline AI generates 3D objects, scenes, and textures from text and image prompts',
        'Cheapest entry paid seat here at Pro $9/editor/mo, with Team at $19/editor/mo',
        'Real-time multiplayer editing works the way a modern design tool should',
        'Exports an embed and a React component, so front-end integration is a few lines',
        'Free tier lets a designer evaluate the full workflow before any budget conversation',
      ],
      cons: [
        'WebGL scene weight is the recurring problem — mobile load times and frame rates suffer',
        'Free tier output carries Spline branding, which rules it out for client work',
        'No state machine: interactions are event-driven, so logic tied to app data is impossible',
        'Native mobile runtimes are limited compared with Rive\'s iOS, Android, and Flutter SDKs',
        '2D-only motion work feels heavyweight in a 3D tool — Spline is not a Lottie replacement',
        'Pro at $9/editor/mo is per editor, so a five-designer Team costs $95/mo',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'State machines make animation react to real application data, not just to a click',
        'One file runs on web, iOS, Android, Flutter, React Native, and game engines',
        'Very small file sizes and optimized runtimes hold 60fps on mid-range devices',
        'Vector, mesh, and bone-based tooling covers character, icon, and UI motion in one editor',
        'Starter at $12/editor/mo unlocks unlimited files, up from the 3-file free tier',
        'Browser-based editor with team collaboration on Pro, so no installs to manage',
      ],
      cons: [
        'Free tier is limited to 3 files — too small for any real component library',
        'Pro at $48/editor/mo is the most expensive seat in this comparison by a wide margin',
        'A five-editor team on Pro costs $240/mo, or $2,880 a year',
        'No 3D editor at all — teams wanting depth and lighting must add a second tool',
        'Value depends on developer integration; a designer alone cannot ship a state machine',
        'Exposing inputs correctly requires design and engineering to agree on a contract upfront',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'AI generation removes the blank-canvas problem — a full animated site from a prompt',
        'Native 3D and scroll-driven animation that would take weeks to hand-build',
        'Hosting is included, so a marketing site goes live with no engineering involvement',
        'Pro at $20/mo adds unlimited projects and custom domains for one flat price',
        'Free tier allows real evaluation, with Dora branding as the only visible limit',
        'Visual canvas is genuinely approachable for founders and marketers without design training',
      ],
      cons: [
        'No code export — the site is locked to Dora hosting, which is a real migration risk',
        'Free tier is limited in project count and carries Dora branding on published pages',
        'Team at $40/user/mo is expensive for a tool that produces marketing sites rather than products',
        'Cannot be embedded into an existing front-end codebase as a component or asset',
        'No state machine, so animations cannot respond to live application data',
        'Generated output needs art direction — default AI layouts look alike without heavy editing',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After building the same animated product hero in all three tools and shipping it to a test page, our conclusion is that there is no universal winner — these platforms produce different artifacts for different owners. Spline delivered the most visually ambitious result and the fastest path from idea to a 3D scene in the browser, but it also produced the heaviest payload on our mid-range Android test device. Rive delivered the smallest asset and the smoothest frame rate, and it was the only output that could react to a real loading flag from our application code. Dora was the only tool that produced a complete, live, shareable website with a custom domain and no engineering work at all.',
      'Where Spline deserves praise is that it made browser 3D accessible to designers: a visual editor with modelling, materials, lighting, and event-driven interactions, plus AI generation of 3D objects, scenes, and textures from text and image prompts, plus real-time multiplayer editing. Pro at $9 per editor per month is the lowest entry price in this comparison. Where it draws criticism is production weight. A detailed WebGL scene is heavy, mobile frame rates need active optimization, and free-tier output carries Spline branding. Spline also has no state machine, so any animation that must react to live application data is out of reach — that is exactly the work Rive takes from it.',
      'Where Rive deserves praise is engineering credibility: state machines with exposed boolean and numeric inputs make the animation part of the interface rather than a layer on top of it, and one file ships to web, iOS, Android, Flutter, React Native, and game engines with very small asset sizes. Starter at $12 per editor per month unlocks unlimited files. Where it draws criticism is price and dependency. Pro at $48 per editor per month is the most expensive seat here, a five-editor team costs $240 per month, the free tier stops at 3 files, and there is no 3D editor at all. Rive also only delivers value once a developer integrates the runtime.',
      'Where Dora deserves praise is that it collapses the whole pipeline: AI generation, 3D objects, scroll-driven animation, and hosting live in one product, so a founder can put a striking animated site on a custom domain for $20 per month without hiring anyone. Where it draws criticism is portability and depth. There is no code export, so the site cannot move to your own infrastructure or be embedded as a component in an existing front end; the free tier is limited in project count and branded; Team at $40 per user per month is steep for marketing-site output; and generated layouts need real art direction to avoid looking like every other AI-built page. Dora loses product-interface work to Rive and loses 3D asset work to Spline.',
      'The biggest trend in 2026 is AI generation meeting production runtimes. Spline and Dora both put AI at the centre of creation — text and image prompts producing 3D objects, scenes, textures, and whole pages — while Rive has deliberately stayed out of the generation race and invested in deterministic state machines and cross-platform runtimes. That split predicts how teams actually staff this work: AI tools win the first draft and the standalone campaign site, runtime tools win anything that lives inside a product and has to react to real data. The second trend is the two-tool stack, where a team runs Dora for launch microsites and Rive or Spline for the main product surface that engineering owns.',
      'Looking ahead, expect 3D and AI generation to keep converging in the browser while the runtime performance gap becomes the deciding factor for product teams. If you need interactive 3D on the web without writing WebGL, start with Spline and budget Pro at $9 per editor per month, then measure the payload on a real phone before you launch. If you need motion that reacts to application state and ships across web and native platforms, start with Rive Starter at $12 per editor per month and involve a developer from the first day, because the value is in the state machine contract. If you need a complete animated website live this week with no engineering capacity, start with Dora free and move to Pro at $20 per month when you need unlimited projects and a custom domain.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Spline if you want interactive 3D scenes on the web without writing WebGL, with a visual editor, AI-generated objects and textures, real-time multiplayer editing, and an embed or React component for your own front end — ideal for designers and design engineers, at Pro $9 or Team $19 per editor per month. Choose Rive if your animation must react to real application state and ship unchanged across web, iOS, Android, Flutter, and game engines, with very small files and optimized runtimes — ideal for product, app, and game teams, at Starter $12 or Pro $48 per editor per month. Choose Dora if you need a complete AI-generated 3D animated website hosted and live on a custom domain with no engineering involvement — ideal for founders and marketing teams, at Pro $20 or Team $40 per user per month. If your work spans a campaign site and a real product surface, the mature answer is two tools in parallel: Dora for the launch microsite plus Rive for product motion.',
  },
}
