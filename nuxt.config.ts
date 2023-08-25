export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%pageTitle %titleSeparator %siteName',
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Awesome Site',
      siteDescription: 'Welcome to my awesome site!',
      language: 'ru',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@nuxt/image',
    '@nuxtjs/strapi',
    '@nuxt/content',
    'tailwind-svg-icon',
    '@unlighthouse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },

  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },

  imports: {
    dirs: ['stores'],
  },

  build: {
    transpile: ['vue-toastification'],
  },

  extends: ['nuxt-seo-kit'],
  css: ['vue-final-modal/style.css'],

  experimental: {
    componentIslands: true,
  },

  devtools: {
    enabled: true,
  },
})
