var path = require('path');
var views = require('co-views');

/**
 * 返回render函数
 * 支持传入完整相对路径,如./bundle/core/view/index.html
 * 支持传入模块名+模板名称,如 core index,会被解析为 ./bundle/core/view/index.html
 * @returns {*}
 */
module.exports = function () {
    var args = [].slice.call(arguments);
    if (!args.length || args.length > 2) {
        throw new Error('args wrong');
    }
    if (args.length == 1) {
        return views('./', {
            map: {html: 'swig'}
        })(args[0]);
    } else {
        return views(path.resolve('./bundle', args[0], 'view'), {
            map: {html: 'swig'}
        })(args[1]);
    }
};
