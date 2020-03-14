/**
 * @name: repo首页
 * @author: haoluo2
 * @date: 2020-03-09
*/

import url from '../../../utils/interface.js';
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
import CONST from '../../../utils/const.js';
Page({
    data: {
        option: {},
        repoDetail: {
            "id": 191820100,
            "node_id": "MDEwOlJlcG9zaXRvcnkxOTE4MjAxMDA=",
            "name": "mediapipe",
            "full_name": "google/mediapipe",
            "private": false,
            "owner": {
              "login": "google",
              "id": 1342004,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzNDIwMDQ=",
              "avatar_url": "https://avatars1.githubusercontent.com/u/1342004?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/google",
              "html_url": "https://github.com/google",
              "followers_url": "https://api.github.com/users/google/followers",
              "following_url": "https://api.github.com/users/google/following{/other_user}",
              "gists_url": "https://api.github.com/users/google/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/google/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/google/subscriptions",
              "organizations_url": "https://api.github.com/users/google/orgs",
              "repos_url": "https://api.github.com/users/google/repos",
              "events_url": "https://api.github.com/users/google/events{/privacy}",
              "received_events_url": "https://api.github.com/users/google/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "html_url": "https://github.com/google/mediapipe",
            "description": "MediaPipe is a cross-platform framework for building multimodal applied machine learning pipelines ",
            "fork": false,
            "url": "https://api.github.com/repos/google/mediapipe",
            "forks_url": "https://api.github.com/repos/google/mediapipe/forks",
            "keys_url": "https://api.github.com/repos/google/mediapipe/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/google/mediapipe/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/google/mediapipe/teams",
            "hooks_url": "https://api.github.com/repos/google/mediapipe/hooks",
            "issue_events_url": "https://api.github.com/repos/google/mediapipe/issues/events{/number}",
            "events_url": "https://api.github.com/repos/google/mediapipe/events",
            "assignees_url": "https://api.github.com/repos/google/mediapipe/assignees{/user}",
            "branches_url": "https://api.github.com/repos/google/mediapipe/branches{/branch}",
            "tags_url": "https://api.github.com/repos/google/mediapipe/tags",
            "blobs_url": "https://api.github.com/repos/google/mediapipe/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/google/mediapipe/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/google/mediapipe/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/google/mediapipe/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/google/mediapipe/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/google/mediapipe/languages",
            "stargazers_url": "https://api.github.com/repos/google/mediapipe/stargazers",
            "contributors_url": "https://api.github.com/repos/google/mediapipe/contributors",
            "subscribers_url": "https://api.github.com/repos/google/mediapipe/subscribers",
            "subscription_url": "https://api.github.com/repos/google/mediapipe/subscription",
            "commits_url": "https://api.github.com/repos/google/mediapipe/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/google/mediapipe/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/google/mediapipe/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/google/mediapipe/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/google/mediapipe/contents/{+path}",
            "compare_url": "https://api.github.com/repos/google/mediapipe/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/google/mediapipe/merges",
            "archive_url": "https://api.github.com/repos/google/mediapipe/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/google/mediapipe/downloads",
            "issues_url": "https://api.github.com/repos/google/mediapipe/issues{/number}",
            "pulls_url": "https://api.github.com/repos/google/mediapipe/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/google/mediapipe/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/google/mediapipe/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/google/mediapipe/labels{/name}",
            "releases_url": "https://api.github.com/repos/google/mediapipe/releases{/id}",
            "deployments_url": "https://api.github.com/repos/google/mediapipe/deployments",
            "created_at": "2019-06-13T19:16:41Z",
            "updated_at": "2020-03-14T04:37:28Z",
            "pushed_at": "2020-03-13T21:55:09Z",
            "git_url": "git://github.com/google/mediapipe.git",
            "ssh_url": "git@github.com:google/mediapipe.git",
            "clone_url": "https://github.com/google/mediapipe.git",
            "svn_url": "https://github.com/google/mediapipe",
            "homepage": "https://mediapipe.dev",
            "size": 189765,
            "stargazers_count": 5628,
            "watchers_count": 5628,
            "language": "C++",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": true,
            "forks_count": 974,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 88,
            "license": {
              "key": "apache-2.0",
              "name": "Apache License 2.0",
              "spdx_id": "Apache-2.0",
              "url": "https://api.github.com/licenses/apache-2.0",
              "node_id": "MDc6TGljZW5zZTI="
            },
            "forks": 974,
            "open_issues": 88,
            "watchers": 5628,
            "default_branch": "master",
            "temp_clone_token": null,
            "organization": {
              "login": "google",
              "id": 1342004,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzNDIwMDQ=",
              "avatar_url": "https://avatars1.githubusercontent.com/u/1342004?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/google",
              "html_url": "https://github.com/google",
              "followers_url": "https://api.github.com/users/google/followers",
              "following_url": "https://api.github.com/users/google/following{/other_user}",
              "gists_url": "https://api.github.com/users/google/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/google/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/google/subscriptions",
              "organizations_url": "https://api.github.com/users/google/orgs",
              "repos_url": "https://api.github.com/users/google/repos",
              "events_url": "https://api.github.com/users/google/events{/privacy}",
              "received_events_url": "https://api.github.com/users/google/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "network_count": 974,
            "subscribers_count": 259
          }
          ,
        readmeDetail: {},
        operateList: [
            'Copy git url',
            'Copy ssh url',
            'Copy clone url',
            'Download zip'
        ],
        isStarred: false,
        isWatched: false
    },
    onLoad(option) {
        this.data.option = option;
        // this.data.option = {
        //     name: 'mediapipe',
        //     author: 'google'
        // };
    },
    onShow() {
        wx.setNavigationBarTitle({
            title: this.data.option.name || 'Github'
        });
        this.getRepoDetail();
    },
    // 监听picker
    onPickerChange(e) {
        const value = e.detail.value;
        const repoDetail = this.data.repoDetail;
        switch (value) {
            case '0':
                this.copyLink(repoDetail.git_url);
                break;
            case '1':
                this.copyLink(repoDetail.ssh_url);
                break;
            case '2':
                this.copyLink(repoDetail.clone_url);
                break;
            case '3':
                this.downLoadZip();
                break;
            default:
                break;
        }
    },
    // 是否已登录
    isLogin() {
        const username = wx.getStorageSync(CONST.STORAGE_USERNAME);
        const password = wx.getStorageSync(CONST.STORAGE_PASSWORD);
        return username && password;
    },
    // 操作前判断是否已登录，未登录给出弹窗提示
    getIsLoginBeforeOperate() {
        if (this.isLogin()) return true;
        wx.showModal({
            content: '请先登录',
            confirmText: '确定',
            confirmColor: '#597ef7',
            success: (result) => {
                if (result.confirm) {
                    wx.navigateTo({
                        url: '/pages/login/login'
                    });
                }
            }
        });
        return false;
    },
    // star/unstar这个仓库
    starRepo() {  
        if (!this.getIsLoginBeforeOperate()) return false;
        const fullName = this.data.repoDetail.full_name;
        if (!fullName) return false;
        const apiUrl = url.starRepo(fullName);
        utils.showLoading();
        if (this.data.isStarred) {
            request.delete(apiUrl).then(res => {
                utils.hideLoading();
                if (res.statusCode === 204) {
                    this.setData({
                        isStarred: false,
                        'repoDetail.stargazers_count': this.data.repoDetail.stargazers_count - 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }).catch(err => {
                utils.showTip(err);
            });
        } else {
            request.put(apiUrl).then(res => {
                utils.hideLoading();
                if (res.statusCode === 204) {
                    this.setData({
                        isStarred: true,
                        'repoDetail.stargazers_count': this.data.repoDetail.stargazers_count + 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }).catch(err => {
                utils.showTip(err);
            });
        }
    },
    // 是否star了该仓库
    isStarredRepo() {
        if (!this.isLogin()) {
            this.setData({
                isStarred: false
            });
            return false;
        }
        const apiUrl = url.isStardRepo(this.data.repoDetail.full_name);
        request.get(apiUrl).then(res => {
            this.setData({
                isStarred: res.statusCode === 204
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // watch/unwatch这个仓库
    watchRepo() {
        if (!this.getIsLoginBeforeOperate()) return false;
        const fullName = this.data.repoDetail.full_name;
        if (!fullName) return false;
        // const apiUrl = url.starRepo(fullName);
        const apiUrl = this.data.repoDetail.subscription_url;
        utils.showLoading();
        if (this.data.isWatched) {
            request.delete(apiUrl).then(res => {
                utils.hideLoading();
                if (res.statusCode === 204) {
                    this.setData({
                        isWatched: false,
                        'repoDetail.subscribers_count': this.data.repoDetail.subscribers_count - 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }).catch(err => {
                utils.showTip(err);
            });
        } else {
            request.put(apiUrl).then(res => {
                utils.hideLoading();
                if (res.statusCode === 200) {
                    this.setData({
                        isWatched: true,
                        'repoDetail.subscribers_count': this.data.repoDetail.subscribers_count + 1
                    });
                } else {
                    utils.showTip('出错了，请重试!');
                }
            }).catch(err => {
                utils.showTip(err);
            });
        }
    },
    // 是否watch了该仓库
    isWatchedRepo() {
        if (!this.isLogin()) {
            this.setData({
                isWatched: false
            });
            return false;
        }
        const apiUrl = url.isWatchedRepo(this.data.repoDetail.full_name);
        request.get(apiUrl).then(res => {
            this.setData({
                isWatched: res.statusCode === 200 && res.data.subscribed
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // fork该仓库
    forkRepo() {
        if (!this.getIsLoginBeforeOperate()) return false;
        const fullName = this.data.repoDetail.full_name;
        if (!fullName) return false;
        const apiUrl = url.forkRepo(fullName);
        utils.showLoading();
        request.post(apiUrl).then(res => {
            utils.hideLoading();
            if (res.statusCode === 202) {
                this.setData({
                    'repoDetail.forks_count': res.data.network_count || this.data.repoDetail.forks_count
                })
            } else {
                utils.showTip('出错了，请重试！');
            }
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 复制链接
    copyLink(data) {
        wx.setClipboardData({
            data,
            success: (result) => {
                console.log(result)   
            }
        });
    },
    // 下载zip
    downLoadZip() {
        wx.showModal({
            content: '下载之后无法找到文件，也无法发送给好友或文件助手，确认要下载吗？',
            confirmText: '确定',
            confirmColor: '#597ef7',
            success: (result) => {
                if (result.confirm) {
                    var downTask = wx.downloadFile({
                        url: this.data.repoDetail.downloads_url,
                        success: (result) => {
                            wx.showModal({
                                content: `下载完成，临时文件路径为${esult.tempFilePath}`,
                                showCancel: false,
                                confirmText: '确定',
                                confirmColor: '#597ef7'
                            });
                        }
                    });
                }
            }
        });
    },
    // 获取仓库详情
    getRepoDetail() {
        const option = this.data.option;
        const api = url.getRepoDetail(option.author, option.name);
        utils.showLoading();
        request.get(api).then(res => {
            const data = res.data;
            if (!data) return;
            this.setData({
                repoDetail: data
            });
            this.isStarredRepo();
            this.isWatchedRepo();
            this.getReadme(data.full_name);
        }).catch(err => {
            utils.showTip(err);
        }).finally(() => {
            utils.hideLoading();
        })
    },
    // 获取仓库readme
    getReadme(repoFullName) {
        const api = url.getRepoReadme(repoFullName);
        request.get(api).then(res => {
            if (!res.data) return;
            this.setData({
                readmeDetail: res.data
            });
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 解析markdown
    parseMarkdown(content) {
        // 云函数解析
        wx.cloud.callFunction({
            name: 'parseMd',
            data: {
                content,
                type: 'markdown'
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            console.log(1)
        });
    },
    // 判断目标页面是否已在页面栈中，返回是否存在，存在的话index，以及需要返回的层级，目标页面对象
    getRouteIsExistInStack(targetRouteName) {
        const allPages =  getCurrentPages();
        const index = allPages.findIndex(item => targetRouteName.indexOf(item.route) >= 0);
        const exist = index >= 0;
        const delta = allPages.length - index - 1;
        const targetPageObj = allPages[index];
        return { exist, index, delta, targetPageObj };
    },
    // 查看issue列表
    viewIssues() {
        const targetRoute = '/pages/subPages/issueList/issueList';
        const { exist, delta, targetPageObj } = this.getRouteIsExistInStack(targetRoute);
        const apiUrl = encodeURI(this.data.repoDetail.issues_url.replace('{/number}', ''));
        if (!exist) {
            wx.navigateTo({
                url: targetRoute + '?url=' + apiUrl
            });
        } else {
            targetPageObj.data.apiUrl = apiUrl;
            wx.navigateBack({
                delta
            });
        }
    },
    // 查看contributors
    viewContributors() {
        const targetRoute = '/pages/subPages/developerList/developerList';
        const { exist, delta, targetPageObj } = this.getRouteIsExistInStack(targetRoute);
        const apiUrl = encodeURI(this.data.repoDetail.contributors_url);
        if (!exist) {
            wx.navigateTo({
                url: targetRoute + '?url=' + apiUrl
            });
        } else {
            targetPageObj.data.apiUrl = apiUrl;
            wx.navigateBack({
                delta
            });
        }
    },
    // 查看作者
    viewAuthor() {
        const targetRoute = '/pages/subPages/developer/developer';
        const { exist, delta, targetPageObj } = this.getRouteIsExistInStack(targetRoute);
        const author = this.data.repoDetail.owner.login;
        if (!exist) {
            wx.navigateTo({
                url: targetRoute + '?username=' + author
            });
        } else {
            targetPageObj.data.username = author;
            wx.navigateBack({
                delta
            });
        }
    },
    // 查看pr
    viewPr() {
        wx.showModal({
            content: '敬请期待',
            showCancel: false,
            confirmText: '确定',
            confirmColor: '#597ef7'
        });
    },
    // 查看code
    viewCode() {
        wx.showModal({
            content: '敬请期待',
            showCancel: false,
            confirmText: '确定',
            confirmColor: '#597ef7'
        });
    }
});