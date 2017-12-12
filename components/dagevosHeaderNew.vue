<template>
<div>

  <!-- MOBILE -->
  <div id="menuMobile" class="hidden-md-up p-5">
    <div id="menuMobileInner" class="columnwrapper container p-5">
      <div class="p-5">
        <div class="mobileLogo">
          <nuxt-link :to="'/'">
            <img src="content/img/HetEchteWerk_CMYK.817d17a.png" />
          </nuxt-link>

        </div>

        <div class="mobileMenuToggle">

          <b-btn v-b-toggle.collapse1 variant="primary"><i class="fa fa-bars" aria-hidden="true"></i></b-btn>
        </div>

        <b-collapse id="collapse1" class="mt-2 mobileMenuItems">
          <div>
            <nuxt-link v-for="link in orderedMenulist" class="" :to="link.slug === 'index' ? '/' : link.slug">

              <p v-html="link.title.rendered === 'Index' ? 'Home':link.title.rendered">
              </p>

            </nuxt-link>
          </div>
          <!-- <b-card> -->
          <!-- <p class="card-text">Collapse contents Here</p> -->

          <!-- </b-card> -->
        </b-collapse>

      </div>
    </div>
  </div>

  <!-- DESKTOP -->

  <div id="shadow-menuDesktop" class="hidden-md-down" :style="{'height':shadowMenuDesktopHeight+'px'}"></div>
  <div id="menuDesktop" class="hidden-md-down" :style="fixMenuDesktop ? {'position':'fixed'}:{}">

    <div id="menuDesktopLogoWrapper" class="columnwrapper container pl-5 pr-5" :class="smallLogoShow ? 'pt-3':'pt-4'">
      <div class="row">
        <div class="logo">
          <!-- <nuxt-link :to="'/'"> -->
          <div class="menuDesktopLogoInnerWrapper">

            <img v-if="!smallLogoShow" src="content/img/HetEchteWerk_CMYK.817d17a.png" />
            <div class="Aligner" v-else>
              <template v-if="$route.path === '/'">
                <img src="content/img/HetEchteWerk_CMYK.817d17aSM.png" />
              </template>
              <template v-else>

              <img style="float:left" src="content/img/hetechtewerk_cmyk_sm_cropped.png" />
              <h2 style="margin:0;float:left;color:black !important;text-decoration:none !important;" v-html="$route.path === '/' ? 'leiderschaps ontwikkeling' : $store.state.title "></h2>
            </template>

            </div>
          </div>
          <!-- </nuxt-link> -->
          <div class="toTop" v-if="smallLogoShow" @click="scrollToTop()">
            <h5 style="font-size:25px; padding-top:15px"><i class="fa fa-arrow-up" aria-hidden="true"></i></h5>
          </div>


        </div>
      </div>
    </div>
    <div class="">

      <div id="menuWrapper" class="blueBackground">

        <div class="menuitems columnwrapper container">
          <div class="menuitemsInner pb-2" :class="smallLogoShow ? 'pt-0':'pt-2'">
            <div class="pt-2">
              <nuxt-link v-for="link in orderedMenulist" class="" :to="link.slug === 'index' ? '/' : link.slug">
                <p v-html="link.title.rendered === 'Index' ? 'Home':link.title.rendered">
                </p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
</template>
<script>
import _ from 'lodash'
// import menuitems from '~/components/menuitems.vue'

