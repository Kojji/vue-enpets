import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/us',
      name: 'home',
      beforeEnter(to,from,next) {
        store.dispatch('disableShopTool')
        next()
      },
      component: Home
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
      redirect: '/shop'
    }
  ]
})


