<template>
<div  :class="uniqueId"  class="col-sm-5 pb-mobile singleReferentie">
  <transition name="fade">
    <div v-if="show"  class="py-5 px-4">

      <div>
        <div class="" :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
          <div class="pr-3">
            <img src="content/img/icon_qoute.svg" />
          </div>
          <div class="" >
          <p style="margin-top:40px;margin-bottom:20px" class="card-text referenceSingleBlurb" v-html="popupContent.blurb"></p>
          <p  class=" smallText" v-html="popupContent.name+ '<br />' + popupContent.company"></p>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
