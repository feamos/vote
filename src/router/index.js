import Vue from 'vue'
import Router from 'vue-router'
import Vote from '@/components/myvote/vote'
import Index from '@/components/index/index'
import Personal from '@/components/personal/personal'
import tovote from '@/components/vote/tovote/tovote'
import answer from '@/components/vote/tovote/answer'
import view from '@/components/votedetails/view'
import Login from '@/components/users/login/login'
import Register from '@/components/users/register/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vote',
      name: 'Vote1',
      component: Vote
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/tovote',
      component: tovote
    },
    {
      path: '/answer',
      component: answer
    },
    {
      path: '/view',
      component: view
    },
    // {
    //   path: '/slider',
    //   name: 'Slider',
    //   component: Slider
    // },
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
