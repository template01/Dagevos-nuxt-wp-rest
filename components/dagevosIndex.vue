<template>
<div class="" id="index">

  <div class="fullimage">
    <div :style="{'background-image':'url(\''+indexIndexProp.section_1.full.imgpath+'\')'}" class="index-full-cover heightTall hidden-sm-down">
    </div>
    <div class="container px-5 hidden-sm-up">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="pullimage-left">
            <img style="width:100%;" class="" :src="indexIndexProp.section_1.full.imgpath" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="container px-5 pt-mobile pb-mobile">

    <div class="row">
      <div class="col-sm-6 pb-mobile">
        <div class="p-5">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.section_2.left.title"></h4>
            <div class="" v-html="indexIndexProp.section_2.left.content"></div>
              <nuxt-link class="float-right mt-2 mb-5" :to="indexIndexProp.section_2.left.button.link" v-html="indexIndexProp.section_2.left.button.content+' <i class=\'fa fa-hand-o-right\' aria-hidden=\'true\'></i>'"></nuxt-link>
          </div>
        </div>
      </div>


      <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS hidden-sm-down">
        <dagevosSingleReferentie :referentiesalt="true" :referenties="indexRefsProp.referenties_alt"></dagevosSingleReferentie>
      </div>
      <div class="col-sm-6 hidden-sm-up">
        <dagevosSingleReferentie :referentiesalt="true" :referenties="indexRefsProp.referenties_alt"></dagevosSingleReferentie>
      </div>


    </div>
  </div>


  <div class="container greyBackground px-5 pt-mobile pb-mobile">
    <div class="row">


      <div class="col-sm-6 pb-mobile">
        <div class="p-5">
          <div class="">
            <img style="max-width:100%;" :class="indexIndexProp.section_3.left.imgillustration ? 'illustration' :''" :src="indexIndexProp.section_3.left.imgpath" alt="" />
          </div>
        </div>
      </div>


      <div class="col-sm-6 pb-mobile">
        <div class="p-5">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.section_3.right.title"></h4>
              <nuxt-link class="float-right mt-2 mb-5" :to="indexIndexProp.section_3.right.button.link" v-html="indexIndexProp.section_3.right.button.content+' <i class=\'fa fa-hand-o-right\' aria-hidden=\'true\'></i>'"></nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>



  <div class="fullimage">
    <div :style="{'background-image':'url(\''+indexIndexProp.section_4.full.imgpath+'\')'}" class="index-full-cover heightTall hidden-sm-down">
    </div>
    <div class="container px-5 hidden-sm-up">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="pullimage-left">
            <img style="width:100%;" class="" :src="indexIndexProp.section_4.full.imgpath" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="container greyBackground px-5 pt-mobile pb-mobile">
    <div class="row">

      <div class="col-sm-6 pb-mobile">
        <div class="p-5">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.section_5.left.title"></h4>
            <div class="" v-html="indexIndexProp.section_5.left.content"></div>
              <nuxt-link class="float-right mt-2 mb-5" :to="indexIndexProp.section_5.left.button.link" v-html="indexIndexProp.section_5.left.button.content+' <i class=\'fa fa-hand-o-right\' aria-hidden=\'true\'></i>'"></nuxt-link>
          </div>
        </div>
      </div>


      <div id="opdrachtgevers" class="col-sm-6">
        <div class="p-5">
          <h4 class="mb-5">Opdrachtgevers</h4>
          <div class="row mt-5 hidden-sm-down">
            <div class="col-sm-4 p-4 flexer" v-for="opdrachtgever in indexOpdrachtsProp.opdrachtgevers.slice(0, 12)">
              <img style="max-width:100%;" class="flexerContentCenter" :src="opdrachtgever.imgpath" alt="">
            </div>
          </div>
          <!-- <nuxt-link class="float-right mt-2 mb-5" to="#" class="btn btn-primary">Go somewhere</nuxt-link> -->
        </div>
      </div>
      <div class="row mt-5 hidden-sm-up pt-mobile">
        <div class="flexer" style="width:50%; padding-left: 5%; padding-right: 5%; padding-top: 1rem; padding-bottom: 1rem;" v-for="opdrachtgever in indexOpdrachtsProp.opdrachtgevers">
          <img style="width:100%;" class="flexerContentCenter" :src="opdrachtgever.imgpath" alt="">
        </div>
      </div>


    </div>
  </div>



  <div class="container px-5 pt-mobile pb-mobile">
    <div class="row">

      <div class="col-sm-6">
        <div class="float-left pullimage-left">
          <img style="max-width:100%;" class="" :src="indexIndexProp.section_6.left.imgpath" alt="" />
        </div>
      </div>
      <div class="col-sm-6 pb-mobile">
        <div class="p-5">
          <div class="">
            <h4 class="mb-5" v-html="indexIndexProp.section_6.right.title"></h4>
            <div class="" v-html="indexIndexProp.section_6.right.content"></div>
              <nuxt-link class="float-right mt-2 mb-5" :to="indexIndexProp.section_6.right.button.link" v-html="indexIndexProp.section_6.right.button.content+' <i class=\'fa fa-hand-o-right\' aria-hidden=\'true\'></i>'"></nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>




  <!-- <div class="container px-5 pt-mobile">

    <div class="row">

      <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS hidden-sm-down">
        <dagevosSingleReferentie :referenties="indexRefsProp.referenties"></dagevosSingleReferentie>
      </div>
      <div class="col-sm-6 hidden-sm-up">
        <dagevosSingleReferentie :referenties="indexRefsProp.referenties"></dagevosSingleReferentie>
      </div>
    </div>
  </div> -->

</div>
</template>

<script>
import _ from 'lodash'
import vueResource from 'vue-resource'
import dagevosSingleReferentie from '~/components/dagevosSingleReferentie.vue'

export default {
  data() {
    return {
      // indexWat: '',
      // indexHoe: '',
      // indexReferenties: [],
      // indexOpdrachtgevers: [],
    }
  },
  props: ['indexRefsProp', 'indexIndexProp', 'indexOpdrachtsProp'],
  components: {
    dagevosSingleReferentie
  }

}
</script>


<style lang="scss" scoped>
@import "~assets/css/main.scss";
h1,
h2,
h3,
h4,
h5 {
    color: $purple;
}


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
  text-decoration: none;
}





</style>
