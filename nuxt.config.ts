// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@storyblok/nuxt',
      {
        accessToken: import.meta.env.NUXT_STORYBLOK_ACCESS_TOKEN,
        devtools: true,
        apiOptions: { region: 'us' },
      },
    ],
  ],
  css: ['@/assets/css/main.css'],
});
