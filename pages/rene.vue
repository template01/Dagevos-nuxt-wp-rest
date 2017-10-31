<template>
<div>
  <dagevosHeader></dagevosHeader>

  <div id="">


    <div class="fullimage">
      <div :style="{'background-image':'url(\''+mainContent.section_1.full.imgpath+'\')'}" class="index-full-cover heightTall hidden-sm-down">
      </div>
      <div class="container px-5 hidden-sm-up">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="pullimage-left">
              <img style="width:100%;" class="" :src="mainContent.section_1.full.imgpath" alt="">
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
                <h4 class="mb-5" v-html="mainContent.section_2.left.title"></h4>
                <div class="" v-html="mainContent.section_2.left.content"></div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS hidden-sm-down">
            <dagevosSingleReferentie :referenties="referenties.referenties"></dagevosSingleReferentie>
          </div>
          <div class="col-sm-6 hidden-sm-up">
            <dagevosSingleReferentie :referenties="referenties.referenties"></dagevosSingleReferentie>
          </div>

        </div>
      </div>

      <div class="container greyBackground px-5 pt-mobile pb-mobile">
        <div class="row">


          <div class="col-sm-6 pb-mobile">
            <div class="p-5">
              <div class="">
                <h4 class="mb-5" v-html="mainContent.section_3.left.title"></h4>
                <div class="" v-html="mainContent.section_3.left.content"></div>

              </div>
            </div>
          </div>

        </div>
      </div>

          <!-- IMG RIGHT -->


        <!-- <div class="container greyBackground px-5 pt-mobile pb-mobile">
          <div class="row">


            <div class="col-sm-6 pb-mobile">
              <div class="p-5">
                <div class="">
                  <h4 class="mb-5" v-html="mainContent.section_1.left.title"></h4>
                  <div class="" v-html="mainContent.section_1.left.content"></div>

                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="float-left pullimage-left">
                <img style="max-width:100%;" class="" :src="mainContent.section_1.right.imgpath" alt="" />
              </div>
            </div>

          </div>
        </div> -->

        <!-- IMG LEFT -->

        <!-- <div class="container px-5 pt-mobile pb-mobile">
            <div class="row">

              <div class="col-sm-6">
                <div class="float-left pullimage-left">
                  <img style="max-width:100%;" class="" :src="mainContent.section_6.left.imgpath" alt="" />
                </div>
              </div>
              <div class="col-sm-6 pb-mobile">
                <div class="p-5">
                  <div class="">
                    <h4 class="mb-5" v-html="mainContent.section_6.right.title"></h4>
                    <div class="" v-html="mainContent.section_6.right.content"></div>

                  </div>
                </div>
              </div>

            </div>
          </div> -->


    <!--

      <div class="container px-5 pt-mobile pb-mobile">

        <div class="row">
          <div class="col-sm-6 pb-mobile">
            <div class="p-5">
              <div class="">
                <h4 class="mb-5" v-html="mainContent.section_2.left.title"></h4>
                <div class="" v-html="mainContent.section_2.left.content"></div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 negativeSpacerTopM negativeSpacerBottomS hidden-sm-down">
            <dagevosSingleReferentie :referenties="referenties.referenties"></dagevosSingleReferentie>
          </div>
          <div class="col-sm-6 hidden-sm-up">
            <dagevosSingleReferentie :referenties="referenties.referenties"></dagevosSingleReferentie>
          </div>

        </div>
      </div> -->



  </div>


  <dagevosFooter></dagevosFooter>

</div>
</template>

<script>

import dagevosHeader from '~/components/dagevosHeader.vue'

import dagevosFooter from '~/components/dagevosFooter.vue'
import dagevosSingleReferentie from '~/components/dagevosSingleReferentie.vue'

import referenties from '~/static/content/json/referenties.json'

import mainContent from '~/static/content/json/rene.json'


import axios from 'axios'

export default {
  components: {

    dagevosHeader,

    dagevosFooter,
    dagevosSingleReferentie
  },

  data: function() {
    return {
      mainContent,
      referenties
    }
  },

}
</script>

<style lang="scss">
@import "~assets/css/main.scss";
h1,
h2,
h3,
h4,
h5,
h6 {
    color: $purple;
}

a {
    text-decoration: none;
    color: inherit !important;
}
</style>
