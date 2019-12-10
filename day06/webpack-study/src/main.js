import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"
// 入过要通过路径的形式, 去引入node_modules中相关文件, 可以直接省略路径前面的mode_modules
// 这一层目录. 直接写包的名称, 然后后面跟上具体的文件路径

// 不写node_modules这一层目录, 默认就会去node_modules中去找
import "bootstrap/dist/css/bootstrap.css"

class Person {
    // 使用 static关键字可以定义静态属性
    // 所谓静态属性, 就是可以直接通过类名. 直接方法的属性 (Python中的类变量)
    // 实例属性: 只能通过类的实例. 来访问的属性, 叫做实例属性
    static info = {name: "zs", age: 20}
}

// var p1 = new Person()

//在webpack中 默认只能处理一部分es6语法, 一些更高级es6, es7 
// webpack是处理不了的, 需要借助第三方laoder, 来帮助webpack处理这些高级的语法,
// 当第三方loader把高级语法转为低级语法之后, 会把结果交给webpack去打包到
// bundle.js
console.log(Person.info);

// 通过Babel. 可以帮我们将高级语法转为低级语法
// 1. 在webpack中可以运行如下命令. 安装两套包 去安装Babel相关的loader功能
// 1.1第一套包 cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2第二套包 cnpm i babel-preset-env babel-preset-stage-0 -D
// 2. 打开webpack配置文件, 在module节点下的rules数组中, 添加一个新的匹配规则
// 2.1 {test: /\.js$/, use: "bable-loader", exlude: /node_modules/}
// 2.2 注意: 在配置babel的loader规则时, 必须把node_modules目录通过
// exclude排除掉, 原因2:
// 2.2.1 node_modules打包编译占用内存, 不去打包第三方
// 2.2.2 即使把所以第三方编译完了也无法正常运行
// 3. 在项目的根目录中, 新建一个叫做.babelrc 的Babel配置文件(json格式)
// 3.1 在.babelrc写如下配置
//  {
// "presets": [],
// "plugins": []
//  }



// function Animal(name){
//     this.name = name
// }

// var a1 = new Animal("xiaohua")