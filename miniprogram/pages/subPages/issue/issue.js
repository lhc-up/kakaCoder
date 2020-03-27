/**
 * @name: issue详情页
 * @author: haoluo2
 * @date: 2020-03-13
*/
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        issueDetail: {},
        commentsList: [],
        page: 1,
        pageSize: 15,
        hasNextPage: true,
        refresh: false,
        // 调用云函数的参数
        param: {}
    },
    onLoad(option) {
        this.data.param = JSON.parse(option.param);
        this.init();
    },
    onShow() {
        // 跨页面设置fresh
        if (this.data.refresh) this.init();
    },
    init() {
        this.data.hasNextPage = true;
        this.data.page = 1;
        this.data.refresh = false;
        this.getIssueDetail();
        wx.setNavigationBarTitle({
            title: 'issue #' + this.data.param.issue_number
        });
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.init();
    },
    // 上拉加载
    onReachBottom() {
        this.getComments();
    },
    // 分享
    onShareAppMessage() {
        let title = '这个Issue你怎么看？';
        return {
            title,
            path: `/pages/subPages/issue/issue?param=${JSON.stringify(this.data.param)}`
        }
    },
    getIssueDetail() {
        utils.showLoading();
        request.cloud('getIssueDetail', this.data.param).then(res => {
            utils.hideLoading();
            const data = res.data;
            if (!data) return;
            data.created_at = utils.formatTime(new Date(data.created_at), 'yyyy-MM-dd hh:mm:ss');
            if (data.closed_at) {
                data.closed_at = utils.formatTime(new Date(data.closed_at), 'yyyy-MM-dd hh:mm:ss');
            }
            this.setData({
                issueDetail: data
            });
            this.getComments();
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 获取评论
    getComments() {
        if (!this.data.hasNextPage) return;
        utils.showLoading();
        request.cloud('getCommentListForIssue', Object.assign({}, this.data.param, {
            per_page: this.data.pageSize,
            page: this.data.page
        })).then(res => {
            utils.hideLoading();
            let list = res.data;
            if (!list || !(list instanceof Array)) list = [];
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
    // 添加评论
    addComment() {
        wx.navigateTo({
            url: '/pages/subPages/addComment/addComment?param=' + JSON.stringify(this.data.param)
        });
    }
});