/**
 * @author: haoluo2
 * @date: 2020-03-09
 * @desc: 转发请求
*/
const request = require('request');


const transfer = {
    // github相关
    github: function(url, method, headers) {
        return new Promise((resolve, reject) => {
            request({
                url, method, headers
            }, function(err, res, body) {
                if (err) {
                    resolve({
                        statusCode: 8023,
                        message: err.message || err.msg || '未知异常，请重试！'
                    });
                } else {
                    resolve({
                        statusCode: res.statusCode,
                        header: res.headers,
                        data: body
                    });
                }
            });
        });
    }
}

module.exports = transfer;