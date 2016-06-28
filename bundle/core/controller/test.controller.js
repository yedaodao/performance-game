var render = require('../../../lib/render');


module.exports = {
    render: function*() {
        this.body = JSON.stringify({a: 1, b: 'aaa'});
    },
    echo: function*() {
        console.log(this.req);
        console.log(this.query);
        this.body = this.request.body;
    }
};
