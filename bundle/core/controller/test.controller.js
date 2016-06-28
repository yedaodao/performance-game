var render = require('../../../lib/render');


module.exports = {
    render: function*() {
        this.body = yield render('core', 'index');
    },
    echo: function*() {
        this.body = {echo: 'hello'};
    }
};
