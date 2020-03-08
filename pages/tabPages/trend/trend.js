/**
 * @name: Trending
 * @author: haoluo2
 * @date: 2020-03-05
*/

import utils from '../../../utils/util.js';
import url from '../../../utils/interface.js';
import request from '../../../utils/request.js';
// async await
const regeneratorRuntime = require('../../../utils/regenerator-runtime.js');
const LANGUAGE_KEY = 'often-language';
const SPOKEN_KEY = 'often-spoken-language';
Page({
    data: {
        currentTab: 'repo',//dev
        repoList: [],
        developerList: [],
        pickerList: [],
        languageList: [],
        spokenLanguageList: [],
        selectValue: {
            duration: 'Daily',
            language: 'Any',
            spokenLanguage: 'Any'
        },
        selectParam: {
            duration: '',
            language: '',
            spokenLanguage: ''
        }
    },
    onLoad() {
        this.searchList();
    },
    onShow() {
        this.getPickerList();
    },
    switchTab(e) {
        const tabName = e.currentTarget.dataset.type;
        if (tabName === this.data.currentTab) return;
        this.setData({
            currentTab: tabName
        });
        this.getPickerList();
    },
    goToSelectLanguage() {
        wx.navigateTo({
            url: '/pages/subPages/language/language'
        });
    },
    // 获取picker列表，不同tab列表不同
    getPickerList() {
        const pickerList = [];
        const durationList = [
            {
                name: 'Date range',
                param: ''
            },
            {
                name: 'Today',
                param: 'daily'
            },
            {
                name: 'This week',
                param: 'weekly'
            },
            {
                name: 'This month',
                param: 'monthly'
            }
        ];
        const localLanguage = wx.getStorageSync(LANGUAGE_KEY);
        const localSpokeLanguage = wx.getStorageSync(SPOKEN_KEY);
        const tabName = this.data.currentTab;

        let languageList, spokenLanguageList;
        try {
            languageList = localLanguage ? JSON.parse(localLanguage) : [];
            spokenLanguageList = localSpokeLanguage ? JSON.parse(localSpokeLanguage) : [];
        } catch(err) {
            console.log(err);
            return false;
        }
        pickerList.push(durationList);
        pickerList.push([
            {name: 'Language', param: ''},
            ...languageList
        ]);
        if (tabName === 'repo') pickerList.push([
            {name: 'Spoken Language', param: ''},
            ...spokenLanguageList
        ]);
        this.setData({
            pickerList
        });
    },
    // 筛选变化
    onFilterChange(e) {
        const valueList = e.detail.value;
        const pickerList = this.data.pickerList;

        const durationIndex = valueList[0];
        const duration = pickerList[0][durationIndex].name;
        const durationParam = pickerList[0][durationIndex].param;

        const languageIndex = valueList[1];
        const language = pickerList[1][languageIndex].name;
        const languageParam = pickerList[1][languageIndex].param;

        this.setData({
            'selectValue.duration': duration,
            'selectValue.language': language,
            'selectParam.duration': durationParam,
            'selectParam.language': languageParam,
        });
        
        if (this.currentTab === 'repo') {
            const spokenLanguageIndex = valueList[2];
            const spokenLanguage = pickerList[2][spokenLanguageIndex].name;
            const spokenLanguageParam = pickerList[2][spokenLanguageIndex].param;
            this.setData({
                'selectValue.spokenLanguage': spokenLanguage,
                'selectParam.spokenLanguage': spokenLanguageParam,
            });
        }
        
        this.searchList();
    },
    // 获取当前tab对应列表,hard,强制获取
    async searchList() {
        utils.showLoading();
        try {
            const repoList = await this.getRepositories();
            const developerList = await this.getDevelopers();
            this.setData({
                repoList: repoList || [],
                developerList: developerList || []
            });
            utils.hideLoading();
        } catch(err) {
            utils.showTip(err);
        }
    },
    // 获取repo trending
    getRepositories() {
        return new Promise((resolve, reject) => {
            const { duration } = this.getParams();
            request.get(url.getTrendingRepositories+'?since='+duration).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    },
    // 获取dev trending
    getDevelopers() {
        return new Promise((resolve, reject) => {
            const { duration } = this.getParams();
            request.get(url.getTrendingDevelopers+'?since='+duration).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    },
    // 获取请求参数
    getParams() {
        const durationMap = {
            'Today': 'daily',
            'Thisweek': 'weekly',
            'Thismonth': 'monthly'
        };
        const duration = durationMap[this.data.selectValue.duration.replace(' ', '')];
        return { duration };
    }
});