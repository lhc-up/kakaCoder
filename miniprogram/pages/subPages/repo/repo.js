/**
 * @name: repo首页
 * @author: haoluo2
 * @date: 2020-03-09
*/

import url from '../../../utils/interface.js';
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
import CONST from '../../../utils/const.js';
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
    // 是否已登录
    isLogin() {
        const username = wx.getStorageSync(CONST.STORAGE_USERNAME);
        const password = wx.getStorageSync(CONST.STORAGE_PASSWORD);
        return username && password;
    },
    // 操作前判断是否已登录，未登录给出弹窗提示
    getIsLoginBeforeOperate() {
        if (this.isLogin()) return true;
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
        const fullName = this.data.repoDetail.full_name;
        if (!fullName) return false;
        const apiUrl = url.starRepo(fullName);
        utils.showLoading();
        if (this.data.isStarred) {
            request.transfer('delete', apiUrl).then(res => {
                utils.hideLoading();
                if (res.statusCode === 204) {
                    this.setData({
                        isStarred: false,
                        'repoDetail.stargazers_count': this.data.repoDetail.stargazers_count - 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }).catch(err => {
                utils.showTip(err);
            });
        } else {
            request.transfer('put', apiUrl).then(res => {
                utils.hideLoading();
                if (res.statusCode === 204) {
                    this.setData({
                        isStarred: true,
                        'repoDetail.stargazers_count': this.data.repoDetail.stargazers_count + 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }).catch(err => {
                utils.showTip(err);
            });
        }
    },
    // 是否star了该仓库
    isStarredRepo() {
        if (!this.isLogin()) {
            this.setData({
                isStarred: false
            });
            return false;
        }
        const apiUrl = url.isStardRepo(this.data.repoDetail.full_name);
        request.transfer('get', apiUrl).then(res => {
            this.setData({
                isStarred: res.statusCode === 204
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // watch/unwatch这个仓库
    watchRepo() {
        if (!this.getIsLoginBeforeOperate()) return false;
        const fullName = this.data.repoDetail.full_name;
        if (!fullName) return false;
        // const apiUrl = url.starRepo(fullName);
        const apiUrl = this.data.repoDetail.subscription_url;
        utils.showLoading();
        if (this.data.isWatched) {
            request.transfer('delete', apiUrl).then(res => {
                utils.hideLoading();
                if (res.statusCode === 204) {
                    this.setData({
                        isWatched: false,
                        'repoDetail.subscribers_count': this.data.repoDetail.subscribers_count - 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }).catch(err => {
                utils.showTip(err);
            });
        } else {
            request.transfer('put', apiUrl).then(res => {
                utils.hideLoading();
                if (res.statusCode === 200) {
                    this.setData({
                        isWatched: true,
                        'repoDetail.subscribers_count': this.data.repoDetail.subscribers_count + 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }).catch(err => {
                utils.showTip(err);
            });
        }
    },
    // 是否watch了该仓库
    isWatchedRepo() {
        if (!this.isLogin()) {
            this.setData({
                isWatched: false
            });
            return false;
        }
        const apiUrl = url.isWatchedRepo(this.data.repoDetail.full_name);
        request.transfer('get', apiUrl).then(res => {
            this.setData({
                isWatched: res.statusCode === 200 && res.data.subscribed
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // fork该仓库
    forkRepo() {
        if (!this.getIsLoginBeforeOperate()) return false;
        const fullName = this.data.repoDetail.full_name;
        if (!fullName) return false;
        const apiUrl = url.forkRepo(fullName);
        utils.showLoading();
        request.transfer('post', apiUrl).then(res => {
            utils.hideLoading();
            if (res.statusCode === 202) {
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
        const api = url.getRepoDetail(option.author, option.name);
        utils.showLoading();
        request.transfer('get', api).then(res => {
            const data = res.data;
            if (!data) return;
            this.setData({
                repoDetail: data
            });
            this.getReadme(data.full_name);
            // 避免并发请求
            let timer1 = setTimeout(() => {
                this.isStarredRepo();
                clearTimeout(timer1);
            }, 1000);
            let timer2 = setTimeout(() => {
                this.isWatchedRepo();
                clearTimeout(timer2);
            }, 2000);
        }).catch(err => {
            utils.showTip(err);
        }).finally(() => {
            utils.hideLoading();
        })
    },
    // 获取仓库readme
    getReadme(repoFullName) {
        const api = url.getRepoReadme(repoFullName);
        request.transfer('get', api).then(res => {
            if (!res.data) return;
            this.setData({
                readmeDetail: res.data
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 解析markdown
    parseMarkdown(content) {
        // 云函数解析
        wx.cloud.callFunction({
            name: 'parseMd',
            data: {
                content,
                type: 'markdown'
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            console.log(1)
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
        const apiUrl = encodeURI(this.data.repoDetail.issues_url.replace('{/number}', ''));
        if (!exist) {
            wx.navigateTo({
                url: targetRoute + '?url=' + apiUrl
            });
        } else {
            targetPageObj.data.apiUrl = apiUrl;
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
        const repoName = this.data.repoDetail.full_name;
        const repoUrl = this.data.repoDetail.url + '/contents';
        wx.navigateTo({
            url: `/pages/subPages/fileList/fileList?url=${repoUrl}&repoName=${repoName}`
        });
    }
});