/**
 * @name: repo首页
 * @author: haoluo2
 * @date: 2020-03-09
*/

import url from '../../../utils/interface.js';
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        repoDetailUrl: '',
        repoDetail: {}
    },
    onLoad(option) {
        this.setData({
            // repoDetailUrl: url.getRepoDetail(option.username, option.repoName)
            repoDetailUrl: url.getRepoDetail('firecracker-microvm', 'firecracker')
        });
        // wx.setNavigationBarTitle({
        //     title: option.repoName || 'firecracker'
        // });
          
        // this.getRepoDetail();
    },
    getRepoDetail() {
        request.get(this.data.repoDetailUrl).then(data => {
            console.log(data);
            if (!data) return;
            this.setData({
                repoDetail: data
            });
        }).catch(err => {
            utils.showTip(err);
        });
    }
});