import Vue from 'vue'
import VueRouter from "vue-router"
import app from "./App.vue"
Vue.use(VueRouter)

import account from "./main/Account.vue"
import goodslist from "./main/GoodsList.vue"


var router = new VueRouter({
    routes:[
        {path: "/account", component: account},
        {path: "/goodslist", component: goodslist}
    ]
})

var vm = new Vue({
    el: "#app",
    data:{},
    methods:{},
    render:c=>c(app), // render会把el指定的容器中, 所有的内容都清空覆盖
                        // 不能直接把router-view 和routerlink写到el所控制的元素中
    router          // 将路由挂载到vm对象上
})