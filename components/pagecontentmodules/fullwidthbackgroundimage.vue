<template>
  <div class="fullimage">
    <div :style="{'background-image':'url(\''+content.url+'\')'}" class="index-full-cover heightTall hidden-sm-down">
    </div>
    <div class="container px-5 hidden-sm-up">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="pullimage-left">
            <img style="width:100%;" class="" :src="content.url" alt="">
          </div>
        </div>
      </div>
    </div>
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
</style>
