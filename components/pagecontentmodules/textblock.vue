<template>
    <div class="col-sm-7 pb-mobile">
      <div class="py-5 px-4">
        <div class="">
          <!-- <h4 class="mb-5" v-html="indexIndexProp.section_2.left.title"></h4> -->
          <div class="" v-html="content"></div>
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
  props: ['content','link'],


}
</script>

<style lang="scss" scoped>

a{
  font-family: 'Aileron' ;
  font-size: 20px;
  transition: all .5s;
  cursor: pointer;
  border-bottom: 2px solid #552E87;
  display: inline-block;
}

a:hover{
  transform: translateX(15px);
  text-decoration: none !important;

}





</style>
