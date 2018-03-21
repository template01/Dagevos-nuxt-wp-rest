<template>
<div>



  <div class="logoWrapperDesktop container px-4 ">
    <div class="row">

      <!-- DESKTOP -->
      <swiper class="hidden-md-down" :options="swiperOption" ref="mySwiper" style="">
        <div class="swiper-button-prev hidden-sm-down" style='background-image:' slot="button-prev"></div>
        <div class="swiper-button-next hidden-sm-down" slot="button-next"></div>
        <swiper-slide class="" v-for="(item, index) in contentin4th" v-bind:key="index">
          <div class="row p-5 ">
            <div class="logo" v-for="image in item" :style="{'width':100/content.slice(0,4).length+'%'}">
              <!-- <a :href="image.url" target="_blank">hello</a> -->
              <a :href="image.url" target="_blank"><img :src="image.logo.sizes.medium" /></a>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- MOBILE -->
      <div class=" container p-4 hidden-md-up">
        <swiper class="" :options="swiperOption" ref="mySwiper" style="">
          <div class="swiper-button-prev" style='background-image:' slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <swiper-slide class="px-3" v-for="(item, index) in contentin4th" v-bind:key="index">
            <div class="row p-5 ">
              <div class="logo" v-for="image in item" :style="{'width':100/content.slice(0,2).length+'%'}">
                <a :href="image.url" target="_blank"><img :src="image.logo.sizes.medium" /></a>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
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
        loop: true,
        setWrapperSize: true,
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observeParents: true,
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
      if (window.innerWidth > 992) {
        return this.content.chunk(4);
      } else {
        return this.content.chunk(2);
      }

    }
  }

}
</script>

<style lang="scss" scoped >
.swiper-slide {
    // display: none;
}
.logoWrapperDesktop {
    // max-width: 75%;
}

.logo {
    display: flex;
    height: 120px;
    a {
        width: 100%;
        height: 100%;
        // display: flex;

    }
    img {
        max-width: 100%;
        max-height: 100%;
        padding: 15px;
        margin: 0 auto;
        display: block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
}

@media (min-width: 992px) {

    .logo {

        img {
            padding: 25px;
        }
    }
}
</style>
