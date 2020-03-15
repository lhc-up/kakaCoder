/**
 * @name: Activity
 * @author: haoluo2
 * @date: 2020-03-05
*/

import utils from '../../../utils/util.js';
import request from '../../../utils/request.js';
import url from '../../../utils/interface.js';
import CONST from '../../../utils/const.js';
Page({
    data: {
        eventList: [],
        page: 1,
        pageSize: 15,
        hasNextPage: true,
        // 第一次是否加载完毕
        load: false
    },
    onLoad() {
        this.getEventList();
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.data.eventList = [];
        this.data.page = 1;
        this.data.hasNextPage = true;
        this.getEventList();
    },
    // 上拉加载
    onReachBottom() {
        this.getEventList();
    },
    // 获取事件列表
    getEventList() {
        if (!this.data.hasNextPage) return;
        const api = this.getApiUrl();
        utils.showLoading();
        request.cloud('get', api).then(res => {
            utils.hideLoading();
            let data = res.data;
            if (!data || !(data instanceof Array)) data = [];
            data.forEach(item => {
                item.created_at = utils.formatTime(new Date(item.created_at), 'yyyy-MM-dd hh:mm:ss');
            });
            this.setData({
                eventList: [...this.data.eventList, ...data],
                hasNextPage: data.length === this.data.pageSize
            });
            this.data.page++;
        }).catch(err => {
            utils.showTip(err);
        }).finally(() => {
            this.setData({
                load: true
            });
        });
    },
    // 获取请求路径，有用户信息时，获取用户events，否则获取public events
    getApiUrl() {
        const username = wx.getStorageSync(CONST.STORAGE_USERNAME);
        const api = !!username ? url.getReceivedEvents(username) : url.getPublicEvents;
        return api + '?page=' + this.data.page + '&per_page=' + this.data.pageSize;
    },
    // 查看开发者
    viewDeveloperDetail(e) {
        const { name } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `/pages/subPages/developer/developer?username=${name}`
        });
    }
});