module.exports = {
    devServer: {
        open: true,                                                     // 启动程序自动打开页面
        proxy: {
            '/chengyu': {
                target: 'http://v.juhe.cn/',
            },
        }
    },
}

