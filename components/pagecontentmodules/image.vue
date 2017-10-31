<template>
  <!-- <div class="col-sm-6 pb-mobile">
    <div class="p-5">
      <div class="">
        <img class="illustration" style="max-width:100%;" :src="content.url" alt="" />
      </div>
    </div>
  </div> -->
  <div class="col-sm-6">
    <div class="float-left " :class="index === 0 ? 'pullimage-left' : 'pullimage-right'">
      <img style="max-width:100%;" class="" :src="content.url" alt="" />
    </div>
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
</style>
