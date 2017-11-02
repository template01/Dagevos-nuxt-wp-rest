<template>
<div id="dagevosReferenties" class="">

  <!-- <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper> -->



  <div class="container  px-5 greyBackground">
    <div class="row">


      <swiper class="greyBackground" :options="swiperOption" ref="mySwiper" style="">
        <swiper-slide class="" v-for="(referentie, index) in refsProp" v-bind:key="index">
          <div class="col-sm-6 float-left">
            <div class="p-5" style="">
              <div class="">
                <h4 class="" v-html="referentie.acf.name"></h4>
                <h4 class="" v-html="referentie.acf.function"></h4>
                <h1 v-html="referentie.acf.blurb">
                </h1>
              </div>
            </div>
          </div>

          <transition name="fade">

          <div v-if="showRef" class="col-sm-6 float-left  hidden-sm-up ">
            <div class="p-5" style="">
              <div class="">
                <div v-html="referentie.acf.full_reference">
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="col-sm-12 pb-mobile">

          <div class="col-sm-12  mb-5 mt-1 float-left  buttonImitate buttonBlueNoAnimate  hidden-sm-up "  @click="toggleLees()" style="border:0px; margin-bottom: 20px; text-align:center;">
            <span v-if="!showRef">
              Lees volledige referentie <i class="fa fa-hand-o-down" aria-hidden="true"></i>
            </span>
            <span v-if="showRef">
              Collapse volledige referentie <i class="fa fa-hand-o-up" aria-hidden="true"></i>
            </span>
          </div>
          </div>

          <div class="col-sm-6 float-left  hidden-sm-down ">
            <div class="p-5" style="">
              <div class="">
                <div v-html="referentie.acf.full_reference">
                </div>
              </div>
            </div>
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
          swipe voor meer referenties
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


  methods:{
    toggleLees: function(collapse){
      if(collapse === 'collapse'){
        this.showRef = false
      }else{
        this.showRef = !this.showRef
      }
      var vm = this
      // this.swiper.slideTo(3, 1000, false)
      setTimeout(function() {
        vm.swiper.update()
        // vm.swiper.slideTo(3, 1000, false)

      },200)
      setTimeout(function() {
        vm.swiper.slideTo(vm.swiper.activeIndex, 1000, false)
      },500)
      setTimeout(function() {
        vm.swiper.slideTo(vm.swiper.activeIndex, 1000, false)
      },800)
    }
  },
    // data() {
    //   return {
    //     // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
    //     // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
    //     notNextTick: true,
    //     swiperOption: {
    //       // swiper options 所有的配置同swiper官方api配置
    //       autoplay: 3000,
    //       direction: 'vertical',
    //       grabCursor: true,
    //       setWrapperSize: true,
    //       autoHeight: true,
    //       pagination: '.swiper-pagination',
    //       paginationClickable: true,
    //       prevButton: '.swiper-button-prev',
    //       nextButton: '.swiper-button-next',
    //       scrollbar: '.swiper-scrollbar',
    //       mousewheelControl: true,
    //       observeParents: true,
    //       // if you need use plugins in the swiper, you can config in here like this
    //       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
    //       debugger: true,
    //       // swiper callbacks
    //       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
    //       onTransitionStart (swiper) {
    //         console.log(swiper)
    //       }
    //       // more Swiper configs and callbacks...
    //       // ...
    //     }
    //   }
    // },
    // // you can find current swiper instance object like this, while the notNextTick property value must be true
    // // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
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
#dagevosReferenties {
    a {
        text-decoration: none;
        color: inherit !important;
    }
}

.swiper-wrapper{
  padding-top: 15px;
  padding-bottom: 45px;
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
.swiper-pagination-sm{

  .swiper-pagination-bullet{
    width: 16px;
    height: 16px;
  }

  &.swiper-pagination-bullets{
    bottom: 0px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: transform .5s, opacity .5s, max-height 0.5s;
  max-height: 2000px;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
