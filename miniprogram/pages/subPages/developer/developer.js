/**
 * @name: 开发者详情页
 * @author: haoluo2
 * @date: 2020-03-08
*/
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
import url from '../../../utils/interface.js';
Page({
    data: {
        username: '',
        userInfo: {},
        // 是否follow了该作者
        isFollowing: false,
        refresh: false
    },
    onLoad(option) {
        this.data.username = option.username;
        this.init();
    },
    onShow() {
        // 跨页面设置fresh
        if (this.data.refresh) this.init();
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.init();
    },
    // 分享
    onShareAppMessage() {
        let title = '这个作者你认识吗？';
        const followers = this.data.userInfo.followers || 0;
        if (followers < 500) {
            title += '我看他的很多项目质量都很高！'
        } else if (followers < 1500) {
            title += '这么多的关注者！'
        } else {
            title += `${followers} 的关注者，不来看看吗？`
        }
        return {
            title,
            path: `/pages/subPages/developer/developer?username=${this.data.username}`
        }
    },
    init() {
        this.getUserInfo();
        this.data.refresh = false;
        this.setData({
            userInfo: {}
        });
    },
    // 获取用户信息
    getUserInfo() {
        utils.showLoading();
        request.cloud('getInfoByUsername', {
            username: this.data.username
        }).then(res => {
            utils.hideLoading();
            const data = res.data;
            if (!data) return;
            this.setData({
                userInfo: data
            });
            this.checkIfYouAreFollowing();
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 点击follow按钮
    handleFollowBtnClick() {
        if (!utils.isLogin()) {
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
        utils.showLoading();
        request.cloud('followUser', {
            username: this.data.username
        }).then(data => {
            utils.hideLoading();
            this.setData({
                isFollowing: data.status === 204
            });
        }).catch(err => {
            url.showTip(err);
        });
    },
    // unFollow
    unFollow() {
        utils.showLoading();
        request.cloud('unFollowUser', {
            username: this.data.username
        }).then(data => {
            utils.hideLoading();
            this.setData({
                isFollowing: data.status !== 204
            });
        }).catch(err => {
            url.showTip(err);
        });
    },
    // 检查是否follow了该用户,只有当前用户登录了才会检查
    checkIfYouAreFollowing() {
        if (!utils.isLogin()) return;
        request.cloud('checkFollowing', {
            username: this.data.username
        }).then(res => {
            // 204，follow
            // 404，unFollow
            this.setData({
                isFollowing: res.status === 204
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
        const urlParamMap = {
            'repos': {
                funcType: 'getPublicReposForUser',
                param: {
                    username: userInfo.login
                }
            },
            'followers': {
                funcType: 'getFollowersOfUser',
                param: {
                    username: userInfo.login
                }
            },
            'following': {
                funcType: 'getFollowingOfUser',
                param: {
                    username: userInfo.login
                }
            },
            'stars': {
                funcType: 'getUserStarredRepos',
                param: {
                    username: userInfo.login
                }
            }
        }
        // 目标页面路由
        const targetPageRoute = pageRouteMap[type];
        // 查看页面栈，如果页面栈中已存在目标页面，则使用navigateBackTo的方式跳转，防止循环跳转，页面栈溢出
        let allPages = getCurrentPages();
        const index = allPages.findIndex(item => targetPageRoute.indexOf(item.route) >= 0);
        if (index < 0) {
            // 页面栈中不存在，则正常跳转
            wx.navigateTo({
                url: `${targetPageRoute}?funcType=${urlParamMap[type].funcType}&param=${JSON.stringify(urlParamMap[type].param)}`
            });
        } else {
            // 如果存在目标页面，则使用返回的方式跳转，并手动设置该页面的参数
            // 这时候就是该页面在onShow中调用初始化方法原因了
            // 目标页面对象
            const targetPageObj = allPages[index];
            // 按照各个页面参数的格式进行设置，有点麻烦，但为了避免页面栈溢出，还是得想办法处理的
            // 确保目标页面使用apiUrl作为请求地址
            targetPageObj.data.funcType = urlParamMap[type].funcType;
            targetPageObj.data.param = urlParamMap[type].param;
            targetPageObj.data.refresh = true;
            wx.navigateBack({
                delta: allPages.length - index - 1
            });
        }
    }
});