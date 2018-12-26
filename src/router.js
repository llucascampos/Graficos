import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import chartjs from './views/chartjs.vue'
import vueCharts from './views/vueCharts.vue'
import chartkick from './views/chartkick.vue'
import dashBoard  from './views/dashBoard.vue'


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
      path: '/chartjs',
      name: 'chartjs',
      component: chartjs
    },
    {
      path: '/charts',
      name: 'charts',
      component: vueCharts
    },
    {
      path: '/chartkick',
      name: 'chartkick',
      component: chartkick
    },
    {
      path: '/dashBoard',
      name: 'dashBoarde',
      component: dashBoard
    }
  ]  
})
