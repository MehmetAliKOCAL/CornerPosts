module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        backgroundImage:{
            banner:"url('/banner.jpg')"
        },
        borderWidth:{
          '1':'1px'
        }
      },
    },
    plugins: [],
  }