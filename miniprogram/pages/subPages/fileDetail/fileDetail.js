/**
 * @name: 查看文件详情
 * @author: haoluo2
 * @date: 2020-03-13
*/
import utils from "../../../utils/util";
import request from "../../../utils/request";
Page({
    data: {
        fileDetal: {},
        option: {}
    },
    onLoad(option) {
        this.data.option = option;
        this.getFileDetail();
    },
    getFileDetail() {
        const { owner, repo, path } = this.data.option;
        utils.showLoading();
        request.cloud('getRepoContent', {
            owner, repo, path
        }).then(res => {
            utils.hideLoading();
            const fileDetal = res.data || {};
            this.setData({
                fileDetal
            });
            if (fileDetal.name) {
                wx.setNavigationBarTitle({
                    title: fileDetal.name
                });
            }
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.getFileDetail();
    }
});