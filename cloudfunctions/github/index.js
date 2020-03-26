const github = require('./octokit.js');
// 云函数入口函数
exports.main = async (event, context) => {
    // type调用接口类型，后端和客户端约定好就行
    // token，客户端可选地传入，access_token
    // param，实际参数对象
    const { type, token, param } = event;
    try {
        return await github[type](token, param);
    } catch(err) {
        return err;
    }
}