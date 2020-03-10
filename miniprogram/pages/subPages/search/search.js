/**
 * @name: 搜索页
 * @author: haoluo2
 * @date: 2020-03-9
*/

import CONST from '../../../utils/const.js';
Page({
    data: {
        keywordList: []
    },
    onLoad() {
        this.getSearchStorage();
    },
    onUnload() {
        this.setSearchStorage();
    },
    // 搜索
    onSearch(e) {
        const keyword = e.detail.value;
        this.gotoSearchResultPage(keyword);
    },
    // 去搜索结果页
    gotoSearchResultPage(keyword) {
        if (!keyword) return;
        if (!this.data.keywordList.includes(keyword)) {
            // 记录值即可，不必更新UI
            this.data.keywordList.push(keyword);
        }
        wx.redirectTo({
            url: `/pages/subPages/searchResult/searchResult?keyword=${keyword}`
        });
    },
    // 清空搜索历史
    onClear() {
        this.setData({
            keywordList: []
        });
    },
    // 点击关键字
    onKeywordClick(e) {
        const keyword = e.currentTarget.dataset.keyword;
        this.gotoSearchResultPage(keyword);
    },
    // 获取搜索历史
    getSearchStorage() {
        let history = wx.getStorageSync(CONST.STORAGE_SEARCH_HISTORY);
        if (!history) return;
        try {
            this.setData({
                keywordList: JSON.parse(history)
            });
        } catch(err) {
            console.log(err);
        }
    },
    // 保存搜索历史
    setSearchStorage() {
        wx.setStorageSync(CONST.STORAGE_SEARCH_HISTORY, JSON.stringify(this.data.keywordList));
    }
});