// 这是main.js 使我们项目Js的入口文件

//1.导入Jquery
// import *** from *** 是ES6中导入模块的方式
import $ from 'jquery'

import "./css/index.css"
// 注意: webpack, 默认只能打包处理Js文件, 无法处理其他的非Js类型文件
// 如果要处理非Js类型的文件, 我们需要手动安装一些合适的第三方loader

// 1. 如果要打包css文件, 需要安装 cnpm install style-loader css-loader -D
// 2. 打开webpack.config.js 这个配置文件, 在里面新增一个配置节点, 叫做module. 他是一个对象,
// 在这个对象上, 有个rule属性, 它是个数组, 存放了所以的第三方文件和规则

import "./css/index.less"
import "./css/index.scss"

$(function () {
    $("li:odd").css("backgroundColor", "blue")
    $("li:even").css("backgroundColor", function(){
        return "pink"
    })
})

// 经过刚才的演示, webpack可以做什么事
// 1. webpack能够处理Js文件的互相依赖关系
// 2. webpack 能够处理Js的兼容问题, 把高级的, 浏览器不能识别的语法, 转成低级的语法

// webpack src -o dist  # webpack4.x命令 

//使用webpack-dev-server 这个工具, 来实现自动打包编译的功能

// 1.cnpm install webpack-dev-server -D 把这个工具安装到本地开发依赖
// 2. 安装完毕后, 这个工具的用法跟webpack的方法一样
// 3. 由于是在项目中 本地安装, 所以无法把它当做脚本命令在终端中直接执行
// 只有全局安装的工具才能执行
//  webpack-dev-server 帮我们打包生成的bundle.js并没有存放到实际的物理磁盘中, 而是
// 直接托管到了电脑内存中, 所以 我们在项目根目录中, 根本找不到打包好的bundle.js