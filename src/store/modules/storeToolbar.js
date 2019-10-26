const state = {
  inShopRoute: false,
  inUserRoute: false,
  inAdoptRoute: false,
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
    redirectEvents: "/events",
    redirectShop1: "/shop/category1",
    redirectShop2: "/shop/category2",
    redirectCart: "/shop/cart",
    redirectUserPage: "/user",
    redirectAdoptOng: "/adopt/from-ongs",
    redirectAdoptPeople: "/adopt/from-people",
    redirectAdoptHelp: "/adopt/help"
  },
  
}

const mutations = {
  enableShopTool(state) {
    state.inShopRoute = true
    state.inUserRoute = false
    state.isExtended = true
    state.inAdoptRoute = false
  },
  enableUserTool(state) {
    state.inUserRoute = true
    state.inShopRoute = false
    state.isExtended = true
    state.inAdoptRoute = false
  },
  enableAdoptTool(state) {
    state.inUserRoute = false
    state.inShopRoute = false
    state.isExtended = true
    state.inAdoptRoute = true
  },
  disableExtended(state) { 
    state.inShopRoute = false
    state.inUserRoute = false
    state.isExtended = false
    state.inAdoptRoute = false
  },
  
}

const actions = {
  enableExtended({commit},type) { 
    if(type === 'user') commit("enableUserTool")
    else if(type === 'shop') commit("enableShopTool")
    else if(type === 'adopt') commit("enableAdoptTool")
  },
  disableExtended({commit}) { commit("disableExtended") },
  
  
}

const getters = {
  inShopRoute(state) { return state.inShopRoute },
  inUserRoute(state) { return state.inUserRoute},
  inAdoptRoute(state) { return state.inAdoptRoute},
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