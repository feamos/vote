import Vue from 'vue'
import Router from 'vue-router'
import Vote from '@/components/myvote/Vote'
import Slider from '@/components/plugin/slider/slider'
import Login from '@/components/users/login/login'
import Register from '@/components/users/register/register'
import Personal from '@/components/personal/personal'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vote',
      name: 'Vote',
      component: Vote
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
