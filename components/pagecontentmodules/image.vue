<template>

  <div class="col-sm-5 px-4 py-5" >
    <!-- <div class="backgroundImage" :style="{'background-image':'url('+content.sizes.large+')'}"></div> -->
    <img :src="content.sizes.large"/>
    <!-- <div class="float-left " :class="index === 0 ? 'pullimage-left' : 'pullimage-right'">
      <img style="max-width:100%;" class="" :src="content.url" alt="" />
    </div> -->
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  props: ['content','index'],


}
</script>

<style lang="scss" scoped>
img{
  width: 100%;
}
  .backgroundImage{
    height: 100%;
    // margin: 40px;
    // background-attachment: fixed;
    background-size: cover;
  }

</style>
