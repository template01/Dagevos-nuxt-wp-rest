<template>
<!-- <div class="col-sm-6 pb-mobile">
  <div class="p-5">
    <div class="">
      {{popupContent.name}}
    </div>
  </div>
</div> -->
<div class="col-sm-6 pb-mobile whiteBackground referenceSingleBlurbWrapper">
  <div class="">
    <div :class="uniqueId" class="">
        <!-- <div class="dagevosSingleReferentie card p-3" v-if="show"> -->
        <div class="Aligner p-5">
          <div class="Aligner-item Aligner-item--top p-5">
            <div class="">
              <p class="card-title float-left mr-3">Referentie</p>
              <nuxt-link class="card-title float-right mr-3" to="/referenties"><p class="">Lees meer referenties</p></nuxt-link>
            </div>
          </div>
          <div class="Aligner-item Aligner-item--middle p-5">
            <transition name="fade">
            <p v-if="show" class="card-text referenceSingleBlurb" v-html="popupContent.blurb"></p>
          </transition>
          </div>
          <div class="Aligner-item Aligner-item--bottom p-5">
            <p class="float-left" style="margin-bottom:0" v-html="popupContent.name+' -&nbsp;'"></p>
            <p class="float-left" style="margin-bottom:0" v-html="popupContent.function+' -&nbsp;'"></p>
            <p class="float-left" style="margin-bottom:0" v-html="popupContent.company"></p>
          </div>
        </div>
        <!-- </div> -->

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
.referenceSingleBlurbWrapper{
  min-height: 460px;
}
.Aligner {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
}

.Aligner-item {
    width: 100%;
    display: inline-block;
}

.Aligner-item--top {
    position: absolute;
    top: 0;
    left: 0;
}
.Aligner-item--middle {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    *{
      margin: 0;
    }
}
.Aligner-item--bottom {
    position: absolute;
    bottom: 0;
    left: 0;
}

.purpleBackground {
    background: #552e87;
    * {
        color: white !important;
    }
}

.whiteBackground {
    background: rgba(85, 46, 135, 0.15);
    * {
        color: #552e87 !important;
    }
}

.dagevosSingleReferentie {
    box-shadow: 0 0 20px 0 rgba(100,100,100,0.1);

}
.fade-enter-active,
.fade-leave-active {
    transition: transform 1s, opacity 1s, max-height 3s;
    -webkit-transition-delay: 0.450s;
    transition-delay: 0.450s;
    max-height: 1200px;
    overflow: hidden;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(30px);
}
.referenceSingleBlurb {
    * {
        font-weight: 300;
        font-size: 23px !important;
        line-height: 1.25 !important;
        font-family: inherit !important;
        color: inherit !important;
        letter-spacing: inherit !important;
    }
}
</style>
