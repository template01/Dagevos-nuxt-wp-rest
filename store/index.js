export const state = () => ({
  apiRoot: 'https://hetechtewerkt.nl/backend/wp-json/wp/v2/',
  menuitems: null,
  references: null,
  title:''
})

export const mutations = {
  // SET_LANG(state, locale) {
  //   if (state.locales.indexOf(locale) !== -1) {
  //     state.locale = locale;
  //   }
  // },
  SET_menuitems(state,input){
    state.menuitems = input
  },
  SET_references(state,input){
    state.references = input
  },

  SET_title(state,input){
    state.title = input
  }
}


export const getters = {
  //
  // sidebaropen(state) {
  //   return state.sidebarOpen
  // },

}


// store.commit('SET_LANG', locale)
