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
      messages: [
        {
          userId: null,
          message: "",
          time: null
        }
      ]
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
          message: "",
          time: null
        }
      ]
    }
  ],
}
const mutations = {

}
const actions = {

}
const getters = {
  adoptOngList(state) { return state.adoptOngList },
  adoptPeopleList(state) { return state.adoptPeopleList}
}
export default {
  state,
  mutations,
  actions,
  getters
}