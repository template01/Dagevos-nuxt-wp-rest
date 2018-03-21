<template>
<div id="dagevosReferenties" class="">

  <div class="container pb-3 px-4 greyBackground">

    <div class="row  px-1">
      <swiper class="greyBackground" style="padding-bottom:40px;" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="" v-for="(refsPair, index) in contentin2" v-bind:key="index">
          <div class="swiper-slide-inner">

            <div v-for="(referentie,index) in refsPair" class="col-sm-6 float-left" :style="index % 2 ? {'padding-left':'25px'} : {'padding-right':'25px'}">

              <div class="pr-0 pl-0" style="">
                <div class="">
                  <div class="row pb-1">
                    <div class="titleWrapper">
                      <img style="" class="pt-2 pr-2 float-left" src="content/img/icon_qoute.svg" />
                      <div class=" pt-1">
                        <h5 class="mb-0" v-html="referentie.acf.name"></h5>
                        <h5 class="" v-html="referentie.acf.company"></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-1 pb-2 pr-0 pl-0" style="">
                <div class="">
                  <i class="referentieBlurb smallText" v-html="referentie.acf.blurb"></i>
                </div>
              </div>
            </div>

          </div>


        </swiper-slide>

        <div class="swiper-pagination-ref hidden-sm-down" slot="pagination"></div>
        <div class="swiper-pagination-ref swiper-pagination-ref-sm hidden-sm-up " slot="pagination"></div>
        <!-- <div  class="swiper-button-prev hidden-sm-down" style='background-image:' slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next hidden-sm-down" slot="button-next"></div> -->

        <div class="swiper-button-prev hidden-sm-down" slot="button-prev"></div>
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
import _ from 'lodash'
export default {
  props: ['refsProp', 'opdrachtsProp'],

  data() {
    var vm = this
    return {
      showRef: false,
      swiperOption: {
        notNextTick: true,
        loop: true,
        // grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination-ref',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
    },
    filteroutdisabled: function() {

      var filtered = []
      var vm = this
      var test = _.forEach(this.refsProp, function(reference, index) {
        console.log(reference.acf.show_references_page)
        if (reference.acf.show_references_page) {
          filtered.push(vm.refsProp[index])
        }
      });

      return filtered


    },
    contentin2: function() {

      Array.prototype.chunk = function(n) {
        if (!this.length) {
          return [];
        }
        return [this.slice(0, n)].concat(this.slice(n).chunk(n));
      };




      if (window.innerWidth > 992) {
        return this.filteroutdisabled.chunk(2);
      } else {
        return this.filteroutdisabled.chunk(1);

      }

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



<style lang="scss" >
.swiper-pagination-ref {
    text-align: center;
    .swiper-pagination-bullet-active {
        background: #552E87 !important;
    }
}

@media (min-width: 992px) {

    .swiper-slide-inner {
        // max-width: 600px;
        max-width: 960px;
        margin: 0 auto;
    }
}
.titleWrapper {
  width: 100%;
    // display: flex;
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
    margin-right: -10px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23552E87'%2F%3E%3C%2Fsvg%3E") !important;
}

.swiper-button-prev {
    margin-left: -10px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23552E87'%2F%3E%3C%2Fsvg%3E") !important;
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
