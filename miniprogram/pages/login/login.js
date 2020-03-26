/**
 * @name: 登录页
 * @author: haoluo2
 * @date: 2020-03-05
*/

import utils from '../../utils/util.js';
import request from '../../utils/request.js';
import CONST from '../../utils/const.js';
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
        const { username, password } = this.data;
        if (!username) return utils.showTip('请输入用户名!');
        if (!password) return utils.showTip('请输入密码!');
        utils.showLoading();
        request.cloud('getToken', { username, password }).then(data => {
            utils.hideLoading();
            if (!data || !data.token) return;
            wx.setStorageSync(CONST.STORAGE_USERNAME, username);
            wx.setStorageSync(CONST.STORAGE_PASSWORD, password);
            wx.setStorageSync(CONST.STORAGE_TOKEN, data.token);
            wx.navigateBack();
        }).catch(err => {
            wx.clearStorageSync();
            utils.showTip(err);
        });
    }
});