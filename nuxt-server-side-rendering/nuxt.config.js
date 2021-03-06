const base = 'gh-pages' === process.env.NODE_ENV ? '/vue-examples/' : '/';

module.exports = {
  router: {
    base,
  },
  /**
   * Headers of the page
   */
  head: {
    title: 'nuxt-server-side-rendering',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js server-side rendering with Vue.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${base}favicon.ico` },
    ],
  },
  /**
   * Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /**
   * Build configuration
   */
  build: {
    publicPath: '/static/',
    /**
     * Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
};
