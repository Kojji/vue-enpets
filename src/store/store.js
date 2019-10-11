import Vue from 'vue'
import Vuex from 'vuex'


import toolbar from './modules/storeToolbar'
import about from './modules/storeAbout'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {
    toolbar,
    about
  }
})
