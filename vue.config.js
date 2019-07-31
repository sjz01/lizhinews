module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://123.56.195.82:9999',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
