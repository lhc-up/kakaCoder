/**
 * @name: request封装
 * @author: haoluo2
 * @date: 2020-02-05
 * @desc: 请求封装
*/


import utils from "./util.js";
import CONST from './const.js';
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
    request(method, url, data) {
        let _this = this;
        const authHeader = _this.getAuthBase64();
        const header = {};
        if (authHeader) {
            header['Authorization'] = authHeader;
        }
        return new Promise((resolve, reject) => {
            wx.request({
                method,
                url,
                data: data,
                header: header,
                success(res) {
                    _this.handleRequestLimit(res);
                    resolve(res);
                },
                fail(err) {
                    console.log(err);
                    reject('墙太高了，稍后试试吧！');
                }
            });
        });
    },
    // 获取鉴权码，'Basic ' + base64('username:password')
    getAuthBase64() {
        const username = wx.getStorageSync(CONST.STORAGE_USERNAME) || '';
        const password = wx.getStorageSync(CONST.STORAGE_PASSWORD) || '';
        if (!username || !password) return false;
        return 'Basic ' + utils.encodeBase64(`${username}:${password}`);
    },
    // 处理请求限制的问题
    handleRequestLimit(res) {
        // 总次数
        const totalCount = res.header['X-RateLimit-Limit'];
        // 剩余次数
        const remainCount = res.header['X-RateLimit-Remaining'];
        // 重置时间
        const resetTime = res.header['X-RateLimit-Reset'];
        // 只处理GitHub的请求
        if (!totalCount) return false;
        if (remainCount > 5) {
            wx.removeStorageSync(CONST.STORAGE_LIMIT_TYPE);
            wx.removeStorageSync(CONST.STORAGE_LIMIT_RESET_TIME);
            return;
        }
        // 剩余5次机会以内时提示
        let tip = '';
        if (remainCount >= 0) {
            if (!this.getAuthBase64()) {
                tip = `GitHub规定未授权ip每小时接口调用限制为${totalCount}次，您当前剩余${remainCount}次，请登录以获得更多调用次数。`;  
            } else {
                tip = `GitHub规定授权ip每小时接口调用限制为${totalCount}次，您当前剩余${remainCount}次，请节约使用。`;
            }
        } else {
            const time = utils.formatTime(new Date(resetTime * 1000), 'yyyy-MM-dd hh:mm:ss');
            if (!this.getAuthBase64()) {
                tip = `根据GitHub规定，您本小时内的接口调用次数已使用完毕，请登录获取更多调用次数`;
                wx.setStorageSync(CONST.STORAGE_LIMIT_TYPE, 'login');
            } else {
                tip = `根据GitHub规定，您本小时内的接口调用次数已使用完毕，${time}后将重置次数。`
                wx.setStorageSync(CONST.STORAGE_LIMIT_TYPE, 'exceed');
            }
            wx.setStorageSync(CONST.STORAGE_LIMIT_RESET_TIME, time);
        }
        wx.showModal({
            content: tip,
            showCancel: false,
            confirmText: '确定',
            confirmColor: '#597ef7'
        });
    },
    get(url, data) {
        return this.request('get', url, data);
    },
    post(url, data) {
        return this.request('post', url, data);
    },
    put(url, data) {
        return this.request('put', url, data);
    },
    delete(url, data) {
        return this.request('delete', url, data);
    },
    cloud(method, url) {
        return new Promise((resolve, reject) => {
            const username = wx.getStorageSync(CONST.STORAGE_USERNAME) || '';
            const password = wx.getStorageSync(CONST.STORAGE_PASSWORD) || '';
            const systemInfo = wx.getSystemInfoSync();
            const base64 = username && password ? ('Basic ' + utils.encodeBase64(`${username}:${password}`)) : '';
            const headers = {
                'User-Agent': username || (systemInfo.model + systemInfo.system),
                'Authorization': base64
            };
            wx.cloud.callFunction({
                name: 'requestTransfer',
                data: {
                    url, method, headers
                }
            }).then(res => {
                const { result } = res;
                console.log(res);
                if (result.statusCode === 8023) {
                    reject(result.message);
                } else {
                    result.data = JSON.parse(result.data);
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }
};

export default request;