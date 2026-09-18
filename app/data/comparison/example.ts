import type { ComparisonPage } from '~/types/comparison'

const comparisonTools = ['webflow', 'wordpress'] as const

export const comparison: ComparisonPage[] = [
  {
    id: '1',
    slug: 'webflow-vs-wordpress',
    title: 'Webflow vs WordPress: Which is the best website builder in 2026?',
    description: 'Webflow and WordPress are powerful platforms for building websites, but they take different approaches. In this comparison, we look at the key differences, features, pricing, pros and cons, and help you decide which one is right for you.',
    category: 'Website Builders',
    date: 'September 16, 2026',
    readTime: '8 min read',

    tools: comparisonTools,

    overview: {
      title: 'At a glance',
      description: 'Here’s a quick overview of how Webflow and WordPress compare in the most important areas.'
    },

    differences: {
      title: 'Key differences',
      description: 'Here’s a quick text about differences',
      items: [  
        {
          feature: 'Ease of use',
          values: {
            [comparisonTools[0]]: 'Visual drag-and-drop builder, no coding needed.',
            [comparisonTools[1]]: 'Requires some technical knowledge or a page builder.'
          }
        },
        {
          feature: 'Design flexibility',
          values: {
            [comparisonTools[0]]: 'Full creative control with a visual editor.',
            [comparisonTools[1]]: 'Highly flexible, but depends on themes and plugins.'
          }
        },
        {
          feature: 'Templates',
          values: {
            [comparisonTools[0]]: '100+ professional templates.',
            [comparisonTools[1]]: 'Thousands of free and premium themes.'
          }
        },
        {
          feature: 'CMS',
          values: {
            [comparisonTools[0]]: 'Built-in, easy to manage.',
            [comparisonTools[1]]: 'Powerful and flexible, with many plugins.'
          }
        },
        {
          feature: 'E-commerce',
          values: {
            [comparisonTools[0]]: 'Yes (Webflow Commerce).',
            [comparisonTools[1]]: 'Yes (WooCommerce).'
          }
        },
        {
          feature: 'SEO',
          values: {
            [comparisonTools[0]]: 'Strong, with clean code and fast hosting.',
            [comparisonTools[1]]: 'Excellent, with SEO plugins such as Yoast and Rank Math.'
          }
        },
        {
          feature: 'Hosting',
          values: {
            [comparisonTools[0]]: 'Included.',
            [comparisonTools[1]]: 'Requires separate hosting.'
          }
        },
        {
          feature: 'Cost',
          values: {
            [comparisonTools[0]]: 'From $14/mo (paid plans).',
            [comparisonTools[1]]: 'Free software, but hosting and domain costs apply.'
          }
        },
        {
          feature: 'Learning curve',
          values: {
            [comparisonTools[0]]: 'Relatively low for visual users.',
            [comparisonTools[1]]: 'Higher, especially for non-technical users.'
          }
        },
        {
          feature: 'Best for',
          values: {
            [comparisonTools[0]]: 'Designers, small teams, marketing websites.',
            [comparisonTools[1]]: 'Blogs, businesses, and complex projects.'
          }
        }
      ],
    },

    prosAndCons: [
      {
        slug: comparisonTools[0],
        pros: [
          'Beautiful, modern templates',
          'No coding required',
          'Fast and reliable hosting',
          'Great for designers and marketing teams'
        ],
        cons: [
          'Higher price point',
          'Less flexible than WordPress for custom functionality',
          'Smaller plugin ecosystem'
        ]
      },
      {
        slug: comparisonTools[1],
        pros: [
          'Open source and free',
          'Huge plugin ecosystem',
          'Full control over your site',
          'Great for blogs and complex projects'
        ],
        cons: [
          'Requires more technical knowledge',
          'Can be time-consuming to set up and manage',
          'Security and updates require attention'
        ]
      }
    ],

    verdict: {
      title: 'Which one should you choose?',
      description: 'Choose Webflow if you want a simple, visual way to build a beautiful website without coding. Choose WordPress if you need maximum flexibility, a large ecosystem of plugins, and full control over your site.'
    },
  }
]