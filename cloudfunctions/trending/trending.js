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
    cacheDuration: 10 * 60 * 1000,
    // 获取编程语言
    getLanguages() {
        return languages;
    },
    // 获取语言
    getSpokenLanguages() {
        return spokenLanguages;
    },
    // 获取trending repos
    getTrendingRepos(db, since='daily', language, spokenLanguageCode) {
        // 未命中缓存则到线上获取，并缓存（先删除原记录）
        return new Promise(async (resolve, reject) => {
            let paramStr = `?since=${since}`;
            if (language) paramStr += `&language=${language}`;
            if (spokenLanguageCode) paramStr += `&spokenLanguageCode=${spokenLanguageCode}`;
            const url = 'https://github-trending-api.now.sh/repositories' + paramStr;
            // 缓存id
            const cacheId = url;
            // 缓存时间
            const cacheTime = Date.now();
            // 缓存数据，同一个key，只存一条，过期之后删除
            let cacheData = '';
            try {
                const _data = await db.collection('trending_repo').where({
                    cacheId
                }).get();
                cacheData = _data.data[0] || '';
            } catch(err) {
                console.log('no cache for ', cacheId);
            }
            if (cacheData && (cacheTime - cacheData.cacheTime) < this.cacheDuration) {
                console.log('命中缓存，cacheData-===================', cacheData)
                resolve(JSON.parse(cacheData.content));
                return;
            }
            console.log('get data from online ', cacheId);
            request({
                url,
                method: 'get',
                json: true
            }, async function(err, res, body) {
                const data = !!err ? [] : body;
                try {
                    await db.collection('trending_repo').where({
                        cacheId
                    }).remove();
                } catch(err) {
                    console.error(err);
                    console.log('删除失败，cacheId ', cacheId);
                }
                try {
                    await db.collection('trending_repo').add({
                        data: {
                            cacheId,
                            cacheTime,
                            content: JSON.stringify(data)
                        }
                    });
                } catch(err) {
                    console.error(err);
                    console.log('插入失败，cacheId ', cacheId);
                }
                resolve(data)
            });
        });
    },
    // 获取trending developers
    getTrendingDevelopers(db, since='daily', language) {
        return new Promise(async (resolve, reject) => {
            let paramStr = `?since=${since}`;
            if (language) paramStr += `&language=${language}`;
            const url = 'https://github-trending-api.now.sh/developers' + paramStr;
            // 缓存id
            const cacheId = url;
            // 缓存时间
            const cacheTime = Date.now();
            // 缓存数据，同一个key，只存一条，过期之后删除
            let cacheData = '';
            try {
                const _data = await db.collection('trending_developer').where({
                    cacheId
                }).get();
                cacheData = _data.data[0] || '';
            } catch(err) {
                console.log('no cache for ', cacheId);
            }
            if (cacheData && (cacheTime - cacheData.cacheTime) < this.cacheDuration) {
                console.log('命中缓存，cacheData===================', cacheData)
                resolve(JSON.parse(cacheData.content));
                return;
            }
            console.log('get data from online ', cacheId);
            request({
                url,
                method: 'get',
                json: true
            }, async function(err, res, body) {
                const data = !!err ? [] : body;
                try {
                    await db.collection('trending_developer').where({
                        cacheId
                    }).remove();
                } catch(err) {
                    console.error(err);
                    console.log('删除失败，cacheId ', cacheId);
                }
                try {
                    await db.collection('trending_developer').add({
                        data: {
                            cacheId,
                            cacheTime,
                            content: JSON.stringify(data)
                        }
                    });
                } catch(err) {
                    console.error(err);
                    console.log('插入失败，cacheId ', cacheId);
                }
                resolve(data)
            });
        });
    }
}

// exports.trending = trending;
exports.trending = tempTrending;