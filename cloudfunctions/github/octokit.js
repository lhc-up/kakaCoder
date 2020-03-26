const { Octokit } = require("@octokit/rest");
const { createBasicAuth } = require('@octokit/auth-basic')
const github = {
    // 实例化Octokit，有授权的需要授权
    getOctokitInstance(token) {
        if (!token) return new Octokit();
        return new Octokit({
            auth: `token ${token}`
        });
    },
    // 根据用户名密码获取token
    getToken(token, param) {
        return new Promise(async (resolve, reject) => {
            const { username, password } = param;
            const auth = createBasicAuth({
                username,
                password,
                async on2Fa() {
                    return {
                        sttus: 'error',
                        msg: '请输入验证码'
                    }
                },
                token: {
                    // token名称
                    note: `kakaCoder-token-${username}-${Date.now()}`,
                    scopes: [
                        'repo',
                        'write:packages',
                        'read:packages',
                        'delete:packages',
                        'admin:org',
                        'admin:public_key',
                        'admin:repo_hook',
                        'admin:org_hook',
                        'gist',
                        'notifications',
                        'user',
                        'delete_repo',
                        'write:discussion',
                        'admin:enterprise',
                        'workflow',
                        'admin:gpg_key'
                    ]
                }
            });
            try {
                const tokenAuthentication = await auth({ type: "token" });
                // {
                //     type: 'token',
                //     tokenType: 'oauth',
                //     id: 401952253,
                //     token: 'c9f0bdecb796998fd87dade57ac8b8af766e5346',
                //     username: 'luohao8023'
                // }
                resolve(tokenAuthentication);
            } catch(err) {
                reject(err);
            }
        });
    },
    // 获取公共events
    getPublicEvents(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            octokit.activity.listPublicEvents({
                per_page: param.per_page || 15,
                page: param.page || 1
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    },
    // 获取特定用户events
    getUserEvents(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            octokit.activity.listEventsForUser({
                username: param.username,
                per_page: param.per_page || 15,
                page: param.page || 1
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    },
    // 获取单个用户信息
    getInfoByUsername(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            octokit.users.getByUsername({
                username: param.username
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    },
    // 是否star了一个仓库
    getIfYouAreStrringRepo(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            octokit.activity.checkStarringRepo({
                owner: param.owner,
                repo: param.repo
            }).then(res => {
                resolve({
                    isStared: true
                });
            }).catch(err => {
                if (err.status === 404) {
                    resolve({
                        isStared: false
                    });
                } else {
                    reject(err);
                }
            });
        });
    },
    // star、unStart a repo
    toggleStarRepo(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { type, owner, repo } = param;
            const funcName = type === 'star' ? 'starRepo' : 'unstarRepo';
            octokit.activity[funcName]({
                owner,
                repo
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 检查你是否follow了一个用户
    checkFollowing(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            octokit.users.checkFollowing({
                username: param.username
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // follow a user
    followUser(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            octokit.users.follow({
                username: param.username
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // unfollow a user
    unFollowUser(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            octokit.users.unfollow({
                username: param.username
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取contributors列表
    getContributors(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { owner, repo, page, per_page } = param;
            octokit.repos.listContributors({
                owner, repo, page, per_page, anon: true
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取我的followers，当前认证用户
    getMyFollowers(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { page, per_page } = param;
            octokit.users.listFollowersForAuthenticatedUser({
                page, per_page
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取我的following，当前认证用户
    getMyFollowing(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { page, per_page } = param;
            octokit.users.listFollowedByAuthenticated({
                page, per_page
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取一个user的followers
    getFollowersOfUser(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { username, page, per_page } = param;
            octokit.users.listFollowersForUser({
                username, page, per_page
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取一个user的following
    getFollowingOfUser(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { username, page, per_page } = param;
            octokit.users.listFollowingForUser({
                username, page, per_page
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取我的仓库，当前认证用户
    getMyRepos(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { page, per_page } = param;
            octokit.repos.listForAuthenticatedUser({
                per_page,
                page
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取一个用户的public repo
    getPublicReposForUser(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { username, page, per_page } = param;
            octokit.repos.listForUser({
                username, page, per_page
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取我star过的仓库
    getMyStarredRepos(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { page, per_page } = param;
            octokit.activity.listReposStarredByAuthenticatedUser({
                page, per_page
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    },
    // 获取用户star过的仓库
    getUserStarredRepos(token, param={}) {
        return new Promise((resolve, reject) => {
            const octokit = this.getOctokitInstance(token);
            const { username, page, per_page } = param;
            octokit.activity.listReposStarredByUser({
                username, page, per_page
            }).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
        });
    }
}

module.exports = github;