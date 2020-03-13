/**
 * @name: 关于
 * @author: haoluo2
 * @date: 2020-03-13
*/

import CONST from '../../../utils/const.js';
let app =  getApp();
Page({
    // 退出
    logout() {
        wx.showModal({
            content: '确定要退出吗？',
            showCancel: true,
            cancelText: '取消',
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#597ef7',
            success: (result) => {
                if (result.confirm) {
                    wx.removeStorageSync(CONST.STORAGE_USERNAME);
                    wx.removeStorageSync(CONST.STORAGE_USERINFO);
                    wx.removeStorageSync(CONST.STORAGE_PASSWORD);
                    app.globalData.userInfo = null;
                    wx.navigateBack();
                }
            }
        });
    }
});