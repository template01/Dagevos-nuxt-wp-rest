<template>
<div>


  <div  data-v-71b732af="" class="columnwrapper container px-5 pt-mobile pb-mobile">
    <div  class="row">
      <div  data-v-71b732af="" class="pb-mobile col-sm-12" >
        <div  class="pt-5 px-4">
          <div  style="display: flex;">
            <div >
              <h4>Het Echte Werkt! | Leiderschapsontwikkeling werkt voor en met:</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="logoWrapperDesktop container p-4 hidden-md-down">

    <swiper class="ass" :options="swiperOption" ref="mySwiper" style="">
      <swiper-slide class="" v-for="(item, index) in contentin4th" v-bind:key="index">
        <div class="row p-5 ">
          <div class="logo" v-for="image in item" :style="{'width':100/content.slice(0,4).length+'%'}">
            <a :href="image.url" target="_blank"><img :src="image.logo.sizes.medium" /></a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <div class="logoWrapperDesktop container p-4 hidden-md-up">
    <swiper class="ass" :options="swiperOption" ref="mySwiper" style="">
      <swiper-slide class="" v-for="(item, index) in contentin4th" v-bind:key="index">
        <div class="row p-5 ">
          <div class="logo" v-for="image in item" :style="{'width':100/content.slice(0,2).length+'%'}">
            <a :href="image.url" target="_blank"><img :src="image.logo.sizes.medium" /></a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</div>
</template>

<script>
export default {
  data() {
    var vm = this
    return {
      showRef: false,
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        loop: true,
        // grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        // pagination: '.swiper-pagination',
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        // scrollbar: '.swiper-scrollbar',
        // mousewheelControl: true,
        observeParents: true,
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onSlideChangeStart(swiper) {},
      },

    }
  },

  props: ['content'],

  computed: {
    contentin4th: function() {

      Array.prototype.chunk = function(n) {
        if (!this.length) {
          return [];
        }
        return [this.slice(0, n)].concat(this.slice(n).chunk(n));
      };

      return this.content.chunk(4);

    }
  }

}
</script>

<style lang="scss" scoped >
.logoWrapperDesktop {
    // max-width: 75%;
}
.logo {
    display: flex;
    height: 100px;
    a {
        display: flex;

    }
    img {
        width: 100%;
        padding: 25px;
        margin: 0 auto;
    }
}
</style>
