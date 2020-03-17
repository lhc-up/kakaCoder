/**
 * @name: 富文本解析组件，html，markdown
 * @author: haoluo2
 * @date: 2020-03-10
 * @desc:
*/

import utils from '../../utils/util.js';
const towxml = require('../../towxml/index.js');
Component({
    properties: {
        content: {
            type: String,
            value: '',
            observer: function(n) {
                if (!n) return;
                this.parse();
            }
        },
        type: {
            type: String,
            value: 'markdown'
        },
        // 默认接受base64
        base64: {
            type: Boolean,
            value: true
        }
    },
    data: {
        loading: true,
        article: {}
    },
    methods: {
        parse() {
            const { content, type, base64 } = this.data;
            const result = towxml(base64 ? utils.decodeBase64(content) : content, type, {
                events: {
                    tap: this.handleClick
                }
            });
            this.setData({
                loading: false,
                article: result
            });
        },
        handleClick(e) {
            const { data } = e.currentTarget.dataset;
            if (data.tag && data.tag === 'img') {
                if (data.attr && data.attr.src) {
                    const src = data.attr.src;
                    wx.previewImage({
                        urls: [src]
                    });
                }
            }
        }
    }
});