<template>
<div  :class="uniqueId"  class="col-sm-5 pb-mobile singleReferentie">
  <transition name="fade">
    <div v-if="show"  class="py-5 px-4">

      <div>
        <div class="" :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
          <!-- <h4 class="mb-5" v-html="indexIndexProp.section_2.left.title"></h4> -->
          <div class="pr-3">
            <img src="content/img/icon_qoute.svg" />

          </div>
          <!-- <div class="" v-html="content"></div> -->
          <p style="margin-top:40px;margin-bottom:30px" class="card-text referenceSingleBlurb" v-html="popupContent.blurb"></p>


          <!-- <nuxt-link v-if="link.length>0" class="float-right mt-2 mb-5" :to="link[1]" v-html="link[0]+' <i class=\'fa fa-hand-o-right\' aria-hidden=\'true\'></i>'"></nuxt-link> -->

          <!-- <nuxt-link class="float-right mt-2 mb-5" :to="indexIndexProp.section_2.left.button.link" v-html="indexIndexProp.section_2.left.button.content+' <i class=\'fa fa-hand-o-right\' aria-hidden=\'true\'></i>'"></nuxt-link> -->
        </div>
      </div>
      <!-- <p  class="text-right smallText" v-html="popupContent.name+ addHyphen(popupContent.name) + popupContent.function + addHyphen(popupContent.function) + popupContent.company"></p> -->
      <p  class="text-right smallText" v-html="popupContent.name+ addHyphen(popupContent.name) + popupContent.company"></p>
      <!-- <p class="float-right" style="margin-bottom:0" v-html="popupContent.name+' -&nbsp;'"></p>
      <p class="float-right" style="margin-bottom:0" v-html="popupContent.function+' -&nbsp;'"></p>
      <p class="float-right" style="margin-bottom:0" v-html="popupContent.company"></p> -->
    </div>
  </transition>
</div>


<!-- <div class="col-sm-5 pb-mobile whiteBackground referenceSingleBlurbWrapper">
  <div class="">
    <img src="content/img/icon_qoute.svg"/>
    <div :class="uniqueId" class="">
        <div class="Aligner py-5 px-4">
          <div class="Aligner-item Aligner-item--top py-5 px-4">
            <div class="">
              <p class="card-title float-left mr-3">Referentie</p>
              <nuxt-link class="card-title float-right mr-3" to="/referenties"><p class="">Lees meer referenties</p></nuxt-link>
            </div>
          </div>
          <div class="Aligner-item Aligner-item--middle py-5 px-4">
          </div>
          <div class="Aligner-item Aligner-item--bottom py-5 px-4">
            <p class="float-left" style="margin-bottom:0" v-html="popupContent.name+' -&nbsp;'"></p>
            <p class="float-left" style="margin-bottom:0" v-html="popupContent.function+' -&nbsp;'"></p>
            <p class="float-left" style="margin-bottom:0" v-html="popupContent.company"></p>
          </div>
        </div>

    </div>
  </div>
</div> -->
</template>

<script>
import axios from 'axios'
import inView from 'in-view'


export default {
  data() {
    return {
      popupContent: '',
      uniqueId: '',
      show: false
    }
  },

  props: ['content'],
  methods: {

    addHyphen: function(inputField){
      if(inputField.length>0){
        return ' -&nbsp;'
      }else{
        return ''

      }
    },

    getpopup: function() {
      var vm = this
      axios.get(this.$store.state.apiRoot + 'references/' + this.content).then(function(response) {
        console.log(response)
        vm.popupContent = response.data.acf
      })
    },

    guid() {
      function stringGen(len) {
        var text = "";

        var charset = "abcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < len; i++)
          text += charset.charAt(Math.floor(Math.random() * charset.length));

        return text;
      }
      return stringGen(48);

    },
    slideinRef: function() {
      console.log(document.querySelectorAll('.' + this.uniqueId))
      console.log(this.uniqueId)
      var vm = this
      setTimeout(function() {
        inView('.' + vm.uniqueId).on('enter', el => {
          console.log(vm.uniqueId)
          vm.show = true
        });
      }, 100)

    }



  },

  mounted: function() {
    this.getpopup()
    this.uniqueId = this.guid()


  },

  watch: {
    uniqueId: function() {
      this.slideinRef()

    }
  }

}
</script>


<style lang="scss">
.singleReferentie{
  *{
    color: #552e87 !important;
  }

  .referenceSingleBlurb{
    font-style: italic;
    p:last-of-type{
      margin-bottom: 0;
    }
  }

}

</style>
<style lang="scss" scoped>
*{
  color: #552e87 !important
}
.fade-enter-active,
.fade-leave-active {
    transition: transform 1s, opacity 1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
