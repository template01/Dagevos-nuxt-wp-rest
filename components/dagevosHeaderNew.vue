<template>
<div>
  <div id="menuMobile" class="hidden-md-up p-5">
    <div id="menuMobileInner" class="columnwrapper container p-5">
      <div class="p-5">
        <div class="mobileLogo">
          <nuxt-link :to="'/'">
            <img src="/content/img/HetEchteWerk_CMYK.817d17a.svg" />
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



  <div id="menuDesktop" class="hidden-md-down" :style="smallLogoShow ? {'margin-bottom':setMenuMarginBottom}:{}">

    <div class="columnwrapper container pt-5 pl-5 pr-5">
      <div class="row">
        <div class="logo">
          <nuxt-link :to="'/'">
            <img src="content/img/HetEchteWerk_CMYK.817d17a.svg" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="">

      <div id="menuWrapper" class="blueBackground">

        <div class="menuitems columnwrapper container">
          <div class="menuitemsInner pb-4 pt-4">
            <!-- <transition name="fade"> -->
            <div class="smallLogo" v-if="" :class="smallLogoShow ? 'smallLogoExpanded':'smallLogoCollapsed'">
              <nuxt-link :to="'/'">
                <img src="/content/img/hetechtewerk_cmyk_sm.50643ea.svg" />
              </nuxt-link>

            </div>
            <!-- </transition> -->
            <div class="pt-2">
              <nuxt-link v-for="link in orderedMenulist" class="" :to="link.slug">
                <p v-html="link.title.rendered">
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
      hideNav: true,
      smallLogoShow: false,
      setMenuMarginBottom: 0,

    }
  },

  computed: {
    orderedMenulist: function() {

      var menuitemsTemp = this.menuitems
      var removeIndex = _.remove(menuitemsTemp, {
        slug: 'index'
      });
      var sortmenuitems = _.sortBy(menuitemsTemp, 'menu_order')

      return sortmenuitems
    }
  },
  components: {
    // menuitems
  },
  methods: {
    initSticky: function() {
      var h = document.getElementById("menuWrapper");
      // var readout = document.getElementById("readout");
      var stuck = false;
      var stickPoint = getDistance();

      function getDistance() {
        var topDist = h.offsetTop;
        return topDist;
      }

      var vm = this
      window.onscroll = function(e) {
        var distance = getDistance() - window.pageYOffset;
        var offset = window.pageYOffset;
        // readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
        if ((distance <= 0) && !stuck) {
          h.style.position = 'fixed';
          h.style.top = '0px';
          stuck = true;
          vm.smallLogoShow = true;
          setTimeout(function(){
            vm.setMenuMarginBottom = vm.$el.querySelector('#menuWrapper').offsetHeight+'px'
          },500)
        } else if (stuck && (offset <= stickPoint)) {

          h.style.position = 'static';
          stuck = false;
          vm.smallLogoShow = false;

        }
      }

    },
    test: function() {
      // var vm = this
      // var heightHeader = this.$el.offsetHeight + parseFloat(window.getComputedStyle(vm.$el).margin) * 2
      // if (window.pageYOffset > heightHeader) {
      //   this.hideNav = false
      // } else {
      //   this.hideNav = true
      //
      // }
    }
  },
  mounted() {
    // this.test()
    this.initSticky()




    if (_.VERSION) {
      console.log('underscore loaded')
    }
    // window.addEventListener('scroll', this.test)
    var vm = this
    window.addEventListener('scroll', _.throttle(() => {
      vm.test()
    }, 200))
  },


}
</script>

<style lang="scss" scoped>
// .fade-enter-active, .fade-leave-active {
//   // transition: transform .2s, opacity .2s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   // transform: translateY(-100px);
//   opacity: 0;
// }
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
#menuDesktop{
  transition: 0s;
  // transition: margin-bottom 0.5s;

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
