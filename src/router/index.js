import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
