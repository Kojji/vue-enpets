import Axios from "axios"

const state = {
  cardsShopPageOne: [],
  cardsShopPageTwo: [],
  sessionCart: [],
}

const mutations = {
  cardsShopPageOne(state, userData) { state.cardsShopPageOne = userData },
  cardsShopPageTwo(state, userData) { state.cardsShopPageTwo = userData },
  addToSessionCart(state, userData) {
    let added = false
    state.sessionCart.forEach(element => {
      if(element.prodId === userData.prodId) {
        element.quantity += userData.quantity
        added = true
      }
    });
    if(!added) state.sessionCart.push(userData)
  }
}

const actions = {
  getShopOne({commit}) {
    return new Promise ((res, rej) => {
      Axios.get(`http://localhost:3000/produtos?shop=1&_order=asc`)
      .then((data) => {
        commit("cardsShopPageOne", data.data)
        res()
      }).catch((err) =>{
        rej(err)
      })
    })
  },
  getShopTwo({commit}) {
    return new Promise ((res, rej) => {
      Axios.get(`http://localhost:3000/produtos?shop=2&_order=asc`)
      .then((data) => {
        commit("cardsShopPageTwo", data.data)
        res()
      }).catch((err) =>{
        rej(err)
      })
    })
  },
  shopAddToCart({commit}, userData) {
    commit("addToSessionCart", {prodId: userData.id, quantity: userData.quantidade})
  }
}

const getters = {
  cardsShopPageOne(state) { return state.cardsShopPageOne },
  cardsShopPageTwo(state) { return state.cardsShopPageTwo },
  sessionCart(state) { return state.sessionCart }
}

export default {
  state,
  mutations,
  actions,
  getters
}