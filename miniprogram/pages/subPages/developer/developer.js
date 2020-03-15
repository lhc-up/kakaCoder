/**
 * @name: 开发者详情页
 * @author: haoluo2
 * @date: 2020-03-08
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
import url from '../../../utils/interface.js';
import CONST from '../../../utils/const.js';
Page({
    data: {
        username: '',
        userInfo: {},
        // 是否follow了该作者
        isFollowing: false
    },
    onLoad(option) {
        this.data.username = option.username;
    },
    onShow() {
        this.getUserInfo();
        this.checkIfYouAreFollowing();
    },
    // 获取用户信息
    getUserInfo() {
        const api = url.getUserInfo(this.data.username);
        utils.showLoading();
        request.cloud('get', api).then(res => {
            utils.hideLoading();
            const data = res.data;
            if (!data) return;
            this.setData({
                userInfo: data
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 点击follow按钮
    handleFollowBtnClick() {
        if (!this.isLogin()) {
            this.showLoginModal();
        } else {
            if (!this.data.isFollowing) {
                this.follow();
            } else {
                this.unFollow();
            }
        }
    },
    // 显示去登录弹窗
    showLoginModal() {
        wx.showModal({
            content: '需要登录',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
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
    },
    // follow
    follow() {
        const targetUsername = this.data.username;
        const apiUrl = url.followUser(targetUsername);
        utils.showLoading();
        request.cloud('put', apiUrl).then(res => {
            utils.hideLoading();
            this.setData({
                isFollowing: res.statusCode === 204
            });
        }).catch(err => {
            url.showTip(err);
        });
    },
    // unFollow
    unFollow() {
        const targetUsername = this.data.username;
        const apiUrl = url.unFollowUser(targetUsername);
        utils.showLoading();
        request.cloud('delete', apiUrl).then(res => {
            utils.hideLoading();
            this.setData({
                isFollowing: res.statusCode !== 204
            });
        }).catch(err => {
            url.showTip(err);
        });
    },
    // 是否登录
    isLogin() {
        const username = wx.getStorageSync(CONST.STORAGE_USERNAME);
        const password = wx.getStorageSync(CONST.STORAGE_PASSWORD);
        return username && password;
    },
    // 检查是否follow了该用户,只有当前用户登录了才会检查
    checkIfYouAreFollowing() {
        if (!this.isLogin()) return;
        const targetUsername = this.data.username;
        const apiUrl = url.checkIfYouAreFollowing(targetUsername);
        request.cloud('get', apiUrl).then(res => {
            // 204，follow
            // 404，unFollow
            this.setData({
                isFollowing: res.statusCode === 204
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 查看各类型页面
    viewPages(e) {
        const type = e.currentTarget.dataset.type;
        const userInfo = this.data.userInfo;
        const pageRouteMap = {
            'repos': '/pages/subPages/repoList/repoList',
            'followers': '/pages/subPages/developerList/developerList',
            'following': '/pages/subPages/developerList/developerList',
            'stars': '/pages/subPages/repoList/repoList'
        };
        const apisMap = {
            'repos': url.getUserPublicRepos(userInfo.login),
            'followers': url.getFollowers(userInfo.login),
            'following': url.getFollowing(userInfo.login),
            'stars': url.getUserStarredRepos(userInfo.login)
        }
        // 目标页面路由
        const targetPageRoute = pageRouteMap[type];
        // 查看页面栈，如果页面栈中已存在目标页面，则使用navigateBackTo的方式跳转，防止循环跳转，页面栈溢出
        let allPages =  getCurrentPages();
        const index = allPages.findIndex(item => targetPageRoute.indexOf(item.route) >= 0);
        if (index < 0) {
            // 页面栈中不存在，则正常跳转
            wx.navigateTo({
                url: targetPageRoute + '?url=' + encodeURI(apisMap[type])
            });
        } else {
            // 如果存在目标页面，则使用返回的方式跳转，并手动设置该页面的参数
            // 这时候就是该页面在onShow中调用初始化方法原因了
            // 目标页面对象
            const targetPageObj = allPages[index];
            // 按照各个页面参数的格式进行设置，有点麻烦，但为了避免页面栈溢出，还是得想办法处理的
            // 确保目标页面使用apiUrl作为请求地址
            targetPageObj.data.apiUrl = apisMap[type];
            wx.navigateBack({
                delta: allPages.length - index - 1
            });
        }
    }
});