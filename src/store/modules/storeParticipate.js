const state = {
  cardsParticipatePage: [
    { 
      title: 'Doações por compras',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 12,
      button: "loja",
      redirect: "/shop/category1",
      text: 'colocar aqui como funciona as doações nas compras',
    },
    {
      title: 'Seja um padrinho',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 12 ,
      button: null,
      redirect: null,
      text: 'colocar aqui sobre apadrinhamento de animais'
    },
    {
      title: 'Doações',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 12 ,
      button: null,
      redirect: null,
      text: 'colocar aqui as informações de por onde realizar a doação'
    },
    {
      title: 'PAtrocinio',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      flex: 12 ,
      button: null,
      redirect: null,
      text: 'colocar aqui as info de onde contatar para patrocinio'
    },
  ],
}

const mutations = {
  
}

const actions = {
  
}

const getters = {
  cardsParticipatePage(state) { return state.cardsParticipatePage },
}

export default {
  state,
  mutations,
  actions,
  getters
}