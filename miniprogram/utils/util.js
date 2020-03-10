/**
 * @name: 工具函数
 * @author: haoluo2
 * @date: 2020-02-04
*/
const utils = {
    // 日期格式化
    formatTime(date, format) {
        if (!date || !(date instanceof Date)) return '';
        let formatData = format || 'yyyy-MM-dd hh:mm:ss';
        let o = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(formatData)) {
            formatData = formatData.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(formatData)) {
                formatData = formatData.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return formatData;
    },
    // px转rpx
    getRpxFromPx(px) {
        const app = getApp();
        const systemInfo = app.globalData.systemInfo;
        return px * (750 / systemInfo.windowWidth);
    },
    // 微信默认提示
    showTip(msg) {
        wx.showToast({
            title: msg || '',
            icon: 'none',
            image: '',
            duration: 2000,
            mask: false
        });
    },
    // 微信默认loading
    showLoading(msg) {
        const platform = wx.getSystemInfoSync().platform;
        if (platform === 'android') {
            msg = msg || '正在加载...'
        }
        wx.showLoading({
            title: msg || '',
            mask: true
        });
    },
    // 隐藏默认loading
    hideLoading() {
        wx.hideLoading();
    },
    encodeBase64 (str) { // 编码，配合encodeURIComponent使用
        var c1, c2, c3;
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var i = 0, len = str.length, strin = '';
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                strin += base64EncodeChars.charAt(c1 >> 2);
                strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
                strin += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                strin += base64EncodeChars.charAt(c1 >> 2);
                strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
                strin += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            strin += base64EncodeChars.charAt(c1 >> 2);
            strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            strin += base64EncodeChars.charAt(c3 & 0x3F)
        }
        return strin
    }
};

export default utils;