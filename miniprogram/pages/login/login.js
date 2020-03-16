/**
 * @name: 登录页
 * @author: haoluo2
 * @date: 2020-03-05
*/

import utils from '../../utils/util.js';
import url from '../../utils/interface.js';
import request from '../../utils/request.js';
import CONST from '../../utils/const.js';
const app = getApp();
Page({
    data: {
        username: '',
        password: ''
    },
    // 监听输入
    onInput(e) {
        const type = e.target.dataset.type;
        this.data[type] = e.detail.value;
    },
    login() {
        const username = this.data.username;
        const password = this.data.password;
        if (!username) {
            utils.showTip('Username is required!');
            return false;
        }
        if (!password) {
            utils.showTip('Password is required!');
            return false;
        }
        // 这里存入缓存，供公共请求方法添加auth使用，登录失败时需清除
        wx.setStorageSync(CONST.STORAGE_USERNAME, username);
        wx.setStorageSync(CONST.STORAGE_PASSWORD, password);
        utils.showLoading();
        request.transfer('get', url.login).then(res => {
            utils.hideLoading();
            if (res.statusCode !== 200) {
                wx.removeStorageSync(CONST.STORAGE_USERNAME);
                wx.removeStorageSync(CONST.STORAGE_PASSWORD);
                wx.removeStorageSync(CONST.STORAGE_USERINFO);
                return;
            }
            const data = res.data;
            if (!data) return;
            app.globalData.userInfo = data;
            wx.setStorageSync(CONST.STORAGE_USERINFO, JSON.stringify(data));
            wx.navigateBack();
        }).catch(err => {
            utils.showTip(err);
        });
    }
});