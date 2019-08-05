// module.exports = {

//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'http://123.56.195.82:9999',
//                 changeOrigin: true,
//                 pathRewrite:{
//                     '^/api':''
//                 }
//             }
//         }
//     },
//     publicPath: './',
//     // 输出文件目录
//     outputDir: 'dist',
//     // webpack-dev-server 相关配置
  
// }




module.exports = {

    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://6.lizhinews.applinzi.com/api/login',
    //             changeOrigin: true,
    //             pathRewrite:{
    //                 '^/api':''
    //             }
    //         }
    //     }
    // },
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
  
}
