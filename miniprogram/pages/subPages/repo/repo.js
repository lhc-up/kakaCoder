/**
 * @name: repo首页
 * @author: haoluo2
 * @date: 2020-03-09
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        option: {},
        repoDetail: {},
        readmeDetail: {},
        operateList: [
            'Copy git url',
            'Copy ssh url',
            'Copy clone url',
            'Download zip'
        ],
        isStarred: false,
        isWatched: false,
        refresh: false
    },
    onLoad(option) {
        this.data.option = option;
        // this.data.option = {
        //     name: 'mediapipe',
        //     author: 'google'
        // };
        this.init();
    },
    onShow() {
        // 跨页面设置fresh
        if (this.data.refresh) this.init();
    },
    // 分享
    onShareAppMessage() {
        let title = '我发现了一个不错的项目，';
        const starCount = this.data.repoDetail.stargazers_count || 0;
        if (starCount < 500) {
            title += 'star在飙升！'
        } else if (starCount < 1500) {
            title += 'star也很多，快来看看吧！'
        } else if (starCount < 3000) {
            title += `${starCount}的star数，质量可不是盖的！`
        } else {
            title += `${starCount} star！就问你怕不怕！`
        }
        const option = this.data.option;
        return {
            title,
            path: `/pages/subPages/repo/repo?name=${option.name}&author=${option.author}`
        }
    },
    init() {
        wx.setNavigationBarTitle({
            title: this.data.option.name || 'Github'
        });
        this.data.refresh = false;
        this.setData({
            repoDetail: {},
            readmeDetail: {}
        });
        this.getRepoDetail();
    },
    // 监听picker
    onPickerChange(e) {
        const value = e.detail.value;
        const repoDetail = this.data.repoDetail;
        switch (value) {
            case '0':
                this.copyLink(repoDetail.git_url);
                break;
            case '1':
                this.copyLink(repoDetail.ssh_url);
                break;
            case '2':
                this.copyLink(repoDetail.clone_url);
                break;
            case '3':
                this.downLoadZip();
                break;
            default:
                break;
        }
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.init();
    },
    // 操作前判断是否已登录，未登录给出弹窗提示
    getIsLoginBeforeOperate() {
        if (utils.isLogin()) return true;
        wx.showModal({
            content: '请先登录',
            confirmText: '确定',
            confirmColor: '#597ef7',
            success: (result) => {
                if (result.confirm) {
                    wx.navigateTo({
                        url: '/pages/login/login'
                    });
                }
            }
        });
        return false;
    },
    // star/unstar这个仓库
    starRepo() {  
        if (!this.getIsLoginBeforeOperate()) return false;
        const option = this.data.option;
        const type = this.data.isStarred ? 'unstar' : 'star';
        utils.showLoading();
        request.cloud('toggleStarRepo', {
            type,
            owner: option.author,
            repo: option.name
        }).then(res => {
            if (res.status === 204) {
                this.setData({
                    isStarred: !this.data.isStarred,
                    'repoDetail.stargazers_count': this.data.repoDetail.stargazers_count - (this.data.isStarred ? 1 : -1)
                });
            } else {
                utils.showTip('出错了，请重试!');
            }
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 是否star了该仓库
    isStarredRepo() {
        if (!utils.isLogin()) {
            this.setData({
                isStarred: false
            });
            return false;
        }
        const option = this.data.option;
        request.cloud('getIfYouAreStrringRepo', {
            owner: option.author,
            repo: option.name
        }).then(res => {
            this.setData({
                isStarred: res.status === 204
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // watch/unwatch这个仓库
    watchRepo() {
        if (!this.getIsLoginBeforeOperate()) return false;
        const option = this.data.option;
        const funcType = this.data.isWatched ? 'unWatchRepo' : 'watchRepo';
        utils.showLoading();
        request.cloud(funcType, {
            owner: option.author,
            repo: option.name
        }).then(res => {
            utils.hideLoading();
            if (this.data.isWatched) {
                if (res.status === 204) {
                    this.setData({
                        isWatched: false,
                        'repoDetail.subscribers_count': this.data.repoDetail.subscribers_count - 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            } else {
                if (res.statusCode === 200) {
                    this.setData({
                        isWatched: true,
                        'repoDetail.subscribers_count': this.data.repoDetail.subscribers_count + 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 是否watch了该仓库
    isWatchedRepo() {
        if (!utils.isLogin()) {
            this.setData({
                isWatched: false
            });
            return false;
        }
        const option = this.data.option;
        request.cloud('getIsWatchedRepo', {
            owner: option.author,
            repo: option.name
        }).then(res => {
            this.setData({
                isWatched: res.status === 200 && res.data.subscribed
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // fork该仓库
    forkRepo() {
        if (!this.getIsLoginBeforeOperate()) return false;
        const option = this.data.option;
        utils.showLoading();
        request.cloud('forkRepo', {
            owner: option.author,
            repo: option.name
        }).then(res => {
            utils.hideLoading();
            if (res.status === 202) {
                this.setData({
                    'repoDetail.forks_count': res.data.network_count || this.data.repoDetail.forks_count
                })
            } else {
                utils.showTip('出错了，请重试！');
            }
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 复制链接
    copyLink(data) {
        wx.setClipboardData({
            data,
            success: (result) => {
                console.log(result)   
            }
        });
    },
    // 下载zip
    downLoadZip() {
        wx.showModal({
            content: '下载之后无法找到文件，也无法发送给好友或文件助手，确认要下载吗？',
            confirmText: '确定',
            confirmColor: '#597ef7',
            success: (result) => {
                if (result.confirm) {
                    var downTask = wx.downloadFile({
                        url: this.data.repoDetail.downloads_url,
                        success: (result) => {
                            wx.showModal({
                                content: `下载完成，临时文件路径为${esult.tempFilePath}`,
                                showCancel: false,
                                confirmText: '确定',
                                confirmColor: '#597ef7'
                            });
                        }
                    });
                }
            }
        });
    },
    // 获取仓库详情
    getRepoDetail() {
        const option = this.data.option;
        utils.showLoading();
        request.cloud('getRepoDetail', {
            owner: option.author,
            repo: option.name
        }).then(res => {
            utils.hideLoading();
            const data = res.data;
            if (!data) return;
            this.setData({
                repoDetail: data
            });
            this.getReadme();
            this.isStarredRepo();
            this.isWatchedRepo();
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 获取仓库readme
    getReadme() {
        const option = this.data.option;
        request.cloud('getReadme', {
            owner: option.author,
            repo: option.name
        }).then(res => {
            if (!res.data) return;
            this.setData({
                readmeDetail: res.data
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 判断目标页面是否已在页面栈中，返回是否存在，存在的话index，以及需要返回的层级，目标页面对象
    getRouteIsExistInStack(targetRouteName) {
        const allPages =  getCurrentPages();
        const index = allPages.findIndex(item => targetRouteName.indexOf(item.route) >= 0);
        const exist = index >= 0;
        const delta = allPages.length - index - 1;
        const targetPageObj = allPages[index];
        return { exist, index, delta, targetPageObj };
    },
    // 查看issue列表
    viewIssues() {
        const targetRoute = '/pages/subPages/issueList/issueList';
        const { exist, delta, targetPageObj } = this.getRouteIsExistInStack(targetRoute);
        const funcType = 'getRepoIssues';
        const param = {
            owner: this.data.repoDetail.owner.login,
            repo: this.data.repoDetail.name
        }
        if (!exist) {
            wx.navigateTo({
                url: `${targetRoute}?funcType=${funcType}&param=${JSON.stringify(param)}`
            });
        } else {
            targetPageObj.data.funcType = funcType;
            targetPageObj.data.param = param;
            targetPageObj.data.refresh = true;
            wx.navigateBack({
                delta
            });
        }
    },
    // 查看contributors
    viewContributors() {
        const targetRoute = '/pages/subPages/developerList/developerList';
        const { exist, delta, targetPageObj } = this.getRouteIsExistInStack(targetRoute);
        const funcType = 'getContributors';
        const param = {
            owner: this.data.repoDetail.owner.login,
            repo: this.data.repoDetail.name
        }
        if (!exist) {
            wx.navigateTo({
                url: `${targetRoute}?funcType=${funcType}&param=${JSON.stringify(param)}`
            });
        } else {
            targetPageObj.data.funcType = funcType;
            targetPageObj.data.param = param;
            targetPageObj.data.refresh = true;
            wx.navigateBack({
                delta
            });
        }
    },
    // 查看作者
    viewAuthor() {
        const targetRoute = '/pages/subPages/developer/developer';
        const { exist, delta, targetPageObj } = this.getRouteIsExistInStack(targetRoute);
        const author = this.data.repoDetail.owner.login;
        if (!exist) {
            wx.navigateTo({
                url: targetRoute + '?username=' + author
            });
        } else {
            targetPageObj.data.username = author;
            targetPageObj.data.refresh = true;
            wx.navigateBack({
                delta
            });
        }
    },
    // 查看pr
    viewPr() {
        wx.showModal({
            content: '敬请期待',
            showCancel: false,
            confirmText: '确定',
            confirmColor: '#597ef7'
        });
    },
    // 查看code
    viewCode() {
        const { name, author } = this.data.option;
        wx.navigateTo({
            url: `/pages/subPages/fileList/fileList?repo=${name}&owner=${author}`
        });
    }
});