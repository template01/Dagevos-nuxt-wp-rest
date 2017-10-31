<template>
<div class="container px-5">

  <div class="row">
    <div class="col-12" id="dagevosHeader">
      <div class="hidden-sm-down px-5">
        <div class="float-left py-5">

          <nuxt-link :to="{ path: '/'}" class="navbar-brand mainMenuHeader">
            <span>
          <img class="" src="~assets/svg/HetEchteWerk_CMYK.svg" />
          </span>
          </nuxt-link>
        </div>

        <div class="float-right py-4 alignNavVertical">
          <menuitems></menuitems>
        </div>


      </div>


      <div class="hidden-sm-up beigeBackground fixed-top p-2  " toggleable type="" id="">
        <div class="px-5">
          <div class="px-5">
            <b-btn v-b-toggle.nav_collapse1 class="m-1 toggleNav mt-2"></b-btn>


            <b-link class="navbar-brand" :to="{ path: '/'}">
              <span><img class="brand-sm" src="~assets/svg/HetEchteWerk_CMYK_SM.svg"/></span>
            </b-link>

            <b-collapse is-nav id="nav_collapse1">
              <b-nav is-nav-bar class="ml-auto mt-5 pt-5 alignNavVertical">
                <menuitems></menuitems>
              </b-nav>
            </b-collapse>
          </div>
        </div>

      </div>
      <!-- CLONE FROM ABOVE TO ADD SPACING -->
      <div class="hidden-sm-up beigeBackground p-2 " toggleable type="" id="" type="light" style="opacity: 0;">
        <b-link class="navbar-brand" :to="{ path: '/'}">
          <span><img class="brand-sm" src="~assets/svg/HetEchteWerk_CMYK_SM.svg"/></span>
        </b-link>
      </div>


    </div>

    <transition name="slide">

      <div v-if="!hideNav" toggleable type="" id="dagevosHeaderFixed" class="fixed-top hidden-sm-down col-12 container p-2" style="background:#F6FBFF;">
        <div class="row px-5" style="width:100%">

          <div class="col-sm-12" style="width:100%; display: block;">



            <div class="row hidden-medium-down">
              <div class="col-sm-4">
                <b-link class="navbar-brand pt-3" :to="{ path: '/'}" style="float:left; width: 100%; max-width:420px">
                  <span><img  style="width:100%" src="~assets/svg/HetEchteWerk_CMYK_SM.svg"/></span>
                </b-link>
              </div>
              <div class="col-sm-8">
                <menuitems></menuitems>
              </div>
            </div>

            <div class="row  hidden-medium-up">

              <div class="col-sm-12">
                <b-link class="navbar-brand pt-3" :to="{ path: '/'}" style="float:left; width: 100%; max-width:420px">
                  <span><img  style="width:100%" src="~assets/svg/HetEchteWerk_CMYK_SM.svg"/></span>
                </b-link>
                <b-btn v-b-toggle.collapsex class="m-1 toggleNav" style="margin-top:38px !important;"></b-btn>
              </div>

              <div class="col-sm-12 pt-3">
                <b-collapse id="collapsex" class="alignNavVertical">
                  <menuitems></menuitems>
                </b-collapse>
              </div>

            </div>
          </div>

        </div>
      </div>
    </transition>

  </div>
</div>
</template>
<script>
import _ from 'lodash'

import menuitems from '~/components/menuitems.vue'

export default {

  data() {
    return {
      hideNav: true
    }
  },
  components: {
    menuitems
  },
  methods: {
    test: function() {
      var vm = this
      var heightHeader = this.$el.offsetHeight + parseFloat(window.getComputedStyle(vm.$el).margin) * 2
      if (window.pageYOffset > heightHeader) {
        this.hideNav = false
      } else {
        this.hideNav = true

      }
    }
  },
  mounted() {
    this.test()
    if (_.VERSION) {
      console.log('underscore loaded')
    }
    // window.addEventListener('scroll', this.test)
    var vm = this
    window.addEventListener('scroll', _.throttle(() => {
      vm.test()
    }, 200))
  },

  created() {}

}
</script>

<style lang="scss">
@import "~assets/css/main.scss";

