/**
 * @name: issue详情页
 * @author: haoluo2
 * @date: 2020-03-13
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        apiUrl: '',
        issueDetail: {},
        commentsList: [],
        page: 1,
        pageSize: 15,
        hasNextPage: true
    },
    onLoad(option) {
        this.data.apiUrl = option.url || 'https://api.github.com/repos/google/mediapipe/issues/486';//486
    },
    onShow() {
        this.getIssueDetail();
        this.getComments();
        wx.setNavigationBarTitle({
            title: 'issue #' + this.data.apiUrl.split('/').reverse()[0]
        });
    },
    getIssueDetail() {
        utils.showLoading();
        request.get(this.data.apiUrl).then(res => {
            utils.hideLoading();
            const data = res.data;
            data.created_at = utils.formatTime(new Date(data.created_at), 'yyyy-MM-dd hh:mm:ss');
            if (data.closed_at) {
                data.closed_at = utils.formatTime(new Date(data.closed_at), 'yyyy-MM-dd hh:mm:ss');
            }
            this.setData({
                issueDetail: data
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 获取评论
    getComments() {
        if (!this.data.hasNextPage) return;
        const pageParams = `?page=${this.data.page}&per_page=${this.data.pageSize}`;
        utils.showLoading();
        request.get(`${this.data.apiUrl}/comments${pageParams}`).then(res => {
            utils.hideLoading();
            const list = res.data || [];
            list.forEach(item => {
                item.created_at = utils.formatTime(new Date(item.created_at), 'yyyy-MM-dd hh:mm:ss');
            });
            this.setData({
                commentsList: [...this.data.commentsList, ...list],
                hasNextPage: list.length === this.data.pageSize
            });
            this.data.page++;
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.data.commentsList = [];
        this.data.hasNextPage = true;
        this.data.page = 1;
        this.getIssueDetail();
        this.getComments();
    },
    // 上拉加载
    onReachBottom() {
        this.getComments();
    }
});