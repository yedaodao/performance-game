var fs = require('graceful-fs');
var path = require('path');

var bundleTmpl = {
    name: '',
    path: ''
};

exports.generate = dirName => {
    dirName = dirName || 'bundle';
    return new Promise(function (resolve, reject) {
        fs.stat(dirName, function (err, stats) {
            if (err) {
                throw err;
            }
            if (!stats.isDirectory()) {
                throw new ReferenceError('The dirName must be directory');
            }
            resolve();
        });
    })
        .then(()=> {
            return new Promise(function (resolve, reject) {
                fs.readdir(dirName, (err, contents) => {
                    if (err) {
                        throw err;
                    }
                    let map = {};
                    contents.forEach(bundleName => {
                        let bundleObj = Object.create(bundleTmpl);
                        bundleObj.name = bundleName;
                        bundleObj.path = path.resolve('/', dirName, bundleName);
                        map[bundleName] = bundleObj;
                    });
                    resolve(map);
                });
            });
        });
};
