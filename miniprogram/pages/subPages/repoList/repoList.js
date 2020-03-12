/**
 * @name: 仓库列表，相比trending页面稍微简化
 * @author: haoluo2
 * @date: 2020-03-12
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        apiUrl: '',
        repoList: []
    },
    onLoad(option) {
        this.data.apiUrl = decodeURI(option.url || 'https://api.github.com/users/dagar/repos');
    },
    onShow() {
        this.getRepoList();
    },
    getRepoList() {
        if (!this.data.apiUrl) return;
        utils.showLoading();
        request.get(this.data.apiUrl).then(data => {
            this.setData({
                repoList: data
            });
            utils.hideLoading();
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 查看详情
    viewRepoDetail(e) {
        const { name, author } = e.currentTarget.dataset;
        // 目标页面路由
        const targetPageRoute = '/pages/subPages/repo/repo';
        // 查看页面栈，如果页面栈中已存在目标页面，则使用navigateBackTo的方式跳转，防止循环跳转，页面栈溢出
        let allPages =  getCurrentPages();
        const index = allPages.findIndex(item => targetPageRoute === item.route);
        if (index < 0) {
            // 页面栈中不存在，则正常跳转
            wx.navigateTo({
                url: `${targetPageRoute}?name=${name}&author=${author}`
            });
        } else {
            // 如果存在目标页面，则使用返回的方式跳转，并手动设置该页面的参数
            // 这时候就是该页面在onShow中调用初始化方法原因了
            // 目标页面对象
            const targetPageObj = allPages[index];
            // 按照各个页面参数的格式进行设置，有点麻烦，但为了避免页面栈溢出，还是得想办法处理的
            targetPageObj.setData({
                'option.name': name,
                'option.author': author
            });
            wx.navigateBack({
                delta: allPages.length - index
            });
        }
    }
});