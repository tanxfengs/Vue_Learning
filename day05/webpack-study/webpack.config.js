const path = require('path');
const webpack = require("webpack")

//导入html-webpack-plugin插件
// 1.自动在内存中根据指定页面生成一个内存的页面
// 2.自动把打包好的bundle.js追加到页面中去

const htmlWebpckPlugin = require("html-webpack-plugin")

// 这个配置文件其实就是一个Js文件 , 通过node中的模块操作, 向外暴露一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'), //表示要使用webpack打包哪个文件
    output: { //输出文件相关配置
        path: path.join(__dirname, "./dist"), // 指定打包好的文件, 输出到哪个目录中去
        filename: "bundle.js"
    },
    devServer: {
        //这是配置dev-server命令参数的第二张形式, 相对来说这种方式麻烦一些
        open: true, //自动打开浏览器
        port: 3000, //设置启动时的运行端口
        contentBase: "src", //指定托管根目录
        hot: true
    },plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpckPlugin({
            //这是一个创建在内存中生成html的插件
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html" //指定生成的页面名称
        })
    ],
    module: { //用于配置所以第三方模块的 匹配规则
        rules:[
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]},
            {test: /\.scss$/, use: ["style-loader", "css-loader", "less-loader", "sass-loader"]}
            // 第三方loader规则
        ]

    }
}