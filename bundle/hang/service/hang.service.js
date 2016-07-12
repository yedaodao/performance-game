var Promise = require('bluebird'),
    os = require('os');

var deferTime = 10000;

exports.defer = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                freemem: (os.freemem() / 1024 / 1024).toFixed(1) + 'M'
            });
        }, deferTime);
    });
};
