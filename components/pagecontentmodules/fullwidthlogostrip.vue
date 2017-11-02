<template>
<div>

  <div class="logoWrapperDesktop container p-4 hidden-md-down">
    <div class="row p-5 ">
      <div class="logo" :style="{'width':100/content.slice(0,4).length+'%'}" v-for="item in content.slice(0,4)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,4).length+'%'}" v-for="item in content.slice(4,8)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,4).length+'%'}" v-for="item in content.slice(8,12)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,4).length+'%'}" v-for="item in content.slice(12,16)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
    </div>
  </div>

  <div class="logoWrapperDesktop container p-4 hidden-md-up">
    <div class="row ">
      <div class="logo" :style="{'width':100/content.slice(0,2).length+'%'}" v-for="item in content.slice(0,2)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,2).length+'%'}" v-for="item in content.slice(2,4)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,2).length+'%'}" v-for="item in content.slice(4,6)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,2).length+'%'}" v-for="item in content.slice(6,8)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
    </div>
  </div>

  <!-- <div class="logoWrapperMobile container px-5 hidden-md-up">
    <div class="row ">
      <div class="logo" :style="{'width':100/content.slice(0,3).length+'%'}" v-for="item in content.slice(0,3)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,3).length+'%'}" v-for="item in content.slice(3,6)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,3).length+'%'}" v-for="item in content.slice(6,9)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,3).length+'%'}" v-for="item in content.slice(9,12)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,3).length+'%'}" v-for="item in content.slice(12,15)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,3).length+'%'}" v-for="item in content.slice(15,18)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,3).length+'%'}" v-for="item in content.slice(18,21)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
      <div class="logo" :style="{'width':100/content.slice(0,3).length+'%'}" v-for="item in content.slice(21,24)">
        <a :href="item.url" target="_blank"><img :src="item.logo.sizes.medium" /></a>
      </div>
    </div>
  </div> -->


</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['content'],


}
</script>

<style lang="scss" scoped>

.logoWrapperDesktop{
  // max-width: 75%;
}
.logo {
    display: flex;
    height: 100px;
    a{
      display: flex;

    }
    img {
        width: 100%;
        padding: 25px;
        margin: 0 auto;
    }
}
</style>
