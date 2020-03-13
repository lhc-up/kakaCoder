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
        developerList: [],
        page: 1,
        hasNextPage: true,
        pageSize: 15
    },
    onLoad(option) {
        this.data.apiUrl = decodeURI(option.url || 'https://api.github.com/users/dagar/followers');
    },
    onShow() {
        this.getDeveloperList();
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.data.developerList = [];
        this.data.page = 1;
        this.data.hasNextPage = true;
        this.getDeveloperList();
    },
    // 上拉加载
    onReachBottom() {
        this.getDeveloperList();
    },
    // 获取开发者列表
    getDeveloperList() {
        if (!this.data.apiUrl) return;
        if (!this.data.hasNextPage) return;
        const pageParam = `?page=${this.data.page}&per_page=${this.data.pageSize}`;
        utils.showLoading();
        request.get(this.data.apiUrl+pageParam).then(data => {
            const list = data || [];
            this.setData({
                developerList: [...this.data.developerList, ...list],
                hasNextPage: data.length === this.data.pageSize
            });
            this.data.page++;
            utils.hideLoading();
        }).catch(err => {
            utils.showTip(err);
        });
    }
});