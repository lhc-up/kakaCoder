/**
 * @name: 解析Md
 * @author: haoluo2
 * @date: 2020-03-10
 * @desc: 请求封装
*/


const Towxml = require('towxml');
// 云函数入口函数
exports.main = async (event, context) => {
    const { type = 'markdown', content, options = {} } = event;
    const res = Towxml(content, type, options);
    return {
        data: res
    };
}