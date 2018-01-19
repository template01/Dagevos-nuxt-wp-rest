<template>
<div id="dagevosReferenties" class="">


  <div class="container pb-3 px-5 greyBackground">
    <div class="row">


      <swiper class="greyBackground" style="padding-bottom:40px;" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="" v-for="(referentie, index) in refsProp" v-bind:key="index">
          <div class="swiper-slide-inner">

          <div class="col-sm-6 float-left">
            <div class="pt-4 pr-0 pl-0" style="">
              <div class="">
                <div class="row pb-1">
                  <div class="titleWrapper">
                    <img class="float-left pr-3 pb-1" src="content/img/icon_qoute.svg" />
                    <div class="float-left pt-1">
                      <h4 class="mb-0" v-html="referentie.acf.name"></h4>
                      <!-- <h4 class="" v-html="referentie.acf.function + ' - ' + referentie.acf.company"></h4> -->
                      <h4 class="" v-html="referentie.acf.company"></h4>
                    </div>

                  </div>
                </div>
                <!-- <div class="row">
                  <i class="referentieBlurb" v-html="referentie.acf.blurb">
                </i>
                </div> -->

              </div>
            </div>
          </div>

          <div class="col-sm-6 float-left  hidden-sm-down ">
            <div class="pt-4 pr-0 pl-0" style="">
              <div class="">
                <i class="referentieBlurb" v-html="referentie.acf.blurb"></i>
              </div>
            </div>
          </div>
          <!-- <transition name="fade"> -->

            <div class="col-sm-6 float-left  hidden-sm-up ">
              <div class="p-2" style="">
                <div class="">
                  <i v-html="referentie.acf.blurb">
                  </i>
                </div>
              </div>
            </div>
          <!-- </transition> -->
          <!-- <div class="col-sm-12 pb-mobile">

            <div class="col-sm-12  mb-5 mt-1 float-left  buttonImitate buttonBlueNoAnimate  hidden-sm-up " @click="toggleLees()" style="border:0px; margin-bottom: 20px; text-align:center;">
              <span v-if="!showRef">
              Lees volledige referentie <i class="fa fa-hand-o-down" aria-hidden="true"></i>
            </span>
              <span v-if="showRef">
              Collapse volledige referentie <i class="fa fa-hand-o-up" aria-hidden="true"></i>
            </span>
            </div>
          </div> -->
        </div>


        </swiper-slide>

        <div class="swiper-pagination hidden-sm-down" slot="pagination"></div>
        <div class="swiper-pagination swiper-pagination-sm hidden-sm-up " slot="pagination"></div>
        <div class="swiper-button-prev hidden-sm-down" style='background-image:' slot="button-prev"></div>
        <div class="swiper-button-next hidden-sm-down" slot="button-next"></div>
      </swiper>

    </div>
    <div class=" hidden-sm-up beigeBackground">

      <div class="">
        <p style="margin: 0; font-size:100%; text-align:center;">
          (swipe rechts voor meer referenties)
        </p>
      </div>

    </div>
  </div>

</div>
</template>
<script>
export default {
  props: ['refsProp', 'opdrachtsProp'],

  data() {
    var vm = this
    return {
      showRef: false,
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        loop: true,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        // mousewheelControl: true,
        observeParents: true,
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onSlideChangeStart(swiper) {
          vm.toggleLees('collapse')
        },
      },

    }
  },


  methods: {
    toggleLees: function(collapse) {
      if (collapse === 'collapse') {
        this.showRef = false
      } else {
        this.showRef = !this.showRef
      }
      var vm = this
      // this.swiper.slideTo(3, 1000, false)
      setTimeout(function() {
        vm.swiper.update()
        // vm.swiper.slideTo(3, 1000, false)

      }, 200)
      setTimeout(function() {
        vm.swiper.slideTo(vm.swiper.activeIndex, 1000, false)
      }, 500)
      setTimeout(function() {
        vm.swiper.slideTo(vm.swiper.activeIndex, 1000, false)
      }, 800)
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }

}
</script>

<style lang="scss">

@media (min-width: 992px) {

  .swiper-slide-inner{
    // max-width: 600px;
    max-width: 75%;
    margin: 0 auto;
  }
}
.titleWrapper {
    display: flex;
    // margin: 0 auto;
}
#dagevosReferenties {
    a {
        text-decoration: none;
        color: inherit !important;
    }

    .referentieBlurb {
        * {
            color: #552E87;
        }
    }
}

.swiper-wrapper {
    // padding-top: 15px;
    // padding-bottom: 45px;
}

.swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23552E87'%2F%3E%3C%2Fsvg%3E") !important;
}

.swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23552E87'%2F%3E%3C%2Fsvg%3E") !important;
}

.swiper-pagination-bullet-active {
    opacity: 1 !important;
    background: #552E87 !important;
}
.swiper-pagination-sm {

    .swiper-pagination-bullet {
        width: 16px;
        height: 16px;
    }

    &.swiper-pagination-bullets {
        bottom: 0;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: transform 0.5s, opacity 0.5s, max-height 0.5s;
    max-height: 2000px;
    overflow: hidden;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    max-height: 0;
}
</style>
