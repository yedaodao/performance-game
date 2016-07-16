'use strict';

var koa = require('koa');
var http = require('http');
var path = require('path');
var koaStatic = require('koa-static');

var app = koa(),
// 需要启动的app名称（bundle的子文件夹名称)
    startApps = ['core', 'hang'],
    connects = 0;

// app middleware
app.use(koaStatic('./static'));

startApps.forEach(function (bundleName) {
    let bundle = require('./' + path.join('./bundle', bundleName, 'app'));
    bundle.start(app);
});

var server = http.createServer(app.callback());
server.listen(3000);

server.on('connection', function () {
    console.log('connection');
    server.getConnections(function (err, count) {
        console.log(count);
    });
});


process.on('SIGTERM', function () {
    console.log('exit code');
    server.close(function () {
        server.getConnections(function (err, count) {
            console.log(count);
        });
        console.log('http server stop');
    });
});
process.on('exit', function () {
    console.log('exit');
});
