import Axios from "axios"

const state = {
  logged: false,
  userId: null,
}
const mutations = {
  logUser(state) { state.logged = true },
  logoffUser(state) { state.logged = false },
  userId(state, userData) { state.userId = userData}
}
const actions = {
  userLogin({commit}, loginData) {
    return new Promise ((res, rej) => {
      Axios.get('http://localhost:3000/login')
        .then((loginArray)=>{
          loginArray.data.forEach(element => {
            if(loginData.login === element.login && loginData.password === element.password) {
              commit("logUser")
              commit('userId', element.id)
              res()
            }
          })
          if(!this.logged) {
            rej('err1') // erro ao não encontrar a conta
          }
        }).catch (()=>{
          rej('err2') // erro ao se comunicar com servidor
        })
    })
  },
  userLogoff({commit}) {
    // eslint-disable-next-line
    return new Promise ((res, rej) => {
      commit("logoffUser")
      res()
    })
  },
}
const getters = {
  logged(state) { return state.logged },
}
export default {
  state,
  mutations,
  actions,
  getters
}