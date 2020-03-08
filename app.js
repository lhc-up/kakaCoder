App({
    onLaunch() {
        this.getStorageInfo();
    },
    getStorageInfo() {
        const userInfo = wx.getStorageSync('userInfo');
        if (userInfo) {
            this.globalData.userInfo = JSON.parse(userInfo);
        }
    },
    globalData: {
        userInfo: null
    }
});