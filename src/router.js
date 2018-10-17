import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
