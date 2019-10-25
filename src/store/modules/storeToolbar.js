const state = {
  inShopRoute: false,
  inUserRoute: false,
  isExtended: false,
  toolBarIcons: {
    cartIcon: "mdi-cart",
    dogIcon: "mdi-dog",
    ownerIcon: "mdi-dog-service",
    forumIcon: "mdi-chat",
    albumIcon: "mdi-book-open-variant",
    exchangeIcon: "mdi-coin-outline",
    helpIcon: "mdi-help-circle",
    exitIcon: "mdi-exit-to-app",

  },
  redirects: {
    redirectLogin: "/login",
    redirectParticipe: "/participate",
    redirectHome: "/us",
    redirectShop1: "/shop/category1",
    redirectShop2: "/shop/category2",
    redirectCart: "/shop/cart",
    redirectUserPage: "/user"
  },
  
}

const mutations = {
  enableShopTool(state) {
    state.inShopRoute = true
    state.inUserRoute = false
    state.isExtended = true
  },
  enableUserTool(state) {
    state.inUserRoute = true
    state.inShopRoute = false
    state.isExtended = true
  },
  disableExtended(state) { 
    state.inShopRoute = false
    state.inUserRoute = false
    state.isExtended = false
  },
  
}

const actions = {
  enableExtended({commit},type) { 
    if(type === 'user') commit("enableUserTool")
    else if(type === 'shop') commit("enableShopTool")
  },
  disableExtended({commit}) { commit("disableExtended") },
  
  
}

const getters = {
  inShopRoute(state) { return state.inShopRoute },
  inUserRoute(state) { return state.inUserRoute},
  isExtended(state) { return state.isExtended },
  toolBarIcons(state) { return state.toolBarIcons },
  redirects(state) { return state.redirects },
  
}

export default {
  state,
  mutations,
  actions,
  getters
}