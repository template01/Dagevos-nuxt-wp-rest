<template>
<div class="fadeInContent">
  <dagevosHeader :menuitems="menuitems"></dagevosHeader>

  <dagevosPageContent :referenties="referenties" :pagecontent="pagecontent[0]"></dagevosPageContent>
  <!-- <dagevosIndex :indexIndexProp="indexIndex" :indexRefsProp="indexRefs" :indexOpdrachtsProp="indexOpdrachts"></dagevosIndex> -->
  <dagevosFooter></dagevosFooter>

</div>
</template>

<script>
import dagevosHeader from '~/components/dagevosHeaderNew.vue'
// import dagevosIndex from '~/components/dagevosIndex.vue'
import dagevosFooter from '~/components/dagevosFooter.vue'
import dagevosPageContent from '~/components/dagevosPageContent.vue'

// import indexIndex from '~/static/content/json/index.json'
// import indexRefs from '~/static/content/json/referenties.json'
// import indexOpdrachts from '~/static/content/json/opdrachtgevers.json'

import axios from 'axios'
// import store from 'vuex'


export default {
  components: {

    dagevosHeader,
    dagevosPageContent,
    dagevosFooter
  },

  // head() {
  //   return {
  //     // title: 'Het Echte Werkt - ' + this.$store.state.title,
  //     title: 'Het Echte Werkt! | Leiderschapsontwikkeling',
  //
  //   }
  // },

  data: function() {
    return {}
  },

  mounted() {
    // console.log('/// FROM STORE ///')
    // console.log(this.$store.state.menuitems)
    // store.commit('SET_menuitems', menuitemsRes)
    this.$store.commit('SET_menuitems', this.menuitems)
    this.$store.commit('SET_references', this.referenties)
    console.log(this.$store.state.menuitems)
    console.log(this.$store.state.menuitems)
    if (document.getElementById("leaveLoader")) {
      document.getElementById("leaveLoader").remove();
    }


    // console.log('/// FROM STORE ///')
  },
  // created(){
  //   this.loading = false
  //
  // },
  // beforeDestroy(){
  //   this.loading = true
  // },

  async asyncData({
    store,
    query,
    error,
    route
  }) {


    function addLoader() {
      var elem = document.createElement('div');
      elem.id = "leaveLoader"
      elem.innerHTML = '<div class="spinnerCustom "><div class="double-bounce1Custom"></div><div class="double-bounce2Custom"></div></div>'
      document.body.appendChild(elem);
    }


    if (store.state.menuitems == null && store.state.references == null) {
      // GET MENU AND REFS IF NOT IN STORE

      let [menuitemsRes, referentiesRes] = await Promise.all([
        axios.get(store.state.apiRoot + 'pages' + '?fields=id,title.rendered,slug,menu_order'),
        axios.get(store.state.apiRoot + 'references' + '?per_page=100&fields=acf'),
      ])
      // GET PAGE CONTENT
      if (route.path != '/') {
        let [pagecontentRes] = await Promise.all([
          axios.get(store.state.apiRoot + 'pages' + '?slug=' + route.path),
        ])
        return {
          pagecontent: pagecontentRes.data,
          menuitems: menuitemsRes.data,
          referenties: referentiesRes.data,

        }
      } else {

        let [pagecontentRes] = await Promise.all([
          axios.get(store.state.apiRoot + 'pages' + '?slug=' + '/index'),
        ])
        return {
          pagecontent: pagecontentRes.data,
          menuitems: menuitemsRes.data,
          referenties: referentiesRes.data,
        }
      }
    } else {


      addLoader()

      // menuitems: store.state.menuitems,
      // referenties: store.state.references
      if (route.path != '/') {

        let [pagecontentRes] = await Promise.all([
          axios.get(store.state.apiRoot + 'pages' + '?slug=' + route.path),
        ])
        return {
          pagecontent: pagecontentRes.data,
          menuitems: store.state.menuitems,
          referenties: store.state.references,

        }
      } else {
        let [pagecontentRes] = await Promise.all([
          axios.get(store.state.apiRoot + 'pages' + '?slug=' + '/index'),
        ])
        return {
          pagecontent: pagecontentRes.data,
          menuitems: store.state.menuitems,
          referenties: store.state.references,
        }


      }

    }
  },



}
</script>

<style>
#leaveLoader {
  top: 0;
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 100;
  background: rgba(243, 243, 243, 0.9);

  -webkit-animation: fadein 0.5s;
  /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s;
  /* Firefox < 16 */
  -ms-animation: fadein 0.5s;
  /* Internet Explorer */
  -o-animation: fadein 0.5s;
  /* Opera < 12.1 */
  animation: fadein 0.5s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */

@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */

@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */

@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */

@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.spinnerCustom {
  width: 80px;
  height: 80px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0px auto;
}

.double-bounce1Custom,
.double-bounce2Custom {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #552e87;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2Custom {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0.0)
  }
  50% {
    -webkit-transform: scale(1.0)
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}



.container {}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
