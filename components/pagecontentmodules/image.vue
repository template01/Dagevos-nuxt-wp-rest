<template>

  <div class="col-sm-6 backgroundImage" :style="{'background-image':'url('+content.sizes.large+')'}">
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
  .backgroundImage{
    // background-attachment: fixed;
    background-size: cover;
  }

</style>
