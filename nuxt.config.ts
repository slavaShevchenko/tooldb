export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon/favicon-96x96.png'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon/favicon.svg'
        },
        {
          rel: 'shortcut icon',
          href: '/favicon/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest'
        }
      ],
      meta: [
        { name: 'impact-site-verification', content: 'ef3cacef-700c-4249-9cb3-a7be19f08266' }
      ],
    },
  },

  css: [
    '~/assets/styles/fonts.scss',
    '~/assets/styles/main.scss',
  ],

  modules: [
    '@nuxt/icon',
    '@vercel/analytics',
    '@vercel/speed-insights',
  ],

  runtimeConfig: {
    public: {
      siteUrl: 'https://tooldb.org',
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vueuse/core',
      ]
    }
  }
})