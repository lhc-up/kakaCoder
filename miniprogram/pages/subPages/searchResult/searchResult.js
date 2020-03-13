/**
 * @name: 搜索结果页，包含repo和user
 * @author: haoluo2
 * @date: 2020-03-05
*/

import utils from '../../../utils/util.js';
import url from '../../../utils/interface.js';
import request from '../../../utils/request.js';
// async await
const regeneratorRuntime = require('../../../utils/regenerator-runtime.js');
Page({
    data: {
        currentTab: 'repo',//dev
        repo: {
            list: [],
            page: 1,
            hasNextPage: true,
            sortList: ['best match', 'stars', 'forks', 'help-wanted-issues', 'updated'],
            sortNameList: ['Best Match', 'Most Stars', 'Most Forks', 'Most Help-wanted-issues', 'Latest'],
            sort: ''
        },
        dev: {
            list: [],
            page: 1,
            hasNextPage: true,
            sortList: ['best match', 'followers', 'repositories', 'joined'],
            sortNameList: ['Best Match', 'Most Followers', 'Most Repositories', 'Latest Joined'],
            sort: ''
        },
        // 关键字，由搜索页面传来
        keyword: 'js',
        // repo排序条件，默认降序
        repoSort: '',
        // dev排序条件，默认降序
        devSort: '',
        // 第一次是否加载完毕
        load: false
    },
    onLoad(option) {
        this.data.keyword = option.keyword || 'js';
        this.searchRepositories();
        this.searchDevelopers();
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        const currentTab = this.data.currentTab;
        this.data[currentTab].list = [];
        this.data[currentTab].page = 1;
        this.data[currentTab].hasNextPage = true;
        if (currentTab === 'repo') {
            this.searchRepositories();
        } else {
            this.searchDevelopers();
        }
    },
    // 上拉加载
    onReachBottom() {
        if (this.data.currentTab === 'repo') {
            this.searchRepositories();
        } else {
            this.searchDevelopers();
        }
    },
    // 切换tab
    switchTab(e) {
        const tabName = e.currentTarget.dataset.type;
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
        if (tabName === this.data.currentTab) return;
        this.setData({
            currentTab: tabName
        });
    },
    // 显示actionSheet
    showActionSheet() {
        const currentTab = this.data.currentTab;
        const itemList = this.data[currentTab].sortNameList;
        wx.showActionSheet({
            itemList,
            itemColor: '#597ef7',
            success: (res) => {
                const index = res.tapIndex;
                const sort = this.data[currentTab].sortList[index];
                this.data[currentTab].list = [];
                this.data[currentTab].sort = sort;
                this.data[currentTab].page = 1;
                this.data[currentTab].hasNextPage = true;
                if (currentTab === 'repo') {
                    this.searchRepositories();
                } else {
                    this.searchDevelopers();
                }
            }
        });
    },
    // 获取repo
    searchRepositories() {
        if (!this.data.repo.hasNextPage) return;
        const paramStr = this.getParams('repo');
        utils.showLoading();
        request.get(url.searchRepositories + paramStr).then(res => {
            const data = res.data;
            if (!data) return;
            console.log(data)
            const list = data.items || [];
            list.forEach(item => {
                item.updated_time = utils.formatTime(new Date(item.updated_at), 'yyyy-MM-dd hh:mm:ss');
            })
            this.setData({
                'repo.list': [...this.data.repo.list, ...list],
                'repo.hasNextPage': !!list.length
            });
            this.data.repo.page++;
            utils.hideLoading();
        }).catch(err => {
            utils.showTip(err);
        }).finally(() => {
            this.setData({
                'load': true
            });
        })
    },
    // 获取dev
    searchDevelopers() {
        if (!this.data.dev.hasNextPage) return;
        const paramStr = this.getParams('dev');
        utils.showLoading();
        request.get(url.searchDevelopers + paramStr).then(res => {
            const data = res.data;
            if (!data) return;
            console.log(data)
            const list = data.items || [];
            this.setData({
                'dev.list': [...this.data.dev.list, ...list],
                'dev.hasNextPage': !!list.length
            });
            this.data.dev.page++;
            utils.hideLoading();
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 获取请求参数
    getParams(type) {
        let paramStr = `?q=${this.data.keyword}`;
        if (type === 'repo') {
            paramStr += `&page=${this.data.repo.page}`;
            if (!!this.data.repoSort) {
                paramStr += `&sort=${this.data.repoSort}&order=desc`;
            }
        } else {
            paramStr += `&page=${this.data.dev.page}`;
            if (!!this.data.devSort) {
                paramStr += `&sort=${this.data.devSort}&order=desc`;
            }
        }
        return paramStr;
    }
});