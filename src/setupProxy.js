const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/services',
    createProxyMiddleware({
      target: 'https://archive.org',
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
