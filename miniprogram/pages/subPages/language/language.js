/**
 * @name: language选择页，index索引选择器，选择language和spokenLanguage
 * @author: haoluo2
 * @date: 2020-03-08
*/

import utils from '../../../utils/util.js';
import url from '../../../utils/interface.js';
import request from '../../../utils/request.js';
import CONST from '../../../utils/const.js';
// async await
const regeneratorRuntime = require('../../../utils/regenerator-runtime.js');
Page({
    data: {
        languageList: [],
        spokenLanguageList: [],
        languages: [],
        radioList: [
            {
                name: 'language'
            },
            {
                name: 'spokenLanguage'
            }
        ],
        currentType: 'language',
        // 当前选择的编程语言列表
        currentSelectLanguage: [],
        // 当前选择的编程语言名称字符串
        currentSelectLanguageText: '',
        // 当前选择的语言列表
        currentSelectSpokenLanguage: [],
        // 当前选择的语言名称字符串
        currentSelectSpokenLanguageText: ''
    },
    onLoad() {
        this.init();
    },
    onUnload() {
        this.setLanguageStorage();
    },
    // 清除语言选择
    onClear() {
        const type = this.data.currentType;
        if (type === 'language') {
            this.setData({
                currentSelectLanguage: [],
                currentSelectLanguageText: ''
            });
        } else {
            this.setData({
                currentSelectSpokenLanguage: [],
                currentSelectSpokenLanguageText: ''
            });
        }
    },
    // 获取语言本地缓存
    getLanguageStorage() {
        const language = wx.getStorageSync(CONST.STORAGE_LANGUAGE);
        const spokenLanguage = wx.getStorageSync(CONST.STORAGE_SPOKEN_LANGUAGE);
        const languageList = language ? JSON.parse(language) : [];
        const spokenLanguageList = spokenLanguage ? JSON.parse(spokenLanguage) : [];
        this.setData({
            currentSelectLanguage: languageList,
            currentSelectLanguageText: languageList.map(item => item.name).join(','),
            currentSelectSpokenLanguage: spokenLanguageList,
            currentSelectSpokenLanguageText: spokenLanguageList.map(item => item.name).join(',')
        });
    },
    // 设置语言本地缓存
    setLanguageStorage() {
        wx.setStorageSync(CONST.STORAGE_LANGUAGE, JSON.stringify(this.data.currentSelectLanguage));
        wx.setStorageSync(CONST.STORAGE_SPOKEN_LANGUAGE, JSON.stringify(this.data.currentSelectSpokenLanguage));
    },
    // 单选变化
    onRadioChange(e) {
        this.setData({
            currentType: e.detail.value
        });
        this.buildData();
    },
    // 点击索引选择器item
    onIndexItemClick(e) {
        let param = e.currentTarget.dataset.param;
        let name = e.currentTarget.dataset.name;
        let type = this.data.currentType;
        // 取Language或SpokenLanguage
        let ext = type.slice(0, 1).toUpperCase() + type.substring(1);
        // 取currentSelectLanguage或currentSelectSpokenLanguage
        let currentSelect = this.data[`currentSelect${ext}`];
        let isExist = currentSelect.some(item => item.param === param);
        if (!isExist) currentSelect.push({
            name, param
        });
        const text = currentSelect.map(item => item.name).join('、');
        this.setData({
            [`currentSelect${ext}`]: currentSelect,
            [`currentSelect${ext}Text`]: text
        });
    },
    async init() {
        utils.showLoading();
        try {
            // 只需先同步获取一种列表
            let languageList = await this.getLanguagesList();
            this.data.languageList = languageList || [];
            this.getLanguageStorage();
            this.buildData();
            utils.hideLoading();

            let spokenLanguageList = await this.getSpokenLanguagesList();
            this.data.spokenLanguageList = spokenLanguageList || [];
        } catch(err) {
            utils.showTip(err.toString());
        }
    },
    // 为索引器组件构造数据
    buildData() {
        let storeLanguage = new Array(26);
        const words = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        words.forEach((item, index) => {
            storeLanguage[index] = {
                key : item,
                list : []
            }
        });
        const languageList = this.data[`${this.data.currentType}List`];
        languageList.forEach(item => {
            let firstName = item.name.substring(0, 1);
            let index = words.indexOf(firstName);
            if (index >= 0) {
                storeLanguage[index].list.push({
                    name : item.name,
                    param : item.urlParam,
                    key : firstName
                });
            }
        });
        this.setData({
            languages: storeLanguage
        });
    },
    // 获取编程语言列表
    getLanguagesList() {
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                name: 'trending',
                data: {
                    type: 'language'
                }
            }).then(data => {
                const list = JSON.parse(data.result);
                resolve(list);
            }).catch(err => {
                reject(err);
            });
        });
    },
    // 获取语言列表
    getSpokenLanguagesList() {
        return new Promise((resolve, reject) => {
            wx.cloud.callFunction({
                name: 'trending',
                data: {
                    type: 'spoken'
                }
            }).then(data => {
                const list = JSON.parse(data.result);
                resolve(list);
            }).catch(err => {
                reject(err);
            });
        });
    }
});