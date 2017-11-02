<template>
<!-- <div class="col-sm-6 pb-mobile">
  <div class="p-5">
    <div class="">
      {{popupContent.name}}
    </div>
  </div>
</div> -->
<div class="col-sm-6 pb-mobile negativeSpacerTopL">
  <div class="p-5">
    <div :class="uniqueId" class="">
      <transition name="fade">
        <div class="dagevosSingleReferentie card p-3" v-if="show">
          <div class="card-block">
            <div class="row">
              <div class="">
                <p class="card-title float-left mr-3">Referentie</p>
              </div>
            </div>
            <div class="row mb-3">
              <h4 class="card-text referenceSingleBlurb" v-html="popupContent.blurb"></h4>
            </div>
            <div class="row pt-2">
            <p class="card-text mr-3 " style="margin-bottom:0" v-html="popupContent.name"></p>
            <p class="card-text mr-3" style="margin-bottom:0" v-html="popupContent.function"></p>
            <p class="card-text" style="margin-bottom:0" v-html="popupContent.company"></p>
        </div>
          </div>
        </div>

      </transition>
    </div>
  </div>
</div>
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
    setFeaturedImage: function() {
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
      this.setFeaturedImage()

    }
  }

}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: transform .5s, opacity .5s, max-height 2s;
  -webkit-transition-delay: .250s;
  transition-delay: .250s;
  max-height: 1200px;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  max-height: 0px;
  transform: translateY(30px);
}
.referenceSingleBlurb{
 *{
   font-size: inherit !important;
   line-height: inherit !important;
   font-family: inherit !important;
   color: inherit !important;
   letter-spacing: inherit !important;
 }
}
</style>
