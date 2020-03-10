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
        }
    },
    data: {
        loading: true,
        article: {}
    },
    methods: {
        parse() {
            const { content, type } = this.data;
            const result = towxml(utils.decodeBase64(content), type);
            this.setData({
                loading: false,
                article: result
            });
        }
    }
});