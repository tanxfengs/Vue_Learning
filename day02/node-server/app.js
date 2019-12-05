const http = require('http')
const server = http.createServer()

const urlModule = require("url")


server.on('request', function (req, res) {
    // const url = req.url
    const {pathname: url , query} = urlModule.parse(req.url, true)
    if (url === "/getScript") {
        // var scriptStr = "show()"
        var data = {
            "name": "test",
            "age": 16,
            "gender": "女"
        }

        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        // 拼接一个合法的JS脚本
        res.end(scriptStr)
    }else {
        res.end("404")
    }

})
server.listen(3000, function () {
console.log('server listen at http://127.0.0.1:3000')
})