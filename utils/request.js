/**
 * @name: request封装
 * @author: haoluo2
 * @date: 2020-02-05
 * @desc: 请求封装
*/


import utils from "./util.js";
import url from './interface.js'
// 给Promise添加finally事件
Promise.prototype.finally = function(cb) {
    const _promise = this.constructor;
    return this.then(
        val => _promise.resolve(cb()).then(() => val),
        err => _promise.resolve(cb()).then(() => err)
    );
}

const request = {
    config: {
        header: {
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }
    },
    request(method, url, data, config={}) {
        let _config = Object.assign(this.config, config);
        let _this = this;
        return new Promise((resolve, reject) => {
            wx.request({
                method,
                url,
                data: data,
                header: _config.header,
                success(res) {
                    let response = _this.responseFormatter(res);
                    resolve(response);
                },
                fail(err) {
                    console.log(err);
                    reject('网络已断开连接，请连接网络后重试');
                }
            });
        });
    },
    // 获取鉴权码，'Basic ' + base64('username:password')
    getAuthBase64() {
        const username = wx.getStorageSync('username');
        const password = wx.getStorageSync('password');
        return 'Basic ' + utils.encodeBase64(`${username}:${password}`);
    },
    // 根据状态码格式化response
    responseFormatter(response) {
        const errStatus = {
            300: "资源已被转移至其他位置",
            301: "请求的资源已被永久移动到新URI",
            302: "请求的资源已被临时移动到新URI",
            305: "请求的资源必须通过代理访问",
            400: "错误资源访问请求",
            401: "资源访问未授权",
            403: "资源禁止访问",
            404: "未找到要访问的资源",
            405: "请更换请求方法",
            406: "无法访问",
            408: "请求超时",
            413: "请求实体过大",
            414: "请求URI过长",
            500: "内部服务器错误",
            501: "未实现",
            503: "服务无法获得",
            504: "接口访问超时"
        };
        
        const statusCode = response.statusCode;
        if (statusCode === 200) return response.data;
        utils.showTip(errStatus[response.statusCode] || response.data.message );
        return null;
    },
    get(url, data, config) {
        return this.request('get', url, data, config);
    },
    post(url, data, config) {
        return this.request('post', url, data, config);
    },
    // graphlQl请求本身是post请求，body体内放入固定格式的参数
    graphql(data={}) {
        let header = {};
        if (typeof data.header === 'function') {
            header = data.header();
        }
        if (typeof data.header === 'object') {
            header = data.header;
        }
        header['Authorization'] = this.getAuthBase64();
        let _this = this;
        return new Promise((resolve, reject) => {
            wx.request({
                url: url.graphql,
                method: 'POST',
                data: JSON.stringify({
                    query: data.query,
                    variables: data.variables
                }),
                header: header,
                success(res) {
                    let response = _this.responseFormatter(res);
                    resolve(response);
                },
                fail(err) {
                    console.log(err);
                    reject('墙太高了，请重试！');
                }
            });
        });
    }
};

export default request;