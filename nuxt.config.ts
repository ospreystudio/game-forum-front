// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  pages: true,
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
  },
})
