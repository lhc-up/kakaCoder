/**
 * @name: 查看code
 * @author: haoluo2
 * @date: 2020-03-13
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
import url from '../../../utils/interface.js';
import CONST from '../../../utils/const.js';
Page({
    data: {
        // 文件路径
        filePath: '',
        fileList: [],
        showBackBtn: false,
        repoName: '',
        fileName: ''
    },
    onLoad(option) {
        this.data.filePath = option.url || 'https://api.github.com/repos/luohao8023/kakaCoder/contents';
        this.data.repoName = option.repoName || 'luohao8023/kakaCoder';
        this.data.fileName = option.fileName || '';
        this.init();
    },
    // 下拉刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh();
        this.init();
    },
    // 分享
    onShareAppMessage() {
        let title = '我在用手机看代码，你也来试试吧！';
        return {
            title,
            path: `/pages/subPages/fileList/fileList?url=${this.data.filePath}&repoName=${this.data.repoName}&fileName=${this.data.fileName}`
        }
    },
    init() {
        let filePath = this.data.filePath;
        // contents后面没有任何参数时，表示是第一级
        const isFirstLevel = filePath.split('/').reverse()[0] === 'contents';
        this.setData({
            showBackBtn: !isFirstLevel
        });
        wx.setNavigationBarTitle({
            title: isFirstLevel ? this.data.repoName : this.data.fileName
        });
        this.getFileList();
    },
    getFileList() {
        utils.showLoading();
        request.transfer('get', this.data.filePath).then(res => {
            utils.hideLoading();
            if (res.statusCode === 200) {
                const list = res.data || [];
                list.forEach(item => {
                    if (item.type === 'file') {
                        let size = item.size;
                        if (size < 1024) {
                            size += ' B';
                        } else if (size < 1024 * 1024) {
                            size = (size / 1024).toFixed(2) + ' K';
                        } else if (size < 1024 * 1024 * 1024) {
                            size = (size / 1024 / 1024).toFixed(2) + ' M'
                        } else {
                            size = '文件过大';
                        }
                        item.size = size;
                    }
                });
                this.setData({
                    fileList: list
                });
            }
        }).catch(err => {
            utils.showTip(err);
        });
    },
    handleClick(e) {
        const { type, url, name } = e.currentTarget.dataset;
        if (type === 'file') {
            wx.navigateTo({
                url: '/pages/subPages/fileDetail/fileDetail?url=' + encodeURI(url)
            });
        } else {
            this.data.filePath = url;
            this.data.fileName = name;
            this.init();
        }

    },
    // 返回上一级文件列表
    goBack() {
        let currentFilePath = this.data.filePath;
        // 去掉最后一级路径参数
        // //都会被截取掉，所以把https://单独拿出来
        let targetFilePath = 'https://' + currentFilePath.split('/').slice(2, -1).join('/');
        this.data.filePath = targetFilePath;
        this.init();
    },
    // 显示modal提示
    showTip() {
        wx.showModal({
            content: '由于小程序页面栈限制，不能无限制跳转下一页，所以采取当前页刷新列表的方式。若要返回上一级文件列表，请使用返回箭头（从第二级开始显示）。如果使用右滑或者物理返回键回退页面，将直接退出文件列表页。给您造成不便，请谅解。',
            showCancel: false,
            confirmText: '我知道了',
            confirmColor: '#597ef7'
        });
          
    }
});