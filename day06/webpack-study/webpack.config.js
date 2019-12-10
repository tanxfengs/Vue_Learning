const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html"

        })
    ],
    module:{
        rules:[
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]},
            {test: /\.scss$/, use: ["style-loader", "css-loader", "less-loader", "sass-loader"]},
            //limit给定的值是图片的大小, 单位是byte, 如果我们引用的图片大于或等于给定的limit的值,
            // 则不会被转换为base64格式的字符串, 如果图片小于给定的limit值, 则会被转换
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ["url-loader?limit=56704&name=[hash:8]-[name].[ext]"]},
            {test: /\.(ttf|woff|eot|svg|woff2)$/, use:["url-loader"]},
            {test: /\.js$/, use: "babel-loader", exclude:/node_modules/}  //TODO 这里是正则额(⊙o⊙)…
            // Babel转换高级ES语法
        ]
    }
}