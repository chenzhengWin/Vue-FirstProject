// 入口文件
// import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';

// 按需导入Mint-UI中的组件
import {Header} from 'mint-ui';
Vue.component(Header.name,Header);

// 
import "./lib/mui/css/mui.min.css"

// 导入组件
import app from './App.vue';
var vm=new Vue({
    el:"#app",
    data:{},
    methods:{

    },
    //渲染组件
    render:c=>c(app)
})