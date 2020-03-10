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
        option: {},
        repoDetail: {},
        readmeDetail: {}
    },
    onLoad(option) {
        this.data.option = option;
        this.init();
        // wx.setNavigationBarTitle({
        //     title: option.name || 'firecracker'
        // });
    },
    // 初始化
    init() {
        this.getRepoDetail();
    },
    // 获取仓库详情
    getRepoDetail() {
        const option = this.data.option;
        const api = url.getRepoDetail(option.author, option.name);
        request.get(api).then(data => {
            console.log(data);
            if (!data) return;
            this.setData({
                repoDetail: data
            });
            this.getReadme(data.full_name);
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 获取仓库readme
    getReadme(repoFullName) {
        const api = url.getRepoReadme(repoFullName);
        request.get(api).then(data => {
            this.setData({
                readmeDetail: data
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 解析markdown
    parseMarkdown(content) {
        // 云函数解析
        wx.cloud.callFunction({
            name: 'parseMd',
            data: {
                content,
                type: 'markdown'
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            console.log(1)
        });
    },
    viewCode() {

    },
    viewIssues() {

    },
    viewPr() {

    },
    viewContributors() {

    },
    viewAuthor() {

    }
});