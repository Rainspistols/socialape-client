const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://europe-west3-socialape-4a360.cloudfunctions.net/api',
      changeOrigin: true,
    })
  );
};
