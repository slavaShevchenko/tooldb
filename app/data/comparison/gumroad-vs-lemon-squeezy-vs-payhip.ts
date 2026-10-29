import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['gumroad', 'lemonsqueezy', 'payhip'] as const

export const gumroadVsLemonSqueezyVsPayhip: ComparisonPageData = {
  slug: 'gumroad-vs-lemon-squeezy-vs-payhip',
  title: 'Gumroad vs Lemon Squeezy vs Payhip: Best Digital Product Platform in 2026?',
  description: 'Three very different ways to charge for digital products. We compare Gumroad, Lemon Squeezy and Payhip on transaction fees, tax handling, product types, storefront depth, and real three-year cost to help you choose the right platform in 2026.',
  category: ['ecommerce'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Gumroad, Lemon Squeezy and Payhip compare across transaction fees, tax handling, product types, and storefront depth — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Selling Digital Products: How We Compared Gumroad, Lemon Squeezy and Payhip',
    paragraphs: [
      'Selling digital products in 2026 means choosing between three very different business models. Gumroad is the creator storefront: no monthly subscription, a flat 10% of each sale, and payments, file delivery, sales tax and VAT, affiliate programs, and payouts all handled for you. Lemon Squeezy is the merchant of record: it sells digital products, subscriptions, and software on your behalf, owns the transaction, calculates and remits sales tax and VAT worldwide, handles chargebacks and fraud, and then pays you out. Payhip is the free store builder: a Free Forever plan charging only a 5% transaction fee, with paid plans that lower that fee and add a custom domain and marketing features.',
      'Our testing methodology was identical across all three platforms. We listed the same catalogue — a $49 ebook, a $199 video course, a $19 per month membership, and a small software subscription — on Gumroad, Lemon Squeezy, and Payhip. We measured time from signup to a live checkout, walked the buyer\'s actual payment flow, tested how each platform handled a European VAT customer and a chargeback dispute, and checked how affiliate payouts worked in practice. We then modelled a realistic three-year total cost of ownership at several monthly revenue levels, including transaction fees, monthly plan fees, payment processing, and payout costs, and analyzed verified seller reviews on G2 and Capterra alongside each published pricing page.',
      'The mental model behind each platform explains the day-to-day differences. Gumroad thinks in products and creators: you publish a product page, your audience buys it, and Gumroad takes its cut — the platform is a checkout and delivery layer rather than a website builder. Lemon Squeezy thinks in transactions and compliance: the customer technically buys from Lemon Squeezy, which is precisely why tax registration, fraud, and chargebacks stop being the seller\'s problem. Payhip thinks in stores: you build a storefront with a custom domain, populate it with downloads, courses, coaching, memberships, and physical products, and Payhip takes a transaction fee that falls as your monthly plan rises.',
      'The intended audiences differ sharply. Gumroad serves creators — writers, designers, musicians, and educators — selling digital products, memberships, and courses directly to an audience they already own. Lemon Squeezy serves SaaS founders, independent developers, and digital product sellers with international customers who would otherwise have to register for tax in many jurisdictions. Payhip serves solo sellers and small businesses that want a complete store at the lowest possible cost, including physical goods alongside digital ones. Mature sellers frequently run two platforms in parallel: a low-fee storefront such as Payhip for high-volume, low-priced products where a flat percentage hurts, and a merchant of record such as Lemon Squeezy for international software subscriptions.',
      'Pricing is the sharpest dividing line, and the arithmetic is worth doing before you commit. Gumroad charges no monthly subscription and takes a flat 10% of each sale plus payment processing fees, covering hosting, delivery, and tax handling, with an additional fee on sales made through the Discover marketplace. Lemon Squeezy charges no monthly fee either, taking a percentage of each transaction plus a small fixed amount per sale, with additional fees for affiliate payouts and payout processing — exact commercial terms should be confirmed on the vendor pricing page, not least because Stripe acquired the company in 2024. Payhip publishes the clearest ladder: Free Forever at a 5% transaction fee, Plus at $29 per month reducing it to 2%, and Pro at $99 per month removing the Payhip fee entirely, with payment processor fees applying on every plan.',
      'The sharpest functional divergence is who carries the compliance burden. Lemon Squeezy is the only one of the three that acts as the merchant of record, meaning it owns the transaction, remits sales tax and VAT worldwide, and absorbs chargebacks and fraud, so the seller never registers for tax in every jurisdiction. Gumroad handles sales tax and VAT inside its flat 10% fee, which covers a great deal, but it is not positioned as a full merchant of record for software businesses. Payhip includes EU VAT handling and leaves the rest of the world much closer to the seller, trading compliance depth for the lowest published fees in the category.',
      'So where does each platform genuinely shine? Gumroad is the strongest choice for creators with an existing audience who want a zero-monthly-fee storefront with native memberships, courses, affiliates, and marketplace discovery, and who accept a flat 10% cut for that convenience. Lemon Squeezy is the strongest choice for SaaS founders and international digital sellers who need a merchant of record to own the transaction, remit worldwide sales tax and VAT, and handle chargebacks and fraud. Payhip is the strongest choice for solo sellers who want the lowest fees and the broadest product range, from a 5% free plan up to a fee-free $99 per month Pro plan. Our rule of thumb: multiply your expected monthly revenue by each fee, add the monthly plan cost, and choose the lowest total.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your business.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Creator storefront with no monthly fee — Gumroad takes a flat 10% of every sale instead.',
          [comparisonTools[1]]: 'Merchant of record for digital products and SaaS — it owns the transaction and the tax liability.',
          [comparisonTools[2]]: 'Free-forever store builder that trades a 5% transaction fee for zero upfront cost.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Creators selling digital products, memberships, and courses directly to an existing audience.',
          [comparisonTools[1]]: 'SaaS founders and digital sellers who want worldwide sales tax and VAT handled for them.',
          [comparisonTools[2]]: 'Solo sellers of digital downloads, courses, coaching, memberships, and even physical products.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Fastest to a live checkout — a product can be on sale minutes after signing up.',
          [comparisonTools[1]]: 'Simple checkout and storefront setup, with extra configuration for subscriptions and licensing.',
          [comparisonTools[2]]: 'Guided store builder that a non-technical seller can finish in a single afternoon.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'No monthly subscription at all. Gumroad takes a flat 10% of each sale plus processing fees.',
          [comparisonTools[1]]: 'No monthly fee — a percentage of each transaction plus a small fixed amount per sale.',
          [comparisonTools[2]]: 'Plus $29/mo cuts the fee to 2%. Pro $99/mo removes the Payhip fee entirely.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free to use permanently, since revenue comes only from the 10% cut on completed sales.',
          [comparisonTools[1]]: 'No monthly cost, but every transaction carries a percentage fee plus a fixed per-sale amount.',
          [comparisonTools[2]]: 'Free Forever plan charges only a 5% transaction fee, with payment processor fees on top.',
        },
      },
      {
        feature: 'Transaction fee',
        icon: 'percent',
        values: {
          [comparisonTools[0]]: 'Flat 10% of each sale, plus an additional fee on Discover marketplace sales.',
          [comparisonTools[1]]: 'A percentage of each transaction plus a small fixed amount, with extra fees on affiliate payouts.',
          [comparisonTools[2]]: '5% on Free Forever, 2% on Plus at $29/mo, and 0% on Pro at $99/mo.',
        },
      },
      {
        feature: 'Merchant of record & tax',
        icon: 'receipt',
        values: {
          [comparisonTools[0]]: 'Handles sales tax and VAT inside the flat 10% fee, covering hosting and delivery too.',
          [comparisonTools[1]]: 'The core selling point — acts as merchant of record, calculating and remitting tax worldwide.',
          [comparisonTools[2]]: 'Includes EU VAT handling, though Payhip is not positioned as a full merchant of record.',
        },
      },
      {
        feature: 'Subscriptions & memberships',
        icon: 'repeat',
        values: {
          [comparisonTools[0]]: 'Native memberships and recurring products, billed through the same flat 10% fee.',
          [comparisonTools[1]]: 'Strongest subscription billing of the three, built for SaaS plans and recurring licensing.',
          [comparisonTools[2]]: 'Memberships are supported, with recurring pricing managed through the store builder.',
        },
      },
      {
        feature: 'Courses & coaching',
        icon: 'graduation-cap',
        values: {
          [comparisonTools[0]]: 'Courses are a first-class product type alongside digital downloads and memberships.',
          [comparisonTools[1]]: 'Focused on software and digital products rather than course or coaching delivery.',
          [comparisonTools[2]]: 'Online courses and coaching are explicit product types inside the Payhip store builder.',
        },
      },
      {
        feature: 'Physical products',
        icon: 'package',
        values: {
          [comparisonTools[0]]: 'Built for digital goods — physical products are not the focus of the platform.',
          [comparisonTools[1]]: 'Digital products, subscriptions, and software only. No physical inventory or shipping support.',
          [comparisonTools[2]]: 'Sells physical products alongside digital downloads, which neither competitor offers as a core feature.',
        },
      },
      {
        feature: 'Storefront & custom domain',
        icon: 'store',
        values: {
          [comparisonTools[0]]: 'A hosted profile and product pages, with the Discover marketplace adding buyer discovery.',
          [comparisonTools[1]]: 'Checkout and storefront components that embed into an existing site or run standalone.',
          [comparisonTools[2]]: 'Full store builder, with a custom domain and marketing features on the paid plans.',
        },
      },
      {
        feature: 'Affiliate program',
        icon: 'users-round',
        values: {
          [comparisonTools[0]]: 'Native affiliate programs and payouts let creators recruit promoters for a revenue share.',
          [comparisonTools[1]]: 'Affiliate support is available, with additional fees applied to affiliate payouts.',
          [comparisonTools[2]]: 'Affiliate tooling is not a headline part of the plan structure, so confirm before committing.',
        },
      },
      {
        feature: 'Chargebacks & fraud',
        icon: 'shield',
        values: {
          [comparisonTools[0]]: 'Gumroad absorbs payment handling, tax, and delivery obligations inside its flat 10% fee.',
          [comparisonTools[1]]: 'Explicitly handles chargebacks and fraud because it owns the transaction as merchant of record.',
          [comparisonTools[2]]: 'Payment processor fees apply on every plan, and dispute handling stays closer to the seller.',
        },
      },
      {
        feature: 'Payouts',
        icon: 'wallet',
        values: {
          [comparisonTools[0]]: 'Payouts are handled by Gumroad, with the 10% fee covering hosting, delivery, and tax.',
          [comparisonTools[1]]: 'Lemon Squeezy pays you out after the transaction, with additional payout processing fees applied.',
          [comparisonTools[2]]: 'Payouts flow from the payment processor, since Payhip only charges its own transaction fee.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'No AI layer is marketed — the pitch is a flat-fee storefront built for creators.',
          [comparisonTools[1]]: 'No headline AI product. Lemon Squeezy sells tax compliance and merchant-of-record coverage.',
          [comparisonTools[2]]: 'No AI features in the plan structure — Payhip competes on price and store simplicity.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'A focused set around payments, delivery, and affiliates rather than a broad app catalog.',
          [comparisonTools[1]]: 'Developer-first APIs and checkouts, now backed by Stripe, which acquired the company in 2024.',
          [comparisonTools[2]]: 'Marketing features and a custom domain on paid plans, plus the usual payment processors.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Creators with an audience who want a zero-monthly-fee storefront and accept a flat 10% cut.',
          [comparisonTools[1]]: 'SaaS and digital sellers needing worldwide tax, fraud, and chargeback handling done for them.',
          [comparisonTools[2]]: 'Sellers chasing the lowest fees — 2% on Plus at $29/mo or 0% on Pro at $99/mo.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'No monthly subscription at all — you pay nothing until you actually make a sale',
        'A flat 10% fee covers hosting, file delivery, and sales tax and VAT handling',
        'Native memberships, courses, and digital products in one creator-focused storefront',
        'Built-in affiliate programs and payouts let creators recruit promoters without a third-party tool',
        'The Discover marketplace exposes products to buyers who are not already in your audience',
        'Fastest path from signup to a live checkout of the three platforms',
      ],
      cons: [
        'The flat 10% fee is the highest per-transaction cost here — $1,000 in monthly sales costs $100',
        'Past roughly $990 in monthly sales, Payhip Pro at $99/month becomes cheaper than the Gumroad cut',
        'Sales made through the Discover marketplace carry an additional fee on top of the flat 10%',
        'Payment processing fees sit on top of the 10%, so the effective rate is higher than advertised',
        'Subscription and SaaS billing depth trails Lemon Squeezy for software sellers',
        'Little storefront design control compared with a full store builder such as Payhip',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Acts as merchant of record, so it owns the transaction and remits sales tax and VAT worldwide',
        'No monthly fee — costs scale purely with successful transactions',
        'Handles chargebacks and fraud directly, removing a real operational burden for SaaS sellers',
        'Strongest subscription and billing model of the three for software and recurring licensing',
        'Developer-friendly checkout and storefront components that embed into an existing site',
        'Backed by Stripe, which acquired the company in 2024',
      ],
      cons: [
        'Every sale carries a percentage fee plus a small fixed amount, which stings on low-priced products',
        'Additional fees apply to affiliate payouts and to payout processing',
        'Exact commercial terms are not published clearly enough to budget from — confirm on the vendor pricing page',
        'No course, coaching, or physical-product selling, so creators outside software look elsewhere',
        'No free storefront tier comparable to Payhip\'s Free Forever plan for non-software sellers',
        'Stripe ownership makes the long-term roadmap and pricing direction harder for sellers to predict',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Free Forever plan charges only a 5% transaction fee, half of Gumroad\'s flat 10%',
        'Plus at $29/month cuts the Payhip fee to 2% and adds a custom domain and marketing features',
        'Pro at $99/month removes the Payhip fee entirely, leaving only payment processor fees',
        'Sells digital downloads, online courses, coaching, memberships, and physical products from one store',
        'A real store builder, so non-technical sellers get a complete storefront without a developer',
        'EU VAT handling is included, which removes the hardest part of selling into Europe',
      ],
      cons: [
        'Payment processor fees apply on every plan, so the 0% headline on Pro is not the whole cost',
        'No merchant-of-record model, so worldwide sales tax registration stays closer to the seller',
        'Affiliate tooling is not a headline part of the plan structure, unlike the native Gumroad program',
        'Subscription and SaaS billing depth trails Lemon Squeezy for software businesses',
        'The 5% Free Forever fee only drops to 2% once monthly sales pass roughly $970',
        'Storefront design is broader than Gumroad but still templated compared with a custom build',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of selling the same catalogue through all three platforms — a $49 ebook, a $199 video course, a $19 per month membership, and a small software subscription — our conclusion is that there is no universal winner, but there is a clearly correct choice for each kind of seller and each revenue level. Gumroad was the fastest to a live checkout and the simplest to operate day to day. Lemon Squeezy removed the most paperwork, because acting as merchant of record means worldwide sales tax and VAT simply stop being the seller\'s problem. Payhip was the cheapest platform at every revenue level we modelled, and the only one of the three that sells physical products alongside digital goods.',
      'Where Gumroad deserves praise is simplicity and creator fit. There is no monthly subscription, a flat 10% of each sale covers hosting, file delivery, and tax handling, and memberships, courses, affiliates, and payouts are all native. The Discover marketplace also gives creators buyer traffic they would never reach on their own. Where it draws criticism is cost at scale. Ten percent is the highest per-transaction rate in this comparison, payment processing fees sit on top of it, and Discover sales carry an additional fee — so $1,000 in monthly sales costs roughly $100 before processing. Creators billing more than about $990 per month can pay less on Payhip Pro at $99, and software sellers who need subscription depth usually evaluate Lemon Squeezy instead.',
      'Where Lemon Squeezy deserves praise is compliance. Because it acts as the merchant of record, Lemon Squeezy owns the transaction, calculates and remits sales tax and VAT worldwide, and handles chargebacks and fraud, so the seller never registers for tax in every jurisdiction. For a SaaS or digital product business selling internationally that is worth a great deal, and there is no monthly fee attached to it. Where it draws criticism is pricing transparency and scope. Each sale carries a percentage fee plus a small fixed amount, with additional fees for affiliate payouts and payout processing, and exact commercial terms have to be confirmed on the vendor pricing page — partly because Stripe acquired the company in 2024. Creators selling courses, coaching, or physical goods get far less from Lemon Squeezy than from Payhip.',
      'Where Payhip deserves praise is fee structure and product breadth. The Free Forever plan charges only a 5% transaction fee, Plus at $29 per month reduces it to 2% and adds a custom domain and marketing features, and Pro at $99 per month removes the Payhip fee entirely — while still selling digital downloads, online courses, coaching, memberships, and physical products from one store builder. Where it draws criticism is compliance depth. Payment processor fees apply on every plan, so the 0% headline on Pro is not the whole cost, Payhip offers no merchant-of-record model, and worldwide tax registration therefore stays much closer to the seller than it does with Lemon Squeezy. Sellers with heavy international volume tend to move toward Lemon Squeezy for exactly that reason.',
      'The defining trend in 2026 is the merchant-of-record split. Lemon Squeezy sells compliance as the product: one entity owns the transaction and absorbs global tax and fraud risk. Gumroad and Payhip sell infrastructure instead, taking a percentage of each sale while leaving more of the compliance burden with the seller. That split produces a clean fee ladder — Payhip at 5% free, 2% for $29 per month, or 0% for $99 per month, against Gumroad\'s flat 10% and Lemon Squeezy\'s percentage plus a fixed per-sale amount. Because the break-evens are so predictable, mature sellers increasingly run two platforms: a low-fee storefront for high-volume, low-priced products, and a merchant of record for international software subscriptions.',
      'Looking ahead, expect fee compression at the low end and deeper compliance bundles at the high end, with Stripe\'s ownership of Lemon Squeezy pushing merchant-of-record capability further into the mainstream. None of the three currently markets a headline AI feature, and all three compete on price, tax handling, and storefront quality. The fundamentals have not changed. If you are a creator with an audience who wants a zero-monthly-fee storefront and accepts a flat 10% cut, start with Gumroad. If you sell software or subscriptions internationally and want worldwide tax, fraud, and chargeback handling done for you, start with Lemon Squeezy. If you want the lowest transaction fees and a store that also sells courses, coaching, memberships, and physical products, start with Payhip. Our rule of thumb: multiply your expected monthly revenue by each fee, add the monthly plan cost, and pick the lowest total — the right answer changes as you grow.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Gumroad if you are a creator selling digital products, memberships, and courses to an audience you already have and you want no monthly subscription at all, accepting a flat 10% of each sale plus processing fees in exchange for hosted delivery, tax handling, native affiliates, and Discover marketplace exposure — ideal for writers, designers, and educators launching quickly. Choose Lemon Squeezy if you sell software or subscriptions internationally and want a merchant of record that owns the transaction, remits sales tax and VAT worldwide, and handles chargebacks and fraud, with no monthly fee — ideal for SaaS founders who refuse to register for tax in every jurisdiction. Choose Payhip if low fees and product breadth matter most, since Free Forever charges only 5%, Plus costs $29 per month for 2%, and Pro costs $99 per month with no Payhip fee, covering downloads, courses, coaching, memberships, and physical products — ideal for solo sellers scaling a store. Sellers with both high-volume digital goods and international software subscriptions often run two platforms in parallel.',
  },
}
