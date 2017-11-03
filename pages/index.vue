<template>
<div>
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

    // console.log('/// FROM STORE ///')
  },

  async asyncData({
    store,
    query,
    error,
    route
  }) {


    if (store.state.menuitems == null && store.state.references == null) {
      // GET MENU AND REFS IF NOT IN STORE

      let [menuitemsRes, referentiesRes] = await Promise.all([
        axios.get(store.state.apiRoot + 'pages' + '?fields=id,title.rendered,slug,menu_order'),
        axios.get(store.state.apiRoot + 'references' + '?fields=acf'),
      ])
      // GET PAGE CONTENT
      if (route.path != '/') {
        let [pagecontentRes] = await Promise.all([
          axios.get(store.state.apiRoot + 'pages' + '?slug=' + route.path),
        ])
        return {
          pagecontent: pagecontentRes.data,
          menuitems: menuitemsRes.data,
          referenties: referentiesRes.data
        }
      } else {
        let [pagecontentRes] = await Promise.all([
          axios.get(store.state.apiRoot + 'pages' + '?slug=' + '/index'),
        ])
        return {
          pagecontent: pagecontentRes.data,
          menuitems: menuitemsRes.data,
          referenties: referentiesRes.data
        }
      }
    }else{
      // menuitems: store.state.menuitems,
      // referenties: store.state.references
      if (route.path != '/') {
        let [pagecontentRes] = await Promise.all([
          axios.get(store.state.apiRoot + 'pages' + '?slug=' + route.path),
        ])
        return {
          pagecontent: pagecontentRes.data,
          menuitems: store.state.menuitems,
          referenties: store.state.references
        }
      } else {
        let [pagecontentRes] = await Promise.all([
          axios.get(store.state.apiRoot + 'pages' + '?slug=' + '/index'),
        ])
        return {
          pagecontent: pagecontentRes.data,
          menuitems: store.state.menuitems,
          referenties: store.state.references
        }

      }

    }
  },



}
</script>

<style>
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
