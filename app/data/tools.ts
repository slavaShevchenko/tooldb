import type { Tool } from '~/types/tool'

export const tools: Tool[] = [
  {
    id: '1',
    slug: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'AI assistant',
    description: 'Conversational AI from OpenAI.',
    overview: 'ChatGPT is an AI assistant that helps with writing, coding, research, brainstorming and many everyday tasks.',
    websiteLabel: 'chatgpt.com',
    pricingDescription: 'Free plan available. Paid plans unlock advanced models and higher usage limits.',
    verified: true,
    logo: '/images/tool-logo/chatgpt.png',
    website: 'https://chatgpt.com',
    affiliateUrl: null,
    company: 'OpenAI',
    categories: ['ai', 'writing', 'productivity'],
    tags: ['chatbot', 'llm', 'openai', 'coding', 'text-generation'],
    pricing: 'Freemium',
    featured: true,
    rating: 4.9,
    reviewCount: 1420,
    lastUpdated: '2026-07-22',
    highlights: [
      {
        id: 'writing',
        text: 'Content creation'
      },
      {
        id: 'coding',
        text: 'Programming assistance'
      },
      {
        id: 'research',
        text: 'Research & learning'
      },
      {
        id: 'images',
        text: 'Image generation'
      }
    ],
    platforms: [
      'web',
      'ios',
      'android',
      'mac',
      'windows'
    ],
    features: [
      {
        id: '1',
        title: 'Writing',
        description: 'Generate articles, emails and documentation.',
        icon: 'i-lucide-pencil'
      },
      {
        id: '2',
        title: 'Programming',
        description: 'Write, explain and debug code.',
        icon: 'i-lucide-code'
      },
      {
        id: '3',
        title: 'Research',
        description: 'Summarize information and answer questions.',
        icon: 'i-lucide-search'
      }
    ],
    stats: [
      {
        id: 'users',
        label: 'Users',
        value: '100M+'
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '2.5K'
      },
      {
        id: 'company',
        label: 'Company',
        value: 'OpenAI'
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium'
      }
    ]
  },
  {
    id: '2',
    slug: 'figma',

    name: 'Figma',

    tagline: 'Collaborative design',

    description:
      'Interface design and prototyping.',

    overview:
      'Figma is a collaborative design platform for creating user interfaces, interactive prototypes and design systems. Teams can design, review and hand off projects to developers in real time directly from the browser.',

    logo: '/images/tools/figma.svg',

    website: 'https://figma.com',

    websiteLabel: 'figma.com',

    affiliateUrl: null,

    company: 'Figma',

    categories: [
      'design',
      'collaboration',
    ],

    tags: [
      'ui',
      'ux',
      'prototype',
      'design-system',
      'wireframe',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Paid plans unlock unlimited files, advanced collaboration features and Dev Mode.',

    featured: true,

    rating: 4.8,

    reviewCount: 980,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'design',
        text: 'UI & UX design',
      },
      {
        id: 'prototype',
        text: 'Interactive prototyping',
      },
      {
        id: 'collaboration',
        text: 'Real-time collaboration',
      },
      {
        id: 'dev-mode',
        text: 'Developer handoff',
      },
    ],

    platforms: [
      'web',
      'mac',
      'windows',
    ],

    features: [
      {
        id: 'design',
        title: 'Interface Design',
        description:
          'Create modern interfaces using reusable components and Auto Layout.',
        icon: 'i-lucide-pencil-ruler',
      },
      {
        id: 'prototype',
        title: 'Interactive Prototypes',
        description:
          'Build clickable prototypes with animations and user flows.',
        icon: 'i-lucide-mouse-pointer-click',
      },
      {
        id: 'collaboration',
        title: 'Team Collaboration',
        description:
          'Work together in real time with comments, multiplayer editing and shared libraries.',
        icon: 'i-lucide-users',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Figma',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.8',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '980',
      },
    ],
  },
  {
    id: '3',
    slug: 'github',

    name: 'GitHub',

    tagline: 'Code hosting',

    description:
      'Git hosting and collaboration.',

    overview:
      'GitHub is the world’s leading platform for hosting Git repositories, collaborating on code and managing software development projects. It provides version control, pull requests, code reviews, automation and project management tools for individuals and teams.',

    logo: '/images/tools/github.svg',

    website: 'https://github.com',

    websiteLabel: 'github.com',

    affiliateUrl: null,

    company: 'GitHub',

    categories: [
      'developer',
      'collaboration',
    ],

    tags: [
      'git',
      'repository',
      'opensource',
      'ci-cd',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Paid plans add advanced collaboration, security and enterprise features.',

    featured: true,

    rating: 4.9,

    reviewCount: 2140,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'repositories',
        text: 'Unlimited Git repositories',
      },
      {
        id: 'pull-requests',
        text: 'Pull requests & code reviews',
      },
      {
        id: 'actions',
        text: 'GitHub Actions CI/CD',
      },
      {
        id: 'projects',
        text: 'Project management',
      },
    ],

    platforms: [
      'web',
      'mac',
      'windows',
      'linux',
      'ios',
      'android',
    ],

    features: [
      {
        id: 'repositories',
        title: 'Repository Hosting',
        description:
          'Host public and private Git repositories with full version control.',
        icon: 'i-lucide-folder-git-2',
      },
      {
        id: 'collaboration',
        title: 'Code Collaboration',
        description:
          'Review code with pull requests, comments and branch protection.',
        icon: 'i-lucide-git-pull-request',
      },
      {
        id: 'automation',
        title: 'GitHub Actions',
        description:
          'Build, test and deploy applications with integrated CI/CD workflows.',
        icon: 'i-lucide-workflow',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'GitHub',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.9',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '2.1K',
      },
    ],
  },
  {
    id: '4',
    slug: 'notion',

    name: 'Notion',

    tagline: 'Connected workspace',

    description:
      'Docs, projects and knowledge management in one workspace.',

    overview:
      'Notion is an all-in-one workspace that combines notes, documentation, project management, databases and collaboration tools. It helps individuals and teams organize information, manage tasks and build internal knowledge bases from a single platform.',

    logo: '/images/tools/notion.svg',

    website: 'https://notion.so',

    websiteLabel: 'notion.so',

    affiliateUrl: null,

    company: 'Notion',

    categories: [
      'productivity',
      'collaboration',
    ],

    tags: [
      'notes',
      'wiki',
      'tasks',
      'docs',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Paid plans unlock advanced collaboration, AI features, permissions and larger team workspaces.',

    featured: true,

    rating: 4.8,

    reviewCount: 1860,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'notes',
        text: 'Notes & documentation',
      },
      {
        id: 'projects',
        text: 'Project management',
      },
      {
        id: 'database',
        text: 'Powerful databases',
      },
      {
        id: 'collaboration',
        text: 'Real-time collaboration',
      },
    ],

    platforms: [
      'web',
      'mac',
      'windows',
      'ios',
      'android',
    ],

    features: [
      {
        id: 'docs',
        title: 'Documentation',
        description:
          'Create beautiful documents, wikis and knowledge bases for individuals and teams.',
        icon: 'i-lucide-file-text',
      },
      {
        id: 'tasks',
        title: 'Task Management',
        description:
          'Track projects, assign tasks and organize work with flexible views.',
        icon: 'i-lucide-check-square',
      },
      {
        id: 'databases',
        title: 'Custom Databases',
        description:
          'Build powerful databases with tables, boards, calendars and timelines.',
        icon: 'i-lucide-database',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Notion',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.8',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '1.9K',
      },
    ],
  },
  {
    id: '5',
    slug: 'linear',

    name: 'Linear',

    tagline: 'Issue tracking',

    description:
      'Project and issue tracking built for software teams.',

    overview:
      'Linear is a modern project management and issue tracking platform designed for software teams. It streamlines bug tracking, sprint planning, product roadmaps and development workflows with a fast, intuitive interface.',

    logo: '/images/tools/linear.svg',

    website: 'https://linear.app',

    websiteLabel: 'linear.app',

    affiliateUrl: null,

    company: 'Linear',

    categories: [
      'developer',
      'productivity',
    ],

    tags: [
      'issues',
      'agile',
      'roadmap',
      'sprints',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Paid plans include advanced workflow automation, unlimited teams, insights and enterprise features.',

    featured: true,

    rating: 4.8,

    reviewCount: 740,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'issues',
        text: 'Issue & bug tracking',
      },
      {
        id: 'roadmaps',
        text: 'Product roadmaps',
      },
      {
        id: 'sprints',
        text: 'Sprint planning',
      },
      {
        id: 'workflows',
        text: 'Custom workflows',
      },
    ],

    platforms: [
      'web',
      'mac',
      'windows',
      'ios',
      'android',
    ],

    features: [
      {
        id: 'tracking',
        title: 'Issue Tracking',
        description:
          'Track bugs, feature requests and engineering tasks with powerful workflows.',
        icon: 'i-lucide-bug',
      },
      {
        id: 'planning',
        title: 'Sprint Planning',
        description:
          'Plan cycles, organize backlogs and manage development progress with ease.',
        icon: 'i-lucide-calendar-range',
      },
      {
        id: 'roadmaps',
        title: 'Product Roadmaps',
        description:
          'Create visual roadmaps to align engineering work with product goals.',
        icon: 'i-lucide-map',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Linear',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.8',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '740',
      },
    ],
  },
  {
    id: '6',
    slug: 'webflow',

    name: 'Webflow',

    tagline: 'Visual website builder',

    description:
      'Design, build and publish responsive websites without code.',

    overview:
      'Webflow is a visual website builder and CMS that enables designers and marketers to create responsive websites without writing code. It combines visual design tools, content management, hosting and publishing into a single platform.',

    logo: '/images/tools/webflow.svg',

    website: 'https://webflow.com',

    websiteLabel: 'webflow.com',

    affiliateUrl: null,

    company: 'Webflow',

    categories: [
      'no-code',
      'design',
    ],

    tags: [
      'website',
      'cms',
      'landing-page',
      'builder',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available for learning and testing. Paid plans unlock custom domains, CMS features, e-commerce capabilities and advanced hosting.',

    featured: false,

    rating: 4.7,

    reviewCount: 910,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'visual-builder',
        text: 'Visual website builder',
      },
      {
        id: 'cms',
        text: 'Built-in CMS',
      },
      {
        id: 'responsive',
        text: 'Responsive design',
      },
      {
        id: 'hosting',
        text: 'Hosting & publishing',
      },
    ],

    platforms: [
      'web',
    ],

    features: [
      {
        id: 'designer',
        title: 'Visual Designer',
        description:
          'Build responsive websites visually with full control over layouts, animations and interactions.',
        icon: 'i-lucide-layout-template',
      },
      {
        id: 'cms',
        title: 'Content Management',
        description:
          'Manage dynamic content with a flexible CMS designed for blogs, portfolios and business websites.',
        icon: 'i-lucide-database',
      },
      {
        id: 'hosting',
        title: 'Hosting & Publishing',
        description:
          'Publish websites with built-in hosting, SSL and performance optimization.',
        icon: 'i-lucide-globe',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Webflow',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.7',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '910',
      },
    ],
  },
  {
    id: '7',
    slug: 'airtable',

    name: 'Airtable',

    tagline: 'Flexible databases',

    description:
      'Build collaborative apps and workflows on top of structured data.',

    overview:
      'Airtable is a cloud-based platform that combines the simplicity of spreadsheets with the power of relational databases. It enables teams to organize data, automate workflows, build internal tools and collaborate on projects without writing code.',

    logo: '/images/tools/airtable.svg',

    website: 'https://airtable.com',

    websiteLabel: 'airtable.com',

    affiliateUrl: null,

    company: 'Airtable',

    categories: [
      'no-code',
      'productivity',
    ],

    tags: [
      'database',
      'spreadsheet',
      'automation',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Paid plans unlock larger databases, advanced automations, integrations and enterprise collaboration features.',

    featured: false,

    rating: 4.6,

    reviewCount: 1250,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'databases',
        text: 'Relational databases',
      },
      {
        id: 'automation',
        text: 'Workflow automation',
      },
      {
        id: 'views',
        text: 'Multiple data views',
      },
      {
        id: 'collaboration',
        text: 'Team collaboration',
      },
    ],

    platforms: [
      'web',
      'mac',
      'windows',
      'ios',
      'android',
    ],

    features: [
      {
        id: 'database',
        title: 'Flexible Databases',
        description:
          'Organize structured data with linked records, custom fields and powerful filtering.',
        icon: 'i-lucide-database',
      },
      {
        id: 'views',
        title: 'Multiple Views',
        description:
          'Visualize the same data as grids, kanban boards, calendars, galleries or timelines.',
        icon: 'i-lucide-layout-grid',
      },
      {
        id: 'automation',
        title: 'Workflow Automation',
        description:
          'Automate repetitive tasks and connect Airtable with hundreds of external services.',
        icon: 'i-lucide-bot',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Airtable',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.6',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '1.3K',
      },
    ],
  },
  {
    id: '8',
    slug: 'canva',

    name: 'Canva',

    tagline: 'Visual design platform',

    description:
      'Create social posts, presentations and brand visuals.',

    overview:
      'Canva is an online graphic design platform that helps individuals and teams create professional visuals with drag-and-drop tools. It offers thousands of templates for social media, presentations, marketing materials, videos and branded content.',

    logo: '/images/tools/canva.svg',

    website: 'https://canva.com',

    websiteLabel: 'canva.com',

    affiliateUrl: null,

    company: 'Canva',

    categories: [
      'design',
      'marketing',
    ],

    tags: [
      'templates',
      'presentation',
      'social-media',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Canva Pro unlocks premium templates, Brand Kit, AI-powered tools and advanced collaboration features.',

    featured: true,

    rating: 4.7,

    reviewCount: 1680,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'templates',
        text: 'Thousands of templates',
      },
      {
        id: 'editor',
        text: 'Drag-and-drop editor',
      },
      {
        id: 'brand-kit',
        text: 'Brand Kit',
      },
      {
        id: 'teamwork',
        text: 'Real-time collaboration',
      },
    ],

    platforms: [
      'web',
      'mac',
      'windows',
      'ios',
      'android',
    ],

    features: [
      {
        id: 'templates',
        title: 'Ready-made Templates',
        description:
          'Create presentations, social media posts, posters and marketing materials using professionally designed templates.',
        icon: 'i-lucide-layout-template',
      },
      {
        id: 'editor',
        title: 'Visual Editor',
        description:
          'Design graphics with an intuitive drag-and-drop interface that requires no design experience.',
        icon: 'i-lucide-palette',
      },
      {
        id: 'branding',
        title: 'Brand Management',
        description:
          'Keep colors, logos and fonts consistent across all projects with Brand Kit.',
        icon: 'i-lucide-swatch-book',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Canva',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.7',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '1.7K',
      },
    ],
  },
  {
    id: '9',
    slug: 'grammarly',

    name: 'Grammarly',

    tagline: 'Writing assistant',

    description:
      'Improve spelling, tone and clarity across your writing.',

    overview:
      'Grammarly is an AI-powered writing assistant that helps improve grammar, spelling, clarity and tone across emails, documents and online communication. It provides real-time suggestions to help users write more accurately and confidently.',

    logo: '/images/tools/grammarly.svg',

    website: 'https://grammarly.com',

    websiteLabel: 'grammarly.com',

    affiliateUrl: null,

    company: 'Grammarly',

    categories: [
      'writing',
      'ai',
    ],

    tags: [
      'grammar',
      'proofreading',
      'editing',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Premium plans include advanced grammar suggestions, tone detection, plagiarism checks and AI writing assistance.',

    featured: false,

    rating: 4.6,

    reviewCount: 1320,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'grammar',
        text: 'Grammar & spelling correction',
      },
      {
        id: 'tone',
        text: 'Tone suggestions',
      },
      {
        id: 'clarity',
        text: 'Writing clarity improvements',
      },
      {
        id: 'ai',
        text: 'AI writing assistance',
      },
    ],

    platforms: [
      'web',
      'mac',
      'windows',
      'ios',
      'android',
    ],

    features: [
      {
        id: 'proofreading',
        title: 'Grammar Checking',
        description:
          'Detect grammar, spelling and punctuation mistakes with real-time suggestions.',
        icon: 'i-lucide-spell-check',
      },
      {
        id: 'tone',
        title: 'Tone Detection',
        description:
          'Adjust your writing style with suggestions based on tone, audience and intent.',
        icon: 'i-lucide-message-square-text',
      },
      {
        id: 'assistant',
        title: 'AI Writing Assistant',
        description:
          'Generate, rewrite and improve text with built-in AI writing tools.',
        icon: 'i-lucide-sparkles',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Grammarly',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.6',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '1.3K',
      },
    ],
  },
  {
    id: '10',
    slug: 'ahrefs',

    name: 'Ahrefs',

    tagline: 'SEO platform',

    description:
      'Research keywords, backlinks and organic search performance.',

    overview:
      'Ahrefs is a comprehensive SEO platform that helps businesses improve their search engine visibility. It provides tools for keyword research, backlink analysis, competitor research, site audits and content optimization to support data-driven SEO strategies.',

    logo: '/images/tools/ahrefs.svg',

    website: 'https://ahrefs.com',

    websiteLabel: 'ahrefs.com',

    affiliateUrl: null,

    company: 'Ahrefs',

    categories: [
      'marketing',
      'analytics',
    ],

    tags: [
      'seo',
      'keywords',
      'backlinks',
    ],

    pricing: 'Paid',

    pricingDescription:
      'Subscription-based pricing with multiple plans for individuals, agencies and enterprise teams. No permanent free plan is available.',

    featured: false,

    rating: 4.7,

    reviewCount: 860,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'keywords',
        text: 'Keyword research',
      },
      {
        id: 'backlinks',
        text: 'Backlink analysis',
      },
      {
        id: 'site-audit',
        text: 'Technical SEO audits',
      },
      {
        id: 'competitors',
        text: 'Competitor analysis',
      },
    ],

    platforms: [
      'web',
    ],

    features: [
      {
        id: 'keywords',
        title: 'Keyword Explorer',
        description:
          'Discover keyword ideas, search volumes and ranking difficulty for SEO campaigns.',
        icon: 'i-lucide-search',
      },
      {
        id: 'backlinks',
        title: 'Backlink Analysis',
        description:
          'Analyze backlink profiles, referring domains and link opportunities.',
        icon: 'i-lucide-link',
      },
      {
        id: 'audit',
        title: 'Site Audit',
        description:
          'Identify technical SEO issues and receive actionable recommendations to improve website health.',
        icon: 'i-lucide-chart-line',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Ahrefs',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Paid',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.7',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '860',
      },
    ],
  },
  {
    id: '11',
    slug: 'mixpanel',

    name: 'Mixpanel',

    tagline: 'Product analytics',

    description:
      'Analyze product usage, funnels and user retention.',

    overview:
      'Mixpanel is a product analytics platform that helps teams understand how users interact with their applications. It provides event tracking, funnel analysis, retention reports and user journey insights to support data-driven product decisions.',

    logo: '/images/tools/mixpanel.svg',

    website: 'https://mixpanel.com',

    websiteLabel: 'mixpanel.com',

    affiliateUrl: null,

    company: 'Mixpanel',

    categories: [
      'analytics',
    ],

    tags: [
      'events',
      'funnels',
      'retention',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Paid plans include higher event limits, advanced analytics, governance features and enterprise capabilities.',

    featured: false,

    rating: 4.5,

    reviewCount: 690,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'events',
        text: 'Event tracking',
      },
      {
        id: 'funnels',
        text: 'Conversion funnels',
      },
      {
        id: 'retention',
        text: 'Retention analysis',
      },
      {
        id: 'insights',
        text: 'User behavior insights',
      },
    ],

    platforms: [
      'web',
    ],

    features: [
      {
        id: 'tracking',
        title: 'Event Tracking',
        description:
          'Track user actions and measure engagement across your product in real time.',
        icon: 'i-lucide-activity',
      },
      {
        id: 'funnels',
        title: 'Funnel Analysis',
        description:
          'Identify where users drop off and optimize conversion through every stage.',
        icon: 'i-lucide-filter',
      },
      {
        id: 'retention',
        title: 'Retention Reports',
        description:
          'Measure user retention and understand long-term engagement with cohort analysis.',
        icon: 'i-lucide-chart-pie',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Mixpanel',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.5',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '690',
      },
    ],
  },
  {
    id: '12',
    slug: 'hubspot',

    name: 'HubSpot',

    tagline: 'CRM platform',

    description:
      'Manage contacts, sales pipelines and marketing workflows.',

    overview:
      'HubSpot is an all-in-one CRM platform that helps businesses manage customer relationships, automate marketing campaigns, streamline sales processes and provide customer support. It brings marketing, sales and service tools together in a unified workspace.',

    logo: '/images/tools/hubspot.svg',

    website: 'https://hubspot.com',

    websiteLabel: 'hubspot.com',

    affiliateUrl: null,

    company: 'HubSpot',

    categories: [
      'sales',
      'marketing',
    ],

    tags: [
      'crm',
      'email',
      'automation',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free CRM available. Paid plans unlock advanced marketing automation, sales tools, reporting and enterprise features.',

    featured: false,

    rating: 4.6,

    reviewCount: 1540,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'crm',
        text: 'Customer relationship management',
      },
      {
        id: 'marketing',
        text: 'Marketing automation',
      },
      {
        id: 'sales',
        text: 'Sales pipeline management',
      },
      {
        id: 'support',
        text: 'Customer support tools',
      },
    ],

    platforms: [
      'web',
      'ios',
      'android',
    ],

    features: [
      {
        id: 'crm',
        title: 'CRM',
        description:
          'Manage contacts, companies and customer interactions from one place.',
        icon: 'i-lucide-users',
      },
      {
        id: 'automation',
        title: 'Marketing Automation',
        description:
          'Create automated email campaigns, lead nurturing workflows and customer journeys.',
        icon: 'i-lucide-mail',
      },
      {
        id: 'sales',
        title: 'Sales Pipeline',
        description:
          'Track deals, monitor sales performance and forecast revenue with customizable pipelines.',
        icon: 'i-lucide-chart-column',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'HubSpot',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.6',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '1.5K',
      },
    ],
  },
  {
    id: '13',
    slug: 'zapier',

    name: 'Zapier',

    tagline: 'Workflow automation',

    description:
      'Connect apps and automate repetitive business workflows.',

    overview:
      'Zapier is a no-code automation platform that connects thousands of apps and services. It enables users to build automated workflows that eliminate repetitive tasks and keep data synchronized across business tools.',

    logo: '/images/tools/zapier.svg',

    website: 'https://zapier.com',

    websiteLabel: 'zapier.com',

    affiliateUrl: null,

    company: 'Zapier',

    categories: [
      'productivity',
      'automation',
    ],

    tags: [
      'workflow',
      'integration',
      'no-code',
    ],

    pricing: 'Freemium',

    pricingDescription:
      'Free plan available. Paid plans increase task limits, enable premium integrations and provide advanced automation features.',

    featured: false,

    rating: 4.6,

    reviewCount: 1180,

    lastUpdated: '2026-07-22',

    verified: true,

    highlights: [
      {
        id: 'integrations',
        text: 'App integrations',
      },
      {
        id: 'automation',
        text: 'No-code automation',
      },
      {
        id: 'multi-step',
        text: 'Multi-step workflows',
      },
      {
        id: 'ai',
        text: 'AI-powered automation',
      },
    ],

    platforms: [
      'web',
    ],

    features: [
      {
        id: 'automation',
        title: 'Workflow Automation',
        description:
          'Automate repetitive business processes without writing code.',
        icon: 'i-lucide-workflow',
      },
      {
        id: 'integrations',
        title: 'App Integrations',
        description:
          'Connect thousands of popular apps including Slack, Gmail, Notion and Google Sheets.',
        icon: 'i-lucide-plug',
      },
      {
        id: 'builder',
        title: 'Visual Workflow Builder',
        description:
          'Build simple or complex multi-step automations with an intuitive editor.',
        icon: 'i-lucide-git-branch',
      },
    ],

    stats: [
      {
        id: 'company',
        label: 'Company',
        value: 'Zapier',
      },
      {
        id: 'pricing',
        label: 'Pricing',
        value: 'Freemium',
      },
      {
        id: 'rating',
        label: 'Rating',
        value: '4.6',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        value: '1.2K',
      },
    ],
  },
]