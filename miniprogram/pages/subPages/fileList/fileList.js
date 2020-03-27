/**
 * @name: 查看code
 * @author: haoluo2
 * @date: 2020-03-13
*/
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        fileList: [],
        showBackBtn: false,
        fileName: '',
        repo: '',
        owner: '',
        // 文件路径
        path: ''
    },
    onLoad(option) {
        this.data.path = option.path||'';
        this.data.repo = option.repo;
        this.data.owner = option.owner;
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
        const { path, repo, owner, fileName } = this.data;
        return {
            title,
            path: `/pages/subPages/fileList/fileList?path=${path}&repo=${repo}&owner=${owner}&fileName=${fileName}`
        }
    },
    init() {
        // contents后面没有任何参数时，表示是第一级
        const isFirstLevel = !this.data.path;
        this.setData({
            showBackBtn: !isFirstLevel
        });
        wx.setNavigationBarTitle({
            title: isFirstLevel ? this.data.repo : this.data.fileName
        });
        this.getFileList();
    },
    getFileList() {
        const { path, repo, owner } = this.data; 
        utils.showLoading();
        request.cloud('getRepoContent', {
            path, repo, owner
        }).then(res => {
            utils.hideLoading();
            if (res.status === 200) {
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
        const { type, path, name } = e.currentTarget.dataset;
        if (type === 'file') {
            const { owner, repo } = this.data;
            wx.navigateTo({
                url: `/pages/subPages/fileDetail/fileDetail?owner=${owner}&repo=${repo}&path=${path}`
            });
        } else {
            this.data.path = path;
            this.data.fileName = name;
            this.init();
        }

    },
    // 返回上一级文件列表
    goBack() {
        let currentPath = this.data.path;
        // 去掉最后一级路径参数
        let targetPath = currentPath.split('/').slice(0, -1).join('/');
        this.data.path = targetPath;
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