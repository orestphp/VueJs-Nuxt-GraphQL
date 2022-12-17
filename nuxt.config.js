import colors from 'vuetify/es5/util/colors'
import {cs} from 'vuetify/src/locale'
// global usage: process.env.apiUrl
const apiUrl = 'http://127.0.0.1:8001/graphql';

export default {
  ssr: false,
  env: {
    local: process.env.UCO_LOCAL || true,
    apiUrl: process.env.UCO_GQL_API_ENDPOINT || apiUrl,
    recaptchaSiteKey: process.env.UCO_RECAPTCHA_SITE_KEY,
    mailFrom: 'webmaster@woods.com',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Timber Tools',
    title: 'libor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: '~/plugins/apexcharts.js', ssr: false}, { src: '~/plugins/vueI18n', ssr: false},{ src: '~/plugins/syncI18n', ssr: false}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/apolloDefault.js',
    },
    errorHandler: '~/plugins/apolloErrorHandler.js',
    httpEndpoint: process.env.UCO_GQL_API_ENDPOINT || apiUrl,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'UCO Customer Portal ',
      short_name: 'UCO Portal',
      background_color: '#f5efe9',
      theme_color: '#096453',
      description: 'Portal for customers',
      lang: 'cs',
      csp: "script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.jsdelivr.net www.recaptcha.net www.gstatic.com; frame-src cdn.jsdelivr.net www.recaptcha.net www.gstatic.com; object-src 'self'; img-src https://*; worker-src 'self'; child-src 'self';",
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-GB', file: 'en-GB.js', isCatchallLocale: true },
      { code: 'cs', iso: 'cs-CZ', file: 'cs-CZ.js' },
      { code: 'de', iso: 'de-DE', file: 'de-DE.js' },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    vueI18n: '~/plugins/vueI18n.js',
    detectBrowserLanguage: true,
    seo: false
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    lang: {
      locales: { cs },
      current: 'cs'
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          lightgray: colors.grey.lighten5
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
