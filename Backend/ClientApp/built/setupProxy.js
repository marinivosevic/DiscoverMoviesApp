var createProxyMiddleware = require('http-proxy-middleware').createProxyMiddleware;
var env = require('process').env;
var target = env.ASPNETCORE_HTTPS_PORT ? "https://localhost:".concat(env.ASPNETCORE_HTTPS_PORT) :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:54732';
var context = [
    "/weatherforecast",
];
module.exports = function (app) {
    var appProxy = createProxyMiddleware(context, {
        target: target,
        secure: false,
        headers: {
            Connection: 'Keep-Alive'
        }
    });
    app.use(appProxy);
};
