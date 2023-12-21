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
      title: 'Anoka-Ramsey Coding Club',
      meta: [
        {
          property: 'og:title',
          content: 'Anoka-Ramsey Coding Club'
        },
        {
          property: 'og:icon',
          content: '/image/Icon Transparent.png'
        },
        {
          property: 'description',
          content: 'The Anoka-Ramsey Community College Coding Club'
        },
        {
          property: 'icon',
          content: '/image/Icon Transparent.png'
        },
        {
          property: 'og:image',
          content: './image/Icon Transparent.png'
        }
      ],
    }
  }
})
