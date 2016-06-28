var router = require('koa-route');

var testController = require('./controller/test.controller');

exports.start = function (app) {
    app.use(router.get('/core/test', testController.render));
    app.use(router.post('/core/test', testController.echo));
};