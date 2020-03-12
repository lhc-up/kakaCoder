/**
 * @name: 开发者列表，相比trending页面稍微简化
 * @author: haoluo2
 * @date: 2020-03-12
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        apiUrl: '',
        developerList: []
    },
    onLoad(option) {
        this.data.apiUrl = decodeURI(option.url || '');
    },
    onShow() {
        this.getDeveloperList();
    },
    getDeveloperList() {
        if (!this.data.apiUrl) return;
        utils.showLoading();
        request.get(this.data.apiUrl).then(data => {
            this.setData({
                repoList: data
            });
            utils.hideLoading();
        }).catch(err => {
            utils.showTip(err);
        });
    }
});