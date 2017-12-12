<template>
<div class="col-sm-5  pb-mobile">
  <!-- <div class="backgroundImage" :style="{'background-image':'url('+content.sizes.large+')'}"></div> -->
  <img class=" px-4 py-5 verticalAlign lazyload" v-lazy="content.sizes.large" />

</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['content', 'index'],


}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    transition: opacity 1.25s;
    transition-delay: 0.25s;
    opacity:0
}

img[lazy=loading] {
  /*your style here*/
  opacity: 0
}
img[lazy=error] {
  /*your style here*/
}
img[lazy=loaded] {
  /*your style here*/
  opacity: 1
}

.verticalAlign {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
.backgroundImage {
    height: 100%;
    // margin: 40px;
    // background-attachment: fixed;
    background-size: cover;
}
</style>
