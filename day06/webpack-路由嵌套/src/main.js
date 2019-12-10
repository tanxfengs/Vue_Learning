import Vue from 'vue'
import app from "./App.vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import router from "./router.js"



var vm = new Vue({
    el: "#app",
    data:{},
    methods:{},
    render:c=>c(app), // render会把el指定的容器中, 所有的内容都清空覆盖
                        // 不能直接把router-view 和routerlink写到el所控制的元素中
    router          // 将路由挂载到vm对象上
})