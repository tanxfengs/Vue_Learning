import Vue from 'vue'
import app from "./App.vue"
import VueRouter from "vue-router"
import {Button} from "mint-ui"
// 这里可以省略node_modules 这一层目录
import "mint-ui/lib/style.css"

// 导入mui
import "../lib/mui/css/mui.css"

// Vue.use(MinitUI)
Vue.use(VueRouter)

Vue.component(Button.name, Button)

import router from "./router.js"

import "bootstrap/dist/css/bootstrap.css"
import "./css/app.css"

// 按需导入



var vm = new Vue({
    el: "#app",
    data:{},
    methods:{},
    render:c=>c(app), // render会把el指定的容器中, 所有的内容都清空覆盖
                        // 不能直接把router-view 和routerlink写到el所控制的元素中
    router          // 将路由挂载到vm对象上
})