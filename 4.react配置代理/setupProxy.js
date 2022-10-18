const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{//遇见 /api1的前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000',//target: 用于将请求转发给哪台服务器
            changeOrigin:true,//changeOrigin:控制服务器收到的响应头中Host字段的值
            pathRewrite:{'^/api1':''}//pathRewrite:重写请求路径（必须）
        }),
        createProxyMiddleware('/api2',{
            target: 'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}