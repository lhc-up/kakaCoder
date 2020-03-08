/**
 * @name: 登录页
 * @author: haoluo2
 * @date: 2020-03-05
*/

import utils from '../../utils/util.js';
import url from '../../utils/interface.js';
import request from '../../utils/request.js';
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
        utils.showLoading();
        request.get(url.login, null, {
            header: {
                'Authorization': 'Basic ' + utils.encodeBase64(`${username}:${password}`)
            }
        }).then(res => {
            if (!res) return;
            app.globalData.userInfo = res;
            wx.setStorageSync('userInfo', JSON.stringify(res));
            wx.setStorageSync('username', username);
            wx.setStorageSync('password', password);
            wx.navigateBack();
        }).catch(err => {
            utils.showTip(err);
        }).finally(() => {
            utils.hideLoading();
        });
    }
});