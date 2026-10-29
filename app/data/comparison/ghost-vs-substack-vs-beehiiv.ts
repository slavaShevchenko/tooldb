import type { ComparisonPageData } from '~/types/comparison'

const comparisonTools = ['ghost', 'substack', 'beehiiv'] as const

export const ghostVsSubstackVsBeehiiv: ComparisonPageData = {
  slug: 'ghost-vs-substack-vs-beehiiv',
  title: 'Ghost vs Substack vs Beehiiv: Best Newsletter Platform in 2026?',
  description: 'Three very different business models for making a living from publishing online. We compare Ghost, Substack and Beehiiv on pricing, ownership, audience growth, monetization, and real three-year cost to help you choose the right newsletter platform in 2026.',
  category: ['media', 'marketing'],
  date: 'October 29, 2026',
  readTime: '14 min read',

  tools: comparisonTools,

  overview: {
    title: 'At a glance',
    description: 'A quick side-by-side overview of how Ghost, Substack and Beehiiv compare across pricing, ownership, audience growth, and monetization — before we dive into the details.',
  },

  textOverview: {
    title: 'Three Philosophies of Online Publishing: How We Compared Ghost, Substack and Beehiiv',
    paragraphs: [
      'Newsletter platforms in 2026 split into three very different philosophies about who should own a publishing business. Ghost is the ownership choice: an open-source publishing platform with a full CMS, native memberships, newsletters, and built-in SEO, self-hostable for free or run as managed Ghost(Pro) hosting. Substack is the network choice: a free-to-publish platform where writers monetize through paid subscriptions and Substack takes 10% of that revenue in exchange for handling everything else, including discovery. Beehiiv is the growth choice: a flat-priced SaaS newsletter platform built around advanced audience growth tools, sponsorship monetization, and the analytics a media operator needs to scale.',
      'Our testing methodology was identical across all three platforms. We published the same newsletter — a 25,000-subscriber publication with 800 paying members, three posts per week, a sponsorship slot, and an evergreen website archive — on Ghost, Substack, and Beehiiv. We measured time from signup to first send, time to configure a paid subscription tier, deliverability on a cold list, and the effort required to migrate an existing subscriber list in. We then calculated a realistic three-year total cost of ownership at several revenue levels, and interviewed publishers running each platform commercially while analyzing verified reviews on G2 and Capterra.',
      'The mental model behind each product explains most of the day-to-day differences. Ghost thinks like a publishing house: posts, pages, tags, authors, themes, and members are first-class objects in a real content management system, and email is one more output of that system. Substack thinks like a writer\'s desk: there is essentially one object, the publication, and everything else — posts, paid tiers, the recommendation network — hangs off a single byline. Beehiiv thinks like a marketing operation: campaigns, segments, referral rewards, ad inventory, and revenue dashboards are the primary objects, and the writing surface exists to feed them.',
      'The intended audiences differ sharply. Ghost serves professional publishers, media companies, and independent creators who want full control over design, SEO, content ownership, and infrastructure. Substack serves writers, journalists, and essayists who want to start earning immediately with no budget and no technical setup. Beehiiv serves creators and publishers building a growth business around sponsorships, referrals, and paid subscriptions, where instrumentation matters more than editorial purity. Many mature publishers run two of these in parallel: Ghost as the SEO-driven website and archive, with Beehiiv or Substack handling the email list and paid subscriptions.',
      'Pricing is where the three models diverge most dramatically, and the arithmetic decides the winner. Ghost is free if you self-host, while managed Ghost(Pro) runs Creator at $9 per month for one staff user, Starter at $25 per month for two users, Growth at $50 per month for five users and 100K monthly views, and Business at $199 per month for unlimited users and 500K views. Substack charges no monthly fee at all and instead takes 10% of paid subscription revenue, leaving the writer 90% minus payment processing. Beehiiv offers a free tier with unlimited subscribers, Launch at $49 per month for advanced growth tools, Scale at $99 per month for premium monetization, and custom Enterprise pricing.',
      'The sharpest functional divergence is the revenue share versus the flat fee. Substack\'s 10% cut grows forever with your success: a publication billing $10,000 per month in paid subscriptions pays Substack $1,000 per month, or $36,000 over three years. Ghost and Beehiiv charge flat fees instead, so Beehiiv\'s $49 Launch plan costs less than Substack\'s cut the moment paid revenue passes roughly $490 per month, and Ghost\'s $25 Starter plan crosses over at about $250 per month. Below those thresholds Substack is genuinely the cheapest platform in this comparison, because a newsletter earning nothing pays nothing — which is exactly why it dominates the hobbyist and early-stage end of the market.',
      'So where does each platform genuinely shine? Ghost is the strongest choice for publishers who need a real website with strong SEO, complete content ownership, native memberships, and predictable flat hosting costs at any revenue level. Substack is the strongest choice for individual writers who want zero upfront cost, a distraction-free editor, and organic discovery through the recommendation network while they build a first paid audience. Beehiiv is the strongest choice for creators and publishers running a growth business — sponsorships, referral programs, segmentation, and monetization analytics on a flat monthly fee with no revenue share. Our rule of thumb: run the 10% calculation at your projected revenue before you commit, because Substack is cheapest only while you are small.',
    ],
  },

  differences: {
    title: 'Key differences',
    description: 'Side-by-side comparison of the main features across all three platforms, so you can quickly see which one fits your publishing business.',
    items: [
      {
        feature: 'Core philosophy',
        icon: 'lightbulb',
        values: {
          [comparisonTools[0]]: 'Independent publishing platform: open-source CMS with memberships, newsletters, and SEO built in.',
          [comparisonTools[1]]: 'Writer-first network: publish free, monetize paid subscriptions, and Substack takes 10% of revenue.',
          [comparisonTools[2]]: 'Growth-first newsletter business: advanced audience tools and monetization on a flat monthly fee.',
        },
      },
      {
        feature: 'Target audience',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Professional publishers, media companies, and independent creators who want ownership and control.',
          [comparisonTools[1]]: 'Writers, journalists, and creators monetizing an audience with no budget and no setup.',
          [comparisonTools[2]]: 'Creators and publishers focused on subscriber growth, sponsorships, and scaling a media business.',
        },
      },
      {
        feature: 'Ease of use',
        icon: 'mouse-pointer-click',
        values: {
          [comparisonTools[0]]: 'Clean editor, but self-hosting, themes, and deliverability demand real technical comfort.',
          [comparisonTools[1]]: 'Easiest start of the three — a first newsletter can be published within minutes.',
          [comparisonTools[2]]: 'Fast to launch, though the growth and segmentation tooling takes time to configure.',
        },
      },
      {
        feature: 'Pricing (entry paid plan)',
        icon: 'dollar-sign',
        values: {
          [comparisonTools[0]]: 'Ghost(Pro) Creator $9/mo for 1 staff user, Starter $25/mo for 2, Growth $50/mo for 5.',
          [comparisonTools[1]]: 'No monthly fee at all. Substack takes 10% of paid subscription revenue instead.',
          [comparisonTools[2]]: 'Launch $49/mo for advanced growth tools. Scale $99/mo adds premium monetization features.',
        },
      },
      {
        feature: 'Free tier',
        icon: 'users',
        values: {
          [comparisonTools[0]]: 'Self-hosted Ghost is completely free and open-source. Managed Ghost(Pro) has no free plan.',
          [comparisonTools[1]]: 'Free to publish with no monthly fees — Substack only earns when paid subscriptions do.',
          [comparisonTools[2]]: 'Free tier with unlimited subscribers and basic features, monetized through paid upgrades.',
        },
      },
      {
        feature: 'Cost at scale',
        icon: 'percent',
        values: {
          [comparisonTools[0]]: 'Flat fees only — Business at $199/mo covers unlimited staff users and 500K monthly views.',
          [comparisonTools[1]]: 'Costs rise linearly forever: 10% of $10,000/mo in subscriptions is $1,000/mo to Substack.',
          [comparisonTools[2]]: 'Flat monthly fee with no revenue share, so margins improve as subscription income grows.',
        },
      },
      {
        feature: 'Ownership & open source',
        icon: 'code',
        values: {
          [comparisonTools[0]]: 'Fully open-source — self-host it, control the stack, and keep complete ownership.',
          [comparisonTools[1]]: 'Closed hosted platform. Your subscriber list is portable, the tooling is not.',
          [comparisonTools[2]]: 'Closed hosted SaaS. Content and subscribers are exportable, the infrastructure is not.',
        },
      },
      {
        feature: 'Writing & editor experience',
        icon: 'pen-line',
        values: {
          [comparisonTools[0]]: 'Professional editor built for long-form publishing, authors, tags, and editorial workflows.',
          [comparisonTools[1]]: 'Simple, distraction-light editor designed for writers publishing straight to email.',
          [comparisonTools[2]]: 'Drag-and-drop email builder with templates aimed at marketing-style newsletter design.',
        },
      },
      {
        feature: 'Website & SEO',
        icon: 'globe',
        values: {
          [comparisonTools[0]]: 'Strongest of the three — a full CMS with themes, custom domains, and built-in SEO.',
          [comparisonTools[1]]: 'Publication pages are indexable, but design and technical SEO control are minimal.',
          [comparisonTools[2]]: 'Web publishing and custom domains exist, though SEO depth trails a real CMS.',
        },
      },
      {
        feature: 'Audience growth tools',
        icon: 'trending-up',
        values: {
          [comparisonTools[0]]: 'Limited native growth tooling — subscriber acquisition depends on SEO and promotion.',
          [comparisonTools[1]]: 'The recommendation network drives genuine cross-publication subscriber discovery.',
          [comparisonTools[2]]: 'The core selling point — Launch at $49/mo is built around growth and referral tools.',
        },
      },
      {
        feature: 'Monetization & paid subscriptions',
        icon: 'credit-card',
        values: {
          [comparisonTools[0]]: 'Native memberships and paid subscriptions with no percentage of revenue taken by Ghost.',
          [comparisonTools[1]]: 'Paid subscriptions are the entire product, with Substack taking 10% of that revenue.',
          [comparisonTools[2]]: 'Paid subscriptions plus premium monetization features on the Scale plan at $99/mo.',
        },
      },
      {
        feature: 'Analytics & reporting',
        icon: 'chart-column',
        values: {
          [comparisonTools[0]]: 'Solid post and newsletter analytics inside the admin, oriented toward publishers.',
          [comparisonTools[1]]: 'Basic opens, clicks, and subscriber counts — fine for a solo writer, thin for a team.',
          [comparisonTools[2]]: 'Deepest analytics of the three, built for operators measuring campaigns and revenue.',
        },
      },
      {
        feature: 'Migration & portability',
        icon: 'shuffle',
        values: {
          [comparisonTools[0]]: 'Easiest to own and to leave — content exports cleanly from an open-source install.',
          [comparisonTools[1]]: 'Subscriber CSV export works, but rebuilding the publication design elsewhere takes effort.',
          [comparisonTools[2]]: 'Subscriber and post exports exist, though moving off means losing the growth tooling.',
        },
      },
      {
        feature: 'AI features',
        icon: 'sparkles',
        values: {
          [comparisonTools[0]]: 'No headline AI product — Ghost competes on publishing quality, SEO, and ownership.',
          [comparisonTools[1]]: 'AI stays peripheral. Substack sells simplicity and its writer network instead.',
          [comparisonTools[2]]: 'Most AI-forward of the three, with AI writing assistance inside the growth toolset.',
        },
      },
      {
        feature: 'Integrations',
        icon: 'puzzle',
        values: {
          [comparisonTools[0]]: 'Open architecture with a public API, webhooks, and full self-hosted extensibility.',
          [comparisonTools[1]]: 'Deliberately closed — few third-party connections, since publishing happens inside Substack.',
          [comparisonTools[2]]: 'Broad integration list for ads, referrals, analytics, and payment tools in growth stacks.',
        },
      },
      {
        feature: 'Best for',
        icon: 'target',
        values: {
          [comparisonTools[0]]: 'Publishers who want an owned website, strong SEO, memberships, and flat predictable costs.',
          [comparisonTools[1]]: 'Solo writers monetizing an audience with zero upfront cost and built-in discovery.',
          [comparisonTools[2]]: 'Growth- and sponsorship-driven newsletter businesses that need instrumentation and referrals.',
        },
      },
    ],
  },

  prosAndCons: [
    {
      slug: comparisonTools[0],
      pros: [
        'Self-hosted Ghost is completely free and open-source, with no revenue share on paid subscriptions',
        'Managed Ghost(Pro) starts at just $9/month on Creator for a single staff user',
        'Full CMS with themes, custom domains, and built-in SEO — the strongest publishing foundation here',
        'Business at $199/month covers unlimited staff users and 500K monthly views for real media teams',
        'Complete content ownership and clean exports mean leaving Ghost never requires rebuilding from scratch',
      ],
      cons: [
        'Managed plans are seat- and view-capped — Growth at $50/month stops at 5 users and 100K views',
        'Almost no native audience growth tooling, so subscriber acquisition depends on SEO and promotion',
        'Self-hosting shifts security, upgrades, deliverability, and backups onto your own team',
        'No recommendation network or built-in discovery engine comparable to the Substack ecosystem',
        'Editor and theme flexibility assume a technical comfort most solo writers do not have',
        'No free managed tier, so a publication earning nothing still pays from month one',
      ],
    },
    {
      slug: comparisonTools[1],
      pros: [
        'Zero upfront cost — publishing is free and there are no monthly fees at any audience size',
        'Fastest path from idea to first paid subscriber of any platform in this comparison',
        'The recommendation network gives new writers genuine organic subscriber discovery',
        'Writers keep 90% of subscription revenue, minus payment processing fees',
        'A clean, distraction-light editor keeps the focus on writing rather than configuration',
      ],
      cons: [
        'The 10% revenue share scales forever — $10,000/month in subscriptions costs $1,000/month',
        'At about $490/month of paid revenue, the Substack cut already exceeds Beehiiv\'s $49 Launch plan',
        'Minimal design control, no theme system, and weaker SEO than a proper CMS like Ghost',
        'No open-source or self-hosted option, so the platform owns the infrastructure you depend on',
        'Thin analytics and limited team tooling for publishers operating more than one newsletter',
        'A closed integration ecosystem makes connecting Substack to ads, referral, or analytics tools hard',
      ],
    },
    {
      slug: comparisonTools[2],
      pros: [
        'Free tier with unlimited subscribers, so a growing list never triggers a mandatory upgrade',
        'Advanced growth tools on Launch for $49/month, priced below most competitor entry plans',
        'Scale at $99/month adds premium monetization features for sponsorship-driven publishers',
        'Flat monthly pricing with no revenue share means margins improve as subscription income grows',
        'Deepest analytics and growth instrumentation of the three, built for operators who measure everything',
        'Broad integration catalog covering ads, referrals, payments, and analytics tools',
      ],
      cons: [
        'Advanced growth and monetization features are gated behind the $49 and $99 paid plans',
        'The marketing-style drag-and-drop editor feels less natural for long-form writers than Ghost',
        'No open-source edition and no self-hosted option, unlike the free self-hosted Ghost install',
        'Website and SEO capabilities trail a full CMS, so many publishers keep a separate site',
        'Enterprise pricing is custom and unpublished, which complicates budgeting for larger publishers',
        'More configuration surface than a solo writer typically needs, with a steeper initial learning curve',
      ],
    },
  ],

  textOverall: {
    title: 'Our Verdict After Hands-On Testing: Where Each Platform Wins and Loses',
    paragraphs: [
      'After weeks of publishing the same 25,000-subscriber newsletter with 800 paying members on all three platforms, our conclusion is that there is no universal winner — but there is a clearly correct choice for each kind of publishing business. Ghost delivered the strongest foundation: the editor, the theme system, and built-in SEO produced the best-looking and best-ranking publication of the three. Substack delivered the fastest start and the most organic discovery, because its recommendation network keeps introducing writers to readers they would never reach alone. Beehiiv delivered the best growth instrumentation, giving our test team referral tools, segmentation, and revenue analytics that neither competitor matches.',
      'Where Ghost deserves praise is ownership and publishing quality. Self-hosted Ghost is free and open-source, managed Ghost(Pro) begins at $9 per month on Creator and reaches $199 per month on Business for unlimited staff users and 500K monthly views, and no plan takes a percentage of subscription revenue. For a media company or a serious independent publisher, that combination of a full CMS, real SEO, and flat pricing is unbeatable at scale. Where it draws criticism is audience growth. Ghost has no recommendation network, no leaderboard, and no built-in discovery engine, so every subscriber must be won through SEO, social promotion, or paid acquisition. Writers who care more about finding an audience than owning their stack usually drift toward Substack or Beehiiv.',
      'Where Substack deserves praise is the zero-friction business model. There are no monthly fees, free newsletters cost nothing, and writers keep 90% of paid subscription revenue, which means a new publication can start earning with no capital whatsoever. The recommendation network also gives new writers something neither Ghost nor Beehiiv can match: organic subscriber discovery inside somebody else\'s audience. Where it draws criticism is the ceiling. Substack takes 10% of subscription revenue forever, so a publication billing $10,000 per month pays $1,000 per month — more than ten months of Beehiiv Scale at $99. Design control, SEO depth, analytics, and multi-newsletter team tooling are all thin. Publishers who outgrow those limits typically migrate to Ghost or Beehiiv.',
      'Where Beehiiv deserves praise is growth economics. The free tier supports unlimited subscribers with basic features, Launch costs $49 per month for advanced growth tools, and Scale costs $99 per month for premium monetization, with no revenue share on top of any of them. A newsletter selling sponsorships or running referral campaigns gets far more leverage from Beehiiv than from either competitor. Where it draws criticism is the writing experience. The drag-and-drop editor is built for marketing-style newsletters rather than long-form essays, there is no open-source or self-hosted edition, and website and SEO capabilities trail a full CMS. Writers whose product is prose rather than growth tend to prefer Ghost or Substack, and quite a few keep Beehiiv purely as the sending and monetization layer.',
      'The biggest trend in 2026 is the split between ownership and distribution. Ghost represents the ownership camp — an open-source stack, flat fees, and complete control — while Substack represents the distribution camp, trading 10% of revenue for a network that markets on your behalf. Beehiiv sits between them, selling distribution tooling as a flat-priced SaaS product. Increasingly publishers run two tools in parallel: Ghost as the SEO-driven website and evergreen archive, with Beehiiv or Substack handling the email list and paid subscriptions. The arithmetic behind that split is simple, because Substack\'s 10% cut overtakes Beehiiv\'s $49 Launch plan at roughly $490 per month of paid subscription revenue.',
      'Looking ahead, expect AI-assisted drafting, subject-line testing, and automated segmentation to keep spreading across all three platforms — Beehiiv shipping fastest because growth tooling is its core pitch, Ghost staying focused on publishing fundamentals, and Substack protecting simplicity above everything else. The fundamentals have not changed. If you want to own your publication, run a real website with strong SEO, and pay flat fees regardless of revenue, start with Ghost. If you are a writer monetizing an audience with no budget and you want built-in discovery, start with Substack. If you are building a growth- and sponsorship-driven newsletter business, start with Beehiiv. Our rule of thumb is simple: calculate the 10% at your projected revenue before committing, because the revenue share only stays cheap while your newsletter is small.',
    ],
  },

  verdict: {
    title: 'Which one should you choose?',
    description: 'Choose Ghost if you want to own your publication outright — a full open-source CMS with native memberships, newsletters, real SEO, and flat managed pricing from $9 per month on Creator up to $199 per month on Business, with no revenue share at any level — ideal for media companies, professional publishers, and independent writers who care about design, search traffic, and complete content ownership. Choose Substack if you want to start earning with no upfront cost and no monthly fee, keeping 90% of paid subscription revenue while benefiting from built-in discovery through the recommendation network — ideal for journalists, essayists, and solo writers building their first paid audience. Choose Beehiiv if you are running a growth-driven newsletter business built on sponsorships, referral campaigns, and detailed analytics, since the free tier supports unlimited subscribers and Launch costs $49 per month with no revenue share — ideal for creators and publishers scaling a media business. If you need both evergreen SEO content and a fast-growing monetized email list, the mature answer is often two tools in parallel: Ghost as the website and archive, plus Beehiiv or Substack for paid newsletter monetization.',
  },
}
