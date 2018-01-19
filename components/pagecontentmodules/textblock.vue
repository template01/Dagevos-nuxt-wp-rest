<template>
<div class="pb-mobile" :class="halfwidthcolumn ? 'col-sm-6':'col-sm-7' ">
  <div class="py-5 px-4">
    <div class="" :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
      <!-- <h4 class="mb-5" v-html="indexIndexProp.section_2.left.title"></h4> -->
      <div v-if="icon" class="icon pr-3">
        <img :src="icon.url" />
      </div>
      <div class="textcontent" :class="icon ?'iconcontent':''" v-html="content"></div>

      <nuxt-link v-if="link.length>0" class="float-right mt-2 mb-5" :to="link[1]" v-html="link[0]+' <i class=\'fa fa-hand-o-right\' aria-hidden=\'true\'></i>'"></nuxt-link>

      <!-- <nuxt-link class="float-right mt-2 mb-5" :to="indexIndexProp.section_2.left.button.link" v-html="indexIndexProp.section_2.left.button.content+' <i class=\'fa fa-hand-o-right\' aria-hidden=\'true\'></i>'"></nuxt-link> -->
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
  props: ['content', 'link', 'icon', 'halfwidthcolumn'],


}
</script>

<style lang="scss" scoped>
a {
    font-family: 'Aileron';
    font-size: 20px;
    transition: all 0.5s;
    cursor: pointer;
    border-bottom: 2px solid #552E87;
    display: inline-block;
}

a:hover {
    transform: translateX(15px);
    text-decoration: none !important;

}
</style>
<style lang="scss">
.icon{
  img{
    width: 34px
  }
}
.textcontent:not(.iconcontent) {
    @media (max-width: 991px) {
        h4 {
            text-align: center !important;
            padding-bottom: 15px;
        }
    }
}
</style>
