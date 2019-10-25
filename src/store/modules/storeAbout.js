import usPhoto from "../../assets/photos/aboutMain2.jpg"

const state = {
  cardsAboutPage: [
    { 
      title: 'Sobre o Enpets',
      src: usPhoto,
      flex: 12,
      height: "250px",
      text: 'Nós do Enpets, vemos nosso sistema como uma ferramenta para ajudar a conectar as pessoas que gostam e querem ajudar os animais com istituições que o fazem.' +
      '<br>"Mas como isto é feito?" - nosso sistema conta com uma loja virtual, onde nossos parceiros realizam a venda de produtos, tanto para o cuidado diário de seu animal, ' + 
      'como produtos sobre animais voltados para aqueles, que como nós, amamos os animais.' + 
      '<br>Além disso, temos uma página exclusiva voltada para a adoção de animais para aqueles que estão a procura de novos companheiros.' + 
      '<br>A sua ajuda não precisa vir de maneira monetária, fique atento sobre os eventos que nossas parceiras organizam e como ajudar.',
    },
    {
      title: 'Loja',
      src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      flex: 4 ,
      height: "140px", button: "1",
      redirect: "/shop/category1",
      text: 'Visite nossa loja, quanto mais você compra, mais você ganha.'
    },
    {
      title: 'Adote',
      src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 4 ,
      height: "140px",button: "2",
      redirect: "/shop/category2",
      text: 'Encontre aqui aquele companheiro que sempre esteve rocurando.'
    },
    {
      title: 'Participe',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      flex: 4 ,
      height: "140px",button: "3",
      redirect: "/participate",
      text: 'Venha nos ajudar e mais importante, ajudar os animais que precisam.'
    },
    {
      title: 'COnheça nossos Parceiros',
      src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
      flex: 12,
      height: "200px",button: "3",
      redirect: "/participate",
      text: 'Venha nos ajudar e mais importante, ajudar os animais que precisam.'
    }
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