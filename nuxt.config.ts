// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Anoka-Ramsey Programming Club',
      meta: [
        {
          property: 'og:title',
          content: 'Anoka-Ramsey Programming Club'
        },
        {
          property: 'og:icon',
          content: '/logo-bold.svg'
        },
        {
          property: 'description',
          content: 'The Anoka-Ramsey Community College Programming Club'
        },
        {
          property: 'icon',
          content: '/logo-bold.svg'
        },
        {
          property: 'og:image',
          content: './logo-bold.svg'
        }
      ],
      link: [
        {
          rel: 'icon', type: 'image/png', href: '/favicon.ico'
        }
      ]
    }
  }
})
