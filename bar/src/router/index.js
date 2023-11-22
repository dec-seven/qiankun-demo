import {  createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/micro/bar', // 此处的path前缀要与主应用里的activeRule:'#/micro/bar'一一对应，但不需要#
    name:'home',
    component:() => import('../views/AppHome.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
