const state = {
  inShopRoute: false,
  
}

const mutations = {

}

const actions = {
  enableShopTool() {
    state.inShopRoute = true
  },
  disableShopTool() {
    state.inShopRoute = false
  }
}

const getters = {
  inShopRoute() {
    return state.inShopRoute;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}