import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['ecwid', 'bigcartel', 'shopware'] as const

export const ecwidVsBigcartelVsShopware: ComparisonPageData = {
  slug: 'ecwid-vs-bigcartel-vs-shopware',
  title: 'Ecwid vs Big Cartel vs Shopware: Best Ecommerce Platform in 2026?',
  description: 'An embeddable widget, an artist-first storefront, and an open-source commerce platform represent three distinct approaches to selling online. We compare Ecwid, Big Cartel and Shopware on pricing, product limits, channels, and customization to help you decide in 2026.',
  category: ['ecommerce'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Ecwid, Big Cartel and Shopware compare across pricing, product limits, multichannel reach, and customization — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Online Selling: How We Compared Ecwid, Big Cartel and Shopware',
    paragraphs: [
      'Selling online in 2026 does not require a single platform shape, and Ecwid, Big Cartel and Shopware prove the point by occupying three almost non-overlapping corners of the market. Ecwid by Lightspeed is the embeddable choice: a store widget that attaches to a website, blog, or social profile you already run and then synchronizes inventory and orders across Facebook, Instagram, Google Shopping, marketplaces, and an in-person point of sale. Big Cartel is the maker choice: a deliberately small, cheap, self-contained storefront built for independent artists and creators selling a limited catalog of physical or digital products. Shopware is the enterprise choice: a Symfony-based, API-first open-source commerce platform for mid-market and B2B merchants who want full control over storefront logic, rules, and their own hosting.',
      'Our testing methodology was identical across all three platforms. We built the same test scenario — a small brand selling 40 products across a marketing site, an Instagram shop, and a wholesale price list — on each platform, timed routine operations such as adding a product, publishing a channel, applying a discount code, and fulfilling an order, and calculated a realistic three-year total cost of ownership covering subscriptions, transaction costs, hosting for the self-hosted edition, theme and app spend, and developer hours. We also interviewed merchants who had migrated between these platforms and analyzed verified user reviews on G2 and Capterra to separate the marketing claims from daily operating reality.',
      'The deepest difference is the mental model each platform imposes on a merchant. Ecwid treats commerce as a component: the store is a widget that lives inside a website you already own, so the existing site stays the center and the catalog is simply one more surface published outward to channels. Big Cartel treats commerce as the whole product: the store is the website, with built-in themes, product management, discount codes, and order handling, and there is nothing else to integrate. Shopware treats commerce as a software project: a Symfony application with an API-first storefront, a visual rule builder, a drag-and-drop CMS called Shopping Experiences, and B2B components that developers extend and deploy into their own infrastructure.',
      'The intended audience differs just as sharply. Ecwid targets small businesses, bloggers, and creators who already have a web presence and want to add selling without rebuilding anything, plus merchants who need one inventory pool across a website, social channels, and a physical stall. Big Cartel targets independent artists, illustrators, printmakers, and makers with small catalogs who want the cheapest possible way to look professional and never want to think about commerce engineering. Shopware targets mid-market and enterprise merchants, agencies, and B2B operations that need custom pricing rules, complex catalogs, and full source-code control. Mature operations frequently run two of these in parallel: Shopware as the primary catalog and order engine with Ecwid publishing selected products to social channels and point of sale.',
      'Pricing is where the three platforms diverge most dramatically. Ecwid is free for up to 5 products, then Venture starts at $15 per month billed annually, Business at $35 per month with unlimited products and abandoned cart saving, and Unlimited at $83 per month adds staff accounts and Google Shopping — monthly billing costs more on every tier. Big Cartel is the cheapest entry point in the category: the free Gold plan covers 5 products, Platinum costs $9.99 per month for 50 products, Diamond $19.99 per month for 250 products, and Titanium $29.99 per month for 500 products, with annual billing discounted and paid tiers adding custom domain support and theme code editing. Shopware is free as a self-hosted Community Edition, while managed cloud plans are billed monthly per environment and start in the mid hundreds of euros per month, with higher tiers adding B2B components and larger traffic allowances.',
      'The sharpest functional divergence is what happens beyond your own storefront. Ecwid is the only one of the three built for multichannel by default: it synchronizes inventory and orders across Facebook, Instagram, Google Shopping, marketplaces, and an in-person point of sale from one catalog. Big Cartel keeps the selling surface small on purpose — themes, product pages, discount codes, and straightforward order management — so merchants who want social commerce or a card reader must bolt on separate tools. Shopware goes the other way with depth instead of breadth: a visual rule builder for pricing and promotions, a drag-and-drop CMS for landing and category pages, an API-first storefront for headless delivery, and B2B components that neither Ecwid nor Big Cartel attempts.',
      'So where does each platform genuinely shine? Ecwid is the strongest choice for a small business that already has a website and wants a real store plus social, marketplace, and in-person channels without a rebuild. Big Cartel is the strongest choice for artists and makers with a catalog under a few hundred products who care about low cost, credible themes, and getting paid this weekend. Shopware is the strongest choice for mid-market and B2B merchants who need custom rules, headless delivery, source-code control, and room to grow into enterprise volumes. Our rule of thumb: pick by the size and complexity of your catalog and channel mix, not by which platform advertises the longest feature list.',
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
          [comparisonTools[0]]: 'An embeddable store widget that turns any existing website, blog, or social profile into a selling channel.',
          [comparisonTools[1]]: 'A self-contained storefront for independent artists — the store is the whole website, not a component.',
          [comparisonTools[2]]: 'An open-source Symfony commerce platform with an API-first storefront that merchants deploy and extend themselves.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Small businesses, bloggers, and creators who already run a web presence and want to add selling.',
          [comparisonTools[1]]: 'Independent artists, illustrators, and makers selling a small catalog of physical or digital products.',
          [comparisonTools[2]]: 'Mid-market and enterprise merchants, agencies, and B2B teams that need custom commerce logic and control.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Paste the widget into an existing site and publish products to channels from one dashboard.',
          [comparisonTools[1]]: 'Simplest of the three — a credible store can be live in an afternoon with no developer.',
          [comparisonTools[2]]: 'The admin is approachable, but meaningful customization assumes developer skills and hosting responsibility.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Venture from $15/month billed annually, Business from $35/month, Unlimited from $83/month with staff accounts.',
          [comparisonTools[1]]: 'Platinum $9.99/month for 50 products, Diamond $19.99/month for 250, Titanium $29.99/month for 500.',
          [comparisonTools[2]]: 'Community Edition free, managed cloud billed monthly per environment starting in the mid hundreds of euros.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Free plan for up to 5 products with the store widget and core order handling.',
          [comparisonTools[1]]: 'Free Gold plan for up to 5 products with built-in themes and discount codes.',
          [comparisonTools[2]]: 'Free open-source Community Edition with no product ceiling, but you pay for hosting and development.',
        },
      },
      {
        feature: 'Product limits',
        icon: 'package',
        values: {
          [comparisonTools[0]]: '5 products free, unlimited products from the Business tier at $35 per month billed annually.',
          [comparisonTools[1]]: 'Hard catalog ceilings per plan — 5 free, then 50, 250, or 500 products.',
          [comparisonTools[2]]: 'No product ceiling — practical limits come from your hosting plan and traffic allowance instead.',
        },
      },
      {
        feature: 'Storefront themes and design',
        icon: 'palette',
        values: {
          [comparisonTools[0]]: 'The widget renders product cards and checkout inside your existing site styling.',
          [comparisonTools[1]]: 'Built-in themes designed for art and maker shops, with theme code editing on paid tiers.',
          [comparisonTools[2]]: 'Drag-and-drop Shopping Experiences CMS for landing, category, and product pages with full theme control.',
        },
      },
      {
        feature: 'Customization and code access',
        icon: 'code',
        values: {
          [comparisonTools[0]]: 'Hosted and closed — extend through apps and channels rather than editing source code.',
          [comparisonTools[1]]: 'Paid tiers expose theme code editing for HTML and CSS, and nothing structurally deeper.',
          [comparisonTools[2]]: 'Full source-code access, Symfony plugins, and an API-first storefront for headless or custom front ends.',
        },
      },
      {
        feature: 'Multichannel selling',
        icon: 'globe',
        values: {
          [comparisonTools[0]]: 'Strongest here — Facebook, Instagram, Google Shopping, marketplaces, and in-person point of sale from one catalog.',
          [comparisonTools[1]]: 'Own storefront first, with social selling surfaces that stay deliberately minimal.',
          [comparisonTools[2]]: 'Own storefront plus any channel you build through the API, with no turnkey social publishing included.',
        },
      },
      {
        feature: 'Inventory and order sync',
        icon: 'refresh-cw',
        values: {
          [comparisonTools[0]]: 'A central inventory pool synchronizes stock and orders across website, social, marketplace, and POS channels.',
          [comparisonTools[1]]: 'Simple product inventory and straightforward order management for a single storefront.',
          [comparisonTools[2]]: 'Full inventory, price, and rule management for complex catalogs, extended through ERP and PIM integrations.',
        },
      },
      {
        feature: 'Promotions and discounts',
        icon: 'percent',
        values: {
          [comparisonTools[0]]: 'Discount codes plus abandoned cart saving from the Business tier at $35 per month.',
          [comparisonTools[1]]: 'Built-in discount codes on every plan, including the free Gold tier.',
          [comparisonTools[2]]: 'A visual rule builder defines cart, customer, and promotion rules without writing conditional code.',
        },
      },
      {
        feature: 'B2B and wholesale',
        icon: 'building-2',
        values: {
          [comparisonTools[0]]: 'Not a B2B platform — no customer-specific price lists, quotes, or company accounts.',
          [comparisonTools[1]]: 'No B2B layer, so wholesale has to be handled manually with discount codes.',
          [comparisonTools[2]]: 'B2B components on higher cloud tiers cover company accounts, quick order, and negotiated pricing.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'AI is not the focus — automation centers on inventory sync, channel publishing, and point of sale.',
          [comparisonTools[1]]: 'No AI tooling — the product stays on themes, product management, and order simplicity.',
          [comparisonTools[2]]: 'The API-first architecture lets merchants attach their own AI services for search, content, and merchandising.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Native channel connectors plus the Lightspeed ecosystem and common apps for email, accounting, and shipping.',
          [comparisonTools[1]]: 'A small curated set covering payments, shipping, analytics, and social, with limited third-party depth.',
          [comparisonTools[2]]: 'The largest extension surface of the three, with a plugin marketplace and open API for everything else.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Adding a real store and multichannel selling to a website you already run.',
          [comparisonTools[1]]: 'Artists and makers who want a cheap, simple, credible-looking store this weekend.',
          [comparisonTools[2]]: 'Mid-market and B2B merchants who need control, custom rules, and room to scale.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'The store widget drops into an existing website or blog with no rebuild or migration',
        'One catalog syncs inventory and orders across Facebook, Instagram, Google Shopping, and marketplaces',
        'Mobile point of sale keeps online and in-person stock in a single pool',
        'Free plan covers up to 5 products, which is enough to test the model before paying',
        'Business at $35/month billed annually adds unlimited products and abandoned cart saving',
        'Owned by Lightspeed, so it is not a hobby project that may quietly disappear',
      ],
      cons: [
        'Staff accounts and Google Shopping are gated behind the Unlimited tier at $83/month',
        'Monthly billing costs more than annual billing on every paid tier',
        'Hosted and closed — there is no source-code access for deep storefront customization',
        'Storefront styling is constrained by the widget model compared with a full theme system',
        'No real B2B layer: negotiated price lists, quotes, and company accounts are absent',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Cheapest paid entry in the category — Platinum at $9.99/month for 50 products',
        'Free Gold plan covers 5 products, enough for a first print, sticker, or zine run',
        'Themes are designed specifically for artists and makers, so shops look credible immediately',
        'Discount codes and straightforward order management with no commerce jargon',
        'Paid tiers unlock custom domain support and theme code editing for HTML and CSS',
      ],
      cons: [
        'Hard product ceilings of 50, 250, or 500 force paid upgrades as the catalog grows',
        'No native multichannel publishing to Facebook, Instagram, or Google Shopping',
        'No point of sale, so market stalls and craft fairs need a separate tool',
        'Theme code editing is the deepest customization available — there is no plugin ecosystem',
        'Automations, reporting, and B2B features are far thinner than on larger platforms',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Community Edition is free and open source with no product or revenue ceiling',
        'Symfony and API-first architecture supports headless storefronts and fully custom front ends',
        'The visual rule builder handles pricing, promotions, and customer rules without conditional code',
        'Shopping Experiences gives merchandisers drag-and-drop control of landing and category pages',
        'B2B components on higher cloud tiers cover company accounts, negotiated pricing, and quick order',
      ],
      cons: [
        'Managed cloud plans start in the mid hundreds of euros per month per environment',
        'The self-hosted edition shifts hosting, security patching, and version upgrades onto your team',
        'Real customization assumes PHP and Symfony developer skills rather than a weekend setup',
        'Wildly overkill for a maker selling a handful of prints — total cost dwarfs Big Cartel',
        'No turnkey social or marketplace publishing out of the box, unlike Ecwid',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of side-by-side testing, our conclusion is that there is no universal winner among Ecwid, Big Cartel and Shopware — but there is a clearly correct choice for each kind of merchant. Ecwid delivered the fastest path from an existing website to a working multichannel store, and its inventory sync across social and point of sale saved our test team real hours every week. Big Cartel delivered the lowest total cost and the least friction of the three, with a store live and taking orders the same afternoon. Shopware delivered by far the most ceiling: every pricing rule, content block, and B2B workflow our test scenario required was expressible without a workaround.',
      'Where Ecwid deserves praise is the embeddable model: adding commerce to a site you already own is genuinely a paste-and-publish exercise, and one catalog feeding a website, Facebook, Instagram, Google Shopping, marketplaces, and a mobile point of sale is a real operational advantage for a small brand. Where it draws criticism is the tiering — Google Shopping and staff accounts sit behind Unlimited at $83 per month, and merchants who outgrow the widget model quickly hit the ceiling of a closed hosted product with no source-code access. Teams that need deep storefront control usually evaluate Shopware or a comparable open platform instead.',
      'Where Big Cartel deserves praise is focus: it is built for independent artists and makers, and everything about it — the themes, the product limits, the discount codes, the simple order screen — assumes a small catalog and a non-technical owner. Titanium at $29.99 per month for 500 products remains one of the cheapest ways to run a real store anywhere. Where it draws criticism is scale: the 50, 250, and 500 product ceilings, the absence of native multichannel publishing, and the lack of any point of sale mean growing brands either accept manual workarounds or migrate. Ecwid is the usual destination for sellers who want social channels and a card reader without leaving their existing site.',
      'Where Shopware deserves praise is depth and ownership: the Community Edition is free and open source, the Symfony codebase and API-first storefront support headless commerce, and the visual rule builder plus Shopping Experiences CMS let merchandisers model promotions without developer tickets. Where it draws criticism is total cost of effort — managed cloud plans start in the mid hundreds of euros per month per environment, self-hosting shifts patching and upgrades onto your team, and meaningful customization assumes PHP skills. For a maker with 30 products, Shopware is the wrong tool by a wide margin, and Shopware knows it: the platform is aimed at mid-market and B2B merchants with real catalog complexity.',
      'The biggest trend in 2026 is the two-tool storefront. Merchants increasingly run one platform as the system of record for catalog, pricing, and orders and a second, lighter surface for discovery and in-person selling — Shopware or another primary store handling the main catalog while Ecwid publishes selected products to Instagram, Google Shopping, and a market stall. Big Cartel sellers who grow past their product ceiling often follow the same pattern in reverse, keeping the artist storefront and adding a multichannel layer beside it. Because all three platforms expose their catalogs through APIs or channel connectors, this pairing is practical rather than theoretical.',
      'Looking ahead, the dividing line stays the same: hosted simplicity versus open control. Ecwid and Big Cartel will keep optimizing for merchants who never want to touch code, while Shopware keeps optimizing for merchants who want to own the stack. If you need to add a store and multichannel selling to a website you already run, start with Ecwid. If you need the cheapest credible storefront for a small catalog of art or handmade goods, start with Big Cartel. If you need custom pricing rules, B2B accounts, headless delivery, or enterprise scale, start with Shopware. Our rule of thumb is simple: match the platform to catalog size and channel complexity, and accept a two-tool stack when your selling genuinely spans a website, social channels, and a physical stall.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Ecwid if you already run a website, blog, or social profile and want to add a real store that synchronizes inventory and orders across Facebook, Instagram, Google Shopping, marketplaces, and an in-person point of sale — ideal for small businesses, bloggers, and creators who want multichannel selling without a rebuild, with a free plan for up to 5 products and Business at $35 per month billed annually for unlimited products. Choose Big Cartel if you sell a small catalog of art, prints, or handmade goods and want the cheapest credible storefront — ideal for independent artists and makers, with Platinum at $9.99 per month for 50 products and Titanium at $29.99 per month for 500. Choose Shopware if you need custom pricing rules, B2B accounts, headless delivery, or source-code control — ideal for mid-market and enterprise merchants with developer capacity, since the free Community Edition trades against hosting and engineering effort while managed cloud plans start in the mid hundreds of euros per month. If your selling genuinely spans a primary catalog and social or in-person channels, the mature answer is often two tools in parallel: Shopware for commerce depth plus Ecwid for channel reach.',
  },
}
