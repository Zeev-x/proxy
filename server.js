const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const port = process.env.PORT || 80;
const targetUrl = 'https://rationally-enjoyed-cat.ngrok-free.app';

app.use('/', createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true,
  pathRewrite: {
    '^/': '/',  // remove base path
  },
}));

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
