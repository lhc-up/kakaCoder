/**
 * @name: issue列表
 * @author: haoluo2
 * @date: 2020-03-13
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        apiUrl: '',
        currentTab: 'open',
        load: false,
        issuelist: [],
        page: 1,
        pageSize: 15,
        hasNextPage: true
    },
    onLoad(option) {
        this.data.apiUrl = option.url || 'https://api.github.com/repos/google/mediapipe/issues';
    },
    onShow() {
        this.getIssueList();
    },
    switchTab(e) {
        const type = e.currentTarget.dataset.type;
        this.setData({
            currentTab: type
        });
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
        this.refresh();
    },
    getIssueList() {
        if (!this.data.hasNextPage) return;
        const pageParam = `?page=${this.data.page}&per_page=${this.data.pageSize}&state=${this.data.currentTab}`;
        utils.showLoading();
        request.cloud('get', this.data.apiUrl + pageParam).then(res => {
            utils.hideLoading();
            let list = res.data;
            if (!list || !(list instanceof Array)) list = [];
            list.forEach(item => {
                item.updated_at = utils.formatTime(new Date(item.updated_at), 'yyyy-MM-dd hh:mm:ss');
                if (!!item.closed_at) {
                    item.closed_at = utils.formatTime(new Date(item.closed_at), 'yyyy-MM-dd hh:mm:ss');
                }
            });
            this.setData({
                issuelist: [...this.data.issuelist, ...list],
                hasNextPage: list.length === this.data.pageSize
            });
            this.data.page++;
        }).catch(err => {
            utils.showTip(err);
        });
    },
    refresh() {
        this.data.issuelist = [];
        this.data.page = 1;
        this.data.hasNextPage = true;
        this.getIssueList();
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.refresh();
    },
    // 上拉加载
    onReachBottom() {
        this.getIssueList();
    },
    // 查看issue详情
    viewIssueDetail(e) {
        const number = e.currentTarget.dataset.number;
        wx.navigateTo({
            url: `/pages/subPages/issue/issue?url=${this.data.apiUrl}/${number}`
        });
    }
});