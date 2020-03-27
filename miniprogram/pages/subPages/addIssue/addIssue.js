/**
 * @name: 添加Issue
 * @author: haoluo2
 * @date: 2020-03-13
*/
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
Page({
    data: {
        title: '',
        content: '',
        // 调用云函数的参数
        param: {}
    },
    onLoad(option) {
        this.data.param = JSON.parse(option.param);
    },
    // 监听输入
    onInput(e) {
        const type = e.target.dataset.type;
        this.data[type] = e.detail.value;
    },
    submit() {
        let { title, content } = this.data;
        if (!title) return utils.showTip('请输入标题！');
        let source = '\n\n\n\n\n\n**------来自高颜值的GitHub小程序kakaCoder：**\n\n![image](https://6769-gitguber-v850e-1256494515.tcb.qcloud.la/gh_366bbc8b202f_258.jpg?sign=77773623070e46b1c871b8956ee14808&t=1584423750)';
        // let source = '\n\n\n\n\n\n**------来自高颜值的GitHub小程序kakaCoder**';
        utils.showLoading();
        request.cloud('createIssue', Object.assign({}, this.data.param, {
            title,
            body: (content || '') + source
        })).then(res => {
            if (res.status === 201) {
                utils.hideLoading();
                wx.showModal({
                    content: '提交成功',
                    showCancel: false,
                    confirmText: '确定',
                    confirmColor: '#597ef7',
                    success: (result) => {
                        if (result.confirm) {
                            const allPages = getCurrentPages();
                            const prevPage = allPages.reverse()[1];
                            prevPage.data.refresh = true;
                            wx.navigateBack();
                        }
                    }
                });
            } else {
                utils.showTip('提交失败，请重试！');
            }
        }).catch(err => {
            utils.showTip(err);
        });
    }
});