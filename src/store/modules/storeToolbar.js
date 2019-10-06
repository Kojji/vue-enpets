const state = {
  inShopRoute: false,
  toolBarIcons: {
    cartIcon: "mdi-cart",
    dogIcon: "mdi-dog",
    ownerIcon: "mdi-dog-service"
  },
  
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
    return state.inShopRoute
  },
  toolBarIcons() {
    return state.toolBarIcons
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}