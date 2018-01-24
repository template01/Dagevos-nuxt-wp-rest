<template>
<div class="col-sm-5  pb-mobile Aligner">
  <!-- <div class="backgroundImage" :style="{'background-image':'url('+content.sizes.large+')'}"></div> -->
  <img class=" px-2 py-5 verticalAlign lazyload" v-lazy="content.sizes.large" />

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
    opacity: 0;
}

img[lazy=loading] {
    /*your style here*/
    opacity: 0;
}
img[lazy=error] {
    /*your style here*/
}
img[lazy=loaded] {
    /*your style here*/
    opacity: 1;
}
//
// .verticalAlign {
//   position: relative;
//   top: 50%;
//   transform: perspective(1px) translateY(-50%);
// }

.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}


.backgroundImage {
    height: 100%;
    // margin: 40px;
    // background-attachment: fixed;
    background-size: cover;
}
</style>
