var router = require('koa-route');

var hangController = require('./controller/hang.controller');

exports.start = function (app) {
    app.use(router.get('/hang/echo', hangController.echo));
};