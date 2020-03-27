/**
 * @name: issue列表
 * @author: haoluo2
 * @date: 2020-03-13
*/
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        currentTab: 'open',
        load: false,
        issuelist: [],
        page: 1,
        pageSize: 15,
        hasNextPage: true,
        refresh: false,
        // 调用云函数的type
        funcType: '',
        // 调用云函数的参数
        param: {}
    },
    onLoad(option) {
        this.data.funcType = option.funcType;
        this.data.param = JSON.parse(option.param);
        this.init();
    },
    onShow() {
        // 跨页面设置fresh
        if (this.data.refresh) this.init();
    },
    init() {
        this.data.issuelist = [];
        this.data.page = 1;
        this.data.hasNextPage = true;
        if (this.data.refresh) {
            // refresh为true时，是为了避免页面栈溢出，回退到此页面，需要刷新数据
            this.setData({
                issuelist: []
            });
            this.data.refresh = false;
        }
        this.getIssueList();
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.init();
    },
    // 上拉加载
    onReachBottom() {
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
        this.init();
    },
    getIssueList() {
        if (!this.data.hasNextPage) return;
        const { funcType, param } = this.data;
        utils.showLoading();
        request.cloud(funcType, Object.assign(param, {
            per_page: this.data.pageSize,
            page: this.data.page,
            state: this.data.currentTab
        })).then(res => {
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
    // 查看issue详情
    viewIssueDetail(e) {
        const param = this.data.param;
        param.number = e.currentTarget.dataset.number;
        wx.navigateTo({
            url: `/pages/subPages/issue/issue?param=${JSON.stringify(param)}`
        });
    },
    // 添加issue
    addIssue() {
        wx.navigateTo({
            url: '/pages/subPages/addIssue/addIssue?param=' + JSON.stringify(this.data.param)
        });
    }
});