import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/about.1',
      name: 'about.1',
      component: () => import(/* webpackChunkName: "about" */ './views/About.1.vue')
    },
    {
      path: '/about.2',
      name: 'about.2',
      component: () => import(/* webpackChunkName: "about" */ './views/About.2.vue')
    },
    {
      path: '/about.3',
      name: 'about.3',
      component: () => import(/* webpackChunkName: "about" */ './views/About.3.vue')
    },
    {
      path: '/about.4',
      name: 'about.4',
      component: () => import(/* webpackChunkName: "about" */ './views/About.4.vue')
    },
    {
      path: '/about.5',
      name: 'about.5',
      component: () => import(/* webpackChunkName: "about" */ './views/About.5.vue')
    }
  ]
})
