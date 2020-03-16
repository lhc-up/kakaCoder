/**
 * @name: 爬取trending数据
 * @author: haoluo2
 * @date: 2020-03-11，本期采用https://github-trending-api.now.sh的接口，后续直接爬取github页面
*/

const fetch = require('node-fetch');
const cheerio = require('cheerio');
const request = require('request');

const languages = require('./languages.json');
const spokenLanguages = require('./spokenLanguages.json');

const trending = {
    baseUrl: 'https://github.com/trending',
    async getRepo(language, spokenLanguageCode, since="daily") {
        const url = `${this.baseUrl}/${language}?since=${since}&spoken_language_code=${spokenLanguageCode}`;
        const htmlObj = await fetch(url);
        const htmlText = await htmlObj.text();
        console.log(htmlText)
    }
};
// trending.getRepo();

// 临时方案
const tempTrending = {
    // 获取编程语言
    getLanguages() {
        return languages;
    },
    // 获取语言
    getSpokenLanguages() {
        return spokenLanguages;
    },
    // 获取trending repos
    getTrendingRepos(since='daily', language, spokenLanguageCode) {
        let paramStr = `?since=${since}`;
        if (language) paramStr += `&language=${language}`;
        if (spokenLanguageCode) paramStr += `&spokenLanguageCode=${spokenLanguageCode}`;
        return new Promise((resolve, reject) => {
            request({
                url: 'https://github-trending-api.now.sh/repositories' + paramStr,
                method: 'get',
                json: true
            }, function(err, res, body) {
                const data = !!err ? [] : body;
                resolve(data)
            });
        });
    },
    // 获取trending developers
    getTrendingDevelopers(since='daily', language) {
        let paramStr = `?since=${since}`;
        if (language) paramStr += `&language=${language}`;
        return new Promise((resolve, reject) => {
            request({
                url: 'https://github-trending-api.now.sh/developers' + paramStr,
                method: 'get',
                json: true
            }, function(err, res, body) {
                const data = !!err ? [] : body;
                resolve(data)
            });
        });
    }
}

// exports.trending = trending;
exports.trending = tempTrending;