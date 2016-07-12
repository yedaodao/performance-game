'use strict';

var koa = require('koa');
var path = require('path');
var koaStatic = require('koa-static');

var app = koa(),
// 需要启动的app名称（bundle的子文件夹名称)
    startApps = ['core', 'hang'];

// app middleware
app.use(koaStatic('./static'));

startApps.forEach(function (bundleName) {
    let bundle = require('./' + path.join('./bundle', bundleName, 'app'));
    bundle.start(app);
});

app.listen(3000);
