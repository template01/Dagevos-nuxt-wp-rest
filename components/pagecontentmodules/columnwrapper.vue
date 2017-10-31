<template>
  <div class="columnwrapper container px-5 pt-mobile pb-mobile" :class="backgroundcolor === 'grey' ? 'greyBackground':''">
    <div class="row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['backgroundcolor'],


}
</script>

<style lang="scss" scoped>
</style>