.slide-enter-active {
    transition: all 0.3s ease;
}
.slide-leave-active {
    transition: all 0.5s ease;
}
/* .slide-fade-leave-active below version 2.1.8 */
.slide-enter,
.slide-leave-to {
    transform: translateY(-200px);
    opacity: 0;
}

.toggleNav {
    // display: none;
    float: right;
    background-image: url('/hamburger.svg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 0;
    box-shadow: 0;
    outline: 0;
    cursor: pointer;

    &:hover{
      background-color: transparent;
    border-color: transparent;
    }
}

#initMenu {
    a {
        float: none;
        clear: both;
        width: auto;
    }
}

.alignNavVertical {
    a {
        float: none;
        clear: both;
        width: auto;
    }
}
@media screen and (max-width: 1451px) {
    .hidden-medium-down {
        display: none;
    }
}
@media screen and (min-width: 1450px) {
    .hidden-medium-up {
        display: none;
    }
}

a{

  font-family: 'Aileron' !important;
  font-size: 20px;
  font-weight: 400;
}

a:hover {
    text-decoration: underline !important;
}

.brand-sm {
        height: 40px;
        width: auto;
    }


//
//
// #dagevosHeader {
//     .navbar-toggler-icon {
//         background-image: url('/hamburger.svg') !important;
//     }
//     .navbar-light .navbar-toggler {
//         border: 0;
//         background: transparent !important;
//     }
//
//     #logo {
//         img {
//             max-width: 100%;
//         }
//     }
//
//     .navbar-toggler-right {
//         right: 2rem !important;
//
//     }
//
//     .navbar .dropdown-menu a,
//     .navbar-nav a {
//         &:hover {
//             text-decoration: none;
//             -webkit-box-shadow: 0 1px 0 0 $purple;
//             -moz-box-shadow: 0 1px 0 0 $purple;
//             box-shadow: 0 1px 0 0 $purple;
//         }
//         &:focus {
//             text-decoration: none;
//         }
//     }
//     @media screen and (max-width: 992px) {
//         .navbar .dropdown-menu a,
//         .navbar-nav a {
//             &:hover {
//                 text-decoration: none;
//                 -webkit-box-shadow: none;
//                 -moz-box-shadow: none;
//                 box-shadow: none;
//             }
//             &:focus {
//                 text-decoration: none;
//             }
//         }
//
//     }
//
//     .navbar .dropdown-toggle {
//         &:hover {
//             box-shadow: none;
//         }
//     }
//
//     .navbar-light .navbar-toggler {
//         border: 0;
//         background: white;
//     }
//
//     .dropdown-toggle::after {
//         content: none;
//     }
//
//     .brand-sm {
//         height: 40px;
//         width: auto;
//     }
//     @media screen and (max-width: 500px) {
//         .brand-sm {
//             height: 35px;
//             width: auto;
//         }
//
//         .navbar-toggler-right {
//             padding-left: 2px;
//             padding-right: 2px;
//         }
//     }
//
//     .mainMenuHeader {
//         img {
//             width: 450px;
//         }
//     }
//
//     h4 {
//         margin-bottom: 0.25rem;
//         &:last-of-type {
//             margin-bottom: 0;
//         }
//     }
//
//     .dropdown-menu {
//         width: calc(25vw - 38px);
//         border-color: white;
//         border-radius: 0;
//
//         h4 {
//             border: 0;
//             margin-top: 8px;
//             margin-bottom: 8px;
//             width: 100%;
//             font-family: 'Aileron' !important;
//             font-weight: 400;
//             font-size: 25px !important;
//         }
//
//         h5 {
//             font-family: 'Aileron' !important;
//             box-sizing: border-box !important;
//
//             a {
//                 box-sizing: border-box !important;
//                 display: inline-block;
//                 &:hover {}
//             }
//         }
//     }
//
// }
//
// #dagevosHeaderFixed {
//
//     a {
//         font-family: 'Aileron' !important;
//         font-weight: 400;
//         font-size: 20px !important;
//         padding-bottom: 5px;
//         padding-top: 5px;
//         padding-left: 0;
//     }
//     a:hover {
//         text-decoration: underline !important;
//     }
// }
</style>
