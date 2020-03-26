/**
 * @name: 个人中心
 * @author: haoluo2
 * @date: 2020-03-05
*/

import CONST from '../../../utils/const.js';
import url from '../../../utils/interface.js';
import utils from '../../../utils/util.js';
import request from '../../../utils/request.js';
let app =  getApp();
Page({
    data: {
        userInfo: null,
        isStarred: true
    },
    onShow() {
        this.getUserInfo();
        this.isStarredMe();
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.getUserInfo();
        this.isStarredMe();
    },
    // 分享
    onShareAppMessage() {
        let title = '哇！才一天没看，我的项目竟然被star了这么多次！';
        const username = wx.getStorageSync(CONST.STORAGE_USERNAME);
        if (username) title = `我是${username}，怎么样，羡慕我的star数吗？`
        return {
            title,
            path: '/pages/tabPages/me/me'
        }
    },
    // 获取用户信息
    getUserInfo() {
        const userInfo = wx.getStorageSync(CONST.STORAGE_USERINFO);
        if (userInfo) {
            this.setData({
                userInfo: JSON.parse(userInfo)
            });
            return;
        }
        const token = wx.getStorageSync(CONST.STORAGE_TOKEN);
        const username = wx.getStorageSync(CONST.STORAGE_USERNAME);
        if (!token) {
            this.setData({
                userInfo: null
            });
            return;
        }
        utils.showLoading();
        request.cloud('getInfoByUsername', { username }).then(res => {
            utils.hideLoading();
            const data = res.data;
            if (!data) return;
            app.globalData.userInfo = data;
            wx.setStorageSync(CONST.STORAGE_USERINFO, JSON.stringify(data));
            this.setData({
                userInfo: data
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 清除本地缓存
    removeStorage() {
        wx.removeStorageSync(CONST.STORAGE_USERNAME);
        wx.removeStorageSync(CONST.STORAGE_USERINFO);
        wx.removeStorageSync(CONST.STORAGE_PASSWORD);
    },
    // 查看各类型页面
    viewPages(e) {
        const type = e.currentTarget.dataset.type;
        const userInfo = this.data.userInfo;
        const pageRouteMap = {
            'repos': '/pages/subPages/repoList/repoList',
            'followers': '/pages/subPages/developerList/developerList',
            'following': '/pages/subPages/developerList/developerList',
            'stars': '/pages/subPages/repoList/repoList',
            'issues': '/pages/subPages/issueList/issueList',
            'about': '/pages/subPages/about/about'
        };
        const urlParam = {
            'repos': `?funcType=getMyRepos&param=${JSON.stringify({})}`,
            'followers': `?funcType=getMyFollowers&param=${JSON.stringify({})}`,
            'following': `?funcType=getMyFollowing&param=${JSON.stringify({})}`,
            'stars': `?funcType=getMyStarredRepos&param=${JSON.stringify({})}`,
            'issues': '?url='+url.getRepoIssues('luohao8023', 'kakaCoder'),
            'about': ''
        }
        wx.navigateTo({
            url: pageRouteMap[type] + urlParam[type]
        });
    },
    // star
    starMe() {
        const token = wx.getStorageSync(CONST.STORAGE_TOKEN);
        if (!token) {
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
        }
        utils.showLoading();
        request.cloud('toggleStarRepo', {
            type: 'star',
            owner: "luohao8023",
            repo: "kakaCoder"
        }).then(res => {
            utils.hideLoading();
            if (res.status === 204) {
                utils.showTip('Thank you!');
                this.setData({
                    isStarred: true
                });
            }
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 是否star了
    isStarredMe() {
        const token = wx.getStorageSync(CONST.STORAGE_TOKEN);
        if (!token) {
            this.setData({
                isStarred: false
            });
            return false;
        }
        request.cloud('getIfYouAreStrringRepo', {
            owner: 'luohao8023',
            repo: 'kakaCoder'
        }).then(data => {
            this.setData({
                isStarred: data.isStared
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 意见反馈
    feedback() {
        wx.navigateToMiniProgram({
            appId: 'wx8abaf00ee8c3202e',
            extraData: {
                // 吐槽项目id
                id: 132328
            }
        });
    },
    goLogin() {
        if (!!this.data.userInfo) return;
        wx.navigateTo({
            url: '/pages/login/login'
        });
    }
});