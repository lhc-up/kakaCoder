
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
        return `https://api.github.com/repos/${username}/${repoName}`;
    },
    // 获取仓库readme
    getRepoReadme(repoFullName) {
        return `https://api.github.com/repos/${repoFullName}/readme`;
    },
    // 是否star了某仓库get
    isStardRepo(repoFullName) {
        return `https://api.github.com/user/starred/${repoFullName}`;
    },
    // star某个仓库PUT
    starRepo(repoFullName) {
        return `https://api.github.com/user/starred/${repoFullName}`;
    },
    // unstar某个仓库DELETE
    unStarRepo(repoFullName) {
        return `https://api.github.com/user/starred/${repoFullName}`;
    },
    // 是否watch了某个仓库
    isWatchedRepo(repoFullName) {
        return `https://api.github.com/repos/${repoFullName}/subscription`;
    },
    // fork仓库
    forkRepo(repoFullName) {
        return `https://api.github.com/repos/${repoFullName}/forks`;
    },
    // 获取一个仓库的issues
    getRepoIssues(owner, repoName) {
        return `https://api.github.com/repos/${owner}/${repoName}/issues`;
    },
    // 获取issue详情
    getIssueDetail(owner, repoName, issueNumber) {
        return `https://api.github.com/repos/${owner}/${repoName}/issues/${issueNumber}`;
    },
    // 获取一个issue的评论
    getIssueComments(owner, repoName, issueNumber) {
        return `https://api.github.com/repos/${owner}/${repoName}/issues/${issueNumber}/comments`;
    },
    // 获取仓库参与者
    getContributers(owner, repoName) {
        return `https://api.github.com/repos/${owner}/${repoName}/contributors`;
    },


    // user，获取用户信息
    getUserInfo(username) {
        return `https://api.github.com/users/${username}`;
    },
    // 获取followers
    getFollowers(username) {
        return `https://api.github.com/users/${username}/followers`;
    },
    // 获取following
    getFollowing(username) {
        return `https://api.github.com/users/${username}/following`;
    },
    // 获取用户的公共仓库
    getUserPublicRepos(username) {
        return `https://api.github.com/users/${username}/repos`;
    },
    // 获取用户star过的仓库
    getUserStarredRepos(username) {
        return `https://api.github.com/users/${username}/starred`;
    },
    // 检查你（当前用户）是否follow了另外一个用户,username目标用户
    checkIfYouAreFollowing(username) {
        return `https://api.github.com/user/following/${username}`;
    },
    // 检查一个用户是否follow了另外一个用户
    checkIsFollowing(username, targetUsername) {
        return `https://api.github.com/users/${username}/following/${targetUsername}`;
    },
    // Follow a user,PUT
    followUser(username) {
        return `https://api.github.com/user/following/${username}`;
    },
    // Unfollow a user DELETE
    unFollowUser(username) {
        return `https://api.github.com/user/following/${username}`;
    }
}