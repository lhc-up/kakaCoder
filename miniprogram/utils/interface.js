
export default {
    //登录，get basic auth
    login: 'https://api.github.com/user',
    


    
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

    // search
    // 搜索repos
    // q:Required. The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see Constructing a search query. See "Searching for repositories" for a detailed list of qualifiers.
    // sort:	Sorts the results of your query by number of stars, forks, or help-wanted-issues or how recently the items were updated. Default: best match
    // order:Determines whether the first search result returned is the highest number of matches (desc) or lowest number of matches (asc). This parameter is ignored unless you provide sort. Default: desc
    searchRepositories: "https://api.github.com/search/repositories",
    // q:Required. The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see Constructing a search query. See "Searching users" for a detailed list of qualifiers.
    // sort:Sorts the results of your query by number of followers or repositories, or when the person joined GitHub. Default: best match
    // order:Determines whether the first search result returned is the highest number of matches (desc) or lowest number of matches (asc). This parameter is ignored unless you provide sort. Default: desc
    searchDevelopers: "https://api.github.com/search/users",


    // activity
    // We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
    getPublicEvents: 'https://api.github.com/events',
    // 使用时替换掉username!!!
    getReceivedEvents(username) {
        return `https://api.github.com/users/${username}/received_events`;
    },

    // repositories
    // 获取仓库详情，使用时替换掉username、repoName！！！
    getRepoDetail(username, repoName){
        if (!username || !repoName) return false;
        return `https://api.github.com/repos/${username}/${repoName}`;
    },
    

}