export default {

  props: ['menuitems'],

  data() {
    return {
      // hideNav: true,
      fixMenuDesktop: false,
      smallLogoShow: false,
      setMenuMarginBottom: 0,
      shadowMenuDesktopHeight: 0,
    }
  },

  computed: {
    orderedMenulist: function() {

      var menuitemsTemp = this.menuitems
      // var removeIndex = _.remove(menuitemsTemp, {
      //   slug: 'index'
      // });
      var sortmenuitems = _.sortBy(menuitemsTemp, 'menu_order')

      return sortmenuitems
    }
  },
  components: {
    // menuitems
  },
  methods: {

    scrollToTop: function(){
      this.$SmoothScroll(0,500);
    },

    swabMenuDesktopLogo: function() {
      var vm = this
      var logoHeight = this.$el.querySelector('#menuDesktop .logo').offsetHeight
      if (window.pageYOffset > logoHeight) {
        this.smallLogoShow = true
      } else {
        this.smallLogoShow = false
      }
    },
    setShadowMenuDesktopHeight: function() {
      this.shadowMenuDesktopHeight = this.$el.querySelector("#menuDesktop").offsetHeight
      this.fixMenuDesktop = true
    }
  },
  mounted() {
    // this.test()
    var vm = this

    setTimeout(function() {
      vm.setShadowMenuDesktopHeight()
    }, 250)

    if (_.VERSION) {
      console.log('underscore loaded')
    }
    // window.addEventListener('scroll', this.test)
    window.addEventListener('scroll', _.throttle(() => {
      vm.swabMenuDesktopLogo()
    }, 200))

    this.$store.commit('SET_title', this.$el.querySelector('.nuxt-link-exact-active p').innerHTML)


  },



}
</script>
<style>
#menuDesktop .nuxt-link-exact-active p {
  font-weight: 500 !important;
}
</style>

<style lang="scss" scoped>
.Aligner {
    display: flex;
    align-items: center;
    justify-content: center;
}

.Aligner-item {
    max-width: 50%;
}

.Aligner-item--top {
    align-self: flex-start;
}

.Aligner-item--bottom {
    align-self: flex-end;
}

#menuMobile {
    width: 100%;

    display: inline-block;
    #menuMobileInner {
        display: inline-block;
        width: 100%;

        .mobileMenuToggle {
            width: 30%;
            float: right;
            button {
                float: right;
                color: #fff;
                background-color: #4d2587;
                border-color: rgb(96, 56, 154);
            }
            button:focus {
                -webkit-box-shadow: 0 0 0 2px rgba(77, 37, 135, 0.62);
                box-shadow: 0 0 0 2px rgba(77, 37, 135, 0.62);
            }
        }

        .mobileLogo {
            width: 70%;
            float: left;

            img {
                width: 100%;
            }
        }

        .mobileMenuItems {
            display: inline-block;
            width: 100%;

        }
    }

}

.logo {

    width: 100%;
    margin: 0 auto;
    display: flex;
    position: relative;
    .toTop {
        height: 50px;
        width: 50px;
        position: absolute;
        right: -10px;
        transition:margin-top 0.35s;
        cursor: pointer;

        &:hover{
          margin-top:-8px;
        }
    }

    .menuDesktopLogoInnerWrapper {
        margin: 0 auto;

    }
    img {
        margin: 0 auto;

    }
}
.stickyMenu {
    background: green;
}
#menuDesktop {
    transition: 0s;
    // position: fixed;
    width: 100%;
    // background: #E6F4FF;
    background: #f3f3f3;
    z-index: 100;
    top: 0;

    // transition: margin-bottom 0.5s;

}

#menuDesktopLogoWrapper {
    transition: padding-top 0.5s;
}
#menuWrapper {
    z-index: 100;
    left: 0 !important;
    width: 100% !important;
    // background: #E6F4FF;
    background: #f3f3f3;
    .smallLogo {
        a {
            margin: 0 auto;
            display: block;
        }
        img {
            margin: 0 auto;
            display: block;
            height: 40px;
        }
        overflow: hidden;
        transition-delay: 0.5s;
        transition: height 0.25s;
        &.smallLogoExpanded {
            height: 40px;
        }
        &.smallLogoCollapsed {
            height: 0;
        }
    }
}
.menuitems {
    // height: 80px;
    background: inherit;
    margin: 0 auto;
    display: table;
    a {
        text-decoration: none;
        padding-left: 20px;
        padding-right: 20px;
        display: inline-flex;
        cursor: pointer;
        font-family: inherit !important;
        p {
            float: left;
            margin: 0;
        }
    }

    .nuxt-link-exact-active {
        * {

            color: #552E87 !important;
        }
    }

    .nuxt-link-exact-active:before {
        content: url("/faviconsm.svg");
        /* with class ModalCarrot ??*/
        position: absolute;
        left: -2px;
        top: 3px;
        /*or absolute*/
        // z-index: 100000;
        /*a number that's more than the modal box*/
        // left: -50px;
        padding-right: 4px;
    }

    .menuitemsInner {
        margin: 0 auto;
        display: inherit;

        a {
            position: relative;
        }
    }
}
</style>
