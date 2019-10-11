import Vue from 'vue'
import Vuex from 'vuex'


import toolbar from './modules/storeToolbar'
import about from './modules/storeAbout'
import participate from './modules/storeParticipate'
import shop from './modules/storeShop'

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
    about,
    participate,
    shop
  }
})
