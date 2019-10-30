
import usPhoto from "../../assets/photos/aboutMain2.jpg"
import adoptPhoto from "../../assets/photos/aboutAdote.jpg"
import storePhoto from "../../assets/photos/aboutStore.jpg"
import participatePhoto from "../../assets/photos/aboutParticipe2.jpg"
import pedigree from "../../assets/partners/pedigree.jpg"
import forPetLovers from "../../assets/partners/forpetlovers.png"
import petLove from "../../assets/partners/petlove.png"

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
      src: storePhoto,
      flex: 4 ,
      height: "120px", button: "Ir a Loja",
      redirect: "/shop/category1",
      text: 'Visite nossa loja, quanto mais você compra, mais você ganha.'
    },
    {
      title: 'Adote',
      src: adoptPhoto,
      flex: 4 ,
      height: "120px",button: "Ver Lista",
      redirect: "/adopt",
      text: 'Encontre aqui aquele companheiro que sempre esteve procurando.'
    },
    {
      title: 'Participe',
      src: participatePhoto,
      flex: 4 ,
      height: "120px",button: "Saiba Mais",
      redirect: "/participate",
      text: 'Venha nos ajudar e mais importante, ajudar os animais que precisam.'
    },
  ],
  partnersArray: [
    {
      id: 1,
      name: "Pedigree",
      heigth: 100,
      src: pedigree,
      link: "https://www.pedigree.com.br/"
    },
    {
      id: 2,
      name: "For Pet Lovers",
      heigth: 300,
      src: forPetLovers,
      link: "https://www.forpetlovers.com.br/"
    },
    {
      id: 3,
      name: "Pet Love",
      heigth: 100,
      src: petLove,
      link: "https://www.petlove.com.br/"
    }
  ],
  
}

const mutations = {
  
}

const actions = {

}

const getters = {
  cardsAboutPage(state) { return state.cardsAboutPage },
  partnersArray(state) { return state.partnersArray }
}

export default {
  state,
  mutations,
  actions,
  getters
}