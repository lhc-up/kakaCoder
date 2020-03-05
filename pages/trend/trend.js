Page({
    data: {
        currentTab: 'repo',//dev
    },
    switchTab(e) {
        const tabName = e.currentTarget.dataset.type;
        if (tabName === this.data.currentTab) return;
        this.setData({
            currentTab: tabName
        });
    }
});