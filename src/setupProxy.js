// https://grnioyrhj8.execute-api.us-east-2.amazonaws.com/test/stabled

const {createProxyMiddleware} = require('http-proxy-middleware');
const proxy = {
    target: 'https://grnioyrhj8.execute-api.us-east-2.amazonaws.com/test/stabled',
    changeOrigin: true,
};
module.exports = function (app) {
    app.use('/test', createProxyMiddleware(proxy));
};