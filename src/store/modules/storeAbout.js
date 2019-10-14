import usPhoto from "../../assets/photos/aboutMain2.jpg"

const state = {
  cardsAboutPage: [
    { 
      title: 'Sobre o Enpets',
      src: usPhoto,
      flex: 12,
      height: "250px",
      text: 'O Enpets é um sistema que foi feito pensando',
    },
    {
      title: 'Loja produtos p/ animais',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 4 ,
      height: "140px", button: "1",
      redirect: "/shop/category1",
      text: 'colocar aqui sobre a loja'
    },
    {
      title: 'Loja produtos p/ donos',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 4 ,
      height: "140px",button: "2",
      redirect: "/shop/category2",
      text: 'colocar aqui sobre a loja'
    },
    {
      title: 'Participe',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      flex: 4 ,
      height: "140px",button: "3",
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