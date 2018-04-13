import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import enter from '@/components/enter'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
