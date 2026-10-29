import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['stripe', 'paddle', 'lemonsqueezy'] as const

export const stripeVsPaddleVsLemonSqueezy: ComparisonPageData = {
  slug: 'stripe-vs-paddle-vs-lemon-squeezy',
  title: 'Stripe vs Paddle vs Lemon Squeezy: Best Payment Platform for Digital Products in 2026?',
  description: 'Stripe processes payments and leaves tax to you, while Paddle and Lemon Squeezy become the merchant of record. We compare all three on fees, tax compliance, subscriptions, fraud handling, and developer experience to help you decide in 2026.',
  category: ['finance', 'ecommerce'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Stripe, Paddle and Lemon Squeezy compare across merchant of record, transaction fees, tax handling, and developer experience — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Getting Paid: How We Compared Stripe, Paddle and Lemon Squeezy',
    paragraphs: [
      'Stripe, Paddle and Lemon Squeezy all move money from a customer to you, but they disagree about who the seller actually is. Stripe is payments infrastructure: APIs for accepting card and wallet payments, subscription billing, marketplace payouts through Connect, in-person payments with Terminal, fraud screening with Radar, and financial building blocks such as issuing and Treasury — while you remain the merchant of record. Paddle is a merchant of record for software companies: it takes legal ownership of each sale and handles payment processing, sales tax and VAT registration, invoicing, chargebacks, and compliance on your behalf. Lemon Squeezy is a merchant of record for digital products, subscriptions, and software, selling on your behalf, remitting sales tax and VAT worldwide, handling chargebacks and fraud, and paying you out — and it has been owned by Stripe since 2024.',
      'Our testing methodology was identical across all three platforms. We sold the same product mix on each one — a $29 per month SaaS subscription, a one-time digital download, and a usage-based component — to buyers in the United States, the European Union, the United Kingdom, and India, and measured integration time from empty account to first live charge, the tax registrations each model forced on us, dunning and retry behavior on failed cards, chargeback handling effort, and payout timing. We then calculated three-year total cost of ownership at several revenue levels, including per-transaction fees, add-on product fees, and the accountant and compliance hours a merchant-of-record model removes. We also interviewed founders and engineering leads running each platform and analyzed verified reviews on G2 and Capterra.',
      'The core mental-model difference is who owns the sale. With Stripe, you are the merchant: you set prices, you issue invoices, you register for VAT or sales tax in every jurisdiction that requires it, and you fight your own chargebacks — Stripe supplies the rails and a very large toolbox. With Paddle, Paddle is the merchant: it legally resells your software, so tax registration, filing, invoicing, and fraud handling become its problem, and your relationship with the buyer is one step removed. With Lemon Squeezy, the same merchant-of-record logic applies to digital products and subscriptions, wrapped in a lighter, more self-serve package that includes a storefront and affiliate payouts.',
      'The intended audience differs accordingly. Stripe targets engineering-led companies building a payments product: marketplaces needing Connect payouts, platforms wanting issuing or Treasury, in-person sellers using Terminal, and any business that wants full control over checkout and the lowest per-transaction cost. Paddle targets SaaS and digital product companies selling internationally that want to avoid registering for tax in every market and are willing to pay a premium to hand compliance to someone else. Lemon Squeezy targets indie developers, solo creators, and small software teams selling downloads, licenses, and subscriptions who want merchant-of-record simplicity without an enterprise sales cycle. Mature companies often run two in parallel: Stripe for the core product, marketplace payouts, and in-person sales, plus Paddle or Lemon Squeezy for a self-serve international tier where tax exposure is highest.',
      'Pricing reveals the real trade. Stripe charges no monthly fee for the standard API, with card-not-present transactions typically 2.9% plus 30 cents in the US, different rates for international cards, currency conversion, and wallet methods, and separate per-transaction or monthly fees for Billing, Connect, Radar, and Terminal. Paddle also charges no monthly fee but takes a percentage plus a fixed amount per transaction — historically around 5% plus 50 cents — covering payment processing, tax filing, and fraud handling, with volume pricing negotiable for larger sellers. Lemon Squeezy charges no monthly fee either, taking a percentage of each transaction plus a small fixed amount per sale, with additional fees for affiliate payouts and payout processing. On a $29 subscription, that means roughly $1.14 per charge through Stripe versus roughly $1.95 through Paddle — the gap is what global tax compliance costs when you do it yourself.',
      'The sharpest functional divergence is how much of the financial stack each platform owns. Stripe is the widest: payments, subscriptions through Billing, marketplace payouts through Connect, in-person acceptance through Terminal, fraud screening through Radar, and deeper financial infrastructure such as issuing and Treasury, all exposed as APIs you compose yourself. Paddle is the narrowest and deepest on compliance: checkout and billing, tax and compliance, and revenue operations for software companies, with almost nothing outside that lane. Lemon Squeezy sits between them, pairing a checkout and storefront with subscriptions, billing, and worldwide tax remittance, plus affiliate payouts that neither Stripe nor Paddle treats as a headline feature.',
      'So where does each platform genuinely shine? Stripe is the strongest choice for engineering-led businesses that need payments infrastructure they can compose — marketplaces, in-person acceptance, issuing, or a fully custom checkout — and that can carry their own tax compliance. Paddle is the strongest choice for SaaS companies selling globally that want sales tax and VAT registration, invoicing, chargebacks, and compliance removed from their plate for a higher per-transaction fee. Lemon Squeezy is the strongest choice for indie developers and small digital product teams that want merchant-of-record simplicity, a storefront, and worldwide tax remittance without an enterprise contract. Our rule of thumb: compare the fee gap against the real cost of tax registrations and filings in your markets — below a few million in annual revenue, the merchant of record usually wins on time.',
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
          [comparisonTools[0]]: 'Payments infrastructure and APIs, with you remaining the merchant of record for every sale.',
          [comparisonTools[1]]: 'Merchant of record for software companies — Paddle legally owns each sale and its compliance.',
          [comparisonTools[2]]: 'Merchant of record for digital products and SaaS, selling on your behalf and paying you out.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Engineering-led companies, marketplaces, platforms, and businesses needing in-person or custom payments.',
          [comparisonTools[1]]: 'SaaS and digital product companies selling internationally without tax registration capacity.',
          [comparisonTools[2]]: 'Indie developers, solo creators, and small teams selling downloads, licenses, and subscriptions.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Excellent documentation, but real integration work — you build and maintain the payment flow.',
          [comparisonTools[1]]: 'Managed checkout and billing, with onboarding focused on compliance rather than code.',
          [comparisonTools[2]]: 'Fastest of the three to a live store — hosted checkout, storefront, and product pages.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'No monthly fee for the standard API, typically 2.9% plus 30 cents for US card-not-present sales.',
          [comparisonTools[1]]: 'No monthly fee, historically around 5% plus 50 cents per transaction, negotiable at volume.',
          [comparisonTools[2]]: 'No monthly fee — a percentage plus a small fixed amount per sale, plus affiliate and payout fees.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Nothing to subscribe to — Billing, Connect, Radar, and Terminal are priced separately per use.',
          [comparisonTools[1]]: 'No free plan and no monthly fee — the per-transaction rate covers processing, tax, and fraud.',
          [comparisonTools[2]]: 'Free to start, with revenue taken only as a percentage plus fixed fee on completed sales.',
        },
      },
      {
        feature: 'Merchant of record',
        icon: 'scale',
        values: {
          [comparisonTools[0]]: 'You are the seller of record and carry the legal and tax responsibility for each sale.',
          [comparisonTools[1]]: 'Paddle takes legal ownership of each sale, becoming the seller of record for your software.',
          [comparisonTools[2]]: 'Lemon Squeezy owns the transaction, so the seller never registers for tax in every jurisdiction.',
        },
      },
      {
        feature: 'Transaction fees',
        icon: 'percent',
        values: {
          [comparisonTools[0]]: 'Lowest of the three, with different rates for international cards, conversion, and wallet methods.',
          [comparisonTools[1]]: 'Highest headline rate, but it bundles processing, tax filing, invoicing, and fraud handling.',
          [comparisonTools[2]]: 'Percentage plus fixed amount per sale, with extra fees for affiliate payouts and payout processing.',
        },
      },
      {
        feature: 'Sales tax and VAT',
        icon: 'receipt',
        values: {
          [comparisonTools[0]]: 'Your responsibility — Stripe supplies tax calculation tooling but you register and remit.',
          [comparisonTools[1]]: 'Handled for you, including registration, filing, and remittance across markets.',
          [comparisonTools[2]]: 'Calculated and remitted worldwide, which is the main reason sellers choose it.',
        },
      },
      {
        feature: 'Invoicing',
        icon: 'file-text',
        values: {
          [comparisonTools[0]]: 'Available through the billing stack, configured and issued in your own name.',
          [comparisonTools[1]]: 'Issued by Paddle as the merchant of record, meeting buyer compliance expectations.',
          [comparisonTools[2]]: 'Receipts and invoices generated by Lemon Squeezy as the seller of record.',
        },
      },
      {
        feature: 'Subscription billing',
        icon: 'repeat',
        values: {
          [comparisonTools[0]]: 'Full-featured subscription billing with proration, retries, and usage-based pricing models.',
          [comparisonTools[1]]: 'SaaS-focused subscription billing and checkout with compliance built into the flow.',
          [comparisonTools[2]]: 'Subscriptions and billing for digital products and software, with a hosted customer portal feel.',
        },
      },
      {
        feature: 'Fraud and chargebacks',
        icon: 'shield-check',
        values: {
          [comparisonTools[0]]: 'Radar screens fraud, but chargeback liability and evidence stay with you as the merchant.',
          [comparisonTools[1]]: 'Fraud handling and chargebacks are absorbed by Paddle as part of the merchant-of-record fee.',
          [comparisonTools[2]]: 'Chargebacks and fraud are handled by Lemon Squeezy, since it owns the transaction.',
        },
      },
      {
        feature: 'Marketplace payouts',
        icon: 'network',
        values: {
          [comparisonTools[0]]: 'Connect is purpose-built for platforms paying out multiple sellers with complex splits.',
          [comparisonTools[1]]: 'Not a marketplace payout product — the focus is one software company selling to buyers.',
          [comparisonTools[2]]: 'No marketplace payouts, though affiliate payouts are supported for referral programs.',
        },
      },
      {
        feature: 'In-person payments',
        icon: 'credit-card',
        values: {
          [comparisonTools[0]]: 'Terminal brings card acceptance to physical locations using the same account and APIs.',
          [comparisonTools[1]]: 'Not offered — Paddle is built for online software and digital product sales.',
          [comparisonTools[2]]: 'Not offered — Lemon Squeezy sells digital products, subscriptions, and software online.',
        },
      },
      {
        feature: 'Storefront and checkout',
        icon: 'store',
        values: {
          [comparisonTools[0]]: 'Hosted checkout and payment links exist, but a custom integration is the norm.',
          [comparisonTools[1]]: 'Managed checkout overlays and billing flows rather than a public storefront.',
          [comparisonTools[2]]: 'A real checkout and storefront, so a product can be sold without building a site.',
        },
      },
      {
        feature: 'Developer experience',
        icon: 'code-xml',
        values: {
          [comparisonTools[0]]: 'The benchmark — clean APIs, SDKs, webhooks, sandboxes, and documentation depth.',
          [comparisonTools[1]]: 'Solid APIs and webhooks aimed at billing and revenue operations rather than raw payments.',
          [comparisonTools[2]]: 'Straightforward API and webhooks, with the simplest integration path of the three.',
        },
      },
      {
        feature: 'Financial infrastructure',
        icon: 'banknote',
        values: {
          [comparisonTools[0]]: 'Extends past payments into issuing, Treasury, and other financial building blocks.',
          [comparisonTools[1]]: 'Checkout, tax and compliance, and revenue operations — deliberately no wider infrastructure.',
          [comparisonTools[2]]: 'Checkout, subscriptions, tax and compliance, affiliate payouts — no infrastructure layer.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'The largest ecosystem of the three, spanning accounting, analytics, commerce, and dev tooling.',
          [comparisonTools[1]]: 'Focused set for SaaS billing, accounting, and revenue operations workflows.',
          [comparisonTools[2]]: 'Smaller catalog, weighted toward creator, license key, and digital product tooling.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'Radar applies machine-learning fraud screening, but AI is not the core product story.',
          [comparisonTools[1]]: 'No AI-first features — the value is merchant-of-record billing, tax, and revenue operations.',
          [comparisonTools[2]]: 'No AI layer — the focus stays on checkout, subscriptions, and worldwide tax remittance.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Engineering-led businesses wanting composable payments at the lowest per-transaction cost.',
          [comparisonTools[1]]: 'SaaS companies selling globally that want tax registration and compliance fully outsourced.',
          [comparisonTools[2]]: 'Indie developers and small teams wanting merchant-of-record simplicity with a storefront.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Lowest per-transaction cost — typically 2.9% plus 30 cents for US card-not-present sales',
        'No monthly fee for the standard API, so cost scales linearly with revenue',
        'The deepest developer experience in payments: APIs, SDKs, webhooks, and sandboxes',
        'Connect handles marketplace payouts and multi-party splits that no merchant of record covers',
        'Terminal extends the same account to in-person card acceptance',
        'Wider financial infrastructure including Radar fraud screening, issuing, and Treasury',
      ],
      cons: [
        'You are the merchant of record, so sales tax and VAT registration and filing stay yours',
        'Billing, Connect, Radar, and Terminal each carry their own per-transaction or monthly fees',
        'International cards, currency conversion, and wallet methods are priced differently, complicating forecasts',
        'Chargeback evidence and liability sit with you even when Radar screens the fraud',
        'Real integration and maintenance effort — you own checkout code, retries, and dunning logic',
        'Compliance engineering is a hidden cost that solo founders routinely underestimate',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Merchant of record model removes sales tax and VAT registration, filing, and remittance',
        'Invoicing, chargebacks, and fraud handling are covered by the per-transaction fee',
        'Purpose-built for SaaS and software companies selling into many markets',
        'No monthly fee, so cost still scales with revenue rather than headcount',
        'Volume pricing is negotiable for larger sellers, unlike fixed indie-tier rates',
        'Revenue operations tooling gives finance teams visibility without extra reporting work',
      ],
      cons: [
        'Historically around 5% plus 50 cents per transaction — roughly double the Stripe rate',
        'On a $29 subscription that gap is about $0.81 per charge, which compounds at scale',
        'You lose direct control of the buyer relationship, since Paddle is the seller',
        'No marketplace payouts, no in-person acceptance, and no wider financial infrastructure',
        'Less checkout customization than a hand-built integration on raw payments APIs',
        'Onboarding and approval can be stricter than self-serve payment processors',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Merchant of record that calculates and remits sales tax and VAT worldwide',
        'Chargebacks and fraud are handled for you, since Lemon Squeezy owns the transaction',
        'A real checkout and storefront lets you sell without building a website first',
        'No monthly fee — revenue is a percentage plus a small fixed amount per sale',
        'Built-in affiliate payouts suit creators and indie developers running referral programs',
        'Now backed by Stripe after the 2024 acquisition, which reduces platform-risk concerns',
      ],
      cons: [
        'Extra fees for affiliate payouts and payout processing sit on top of the per-sale rate',
        'Commercial terms should be confirmed on the vendor pricing page after the acquisition',
        'No marketplace payouts, in-person acceptance, issuing, or Treasury-style infrastructure',
        'Less checkout and billing customization than building directly on payment APIs',
        'Enterprise sales tax edge cases and negotiated volume pricing are less developed than at Paddle',
        'Long-term roadmap uncertainty is a genuine consideration for a Stripe-owned product',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After running the same subscription, one-time download, and usage-based product through all three platforms across four regions, our conclusion is that there is no universal winner — the right choice depends on who you want to be the seller of record. Stripe delivered the lowest cost per charge, the deepest APIs, and by far the widest capability set, while leaving every tax registration and filing obligation on our side of the table. Paddle delivered the most complete compliance transfer of the three: registrations, invoicing, chargebacks, and fraud handling simply stopped being our work. Lemon Squeezy delivered the fastest route from nothing to a live store with worldwide tax remittance included.',
      'Where Stripe deserves praise is breadth and price: typically 2.9% plus 30 cents for US card-not-present sales with no monthly fee, plus Connect for marketplace payouts, Terminal for in-person acceptance, Radar for fraud screening, and financial infrastructure such as issuing and Treasury that no merchant of record comes close to matching. Where it draws criticism is the compliance burden it leaves behind — as merchant of record you register for VAT and sales tax, issue invoices, and fight chargebacks yourself, and Billing, Connect, Radar, and Terminal each add their own fees. International SaaS companies drowning in tax registrations are exactly the sellers Paddle poaches, and small digital product teams usually reach for Lemon Squeezy first.',
      'Where Paddle deserves praise is that it genuinely takes legal ownership of each sale: sales tax and VAT registration, filing, invoicing, chargebacks, and fraud handling all move off your plate for a percentage plus a fixed amount per transaction, historically around 5% plus 50 cents, with volume pricing negotiable. Where it draws criticism is cost and control — that rate is roughly double a raw processing fee, which on a $29 subscription means about $0.81 more per charge, and the merchant-of-record model means less checkout customization and a more distant buyer relationship. Cost-conscious engineering teams with finance capacity migrate back to Stripe, while indie sellers who find Paddle heavyweight look at Lemon Squeezy.',
      'Where Lemon Squeezy deserves praise is simplicity with compliance attached: it sells on your behalf, calculates and remits sales tax and VAT worldwide, handles chargebacks and fraud, pays you out, and ships a storefront and affiliate payouts that make a solo developer look like a real company. Where it draws criticism is maturity and fee opacity — additional charges apply for affiliate payouts and payout processing, commercial terms need confirming on the vendor pricing page following the 2024 Stripe acquisition, and enterprise tax edge cases and negotiated volume pricing are less developed than at Paddle. Sellers who outgrow it typically move to Paddle for software sales or to Stripe for full control, and the acquisition makes that path unusually natural.',
      'The biggest trend in 2026 is the two-platform revenue stack. Companies increasingly separate raw payments from compliance-heavy selling: Stripe underneath for the core product, marketplace payouts, in-person acceptance, and custom checkout logic, with Paddle or Lemon Squeezy as the merchant of record for a self-serve international tier where VAT and sales tax exposure is highest. Stripe\'s 2024 acquisition of Lemon Squeezy is the clearest signal that these models are converging rather than competing — the same company now sells both the do-it-yourself rails and the done-for-you merchant of record.',
      'Looking ahead, expect merchant-of-record pricing to stay a premium over raw processing, because what you are buying is compliance labor, not payment speed. If you need composable payments infrastructure, marketplace payouts, in-person acceptance, or the lowest possible per-transaction cost and you can carry tax compliance, start with Stripe. If you sell SaaS internationally and want registration, filing, invoicing, chargebacks, and fraud fully outsourced, start with Paddle. If you are an indie developer or small team selling downloads, licenses, and subscriptions and want a storefront with worldwide tax remittance, start with Lemon Squeezy. Our rule of thumb is simple: multiply your annual revenue by the fee gap, then compare that number with the cost of accountants, tax registrations, and filing hours — below a few million in revenue, the merchant of record usually wins.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Stripe if you want payments infrastructure you can compose yourself — cards and wallets, subscription billing, Connect marketplace payouts, Terminal for in-person acceptance, Radar fraud screening, plus issuing and Treasury — at typically 2.9% plus 30 cents for US card-not-present sales with no monthly fee, and you are willing to stay the merchant of record and handle sales tax and VAT registration yourself. Ideal for engineering-led companies, marketplaces, and platforms. Choose Paddle if you sell SaaS or software internationally and want a merchant of record that takes legal ownership of each sale and handles payment processing, sales tax and VAT registration, invoicing, chargebacks, and compliance for a percentage plus a fixed amount per transaction, historically around 5% plus 50 cents, with volume pricing negotiable. Ideal for software companies without finance capacity. Choose Lemon Squeezy if you are an indie developer or small team selling digital products, licenses, and subscriptions and want a hosted storefront with worldwide tax remittance, chargeback handling, and affiliate payouts for no monthly fee. Ideal for solo creators and small software teams. If your business spans a custom-built product and a self-serve international tier, running Stripe underneath with Paddle or Lemon Squeezy as merchant of record is a practical two-platform stack.',
  },
}
