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
        store.dispatch('disableShopTool')
        next()
      },
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter(to,from,next) {
        store.dispatch('disableShopTool')
        next()
      },
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/shop',
      name: 'loja',
      children: [
        {
          path: 'category1',
          component: () => import(/* webpackChunkName: "about" */ './components/AnimalProducts.vue')
        },
        {
          path: 'category2',
          component: () => import(/* webpackChunkName: "about" */ './components/PeopleProducts.vue')
        },
        {
          path: 'cart',
          component: () => import(/* webpackChunkName: "about" */ './components/Cart.vue')
        }
      ],
      beforeEnter(to,from,next) {
        store.dispatch('enableShopTool')
        next()
      },
      component: () => import(/* webpackChunkName: "about" */ './views/Loja.vue'),
    },
    {
      path: '/participate',
      name: 'participe',
      beforeEnter(to,from,next) {
        store.dispatch('disableShopTool')
        next()
      },
      component: () => import(/* webpackChunkName: "about" */ './views/Participe.vue')
    },
    {
      path: '/',
      redirect: '/shop/category1'
    },
    {
      path: '/shop',
      redirect: '/shop/category1'
    }
  ]
})


