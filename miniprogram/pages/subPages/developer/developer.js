/**
 * @name: 开发者详情页
 * @author: haoluo2
 * @date: 2020-03-08
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
import url from '../../../utils/interface.js';
Page({
    data: {
        username: '',
        userInfo: {}
    },
    onLoad(option) {
        this.data.username = option.username;
        this.getUserInfo();
    },
    getUserInfo() {
        const api = url.getUserInfo(this.data.username);
        utils.showLoading();
        request.get(api).then(data => {
            this.setData({
                userInfo: data
            });
            utils.hideLoading();
        }).catch(err => {
            utils.showTip(err);
        });
    }
});