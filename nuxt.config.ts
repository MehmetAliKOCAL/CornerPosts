// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss'
      ],
      css: [
        '@/assets/css/global.css',
      ],
      app: {
        pageTransition: { name: 'slide', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head:{
          title:'Corner Posts'
        }
      },
})
