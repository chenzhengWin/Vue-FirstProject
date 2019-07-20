// 入口文件
// import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';
// 导入路由的包
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 导入vue-resource
import VueResource from "vue-resource"
Vue.use(VueResource)
// 按需导入Mint-UI中的组件
import {Header,Swipe,SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

// 
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"
import "App.vue"
// 导入组件
import app from './App.vue';
var vm=new Vue({
    el:"#app",
    data:{},
    methods:{

    },
    //渲染组件
    render:c=>c(app),
    router
})