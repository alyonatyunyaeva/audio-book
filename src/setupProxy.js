const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://archive.org',
      pathRewrite: {
        '^/api/': '/'
      },
      changeOrigin: true,
    })
  )

  // app.use(
  //   '/rss',
  //   createProxyMiddleware({
  //     target: 'https://librivox.org',
  //     changeOrigin: true,
  //   })
  // )
}
