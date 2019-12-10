// export default 向外暴露成员, 可以使用任意变量来接收

// 在一个模块中, export default 只允许向外暴露一次
// 在一个模块中, 可以同时使用export default 和export向外暴露成员

export default {
    name:"sz",
    age: 12
}


export var title = "xiaoxingxing"
// 使用export 向外暴露的成员, 只能使用{}的形式来接收, 这种形式叫做 按需导出
// export 可以向外暴露多个成员, 同时 如果某些成员, 我们在import 的时候, 不需要 则可以不在{}中定义

//在Node中 使用var 名称 = require('模块标识符')
// module.exports 和exports来暴露成员