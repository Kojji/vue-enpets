import gato1 from "../../assets/adopt/gato1.jpg"

const state = {
  adoptOngList: [
    {
      id: 1,
      name: "Chocolatinho",
      sex: "Masculino",
      age: "2meses",
      location: "Rio de Janeiro",
      photo: gato1,
      description: "texto ",
      userId: null,
      situation: "not",
      messages: []
    }
  ],
  adoptPeopleList: [
    {
      id: 1,
      name: "Raja",
      sex: "Feminino",
      age: "2meses",
      location: "Rio de Janeiro",
      photo: gato1,
      description: "texto texto",
      userId: null,
      situation: "not",
      messages: [
        {
          userId: null,
          userName: "",
          message: "asdasfasf",
          time: null
        }
      ]
    }
  ],
  activeChatMessage: [],
}
const mutations = {
  activeChatMessage(state, userData) { state.activeChatMessage = userData },
  addChatMessage(state, userData) {
    state.adoptPeopleList.forEach(element => {
      if(element.id === userData.chatId) {
        element.messages.push({message: userData.message})
      }
    });
  }
}
const actions = {
  accessMessages({commit,state}, userData) {
    state.adoptPeopleList.forEach(element => {
      if(element.id === userData.id) {
        commit("activeChatMessage", element.messages)
      }
    });
  },
  sendChatMessage({commit}, userData) {
    // eslint-disable-next-line
    return new Promise ((res, rej)=>{
      commit("addChatMessage", userData)
      res()
    })
    
  }
}
const getters = {
  adoptOngList(state) { return state.adoptOngList },
  adoptPeopleList(state) { return state.adoptPeopleList },
  activeChatMessage(state) { return state.activeChatMessage }
}
export default {
  state,
  mutations,
  actions,
  getters
}