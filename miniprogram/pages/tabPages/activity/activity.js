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
    // 分享
    onShareAppMessage() {
        return {
            title: '真热闹啊，快来看看今天GitHub都有哪些大事件！',
            path: '/pages/tabPages/activity/activity'
        }
    },
    // 获取事件列表
    getEventList() {
        if (!this.data.hasNextPage) return;
        const isLogin = utils.isLogin();
        const type = isLogin ? 'getUserEvents' : 'getPublicEvents';
        const param = {
            per_page: this.data.pageSize,
            page: this.data.page
        };
        if (isLogin) param.username = wx.getStorageSync(CONST.STORAGE_USERNAME);
        utils.showLoading();
        request.cloud(type, param).then(res => {
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
    getFuncType() {
        const username = wx.getStorageSync(CONST.STORAGE_USERNAME);
        const password = wx.getStorageSync(CONST.STORAGE_PASSWORD);
        const token = wx.getStorageSync(CONST.STORAGE_TOKEN);
        return (token || (username && password)) ? 'getUserEvents' : 'getPublicEvents';
    },
    // 查看开发者
    viewDeveloperDetail(e) {
        const { name } = e.currentTarget.dataset;
        wx.navigateTo({
            url: `/pages/subPages/developer/developer?username=${name}`
        });
    },
    // 查看仓库
    viewRepoDetail(e) {
        const { name } = e.currentTarget.dataset;
        const arr = name.split('/');
        wx.navigateTo({
            url: `/pages/subPages/repo/repo?name=${arr[1]}&author=${arr[0]}`
        });
    }
});