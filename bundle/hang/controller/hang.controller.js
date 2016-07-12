var render = require('../../../lib/render'),
    hangService = require('../service/hang.service');


module.exports = {
    echo: function*() {
        this.body = yield hangService.defer();
    }
};
