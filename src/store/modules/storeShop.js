import Axios from "axios"

const state = {
  cardsShopPageOne: [],
  cardsShopPageTwo: [],
}

const mutations = {
  cardsShopPageOne(state, userData) { state.cardsShopPageOne = userData },
  cardsShopPageTwo(state, userData) { state.cardsShopPageTwo = userData }
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
  }
}

const getters = {
  cardsShopPageOne(state) { return state.cardsShopPageOne },
  cardsShopPageTwo(state) { return state.cardsShopPageTwo },
}

export default {
  state,
  mutations,
  actions,
  getters
}