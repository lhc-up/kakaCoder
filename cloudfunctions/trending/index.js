// 云函数入口文件
// const cloud = require('wx-server-sdk');
// cloud.init()

const { trending } = require('./trending.js');


// 云函数入口函数
exports.main = async (event, context) => {
    // const wxContext = cloud.getWXContext();
    // return {
    //     event,
    //     openid: wxContext.OPENID,
    //     appid: wxContext.APPID,
    //     unionid: wxContext.UNIONID,
    // }
    const { type='repo', since, language, spokenLanguage } = event;
    if (type === 'repo') {
        return await trending.getTrendingRepos(since, language, spokenLanguage);
    } else if (type === 'dev') {
        return await trending.getTrendingDevelopers(since, language);
    } else if (type === 'language') {
        return await trending.getLanguages();
    } else if (type === 'spoken') {
        return await trending.getSpokenLanguages();
    } else {
        return '[]';
    }
}