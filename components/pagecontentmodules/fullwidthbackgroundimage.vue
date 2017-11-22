<template>
<div class="fullimage">

  <!-- {{slidecontent}} -->
  <!-- DESKTOP -->

  <div class="wrapperHeightTall heightTall hidden-sm-down">
    <swiper class="followHeightTall" :options="swiperOption" ref="mySwiper" style="">
      <swiper-slide class="item" style="background:#f3f3f3" v-for="(slide, index) in slidecontent" v-bind:key="index">
        <div :style="[{'background-image':'url(\''+slide.content.sizes.large+'\')'},{'opacity':hasTextOverlay(slide.text_overlay)?'0.45':'1'}]" class="followHeightTall index-full-cover"></div>
         <!-- <img :data-src="slide.content.sizes.large" class="swiper-lazy"> -->
         <!-- <img :data-src="slide.content.sizes.large" class="swiper-lazy"> -->


        <div class="container Aligner heightTall  justify-content-md-center">
          <div class="row maxwidth960">
          <div class="" style="margin:0 auto;">
            <div class="textoverlay ">
              <h4 v-html="slide.text_overlay"></h4>
            </div>
          </div>
          </div>
        </div>

      </swiper-slide>

    </swiper>

  </div>

  <!-- MOBILE -->

  <!-- <div class="container px-5 hidden-sm-up">
    <div class="row">
      <div class="col-sm-12 ">
        <div class="pullimage-left">
          <img style="width:100%;" class="" :src="content.url" alt="">
        </div>
      </div>
    </div>
  </div> -->
</div>
</template>

<script>
export default {
  data() {
    var vm = this
    return {
      showRef: false,
      swiperOption: {
        effect: 'fade',
        notNextTick: true,
        autoplay: 3000,
        preloadImages: false,
        lazy: true,
        allowSlidePrev: false,
        allowSlideNext: false,
        setWrapperSize: true,
        autoHeight: true,
        observeParents: true,
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onSlideChangeStart(swiper) {
          // vm.toggleLees('collapse')
        },
      },

    }
  },


    methods: {
      hasTextOverlay: function(input) {
        if (input.length > 0) {
          return true
        } else {
          return false
        }
      }
    },

  props: ['slidecontent'],


}
</script>


<style lang="scss" scoped>

.item {
    // -webkit-perspective: initial !important;
    // perspective: initial !important;
    // -webkit-transition: initial;
    // -o-transition: initial;
    // transition: initial;
    // -webkit-transform: initial !important;
    // transform: initial !important;
}
.maxwidth960{
  max-width: 760px !important;
}

.backgroundImage{
  background-size: cover
}
.textoverlay {
    }
.wrapperHeightTall {
    position: relative;
}
.followHeightTall {
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
}
.Aligner {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
