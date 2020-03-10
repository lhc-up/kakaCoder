/**
 * @name: 个人中心
 * @author: haoluo2
 * @date: 2020-03-05
*/

let app =  getApp();
Page({
    data: {
        userInfo: null,
        showActionsheet: false,
        funcs: [
            {
                text: '功能板块',
                value: 'func',
                icon: 'gongnengquanxian',
                iconSize: 40
            },
            {
                text: '吐个槽吧',
                value: 'tsukkomi',
                icon: 'fankui',
                iconSize: 34
            },
            {
                text: '客服',
                value: 'service',
                icon: 'kefu',
                iconSize: 38
            },
            {
                text: '清除缓存',
                value: 'clear',
                icon: 'qingchuhuancun',
                iconSize: 38
            }
        ],
        groups: [
            { text: 'Overview', value: 1 },
            { text: 'Repositories', value: 2 },
            { text: 'Projects', value: 3 },
            { text: 'Packages', value: 4 },
            { text: 'Stars', value: 5 },
            { text: 'Followers', value: 6 },
            { text: 'Following', value: 7 }
        ]
    },
    onShow() {
        const userInfo = app.globalData.userInfo;
        this.setData({
            userInfo
        });
    },
    // 点击功能列表
    funcClick(e) {
        const type = e.currentTarget.dataset.type;
        const handler = {
            'func': this.toggleAction,
            'tsukkomi': this.gotoTsukkomi,
            'service': '',//由btn唤起客服会话
            'clear': this.clearStorage
        }
        handler[type] && handler[type]();
    },
    // 打开、关闭actionSheet
    toggleAction() {
        this.setData({
            showActionsheet: !this.data.showActionsheet
        });
    },
    // 去吐槽
    gotoTsukkomi() {
        wx.navigateToMiniProgram({
            appId: 'wx8abaf00ee8c3202e',
            extraData: {
                // 吐槽项目id
                id: 132328
            },
            success(res) {
                // 打开成功
                console.log('点开了赞赏');
            }
        });
    },
    // 清除缓存
    clearStorage() {
        wx.clearStorage({
            success: (e) => {
                wx.showToast({
                    title: 'SUCCSSS',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false
                });
            },
            fail: (e) => {
                wx.showToast({
                    title: 'ERROR',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false
                });
            }
        });
    },
    // 点击actionSheet选项
    actionClick(e) {
        const value = e.detail.value;
        this.toggleAction();
        wx.showModal({
            content: '\/\/TODO:',
            showCancel: false,
            confirmText: 'OK',
            confirmColor: '#597EF7'
        });
    },
    goLogin() {
        wx.navigateTo({
            url: '/pages/login/login'
        });
    },
    logout() {
        wx.removeStorageSync('userInfo');
        app.globalData.userInfo = null;
        wx.switchTab({
            url: '/pages/trend/trend'
        });
    },
    loginBtnClick() {
        if (!this.data.userInfo) {
            this.goLogin();
            return;
        }
        this.logout();
    },
    // reward
    reward() {
        wx.navigateToMiniProgram({
            appId: 'wx18a2ac992306a5a4',
            path: 'pages/apps/largess/detail?id=n28eCNrAZGCgPc1CLmE7uw%3D%3D',
            // envVersion: 'develop',
            success(res) {
                // 打开成功
                console.log('点开了赞赏');
            }
        });
    }
});