module.exports = {
  /*
   ** Headers of the page
   */
  mode: 'spa',


  head: {
    title: 'Het Echte Werkt! | Leiderschapsontwikkeling',
    script: [
      // BABEL POLYFILL FOR IE11
      // { src: '/polyfill.min.js' }
      { src: '/polyfill/polyfill.min.js' }
      // { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }
    ],
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'theme-color',
        content: '#552E87'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      {
        hid: 'description',
        name: 'description',
        content: 'Het Echte Werkt! | Leiderschapsontwikkeling is het eigenzinnige en no nonsense coachingsbureau van René Dagevos. Ik heb me gespecialiseerd in het coachen van ambitieuze leiders en teams op hoog niveau. Zodanig dat zij zelf in staat zijn effectiever sturing te geven aan hun leiderschap.'
      },

      {
        name: 'application-name',
        content: 'Het Echte Werkt'
      },

      {
        name: 'msapplication-TileColor',
        content: '#000000'
      },

      {
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png'
      },

      {
        name: 'msapplication-square70x70logo',
        content: '/mstile-70x70.png'
      },

      {
        name: 'msapplication-square150x150logo',
        content: '/"mstile-150x150.png'
      },


      {
        name: 'msapplicationn-wide310x150logo',
        content: '/mstile-310x150.png'
      },

      {
        name: 'msapplication-square310x310logo',
        content: '/mstile-310x310.png'
      }
    ],
    link: [{
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        href: '/apple-touch-icon-57x57.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: '/apple-touch-icon-114x114.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: '/apple-touch-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: '/apple-touch-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '60x60',
        href: '/apple-touch-icon-60x60.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        href: '/apple-touch-icon-120x120.png'
      }, {
        rel: 'apple-touch-icon-precomposed',
        sizes: '76x76',
        href: '/apple-touch-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '152x152',
        href: '/apple-touch-icon-152x152.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '196x196',
        href: '/favicon-196x196.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png'
      }, {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '128x128',
        href: '/favicon-128.png'
      }
    ]

  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#552E87'
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
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
    },
    {
      src: '~/plugins/smoothscroll.js',
      ssr: false
    },
  ],

  router: {
    //base: '/testing'
  },



  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
     vendor: ['axios', 'bootstrap-vue', 'vue-awesome-swiper', 'vue-lazyload'],

  }
}
