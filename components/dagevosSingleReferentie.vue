<template>
<div :class="uniqueId" class="">
  <transition name="fade">
    <div class="dagevosSingleReferentie card m-5" v-if="show">
      <div class="card-block">
        <div class="row">
          <div class="">
            <h6 v-if="!referentiesalt" class="card-title float-left mr-3">Referentie</h6>
          </div>
        </div>
        <div class="row mb-3">
          <h1 class="card-text" v-html="!isNaN(referentiesspecific) ? referenties[referentiesspecific].blurb : referenties[selectRandomReferentie()].blurb"></h1>
        </div>
        <div class="row pt-2">
            <p class="card-text mr-3 " style="margin-bottom:0" v-html="!isNaN(referentiesspecific) ? referenties[referentiesspecific].name :  referenties[selectRandomReferentie()].name"></p>
            <p class="card-text" style="margin-bottom:0" v-html="!isNaN(referentiesspecific) ? referenties[referentiesspecific].function :  referenties[selectRandomReferentie()].function"></p>
        </div>
      </div>
    </div>

  </transition>
</div>
</template>

<script>
import inView from 'in-view'

export default {
  data() {
    return {
      uniqueId: '',
      show: false
    }
  },
  props: ['personFunction', 'name', 'blurb', 'referenties','referentiesalt','referentiesspecific'],
  methods: {
    selectRandomReferentie: function(){
      return Math.floor(Math.random() * this.referenties.length)
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
    this.uniqueId = this.guid()

  },

  watch: {
    uniqueId: function() {
      this.setFeaturedImage()

    }
  }

}
</script>
<style>
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
</style>
