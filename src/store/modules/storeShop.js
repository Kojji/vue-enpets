const state = {
  cardsShopPageOne: [
    { 
      id: 1,
      title: 'produto(1)',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
    { 
      id:2,
      title: 'produto(2)',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
    {
      id:3,
      title: 'produto(3)',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
    {
      id:4,
      title: 'produto(4)',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
    { 
      id:5,
      title: 'produto(5)',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
  ],
  cardsShopPageTwo: [
    { 
      id:6,
      title: 'produto(5)',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
    {
      id:7,
      title: 'produto(6)',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
    {
      id:8,
      title: 'produto(7)',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
    {
      id:9,
      title: 'produto(8)',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
    { 
      id:10,
      title: 'produto(9)',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 3,
      text: 'colocar aqui descrição do produto',
      price: 'R$0.00',
      discount: false
    },
  ],
}

const mutations = {
  
}

const actions = {
  
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