import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/welcome.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
