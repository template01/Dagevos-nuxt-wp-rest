<template>
<div>
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
            <nuxt-link v-for="link in orderedMenulist" class="" :to="link.slug">
              <p v-html="link.title.rendered">
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


  <div id="shadow-menuDesktop" class="hidden-md-down" :style="{'height':shadowMenuDesktopHeight+'px'}"></div>
  <div id="menuDesktop" class="hidden-md-down" :style="fixMenuDesktop ? {'position':'fixed'}:{}">

    <div id="menuDesktopLogoWrapper" class="columnwrapper container pl-5 pr-5" :class="smallLogoShow ? 'pt-4':'pt-5'">
      <div class="row">
        <div class="logo">
          <nuxt-link :to="'/'">
            <img v-if="!smallLogoShow" src="content/img/HetEchteWerk_CMYK.817d17a.png" />
            <img v-else src="content/img/hetechtewerk_cmyk_sm.50643ea.png" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="">

      <div id="menuWrapper" class="blueBackground">

        <div class="menuitems columnwrapper container">
          <div class="menuitemsInner pb-4" :class="smallLogoShow ? 'pt-0':'pt-4'">
            <div class="pt-2">
              <nuxt-link v-for="link in orderedMenulist" class="" :to="link.slug">
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

    setTimeout(function(){
      vm.setShadowMenuDesktopHeight()
    },250)

    if (_.VERSION) {
      console.log('underscore loaded')
    }
    // window.addEventListener('scroll', this.test)
    window.addEventListener('scroll', _.throttle(() => {
      vm.swabMenuDesktopLogo()
    }, 200))
  },



}
</script>
<style>
#menuDesktop .nuxt-link-exact-active p{
  font-weight: 500 !important;
}

</style>

<style lang="scss" scoped>


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
    a {
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
    background: #E6F4FF;
    z-index: 999999999999;
    top: 0;

    // transition: margin-bottom 0.5s;

}

#menuDesktopLogoWrapper{
  transition: padding-top 0.5s;
}
#menuWrapper {
    z-index: 999999999999;
    left: 0 !important;
    width: 100% !important;
    background: #E6F4FF;
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
        padding-left: 10px;
        padding-right: 10px;
        display: inline-flex;
        cursor: pointer;
        font-family: inherit !important;
        p {
            float: left;
            margin: 0;
        }
    }

    .menuitemsInner {
        margin: 0 auto;
        display: inherit;

    }
}
</style>
