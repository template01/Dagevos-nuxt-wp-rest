<template>
<div class="container fullwidthtextblock"  :class="backgroundcolor === 'grey' ? 'greyBackground':''">
  <div class="row ">
    <div class="col-sm-12 pb-mobile pt-mobile ">
      <div class="py-5 px-4">
        <!-- <div class="p-5"> -->
          <div class="centerContent" v-html="content"></div>

        <!-- </div> -->
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
  props: ['content','backgroundcolor'],


}
</script>

<style lang="scss">
.fullwidthtextblock{

  *{
    // font-weight: 300;
    // font-size: 23px !important;
    // color: #572986 !important;
    // line-height:1.25 !important;
    // margin: 0;
  }

  .centerContent{
    // max-width: 800px;
    margin: 0 auto;
  }
}
</style>
