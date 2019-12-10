// 文件主入口
//在webpack中尝试使用Vue

// 在webpack中 import导入的Vue构造函数, 功能不完整, 只提供了
//runtime-only方式, 并没有提供想网页中那样的方式
// import Vue from "../node_modules/vue/dist/vue"
import Vue from "vue"
// 包的查找
// 1.项目根目录中有没有 node_modules的文件夹
// 2.在node_modules中根据包名, 找对应的vue文件夹
// 3.在vue文件夹中, 找一个叫做pakage.json的包配置文件
// 4.在package.json 文件中 查找一个main属性[main属性指定了这个包在被加载时候的入口文件 ]

// var login = {
    // template: "</h1>login组件======使用网页中形式创建</h1>"
// }






// 1. 导入login组件
import login from "./login.vue"
// 默认webpack 无法打包, .vue文件, 需要安装 相关的loader
// cnpm i vue-loader vue-template-compiler -D
// 在配置文件中, 新增loader配置项 { test: /\.vue$/, use:"vue-loader" }


var vm = new Vue({
    el: "#app",
    data:{
        msg: "123"
    },
    methods:{},
    // components:{
    //     login
    // }
    // render:function(createElement){ //在webpck中, 想要通过vue, 把一个组件放到
        // 页面中去展示, vm实例中的render函数可以实现
        // return createElement(login)

        // render函数简写
        render: c => c(login)
   

})

// 总结梳理: webpack 中如何使用vue
// 1. 安装vue的包, cnpm i vue -s
// 2. 由于在webpack中推荐使用.vue 这个模板文件定义组件, 所以需要安装能解析这种文件的loader

// 最新需要在plugin中导入插件 vue-loader/lib/plugin

// 3. 在main.js中导入 vue模块 import Vue from "vue"
import m, {title as title1} from './test'

console.log(title1);
console.log(m);