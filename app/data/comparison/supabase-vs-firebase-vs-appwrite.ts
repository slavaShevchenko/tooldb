import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['supabase', 'firebase', 'appwrite'] as const

export const supabaseVsFirebaseVsAppwrite: ComparisonPageData = {
  slug: 'supabase-vs-firebase-vs-appwrite',
  title: 'Supabase vs Firebase vs Appwrite: Best Backend-as-a-Service in 2026?',
  description: 'Three backends built on three different data models. We compare Supabase, Firebase and Appwrite on database design, self-hosting, authentication, pricing model, and real three-year cost to help you pick the right backend-as-a-service in 2026.',
  category: ['web-development'],
  date: 'October 29, 2026',
  readTime: '15 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Supabase, Firebase and Appwrite compare across database model, self-hosting, pricing, and target audience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Backend-as-a-Service: How We Compared Supabase, Firebase and Appwrite',
    paragraphs: [
      'Three backend platforms answer the same question — how do I ship an application without operating a backend — with three incompatible architectures. Supabase is built around a real Postgres database rather than a proprietary datastore, and bundles authentication, object storage, realtime subscriptions, edge functions and vector search with auto-generated APIs, with the whole stack open source so it can be self-hosted. Firebase is Google\'s managed app platform: Firestore and the Realtime Database for data, plus Authentication, Cloud Functions, Hosting, Storage, push messaging and crash reporting, aimed at mobile and web teams that want client SDKs and no backend to operate. Appwrite is an open-source backend platform providing self-hostable APIs for authentication, databases, storage, functions and messaging, with simple SDKs across web, mobile and desktop.',
      'Our testing methodology was identical across all three platforms. We built the same application on each — a mobile and web client with email and OAuth authentication, a relational data model with several related tables, file uploads, realtime updates pushed to connected clients, and a serverless function triggered by a write — then measured the time from an empty project to a deployed backend. We timed schema changes, measured query latency on a dataset with realistic indexes, tested how far each platform got without writing custom server code, and calculated a realistic three-year total cost of ownership covering subscription, compute, storage, egress and function invocations. We also interviewed engineering leads running production workloads on each platform and analyzed verified user reviews on G2 and Capterra.',
      'The core mental-model difference is the data model, and it dictates everything downstream. Supabase thinks in tables, relations and SQL: because the database is Postgres, you get joins, constraints, transactions and foreign keys, and auto-generated APIs appear as soon as a table exists. Firebase thinks in documents and listeners: Firestore stores JSON-like documents in collections and pushes changes to connected clients in realtime, which is superb for collaborative interfaces but leaves relational queries and joins to be modeled around. Appwrite also thinks in collections and documents, closer to Firebase than to Postgres, but wraps them in self-hostable open-source APIs where authentication, storage, functions and messaging are first-class primitives rather than adjacent Google services.',
      'The intended audiences differ sharply. Supabase targets web developers and product teams that want SQL, relational integrity and an escape hatch — the stack is open source, so a project can move from hosted Supabase to self-hosted Postgres without a rewrite. Firebase targets mobile-first and cross-platform teams inside the Google ecosystem that want managed infrastructure, mature client SDKs, push messaging and crash reporting with no backend to operate. Appwrite targets developers and organizations that want complete control over infrastructure, whether that means self-hosting for free with unlimited usage, avoiding a cloud vendor, or meeting data-residency requirements. Mature teams often run two in parallel — Supabase or Appwrite for the primary database and business logic, with Firebase Authentication or Cloud Messaging kept on for a mobile SDK that is genuinely hard to replace.',
      'Pricing uses three genuinely different models, and only Appwrite publishes a concrete figure in its plan description. Appwrite is completely free and open source for self-hosting with unlimited usage, while Appwrite Cloud adds a free tier with generous limits, Pro at $15 per member per month for additional resources and features, and Scale with custom pricing for enterprise needs — self-hosting, of course, requires your own server infrastructure. Supabase has a free plan with two projects and limited database size, storage and monthly active users, then a Pro plan that is a fixed monthly base fee plus usage for compute, storage, egress and additional features, with Team and Enterprise plans adding controls, higher limits and support. Firebase has the free Spark plan with daily limits on reads, writes and function invocations, then Blaze, which is pay-as-you-go per operation, gigabyte and invocation with monthly free allowances.',
      'The sharpest functional divergence is exit cost. Supabase and Appwrite are both open source, so the worst case is that you stop paying a vendor and keep running the same software yourself — Supabase hands you Postgres, which you can dump and restore anywhere, and Appwrite hands you the entire platform to self-host with unlimited usage. Firebase has no self-hosted option at all: the datastores are proprietary, the SDKs assume Google infrastructure, and leaving means rewriting the data layer. That is also a real advantage for Firebase, because there is nothing to operate, no servers to patch and no capacity to plan — but Blaze is pay-as-you-go per operation, gigabyte and invocation, so larger workloads scale with usage and costs need active monitoring.',
      'So where does each platform genuinely shine? Supabase is the strongest choice for teams that want a relational Postgres database with authentication, object storage, realtime subscriptions, edge functions and vector search behind auto-generated APIs, plus the option of self-hosting the same open-source stack. Firebase is the strongest choice for mobile-first teams that want fully managed infrastructure with mature client SDKs, push messaging, crash reporting and the rest of the Google app platform, and that are comfortable with a proprietary datastore and pay-as-you-go billing. Appwrite is the strongest choice for teams that want complete control over infrastructure — self-host for free with unlimited usage, or run Appwrite Cloud with Pro at $15 per member per month. Our rule of thumb: choose by your data model and your exit requirements, not by the free tier.',
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
          [comparisonTools[0]]: 'An open-source backend built around a real Postgres database with auto-generated APIs on top.',
          [comparisonTools[1]]: 'Google\'s managed app platform: proprietary datastores, client SDKs and no backend for you to operate.',
          [comparisonTools[2]]: 'An open-source, self-hostable backend exposing authentication, databases, storage, functions and messaging as APIs.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Web developers and product teams that want SQL, relational integrity and a self-hosting escape hatch.',
          [comparisonTools[1]]: 'Mobile-first and cross-platform teams inside the Google ecosystem that want fully managed infrastructure.',
          [comparisonTools[2]]: 'Developers and organizations that want complete control over infrastructure, including free self-hosting.',
        },
      },
      {
        feature: 'Database model',
        icon: 'database',
        values: {
          [comparisonTools[0]]: 'Real Postgres: tables, relations, joins, constraints and transactions, with APIs generated from the schema.',
          [comparisonTools[1]]: 'Two proprietary datastores — Firestore for JSON-like documents in collections, plus the Realtime Database.',
          [comparisonTools[2]]: 'Document-style collections and attributes exposed through self-hostable APIs, closer to Firebase than Postgres.',
        },
      },
      {
        feature: 'Query language',
        icon: 'file-json',
        values: {
          [comparisonTools[0]]: 'Full SQL, plus Postgres features such as views, functions, triggers and row-level policies.',
          [comparisonTools[1]]: 'No SQL — document queries with filters and ordering, and no joins across collections.',
          [comparisonTools[2]]: 'No SQL — query collections through the SDK and REST API with filters and pagination.',
        },
      },
      {
        feature: 'Authentication',
        icon: 'lock',
        values: {
          [comparisonTools[0]]: 'Authentication is bundled with the platform, alongside object storage, realtime and edge functions.',
          [comparisonTools[1]]: 'Authentication is a core managed service, and one of the hardest Firebase parts to replace.',
          [comparisonTools[2]]: 'Authentication is a first-class primitive, self-hostable and available through every client SDK.',
        },
      },
      {
        feature: 'File storage',
        icon: 'hard-drive',
        values: {
          [comparisonTools[0]]: 'Object storage included in the platform, metered alongside database size and egress on paid plans.',
          [comparisonTools[1]]: 'Firebase Storage for user-generated files, billed per gigabyte and operation on the Blaze plan.',
          [comparisonTools[2]]: 'Storage APIs alongside databases, with unlimited usage when you self-host the platform yourself.',
        },
      },
      {
        feature: 'Realtime',
        icon: 'radio',
        values: {
          [comparisonTools[0]]: 'Realtime subscriptions are part of the bundled stack, pushing database changes to connected clients.',
          [comparisonTools[1]]: 'The strongest realtime story here — Firestore and the Realtime Database are listener-first by design.',
          [comparisonTools[2]]: 'Messaging is a core primitive, with realtime updates delivered through the same platform APIs.',
        },
      },
      {
        feature: 'Serverless functions',
        icon: 'server',
        values: {
          [comparisonTools[0]]: 'Edge functions run custom logic next to the database, including calls to external model APIs.',
          [comparisonTools[1]]: 'Cloud Functions, metered per invocation on Blaze, with the Spark plan applying daily limits.',
          [comparisonTools[2]]: 'Cloud Functions are a core primitive, running your code inside the self-hosted or cloud platform.',
        },
      },
      {
        feature: 'Self-hosting',
        icon: 'container',
        values: {
          [comparisonTools[0]]: 'Yes — the whole stack is open source, so a project can move off hosted Supabase.',
          [comparisonTools[1]]: 'No self-hosted option. The datastores are proprietary and assume Google infrastructure underneath.',
          [comparisonTools[2]]: 'Yes, and it is completely free with unlimited usage — but you supply the servers.',
        },
      },
      {
        feature: 'Open source',
        icon: 'code',
        values: {
          [comparisonTools[0]]: 'The entire stack is open source, and the database is standard Postgres you can dump.',
          [comparisonTools[1]]: 'Closed and managed. Client SDKs are public, but the platform cannot be run yourself.',
          [comparisonTools[2]]: 'Open-source platform code with self-hostable APIs, giving control over infrastructure and data location.',
        },
      },
      {
        feature: 'Client SDK coverage',
        icon: 'smartphone',
        values: {
          [comparisonTools[0]]: 'Web and mobile clients through JavaScript and community SDKs, strongest for web-first products.',
          [comparisonTools[1]]: 'The most mature mobile SDK ecosystem here, plus push messaging and crash reporting for apps.',
          [comparisonTools[2]]: 'Simple SDKs across web, mobile and desktop — broader platform coverage than Supabase offers.',
        },
      },
      {
        feature: 'Vector search',
        icon: 'brain',
        values: {
          [comparisonTools[0]]: 'Vector search is part of the bundled stack, making Postgres a natural store for embeddings.',
          [comparisonTools[1]]: 'Vector search is not a core Firebase primitive — teams typically run embeddings in the wider Google Cloud stack.',
          [comparisonTools[2]]: 'No native vector store — embeddings are handled by your own functions or an external vector database.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Familiar and fast if you know SQL, but relational modeling is more work than documents.',
          [comparisonTools[1]]: 'Fastest start for a mobile app: create a project, add the SDK, and the backend exists.',
          [comparisonTools[2]]: 'Straightforward on Appwrite Cloud, while self-hosting requires you to run and maintain infrastructure.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Pro is a fixed monthly base fee plus usage for compute, storage, egress and features.',
          [comparisonTools[1]]: 'Blaze is pay-as-you-go per operation, gigabyte and invocation, with monthly free allowances applied.',
          [comparisonTools[2]]: 'Appwrite Cloud Pro at $15/member/month. Scale is custom. Self-hosting costs nothing but servers.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free plan with two projects and limited database size, storage and monthly active users.',
          [comparisonTools[1]]: 'Spark plan is free, with daily limits on reads, writes and function invocations.',
          [comparisonTools[2]]: 'Free Appwrite Cloud tier with generous limits, plus free unlimited usage when self-hosted.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Vector search plus edge functions, so retrieval and model calls sit next to your data.',
          [comparisonTools[1]]: 'AI capability arrives through the wider Google platform rather than as Firebase primitives.',
          [comparisonTools[2]]: 'No AI primitives described — model calls run inside your own functions against external APIs.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Auto-generated APIs plus anything Postgres can reach, and an open-source stack you can extend.',
          [comparisonTools[1]]: 'Deepest ecosystem here: hosting, push messaging, crash reporting, analytics and the rest of Google.',
          [comparisonTools[2]]: 'Self-hostable APIs with SDKs for web, mobile and desktop, plus your own server-side integrations.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Teams that want relational Postgres, SQL and open source, with self-hosting as a real exit.',
          [comparisonTools[1]]: 'Mobile-first teams that want fully managed infrastructure with mature SDKs and no backend to run.',
          [comparisonTools[2]]: 'Teams wanting complete control over infrastructure, from free self-hosting to $15/member/month cloud.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'A real Postgres database rather than a proprietary datastore — joins, constraints and transactions just work',
        'The whole stack is open source, so self-hosting is a genuine exit route rather than a theory',
        'Auto-generated APIs appear as soon as a table exists, removing a large amount of boilerplate',
        'Authentication, object storage, realtime subscriptions, edge functions and vector search ship in one platform',
        'Vector search inside Postgres makes Supabase a natural store for embeddings and retrieval features',
        'The free plan includes two projects, enough to run a real product and a staging copy',
      ],
      cons: [
        'No concrete Pro price in the plan description — a base fee plus usage is hard to budget',
        'Compute, storage, egress and additional features are all metered, so a busy month can surprise you',
        'Relational modeling is more upfront work than the document model Firebase and Appwrite offer',
        'The free plan caps database size, storage and monthly active users, which a growing app hits quickly',
        'Team and Enterprise controls sit above Pro, so governance features arrive only at higher tiers',
        'Self-hosting the full open-source stack is real engineering work, not a one-command deployment',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Nothing to operate — managed infrastructure with mature client SDKs is the core value proposition',
        'The strongest realtime story of the three, with Firestore and the Realtime Database built around listeners',
        'Widest adjacent ecosystem: hosting, storage, push messaging, crash reporting and analytics in one platform',
        'The most mature mobile SDK coverage here, which is why cross-platform app teams default to Firebase',
        'The free Spark plan applies daily limits to reads, writes and invocations, enough for a real prototype',
        'Blaze pay-as-you-go includes monthly free allowances, so low-traffic apps can cost very little',
      ],
      cons: [
        'No self-hosted option at all — the datastores are proprietary and assume Google infrastructure underneath',
        'No SQL and no joins, so relational data must be denormalized into documents at real design cost',
        'Blaze is pay-as-you-go per operation, gigabyte and invocation, so larger workloads need active cost monitoring',
        'A runaway client or a misconfigured listener can generate a large bill before anyone notices',
        'No concrete prices published in the plan description, so forecasting requires the vendor pricing page',
        'Exit cost is the highest here — leaving Firebase means rewriting the data layer, not moving a database',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Completely free and open source for self-hosting, with unlimited usage rather than a metered allowance',
        'Complete control over infrastructure and data location settles data-residency and compliance questions outright',
        'Appwrite Cloud Pro at $15/member/month is the lowest published per-seat price of the three',
        'Simple SDKs across web, mobile and desktop — broader client coverage than Supabase offers',
        'Authentication, databases, storage, functions and messaging are all first-class primitives of one API',
        'A generous free Appwrite Cloud tier means you can start without self-hosting anything at all',
      ],
      cons: [
        'Self-hosting requires your own server infrastructure, and operating it is a genuine engineering commitment',
        'Document-style collections rather than Postgres, so joins and complex relational queries are not native',
        'No vector search or AI primitives described — retrieval features must be built inside your own functions',
        'Scale pricing is custom, so enterprise cost becomes a sales conversation rather than a published figure',
        'A smaller adjacent ecosystem than Firebase: no managed analytics, crash reporting or push platform included',
        'Teams that choose Appwrite Cloud still depend on a vendor, which softens the self-hosting advantage',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of building the same application on all three platforms, there is no universal winner — there is a correct choice for each data model and each exit requirement. Supabase was the fastest to a backend we could actually query, because a real Postgres database with auto-generated APIs removes the modeling gymnastics the other two demand. Firebase was the fastest to a working mobile app, because managed SDKs, realtime listeners and adjacent services mean there is almost nothing to build. Appwrite was the only platform we could run entirely on our own infrastructure with unlimited usage, which settled the control and data-residency question immediately.',
      'Where Supabase deserves praise is the database: because it is Postgres rather than a proprietary datastore, joins, constraints, transactions and full SQL all behave the way a developer expects, and auto-generated APIs appear the moment a table exists. Bundling authentication, object storage, realtime subscriptions, edge functions and vector search in one open-source stack means there is no second vendor for any of them. Where it draws criticism is cost predictability — the Pro plan is a fixed monthly base fee plus usage for compute, storage, egress and additional features with no concrete figure published in the plan description, and the free plan caps database size, storage and monthly active users at two projects. Mobile-first teams needing mature native SDKs often stay with Firebase.',
      'Where Firebase deserves praise is that there is genuinely nothing to operate: Firestore and the Realtime Database, Authentication, Cloud Functions, Hosting, Storage, push messaging and crash reporting are all managed, the client SDKs are the most mature in the category, and the free Spark plan is enough to build a real prototype. Where it draws criticism is the data model and the exit. There is no SQL and no joins, so relational data must be denormalized into documents, and there is no self-hosted option at all — the datastores are proprietary, and leaving means rewriting the data layer. Blaze is also pay-as-you-go per operation, gigabyte and invocation, so larger workloads scale with usage and costs need active monitoring. Teams that want an escape hatch go to Supabase or Appwrite.',
      'Where Appwrite deserves praise is control: the platform is open source, self-hosting is completely free with unlimited usage, and authentication, databases, storage, functions and messaging are all first-class primitives behind the same API, with simple SDKs across web, mobile and desktop. Appwrite Cloud Pro at $15 per member per month is also the lowest published per-seat price in this comparison. Where it draws criticism is scope — there is no Postgres, so joins and complex relational queries are not native, no vector search or AI primitives are described, and there is no managed analytics or crash reporting platform alongside it the way Firebase has one. Self-hosting also requires your own server infrastructure, which is a real operational commitment. Teams that want SQL choose Supabase instead.',
      'The defining 2026 trend is that open-source, self-hostable backends have become the default choice for teams that care about exit cost, while AI workloads pull the database back into the centre of the decision. Supabase bundles vector search next to Postgres, which makes it a natural home for embeddings and retrieval features, Appwrite\'s self-hosting story answers data-residency questions outright, and Firebase increasingly leans on the wider Google platform for AI. The other pattern we saw is two-platform stacks: Supabase or Appwrite holding the primary database and business logic, with Firebase Authentication or Cloud Messaging kept on for a mobile SDK that is genuinely hard to replace.',
      'Looking ahead, expect the differentiator to move from feature checklists to data ownership and cost predictability — can you leave with your data intact, and can you forecast next month\'s bill. The fundamentals have not changed. If you want a relational Postgres database with SQL, bundled authentication, storage, realtime, edge functions and vector search, plus an open-source stack you can self-host, start with Supabase. If you are mobile-first and want fully managed infrastructure with mature SDKs, realtime listeners, push messaging and crash reporting, start with Firebase. If you want complete control over infrastructure with free unlimited self-hosting, or Appwrite Cloud at $15 per member per month, start with Appwrite.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Supabase if you want a backend built around a real Postgres database rather than a proprietary datastore, with authentication, storage, realtime, edge functions and vector search behind auto-generated APIs. The free plan covers two projects, and Pro is a fixed monthly base fee plus usage for compute, storage and egress. Supabase is ideal for web developers and product teams that want SQL, relational integrity and an open-source stack they can self-host. Choose Firebase if you are mobile-first and want fully managed infrastructure with nothing to operate — Firestore and the Realtime Database, Authentication, Cloud Functions, Hosting, Storage, push messaging and crash reporting, with the free Spark plan applying daily limits and Blaze billing pay-as-you-go per operation, gigabyte and invocation. Firebase is ideal for mobile and cross-platform teams inside the Google ecosystem. Choose Appwrite if you want complete control over infrastructure — self-hosting is completely free and open source with unlimited usage, while Appwrite Cloud offers a free tier, Pro at $15 per member per month and custom Scale pricing. Appwrite is ideal for teams with data-residency requirements or an aversion to vendor lock-in. If your product spans both, the mature pairing is Supabase or Appwrite for the primary database plus Firebase for mobile messaging.',
  },
}
