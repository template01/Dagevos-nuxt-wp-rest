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
  // loading: '~/components/loading.vue',
  css: [
    // { src: '~assets/css/main1.scss', lang: 'scss' },
    '~assets/css/font-awesome.min.css',
    '~/assets/fonts/coolvetica+aileron/stylesheet.css',
    '~/assets/fonts/radnika-web/stylesheet.css',

    '~assets/css/compiledbootstrap/bootstrap.css',
    '~assets/css/main.css',
    'swiper/dist/css/swiper.css'
    //'bootstrap/dist/css/bootstrap.css',
    //'bootstrap-vue/dist/bootstrap-vue.css'

  ],

  plugins: ['~plugins/routerextended.js', '~plugins/visibility-plugin.js', '~plugins/bootstrap-vue-plugin', '~/plugins/lodash-plugin.js', '~/plugins/vue-resource-plugin.js', {
      src: '~/plugins/vueawesomeswiper-plugin.js',
      ssr: false
    },
    {
      src: '~/plugins/lazyload.js',
      ssr: false
    }

    // {
    //   src: '~/plugins/stickyjs-plugin.js',
    //   ssr: false
    // }
  ],

  router: {
    // base: '/testing'
  },
  //
  // router: {
  //   scrollBehavior: function(to, from, savedPosition) {
  //     if (savedPosition) {
  //       return savedPosition
  //       alert(savedPosition)
  //
  //     } else {
  //       let position = {}
  //       // if no children detected
  //       if (to.matched.length < 2) {
  //         // scroll to the top of the page
  //         position = {
  //           x: 0,
  //           y: 0
  //         }
  //       } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
  //         // if one of the children has scrollToTop option set to true
  //         position = {
  //           x: 0,
  //           y: 0
  //         }
  //       }
  //       // if link has anchor,  scroll to anchor by returning the selector
  //       if (to.hash) {
  //         // setTimeout(function() {
  //         //   window.location.href = to.hash;
  //         // }, 100)
  //         // setTimeout(function() {
  //         //   window.location.href = to.hash;
  //         // }, 500)
  //         // setTimeout(function() {
  //         //   window.location.href = to.hash;
  //         // }, 1400)
  //       } else {
  //         return position
  //       }
  //     }
  //   },
  //
  // },


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
