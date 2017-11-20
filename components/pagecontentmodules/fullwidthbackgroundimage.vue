<template>
  <div class="fullimage">
    <!-- DESKTOP -->
    <div class="wrapperHeightTall heightTall hidden-sm-down">
      <div :style="[{'background-image':'url(\''+content.sizes.large+'\')'},{'opacity':hasTextOverlay?'0.45':'1'}]" class="index-full-cover followHeightTall">
      </div>
      <div class="container Aligner heightTall">
        <div class="row  justify-content-md-center">
          <div class="col-md-9 textoverlay">
            <h4 v-html="textoverlay"></h4>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE -->
    <div class="container px-5 hidden-sm-up">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="pullimage-left">
            <img style="width:100%;" class="" :src="content.url" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

export default {
  data() {
    return {

    }
  },
  computed:{
    hasTextOverlay:function(){
      if (this.textoverlay.length>0){
        return true
      }else{
        return false
      }
    }
  },
  props: ['content','textoverlay'],


}
</script>


<style lang="scss" scoped>
.textoverlay{

}
.wrapperHeightTall{
  position: relative;
}
.followHeightTall{
position: absolute;
height: 100%;
top: 0;
width: 100%;
}
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
