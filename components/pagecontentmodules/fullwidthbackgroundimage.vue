<template>
<div class="fullimage">

  <!-- {{slidecontent}} -->
  <!-- DESKTOP -->

  <div class="wrapperHeightTall heightTall">
    <swiper class="followHeightTall" :options="swiperOption" ref="mySwiper" style="">
      <swiper-slide class="item" style="background:#f6f5fd" v-for="(slide, index) in slidecontent" v-bind:key="index">
        <div :style="[{'background-image':'url(\''+slide.content.sizes.large+'\')'},{'opacity':hasTextOverlay(slide.text_overlay)?'1':'1'}]" class="followHeightTall index-full-cover"></div>
        <!-- <img :data-src="slide.content.sizes.large" class="swiper-lazy"> -->
        <!-- <img :data-src="slide.content.sizes.large" class="swiper-lazy"> -->


        <div class=" Aligner heightTall  justify-content-md-center">
          <div class=" pb-5">
            <div class="row px-4 pb-5" style="margin:0 auto;">
              <div class="textoverlay"  style="margin-bottom:25px !important;">
                <div class="p-5">
                  <h4 v-html="slide.text_overlay"></h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </swiper-slide>

      <div v-if="slidecontent.length>1" class="swiper-pagination" slot="pagination"></div>


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
        touchRatio: 0,
        allowTouchMove: false,
        autoplay: {
          delay: 8000,
        },
        preloadImages: false,
        lazy: true,
        // allowSlidePrev: false,
        // allowSlideNext: false,
        // setWrapperSize: true,
        autoHeight: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
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

<style lang="scss">
.swiper-pagination{
  text-align: center;
  .swiper-pagination-bullet-active{
    background: #552E87 !important;
  }
}
</style>

<style lang="scss" scoped>
.swiper-pagination{
  background: #f6f5fd;
  bottom:0;
  padding-top: 10px;
}
// *{
//   pointer-events: none !important;
// }

.item {
    // -webkit-perspective: initial !important;
    // perspective: initial !important;
    // -webkit-transition: initial;
    // -o-transition: initial;
    // transition: initial;
    // -webkit-transform: initial !important;
    // transform: initial !important;
}
.maxwidth960 {
    max-width: 760px !important;
}

.backgroundImage {
    background-size: cover;
}
.textoverlay {
    // margin: 10px !important;
    background: rgba(246, 245, 253, 0.75);
    border-radius: 4px;
    h4 {
        font-family: Radnika !important;
        font-weight: 400 !important;
        font-size: 1.5rem!important;
    }
    h4:last-of-type {
        margin-bottom: 0 !important;
    }
    @media (max-width: 991px) {
        margin: 15px !important;


        h4 {
            font-size: 1.2rem!important;
        }
    }

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
    // display: flex;
    // align-items:center;
    // justify-content:center;
    > div {
        bottom: 0;
        position: absolute;
        width: 100% !important;
    }
}
</style>
