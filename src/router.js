import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/us',
      name: 'SobreNos',
      beforeEnter(to,from,next) {
        store.dispatch('disableExtended')
        next()
      },
      component: () => import(/* webpackChunkName: "sobre" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter(to,from,next) {
        store.dispatch('disableExtended')
        next()
      },
      component: () => import(/* webpackChunkName: "entrar" */ './views/Login.vue')
    },
    {
      path: '/user',
      name: 'user',
      beforeEnter(to,from,next) {
        store.dispatch('enableExtended','user')
        next()
      },
      component: () => import(/* webpackChunkName: "usuário" */ './views/User.vue')
    },
    {
      path: '/shop',
      name: 'loja',
      redirect: '/shop/category1',
      children: [
        {
          path: 'category1',
          component: () => import(/* webpackChunkName: "animalProd" */ './components/AnimalProducts.vue') // pesquisar de passar parametros na rota melhorar a eficiencia
        },
        {
          path: 'category2',
          component: () => import(/* webpackChunkName: "pessoasProd" */ './components/PeopleProducts.vue')
        },
        {
          path: 'cart',
          component: () => import(/* webpackChunkName: "carrinho" */ './components/Cart.vue')
        }
      ],
      beforeEnter(to,from,next) {
        store.dispatch('enableExtended','shop')
        next()
      },
      component: () => import(/* webpackChunkName: "loja" */ './views/Loja.vue'),
    },
    {
      path: '/participate',
      name: 'participe',
      beforeEnter(to,from,next) {
        store.dispatch('disableExtended')
        next()
      },
      component: () => import(/* webpackChunkName: "participe" */ './views/Participe.vue')
    },
    {
      path: '/adopt',
      name: 'adote',
      redirect: '/adopt/from-ongs',
      children: [
        {
          path: 'from-ongs',
          component: () => import(/* webpackChunkName: "adoptO" */ './components/AdoptFromOng.vue')
        },
        {
          path: 'from-people',
          component: () => import(/* webpackChunkName: "adoptP" */ './components/AdoptFromPeople.vue')
        },
        {
          path: 'help',
          component: () => import(/* webpackChunkName: "adoptHelp" */ './components/AdoptHelp.vue')
        },
      ],
      beforeEnter(to,from,next) {
        store.dispatch('enableExtended','adopt')
        next()
      },
      component: () => import(/* webpackChunkName: "adote" */ './views/Adopt.vue')
    },
    {
      path: '/events',
      name: 'eventos',
      beforeEnter(to,from,next) {
        store.dispatch('disableExtended')
        next()
      },
      component: () => import(/* webpackChunkName: "adote" */ './views/Events.vue')
    },
    {
      path: '/',
      redirect: '/shop/category1'
    }
  ]
})


