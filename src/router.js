import VueRouter from 'vue-router'
import home from './components/tarbar/home.vue'
import huiyuan from './components/tarbar/huiyuan.vue'
import shopCar from './components/tarbar/shopCar.vue'
import search from './components/tarbar/search.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:home},
    {path:'/huiyuan',component:huiyuan},
    {path:'/shopCar',component:shopCar},
    {path:'/search',component:search},
  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router