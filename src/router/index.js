import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {

  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
