
export default {
    //登录，get basic auth
    login: 'https://api.github.com/user',
    searchRepositories: "https://api.github.com/search/repositories",


    
    // trending
    getLanguages: 'https://github-trending-api.now.sh/languages',//获取编程语言列表
    getSpokenLanguages: 'https://github-trending-api.now.sh/spoken_languages',//获取语种列表
    // 获取trending repos,
    // language: possible values are the the ones from languages or just find here.
    // since: daily, weekly or monthly, default to daily.
    // spokenLanguageCode: possible values are the the ones from spokenLanguages or just find here.
    getTrendingRepositories: 'https://github-trending-api.now.sh/repositories',
    // 获取trending developers
    // language: possible values are the the ones from languages or just find here.
    // since: daily, weekly or monthly, default to daily.
    getTrendingDevelopers: 'https://github-trending-api.now.sh/developers',




    // repositories
}