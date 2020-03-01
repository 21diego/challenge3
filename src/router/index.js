import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/log',
    name: 'Log',
    component: () => import(/* webpackChunkName: "about" */ '../views/Log.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/play',
    name: 'Play',
    component: () => import(/* webpackChunkName: "about" */ '../views/Play.vue')
  },
  {
    path: '/study',
    name: 'Study',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Study.vue')
  },
  {
    path: '/social',
    name: 'Social',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Social.vue')
  },
  {
    path: '/settings',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "about" */ '../views/Setting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
