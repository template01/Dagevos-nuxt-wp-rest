<template>
<div>
  <dagevosHeader :menuitems="menuitems"></dagevosHeader>
  <dagevosPageContent :pagecontent="pagecontent[0]"></dagevosPageContent>
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


export default {
  components: {

    dagevosHeader,
    dagevosPageContent,
    dagevosFooter
  },

  data: function() {
    return {}
  },

  async asyncData({
    store,
    query,
    error,
    route
  }) {
    if (route.path != '/') {
      let [pagecontentRes,menuitemsRes] = await Promise.all([
        axios.get(store.state.apiRoot + 'pages' + '?slug=' + route.path),
        axios.get(store.state.apiRoot + 'pages'+'?fields=id,title.rendered,slug,menu_order'),
      ])
      return {
        pagecontent: pagecontentRes.data,
        menuitems:menuitemsRes.data
      }
    } else {
      let [pagecontentRes,menuitemsRes] = await Promise.all([
        axios.get(store.state.apiRoot + 'pages' + '?slug=' + '/index'),
        axios.get(store.state.apiRoot + 'pages'+'?fields=id,title.rendered,slug,menu_order'),

      ])
      return {
        pagecontent: pagecontentRes.data,
        menuitems:menuitemsRes.data
      }
    }
  }



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
