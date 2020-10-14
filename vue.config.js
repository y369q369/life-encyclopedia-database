module.exports = {
    devServer: {
        // open: true,
        proxy: {
            '/chengyu': {
                target: 'http://v.juhe.cn/',
            },
        }
    },
}

