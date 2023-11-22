import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path:'/',
    name:'home',
    component:() => import('../views/home.vue')
  },
  {
    path:'/micro/:chapters+',
    component:() => import('../views/microApp.vue')
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
