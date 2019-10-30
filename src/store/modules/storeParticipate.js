const state = {
  cardsParticipatePage: [
    {
      title: 'Seja um voluntario',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 12,
      button: null,
      redirect: null,
      text: 'colocar aqui sobre como ser um voluntario'
    },
    { 
      title: 'Doações por compras',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 4,
      button: "loja",
      redirect: "/shop/category1",
      text: 'colocar aqui como funciona as doações nas compras',
    },
    {
      title: 'Doações',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 4,
      button: null,
      redirect: null,
      text: 'colocar aqui as informações de por onde realizar a doação'
    },
    {
      title: 'Patrocinio',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      flex: 4,
      button: null,
      redirect: null,
      text: 'colocar aqui as info de onde contatar para patrocinio'
    },
    {
      title: 'Seja um padrinho',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 6,
      button: null,
      redirect: null,
      text: 'colocar aqui sobre apadrinhamento de animais'
    },
    {
      title: 'Eventos',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 6,
      button: null,
      redirect: null,
      text: 'colocar aqui sobre ajuda em eventos'
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