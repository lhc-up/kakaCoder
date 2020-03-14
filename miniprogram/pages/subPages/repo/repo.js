/**
 * @name: repo首页
 * @author: haoluo2
 * @date: 2020-03-09
*/

import url from '../../../utils/interface.js';
import request from '../../../utils/request.js';
import utils from '../../../utils/util.js';
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
        readmeDetail: {}
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
    // 查看各类型页面
    viewPages(e) {
        const type = e.currentTarget.dataset.type;
        const option = this.data.option;
        const pageRouteMap = {
            'code': '',
            'issues': '/pages/subPages/issueList/issueList',
            'pr': '',
            'contributors': '',
            'author': '/pages/subpages/developer/developer'
        };
        const apisMap = {
            'code': '',
            'issues': url.getRepoIssues(option.author, option.name),
            'pr': '',
            'contributors': '',
            'author': ''
        }
        // 目标页面路由
        const targetPageRoute = pageRouteMap[type];
        // 查看页面栈，如果页面栈中已存在目标页面，则使用navigateBackTo的方式跳转，防止循环跳转，页面栈溢出
        let allPages =  getCurrentPages();
        const index = allPages.findIndex(item => targetPageRoute.indexOf(item.route) >= 0);
        if (index < 0) {
            // 页面栈中不存在，则正常跳转
            wx.navigateTo({
                url: targetPageRoute + '?url=' + encodeURI(apisMap[type])
            });
        } else {
            // 如果存在目标页面，则使用返回的方式跳转，并手动设置该页面的参数
            // 这时候就是该页面在onShow中调用初始化方法原因了
            // 目标页面对象
            const targetPageObj = allPages[index];
            // 按照各个页面参数的格式进行设置，有点麻烦，但为了避免页面栈溢出，还是得想办法处理的
            // 确保目标页面使用apiUrl作为请求地址
            targetPageObj.data.apiUrl = apisMap[type];
            wx.navigateBack({
                delta: allPages.length - index - 1
            });
        }
    },
    viewCode() {

    },
    
    viewIssues() {

    },
    viewPr() {

    },
    viewContributors() {

    },
    viewAuthor() {

    }
});