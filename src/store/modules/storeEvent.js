const state = {
  eventList: [
    {
      id: 1,
      title: 'Seja um voluntario',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      shortDescription:'texto texto',
      fullDescription: 'textão textão textão'
    },
    { 
      id: 2,
      title: 'Doações por compras',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      shortDescription:'texto texto',
      fullDescription: 'textão textão textão'
    },
    {
      id: 3,
      title: 'Doações',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      shortDescription:'texto texto',
      fullDescription: 'textão textão textão'
    },
    {
      id: 4,
      title: 'Patrocinio',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      shortDescription:'texto texto',
      fullDescription: 'textão textão textão'
    },
  ],
}

const mutations = {
  
}

const actions = {
  
}

const getters = {
  eventList(state) { return state.eventList },
}

export default {
  state,
  mutations,
  actions,
  getters
}
