/**
 * @name: 添加评论
 * @author: haoluo2
 * @date: 2020-03-13
*/

import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
import url from '../../../utils/interface.js';
import CONST from '../../../utils/const.js';
Page({
    data: {
        apiUrl: '',
        content: ''
    },
    onLoad(option) {
        this.data.apiUrl = option.url || 'https://api.github.com/repos/luohao8023/kakaCoder/issues/10/comments';
    },
    // 监听输入
    onInput(e) {
        this.data.content = e.detail.value;
    },
    submit() {
        let { content } = this.data;
        if (!content) return utils.showTip('请输入评论内容！');
        let source = '\n\n\n\n\n\n**------来自高颜值的GitHub小程序kakaCoder：**\n\n![image](https://6769-gitguber-v850e-1256494515.tcb.qcloud.la/gh_366bbc8b202f_258.jpg?sign=77773623070e46b1c871b8956ee14808&t=1584423750)';
        // let source = '\n\n\n\n\n\n**------来自高颜值的GitHub小程序kakaCoder**';
        utils.showLoading();
        request.transfer('post', this.data.apiUrl, {
            body: (content || '') + source
        }).then(res => {
            if (res.statusCode === 201) {
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