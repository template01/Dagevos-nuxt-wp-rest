module.exports = {
  /*
   ** Headers of the page
   */
  mode: 'spa',
  head: {
    title: 'Het Echte Werkt!',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]

  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#552E87'
  },
  css: [
    '~assets/css/font-awesome.min.css',
    '~/assets/fonts/coolvetica+aileron/stylesheet.css',
    '~/assets/fonts/radnika-web/stylesheet.css',
    '~assets/css/compiledbootstrap/bootstrap.css',
    '~assets/css/main.css',
    'swiper/dist/css/swiper.css'

  ],

  plugins: ['~plugins/visibility-plugin.js', '~plugins/bootstrap-vue-plugin', '~/plugins/lodash-plugin.js', '~/plugins/vue-resource-plugin.js', {
      src: '~/plugins/vueawesomeswiper-plugin.js',
      ssr: false
    },
    {
      src: '~/plugins/lazyload.js',
      ssr: false
    }
  ],

  router: {
  },


  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */


    vendor: ['axios', 'bootstrap-vue', 'vue-awesome-swiper', 'vue-lazyload']
  }
}
