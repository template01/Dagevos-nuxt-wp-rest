<template>
  <div class="col-sm-6 pb-mobile">
    <div class="p-5">
      <div class="">
        <!-- <img style="max-width:100%;" :class="indexIndexProp.section_3.left.imgillustration ? 'illustration' :''" :src="indexIndexProp.section_3.left.imgpath" alt="" /> -->
        <img class="illustration" style="max-width:100%;" :src="content.url" alt="" />
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
