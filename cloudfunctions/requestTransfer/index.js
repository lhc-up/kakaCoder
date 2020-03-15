// 云函数入口文件

const transfer = require('./transfer.js');

// 云函数入口函数
exports.main = async (event, context) => {
    const { type='github', url, method, headers } = event;
    const handler = transfer[type];
    try {
        const data = await handler(url, method, headers);
        return data;
    } catch(err) {
        return {
            statusCode: 8023,
            message: '未知异常，请重试！'
        };
    }
}