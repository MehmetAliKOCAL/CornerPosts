// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss', '@pinia/nuxt',
      ],

      css: [
        '@/assets/css/global.css',
      ],
      
      runtimeConfig:{
        FIREBASE_URL:process.env.FIREBASE_URL,
      },

      app: {
        pageTransition: { name: 'slide', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head:{
          title:'Corner Posts'
        }
      },
})
