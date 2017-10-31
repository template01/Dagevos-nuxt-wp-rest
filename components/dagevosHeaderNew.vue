<template>
<div class="columnwrapper container p-5">
  <div class="row">
    <div class="logo">
      <img src="content/img/HetEchteWerk_CMYK.817d17a.svg" />
    </div>
  </div>
  <div class="menuitems pt-5">
    <nuxt-link v-for="link in orderedMenulist" class="" :to="link.slug">
      <p v-html="link.title.rendered">
      </p>
    </nuxt-link>
  </div>
</div>
</div>
</template>
<script>
import _ from 'lodash'


// import menuitems from '~/components/menuitems.vue'

export default {

  props: ['menuitems'],

  data() {
    return {
      hideNav: true

    }
  },
  computed: {
    orderedMenulist: function() {
      // `this` points to the vm instance
      return _.sortBy(this.menuitems, 'menu_order')
    }
  },
  components: {
    // menuitems
  },
  methods: {
    test: function() {
      // var vm = this
      // var heightHeader = this.$el.offsetHeight + parseFloat(window.getComputedStyle(vm.$el).margin) * 2
      // if (window.pageYOffset > heightHeader) {
      //   this.hideNav = false
      // } else {
      //   this.hideNav = true
      //
      // }
    }
  },
  mounted() {
    this.test()
    if (_.VERSION) {
      console.log('underscore loaded')
    }
    // window.addEventListener('scroll', this.test)
    var vm = this
    window.addEventListener('scroll', _.throttle(() => {
      vm.test()
    }, 200))
  },


}
</script>

<style lang="scss" scoped>
.logo {
    width: 100%;
    margin: 0 auto;
    display: flex;
    img {
        margin: 0 auto;

    }
}

.menuitems {
    margin: 0 auto;
    display: table;
    a {
        padding-left: 10px;
        padding-right: 10px;
        display: inline-flex;
        cursor: pointer;
        font-family: inherit !important;
        p{
          float: left;
          margin: 0;
        }
    }
}
</style>
