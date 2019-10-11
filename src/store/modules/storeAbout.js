const state = {
  cardsAboutPage: [
    { 
      title: 'O que o sistema é',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 12,
      text: 'colocar aqui o que é o enpets',
    },
    {
      title: 'Loja produtos p/ animais',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 4 , button: "1",
      redirect: "/shop/category1",
      text: 'colocar aqui sobre a loja'
    },
    {
      title: 'Loja produtos p/ donos',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 4 ,
      button: "2",
      redirect: "/shop/category2",
      text: 'colocar aqui sobre a loja'
    },
    {
      title: 'Participe',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      flex: 4 ,
      button: "3",
      redirect: "/participate",
      text: 'colocar aqui sobre os trabalhos sociais'
    },
  ],
}

const mutations = {
  
}

const actions = {
  
}

const getters = {
  cardsAboutPage(state) { return state.cardsAboutPage },
}

export default {
  state,
  mutations,
  actions,
  getters
}