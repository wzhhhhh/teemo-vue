module.exports = {
    devServer: {
        proxy: {
            '/REST/*': {
                target: 'http://10.10.10.37:1324',
                ws: true,
                changeOrigin: true
            },
            '/FREST/*': {
                target: 'http://10.10.10.38:5001',
                ws: true,
                changeOrigin: true
            }
        },
    }
}