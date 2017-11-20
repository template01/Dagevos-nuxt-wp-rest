<template>
<div>

  <div v-for="(section,index) in pagecontentdata ">
    <!-- {{section}} -->

    <referentiesSlideshow v-if="section.acf_fc_layout === 'references_carousel'" :refsProp="referenties"></referentiesSlideshow>
    <fullwidthbackgroundimage v-if="section.acf_fc_layout === 'full_width_background_image'" :content="section.content" :textoverlay="section.text_overlay" ></fullwidthbackgroundimage>
    <fullwidthlogostrip v-if="section.acf_fc_layout === 'full_width_logo_strip'" :content="section.content"></fullwidthlogostrip>
    <fullwidthtextblock v-if="section.acf_fc_layout === 'full_width_text_block'" :backgroundcolor="section.background_color" :content="section.content"></fullwidthtextblock>
    <columnwrapper :backgroundcolor="section.background_color" v-if="section.acf_fc_layout === 'column_content'">
      <template v-for="(columncontent, index) in section.content">
          <textblock  v-if="columncontent.acf_fc_layout === 'text_block'" :content="columncontent.content" :link="columncontent.link ?[columncontent.link_text,columncontent.link_url]:''" ></textblock>
          <!-- <illustration  v-if="columncontent.acf_fc_layout === 'illustration'" :content="columncontent.content" ></illustration> -->
          <imagecomp  v-if="columncontent.acf_fc_layout === 'illustration'" :content="columncontent.content" ></imagecomp>
          <imagecomp v-if="columncontent.acf_fc_layout === 'half_width_image'" :index="index" :content="columncontent.content" ></imagecomp>
          <!-- <popupreferentie  v-if="columncontent.acf_fc_layout === 'popup_reference'" :content="columncontent.content"></popupreferentie> -->
        </template>
    </columnwrapper>

    <template  v-if="index<pagecontentdata.length - 1">
      <div  v-if="section.acf_fc_layout != 'full_width_background_image' && pagecontentdata[index+1].acf_fc_layout != 'full_width_background_image'"  class="container">
        <div class="row justify-content-md-center">
          <div class=" col-md-9">
            <hr>
          </div>
        </div>
      </div>
    </template>


  </div>

  <div v-if="$route.path==='/contact'">
    <iframe width="100%" height="450" frameborder="0" style="border:0; display:block;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdpujfRGgsh0YZh6sRV9csRsrV9onmAls
    &q=De+Fabriek+van+Delfshaven,NL" allowfullscreen>
</iframe>
  </div>

</div>
</template>

<script>
import _ from 'lodash'
import fullwidthbackgroundimage from '~/components/pagecontentmodules/fullwidthbackgroundimage.vue'
import textblock from '~/components/pagecontentmodules/textblock.vue'
import illustration from '~/components/pagecontentmodules/illustration.vue'
import referentiesSlideshow from '~/components/dagevosReferentiesSlideshow.vue'
import fullwidthlogostrip from '~/components/pagecontentmodules/fullwidthlogostrip.vue'
import fullwidthtextblock from '~/components/pagecontentmodules/fullwidthtextblock.vue'
import popupreferentie from '~/components/pagecontentmodules/popupreferentie.vue'
import imagecomp from '~/components/pagecontentmodules/image.vue'
import columnwrapper from '~/components/pagecontentmodules/columnwrapper.vue'

export default {
  data() {
    return {
      pagecontentdata: this.pagecontent.acf.page_content
      // indexWat: '',
      // indexHoe: '',
      // indexReferenties: [],
      // indexOpdrachtgevers: [],
    }
  },
  props: ['refs', 'pagecontent', 'referenties'],
  components: {
    fullwidthbackgroundimage,
    textblock,
    illustration,
    imagecomp,
    popupreferentie,
    fullwidthtextblock,
    fullwidthlogostrip,
    referentiesSlideshow,
    columnwrapper
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
    text-decoration: none;
}
</style>
