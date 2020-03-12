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
        userInfo: {}
    },
    onLoad(option) {
        this.data.username = option.username;
    },
    onShow() {
        this.getUserInfo();
    },
    // 获取用户信息
    getUserInfo() {
        const api = url.getUserInfo(this.data.username);
        utils.showLoading();
        request.get(api).then(data => {
            this.setData({
                userInfo: data
            });
            utils.hideLoading();
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
        const index = allPages.findIndex(item => targetPageRoute === item.route);
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
                delta: allPages.length - index
            });
        }
    }
});