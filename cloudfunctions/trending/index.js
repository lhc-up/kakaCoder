// 云函数入口文件
const cloud = require('wx-server-sdk');
cloud.init()

const { trending } = require('./trending.js');
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
    const { type='repo', since, language, spokenLanguage } = event;
    if (!type) return [];
    if (type === 'language') return trending.getLanguages();
    if (type === 'spoken') return trending.getSpokenLanguages();

    if (type === 'repo') {
        return await trending.getTrendingRepos(db, since, language, spokenLanguage);
    } else if (type === 'dev') {
        return await trending.getTrendingDevelopers(db, since, language);
    }
}