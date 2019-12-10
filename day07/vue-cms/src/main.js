// 导入Vue
import Vue from "vue"
import {Header} from "mint-ui"
// 一定要记得引入样式
import "mint-ui/lib/style.css"
//导入组件
import app from "./App.vue"

//导入Mui
import "../lib/mui/css/mui.min.css"

Vue.component(Header.name, Header)

var vm = new Vue({
    el: "#app",
    data:{},
    methods:{},
    render: c=>c(app)
})