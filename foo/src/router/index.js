import VueRouter from 'vue-router'
import Vue from 'vue'
const routes = [
  {
    path:'/micro/foo', // 此处的path前缀要与主应用里的activeRule:'#/micro/bar'一一对应，但不需要#
    name:'home',
    component:() => import('../views/AppHome.vue')
  }
]

const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
export default  router