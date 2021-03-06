import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/container/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
