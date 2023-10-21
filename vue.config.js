module.exports = {
    lintOnSave:true,//这里禁止使用eslint-loader
    publicPath: './', // 基本路径
    configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
        config.mode = 'production';
        config["performance"] = {//打包文件大小配置
          "maxEntrypointSize": 10000000,
          "maxAssetSize": 30000000
        }
      }
    },
    lintOnSave: false
    //跨域解决方案
    // devServer: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://112.74.181.132:44444',
    //       pathRewrite: {'^/api' : '/'},
    //       changeOrigin: true,     // target是域名的话，需要这个参数，
    //       secure: false,          // 设置支持https协议的代理
    //     },
    //   }
    // }
  }