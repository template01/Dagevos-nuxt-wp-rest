<template>
<div>
  <div class="oldbrowser" v-if="oldbrowser">
    <div class="oldbrowsercontent">

      <h1>Je browser is verouderd </h1>
      <a target="_blank" href="http://outdatedbrowser.com/nl"><h1>Probeer een van deze <i class="fa fa-laptop" aria-hidden="true"></i> </h1></a>

      <h1><span class="gaverder" @click="oldbrowser=false">...of ga verder</span></h1>
    </div>
  </div>
  <nuxt/>
</div>
</template>
<script>
export default {

  data: function() {
    return {

      oldbrowser: false
    }
  },

  methods:{
    browserPopup: function(){
      this.oldbrowser = true
      // http://outdatedbrowser.com/en
    },
    detectIE: function(){
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        this.browserPopup()
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
        this.browserPopup()
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      // other browser
      return false;
    }
  },

  mounted() {
    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    this.detectIE()

  }
}
</script>

<style>

.oldbrowser{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #f6f5fdba;
  z-index: 99999999999999;
}
.oldbrowsercontent{
  position: relative;
top: 50%;
transform: perspective(1px) translateY(-50%);
text-align: center;
}

.oldbrowsercontent a{
  border-bottom: 4px solid;
  display: inline-block;
}

.oldbrowsercontent .gaverder {
  background: #552E87;
  color: white;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 100px;
  display: inline-block;
  margin: 20px;
  cursor: pointer;
}

.oldbrowsercontent a:active{
  text-decoration: none !important;
}
.oldbrowsercontent a:hover{
  text-decoration: none !important;
}


.oldbrowsercontent a h1{
  margin-bottom: 0;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
