import utils from "../../../utils/util";
import request from "../../../utils/request";

/**
 * @name: 查看文件详情
 * @author: haoluo2
 * @date: 2020-03-13
*/

Page({
    data: {
        filePath: '',
        fileDetal: {}
    },
    onLoad(option) {
        const url = option.url;
        this.data.filePath = url ? decodeURI(url) : 'https://api.github.com/repos/luohao8023/kakaCoder/contents/project.config.json?ref=master';
        this.getFileDetail();
    },
    getFileDetail() {
        utils.showLoading();
        request.transfer('get', this.data.filePath).then(res => {
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