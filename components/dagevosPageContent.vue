<template>
  <div>
    <div v-for="section in pagecontentdata ">
      <!-- {{section}} -->
      <fullwidthbackgroundimage v-if="section.acf_fc_layout === 'full_width_background_image'" :content="section.content"></fullwidthbackgroundimage>
      <columnwrapper :backgroundcolor="section.background_color" v-if="section.acf_fc_layout === 'column_content'">
        <template v-for="(columncontent, index) in section.content">
          <textblock  v-if="columncontent.acf_fc_layout === 'text_block'" :content="columncontent.content" :link="columncontent.link ?[columncontent.link_text,columncontent.link_url]:''" ></textblock>
          <illustration  v-if="columncontent.acf_fc_layout === 'illustration'" :content="columncontent.content" ></illustration>
          <imagecomp v-if="columncontent.acf_fc_layout === 'half_width_image'" :index="index" :content="columncontent.content" ></imagecomp>
        </template>
      </columnwrapper>
    </div>
    <div v-if="$route.path==='/referenties'">
      <referentiesSlideshow :refsProp="referenties"></referentiesSlideshow>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import dagevosSingleReferentie from '~/components/dagevosSingleReferentie.vue'
import fullwidthbackgroundimage from '~/components/pagecontentmodules/fullwidthbackgroundimage.vue'
import textblock from '~/components/pagecontentmodules/textblock.vue'
import illustration from '~/components/pagecontentmodules/illustration.vue'
import referentiesSlideshow from '~/components/dagevosReferentiesSlideshow.vue'
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
  props: ['refs', 'pagecontent','referenties'],
  components: {
    dagevosSingleReferentie,
    fullwidthbackgroundimage,
    textblock,
    illustration,
    imagecomp,
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
