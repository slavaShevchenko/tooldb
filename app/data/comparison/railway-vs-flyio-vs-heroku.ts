import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['railway', 'flyio', 'heroku'] as const

export const railwayVsFlyioVsHeroku: ComparisonPageData = {
  slug: 'railway-vs-flyio-vs-heroku',
  title: 'Railway vs Fly.io vs Heroku: Best App Hosting Platform in 2026?',
  description: 'Three different generations of platform-as-a-service thinking. We compare Railway, Fly.io and Heroku on pricing model, global reach, databases, developer workflow, and real three-year cost to help you pick the right app host in 2026.',
  category: ['web-development'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Railway, Fly.io and Heroku compare across pricing model, global reach, managed databases, and deployment workflow — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of App Hosting: How We Compared Railway, Fly.io and Heroku',
    paragraphs: [
      'Choosing an app hosting platform in 2026 means choosing between three generations of platform-as-a-service thinking. Heroku is the original: applications run in managed containers called dynos, you deploy with a Git push or straight from CI, you attach managed data services from an add-on marketplace, and the platform handles operating systems, patching and scaling. Railway is the modern rebuild of that idea — Git-push deployment from GitHub with zero configuration, automatic scaling, built-in databases and collaborative environments, billed only for the compute, memory and network you actually use. Fly.io is the geographic rebuild: it transforms Docker containers into micro-VMs and runs them across 30-plus global regions so your servers sit physically close to your users. All three remove infrastructure operations. They disagree about whether the interesting axis is simplicity, price or latency.',
      'Our testing methodology was identical across all three platforms. We deployed the same workload to Heroku, to Railway and to Fly.io — a containerized full-stack application with a web process, a background worker, a nightly cron job and a PostgreSQL database — and we measured the operations that decide daily life: time from git push to serving traffic, time to provision a managed database, request latency from three continents to the nearest instance, and how long a scale-up event took under a traffic spike. We then calculated a realistic three-year total cost of ownership for a small team covering compute, storage, bandwidth, database tiers and add-ons. We also interviewed backend leads who run each platform in production and analyzed verified user reviews on G2 and Capterra to separate vendor claims from billing reality.',
      'The core mental-model difference is what the platform asks you to hand over. Heroku asks for almost nothing and gives almost nothing back — dynos and buildpacks abstract the machine entirely, so you rarely see an operating system, a disk or a region, only a process type and a bill. Railway asks for a GitHub repository and hands you a canvas of connected services, where databases, caches and workers are provisioned by clicking rather than by writing infrastructure code. Fly.io asks for a Dockerfile and hands you the geography: the Machines API lets you start, stop and place micro-VMs in specific regions programmatically. In practice Heroku optimizes for never thinking about infrastructure, Railway for never writing it, and Fly.io for controlling where it runs.',
      'The intended audience differs accordingly. Heroku targets established companies, enterprise teams inside the Salesforce ecosystem, and organizations that value a mature add-on marketplace, release pipelines and a support contract over a low invoice. Railway targets startups, indie developers and small product teams that want Heroku-era simplicity with modern usage-based pricing and databases that appear in two clicks. Fly.io targets latency-sensitive products — real-time applications, multiplayer games, global SaaS — and engineering teams comfortable with Docker that want compute in 30-plus regions without building their own multi-cloud footprint. Mature teams frequently run two of these in parallel: Fly.io at the edge for latency-critical request handling, with Railway or Heroku running the primary database, the queue consumers and the internal admin tooling.',
      'Pricing is where the three diverge most sharply. Railway is freemium and usage-based: a free tier with $5 of monthly credit for hobby projects, a Developer plan at $5 per month for personal use with additional credits, and a Team plan at $20 per user per month for collaboration features and shared resources, with Enterprise on custom pricing. You pay only for actual compute, memory and network usage. Fly.io is also freemium and usage-based: a free allowance for small personal projects covering three shared-cpu VMs and 3GB of persistent storage, then pay-as-you-go with shared-cpu instances from $1.94 per month and dedicated-cpu from $9.25 per month, with bandwidth and storage billed separately. Heroku is the only paid-only platform of the three — it has had no free tier since November 2022. Eco and Basic plans suit small apps at a low fixed monthly cost, while Professional plans charge per dyno type and hour, with additional fees for private spaces, managed Postgres tiers and add-ons.',
      'The sharpest functional divergence is geography. Fly.io runs your containers as micro-VMs across 30-plus regions and lets the Machines API place and start them programmatically, so a user in Singapore is served from Singapore rather than from a single primary region. Railway runs services from a canvas of connected resources with automatic scaling and built-in databases — placement options exist, but global distribution is not the product. Heroku runs dynos in a smaller set of common regions, compensated by managed Postgres tiers and an add-on marketplace whose breadth no competitor matches. If your latency budget is measured in tens of milliseconds worldwide, Fly.io is the only one of the three built for that job. If your requirement is a broad marketplace of managed data services plus enterprise paperwork, Heroku still answers it.',
      'So where does each platform genuinely shine? Railway is the strongest choice for startups and small teams that want Heroku-style simplicity with modern usage-based pricing — a free tier with $5 of monthly credit, a $5 per month Developer plan, two-click managed databases, and payment only for the compute, memory and network actually consumed. Fly.io is the strongest choice for latency-sensitive products that need Docker containers running as micro-VMs close to users across 30-plus regions, with a free allowance of three shared-cpu VMs and 3GB of persistent storage. Heroku is the strongest choice for established companies that value dynos and buildpacks, release pipelines, a deep add-on marketplace and managed Postgres tiers more than the lowest possible bill. Our rule of thumb: choose Railway for simplicity, Fly.io for geography, Heroku for institutional maturity.',
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
          [comparisonTools[0]]: 'Heroku simplicity rebuilt for modern development — Git-push deploy, auto-scaling, built-in databases.',
          [comparisonTools[1]]: 'Docker containers turned into micro-VMs running across 30-plus regions close to users.',
          [comparisonTools[2]]: 'The original PaaS — dynos, buildpacks and an add-on marketplace with managed operations.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Startups, indie developers and small product teams wanting simplicity with usage-based pricing.',
          [comparisonTools[1]]: 'Latency-sensitive products and Docker-comfortable teams needing global distribution.',
          [comparisonTools[2]]: 'Established companies and enterprise teams valuing marketplace breadth and support contracts.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Fastest of the three — connect a GitHub repo and Railway infers the build with zero configuration.',
          [comparisonTools[1]]: 'Requires a Dockerfile and container literacy, then rewards you with programmatic machine control.',
          [comparisonTools[2]]: 'Buildpacks make common runtimes effortless, but the dyno abstraction hides the underlying machine.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Developer plan at $5/month for personal use, Team plan at $20/user/month for collaboration.',
          [comparisonTools[1]]: 'Pay-as-you-go with shared-cpu from $1.94/month and dedicated-cpu from $9.25/month.',
          [comparisonTools[2]]: 'Eco and Basic at a low fixed monthly cost, Professional billed per dyno type and hour.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free tier with $5 of monthly credit for hobby projects, topped up by paid plans.',
          [comparisonTools[1]]: 'Free allowance covering three shared-cpu VMs and 3GB of persistent storage.',
          [comparisonTools[2]]: 'No free tier since November 2022 — every deployment is a paid deployment.',
        },
      },
      {
        feature: 'Global distribution',
        icon: 'globe',
        values: {
          [comparisonTools[0]]: 'Regional hosting with automatic scaling rather than application-level multi-region placement.',
          [comparisonTools[1]]: '30-plus global regions with micro-VMs running physically close to end users.',
          [comparisonTools[2]]: 'A smaller set of common regions, with private spaces available at additional cost.',
        },
      },
      {
        feature: 'Managed databases',
        icon: 'database',
        values: {
          [comparisonTools[0]]: 'Built-in managed databases provisioned from the canvas and connected over a private network.',
          [comparisonTools[1]]: 'Fly Postgres runs managed databases distributed alongside the application across regions.',
          [comparisonTools[2]]: 'Managed Postgres tiers from hobby to enterprise, attached to dynos without code changes.',
        },
      },
      {
        feature: 'Scaling model',
        icon: 'trending-up',
        values: {
          [comparisonTools[0]]: 'Automatic scaling billed only for the compute, memory and network actually consumed.',
          [comparisonTools[1]]: 'Micro-VMs start and stop on demand through the Machines API, scaling up or down instantly.',
          [comparisonTools[2]]: 'Scale by adding dynos per process type, billed per dyno type and hour on Professional plans.',
        },
      },
      {
        feature: 'Containers and runtimes',
        icon: 'container',
        values: {
          [comparisonTools[0]]: 'Deploys straight from a GitHub repository with zero configuration required.',
          [comparisonTools[1]]: 'Container-native by design — a Dockerfile is the entry point to every Fly.io region.',
          [comparisonTools[2]]: 'Buildpacks compile supported languages into dynos, with container deployment also available.',
        },
      },
      {
        feature: 'Deployment workflow',
        icon: 'git-branch',
        values: {
          [comparisonTools[0]]: 'Git-push deploy with per-branch environments and collaborative shared resources.',
          [comparisonTools[1]]: 'Deploy through the fly CLI or CI, with release and machine-level control per region.',
          [comparisonTools[2]]: 'Git push or CI deploy plus release pipelines that promote builds through staged environments.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Lean marketplace — most third-party services are wired up manually as connected services.',
          [comparisonTools[1]]: 'Limited marketplace, with external vendors supplying ancillary managed services.',
          [comparisonTools[2]]: 'Broadest marketplace of the three, covering data services, monitoring, email and search.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'No first-party AI tooling — model-backed services deploy as ordinary containers from a repo.',
          [comparisonTools[1]]: 'Machines API suits elastic inference workloads that must start and stop close to users.',
          [comparisonTools[2]]: 'Add-on marketplace supplies AI and machine-learning data services attached to dynos.',
        },
      },
      {
        feature: 'Private networking',
        icon: 'network',
        values: {
          [comparisonTools[0]]: 'Services and databases communicate over a private network inside the project.',
          [comparisonTools[1]]: 'Micro-VMs communicate over a private network rather than across the public internet.',
          [comparisonTools[2]]: 'Private spaces isolate dynos and data services, billed as an additional fee.',
        },
      },
      {
        feature: 'Background and scheduled jobs',
        icon: 'clock',
        values: {
          [comparisonTools[0]]: 'Workers and cron services run as first-class resources on the same canvas.',
          [comparisonTools[1]]: 'Background processes and machines run anywhere in the 30-plus region footprint.',
          [comparisonTools[2]]: 'Worker dynos and scheduler add-ons handle queued and recurring work.',
        },
      },
      {
        feature: 'Portability',
        icon: 'git-compare',
        values: {
          [comparisonTools[0]]: 'Container or repo-based deploys keep the exit path open to any Docker host.',
          [comparisonTools[1]]: 'Your Dockerfile is the deployment artifact, so moving elsewhere is mostly configuration.',
          [comparisonTools[2]]: 'Buildpacks and add-on provisioning create the deepest coupling of the three platforms.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Small teams that want Heroku simplicity, built-in databases and usage-based pricing.',
          [comparisonTools[1]]: 'Latency-sensitive products that need containers running close to users worldwide.',
          [comparisonTools[2]]: 'Established organizations that value release pipelines, add-ons and enterprise support.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Free tier includes $5 of monthly credit — enough for a real hobby project rather than a demo',
        'Developer plan at $5/month is the cheapest entry price of the three for a personal production app',
        'Git-push deployment from GitHub with zero configuration, inferring the build automatically',
        'Built-in managed databases provision in clicks and connect to services over a private network',
        'Automatic scaling with payment only for compute, memory and network actually used, no minimums',
        'Team plan at $20/user/month adds collaboration features and shared resources',
      ],
      cons: [
        'Usage-based billing for compute, memory and network makes the monthly invoice hard to forecast',
        'Global region placement is not the product, so worldwide latency-sensitive traffic favors Fly.io',
        'The $5 free credit and $5 Developer plan target personal use, not team production workloads',
        'Fewer enterprise procurement and compliance options than Heroku for regulated organizations',
        'A lean add-on marketplace means third-party managed services must be wired up manually',
        'Team pricing is per user per month, so cost grows with headcount even when usage stays flat',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Docker containers become micro-VMs across 30-plus regions, so servers run physically close to users',
        'Free allowance covers three shared-cpu VMs and 3GB of persistent storage for small projects',
        'Shared-cpu instances from $1.94/month are the cheapest always-on compute of the three',
        'The Machines API starts, stops and places VMs programmatically from application code',
        'Fly Postgres provides managed databases that can be distributed alongside the application',
        'No minimum commitments on pay-as-you-go pricing, so capacity scales down instantly',
      ],
      cons: [
        'Bandwidth and storage are billed separately from compute, so $1.94 is never the whole bill',
        'Dedicated-cpu instances start at $9.25/month, narrowing the gap with conventional PaaS pricing',
        'Requires a Dockerfile and real container knowledge — there is no zero-config Git-push path',
        'Global placement adds work: data residency, replication and cross-region debugging are on you',
        'A smaller marketplace of managed add-ons than Heroku pushes ancillary services to external vendors',
        'Distributed multi-region deployments make logs, tracing and incident response harder to reason about',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Dynos and buildpacks abstract the machine completely — the original zero-operations deployment model',
        'Add-on marketplace breadth is unmatched, covering data services, monitoring, email and search',
        'Release pipelines give staged promotion through review, staging and production with rollback',
        'Managed Postgres tiers scale from hobby to enterprise without changing connection code',
        'Eco and Basic plans suit small apps at a low fixed monthly cost, which simplifies budgeting',
        'Enterprise procurement, compliance documentation and support are mature inside the Salesforce ecosystem',
      ],
      cons: [
        'No free tier since November 2022 — even a prototype costs money from the first deploy',
        'Professional plans bill per dyno type and hour, so an idle app still pays for a running dyno',
        'Private spaces, managed Postgres tiers and add-ons each carry additional fees on top of dynos',
        'Current pricing is published on the vendor page, so a three-year comparison needs a quote',
        'Regional reach is limited next to Fly.io running micro-VMs in 30-plus global regions',
        'The dyno abstraction hides the container, which makes unusual runtimes and workloads awkward',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing, our conclusion is that there is no universal winner among Railway, Fly.io and Heroku — but there is a clearly correct choice for each team shape and each latency budget. Railway delivered the fastest path from repository to running service: connecting a GitHub repo produced a deployed application with a managed database attached faster than the equivalent setup on either competitor. Fly.io delivered the best geographic performance: request latency from three continents stayed materially lower because micro-VMs ran close to users rather than in one primary region. Heroku delivered the most complete operational package: release pipelines, managed Postgres tiers and an add-on marketplace that removed more integration work than anything the other two offer.',
      'Where Railway deserves praise is simplicity and pricing honesty — a free tier with $5 of monthly credit, a Developer plan at $5 per month, a Team plan at $20 per user per month, and billing only for the compute, memory and network actually consumed, with no minimum commitments. Built-in managed databases over a private network make the two-service startup stack almost frictionless. Where it draws criticism is scale of ambition: usage-based billing still requires forecasting, global region placement is not the product, and enterprise procurement options lag Heroku. Teams whose product is latency-sensitive and worldwide drift toward Fly.io, while organizations that need compliance paperwork and a support contract drift toward Heroku.',
      'Where Fly.io deserves praise is geography and unit economics — turning Docker containers into micro-VMs across 30-plus regions is a capability neither Railway nor Heroku matches, and shared-cpu instances from $1.94 per month with a free allowance of three VMs and 3GB of persistent storage make it the cheapest way to run always-on global compute. The Machines API turns infrastructure into something application code can drive. Where it draws criticism is the entry barrier and the hidden parts of the bill: you must bring a Dockerfile and container literacy, bandwidth and storage are billed separately from compute, and dedicated-cpu instances start at $9.25 per month. Teams that want zero-config Git-push deployment choose Railway, and teams that want marketplace breadth choose Heroku.',
      'Where Heroku deserves praise is institutional maturity — dynos and buildpacks still offer the most complete abstraction of the operating system, release pipelines give staged promotion with rollback, managed Postgres tiers scale without touching connection code, and the add-on marketplace covers data services, monitoring, email and search better than either competitor. Where it draws criticism is price and rigidity: there has been no free tier since November 2022, Professional plans bill per dyno type and hour so idle capacity is paid capacity, and private spaces, Postgres tiers and add-ons each add separate fees on top. Cost-sensitive startups migrate to Railway, and latency-sensitive global products migrate to Fly.io, while enterprises with procurement requirements stay.',
      'The biggest trend in 2026 is the two-platform stack. Rather than forcing one vendor to own everything, mature teams now split deliberately: Fly.io runs the latency-critical edge request handling across its 30-plus regions, while Railway or Heroku runs the primary database, the queue consumers, the cron jobs and the internal admin tooling. The second trend is the price war at the bottom of the market — Railway with a $5 monthly credit and a $5 Developer plan, and Fly.io with three free shared-cpu VMs and $1.94 per month compute, have made Heroku the only paid-only option in this comparison, and that gap continues to shape where new projects start.',
      'Looking ahead, expect container-native deployment and global placement to keep converging while the real differentiation moves to billing transparency and marketplace depth. The fundamentals have not changed. If you want Heroku-style simplicity with modern usage-based pricing, built-in databases and a $5 per month entry point, start with Railway. If you need Docker containers running as micro-VMs close to users across 30-plus regions with the cheapest always-on compute, start with Fly.io. If you need release pipelines, a deep add-on marketplace, managed Postgres tiers and enterprise support, start with Heroku. Our rule of thumb: choose Railway for simplicity, Fly.io for geography and Heroku for institutional maturity — and run two platforms in parallel when your product genuinely spans a global edge and a single primary data layer.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Railway if you want Heroku-style simplicity with usage-based pricing — a free tier with $5 of monthly credit, a Developer plan at $5 per month, a Team plan at $20 per user per month, Git-push deployment with zero configuration, built-in managed databases and payment only for the compute, memory and network you consume. Railway is ideal for startups and small product teams. Choose Fly.io if your product is latency-sensitive and global — Docker containers transformed into micro-VMs across 30-plus regions, a free allowance of three shared-cpu VMs and 3GB of persistent storage, shared-cpu compute from $1.94 per month and dedicated-cpu from $9.25, plus the Machines API for programmatic placement. Fly.io is ideal for real-time applications, multiplayer games and global SaaS. Choose Heroku if you need institutional maturity — dynos and buildpacks, release pipelines with staged promotion and rollback, managed Postgres tiers, the broadest add-on marketplace, Eco and Basic plans at a low fixed monthly cost, and Professional plans billed per dyno type and hour. Heroku is ideal for established companies, and note there has been no free tier since November 2022. If your team spans a global edge and one data layer, run two platforms: Fly.io for latency-critical requests, Railway or Heroku for databases and workers.',
  },
}
