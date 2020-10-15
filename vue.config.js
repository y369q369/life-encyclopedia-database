module.exports = {
    devServer: {
        open: true,                                                     // 启动程序自动打开页面
        proxy: {                                                        // 设置代理
            // 代理 localhost:8080/chengyu/.. 到 http://v.juhe.cn/chengyu/..
            '/chengyu': {
                target: 'http://v.juhe.cn/',
            },
        }
    },
}

