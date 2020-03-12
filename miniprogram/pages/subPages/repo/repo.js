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
            "id": 65600975,
            "node_id": "MDEwOlJlcG9zaXRvcnk2NTYwMDk3NQ==",
            "name": "pytorch",
            "full_name": "pytorch/pytorch",
            "private": false,
            "owner": {
              "login": "pytorch",
              "id": 21003710,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjIxMDAzNzEw",
              "avatar_url": "https://avatars3.githubusercontent.com/u/21003710?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/pytorch",
              "html_url": "https://github.com/pytorch",
              "followers_url": "https://api.github.com/users/pytorch/followers",
              "following_url": "https://api.github.com/users/pytorch/following{/other_user}",
              "gists_url": "https://api.github.com/users/pytorch/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/pytorch/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/pytorch/subscriptions",
              "organizations_url": "https://api.github.com/users/pytorch/orgs",
              "repos_url": "https://api.github.com/users/pytorch/repos",
              "events_url": "https://api.github.com/users/pytorch/events{/privacy}",
              "received_events_url": "https://api.github.com/users/pytorch/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "html_url": "https://github.com/pytorch/pytorch",
            "description": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
            "fork": false,
            "url": "https://api.github.com/repos/pytorch/pytorch",
            "forks_url": "https://api.github.com/repos/pytorch/pytorch/forks",
            "keys_url": "https://api.github.com/repos/pytorch/pytorch/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/pytorch/pytorch/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/pytorch/pytorch/teams",
            "hooks_url": "https://api.github.com/repos/pytorch/pytorch/hooks",
            "issue_events_url": "https://api.github.com/repos/pytorch/pytorch/issues/events{/number}",
            "events_url": "https://api.github.com/repos/pytorch/pytorch/events",
            "assignees_url": "https://api.github.com/repos/pytorch/pytorch/assignees{/user}",
            "branches_url": "https://api.github.com/repos/pytorch/pytorch/branches{/branch}",
            "tags_url": "https://api.github.com/repos/pytorch/pytorch/tags",
            "blobs_url": "https://api.github.com/repos/pytorch/pytorch/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/pytorch/pytorch/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/pytorch/pytorch/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/pytorch/pytorch/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/pytorch/pytorch/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/pytorch/pytorch/languages",
            "stargazers_url": "https://api.github.com/repos/pytorch/pytorch/stargazers",
            "contributors_url": "https://api.github.com/repos/pytorch/pytorch/contributors",
            "subscribers_url": "https://api.github.com/repos/pytorch/pytorch/subscribers",
            "subscription_url": "https://api.github.com/repos/pytorch/pytorch/subscription",
            "commits_url": "https://api.github.com/repos/pytorch/pytorch/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/pytorch/pytorch/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/pytorch/pytorch/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/pytorch/pytorch/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/pytorch/pytorch/contents/{+path}",
            "compare_url": "https://api.github.com/repos/pytorch/pytorch/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/pytorch/pytorch/merges",
            "archive_url": "https://api.github.com/repos/pytorch/pytorch/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/pytorch/pytorch/downloads",
            "issues_url": "https://api.github.com/repos/pytorch/pytorch/issues{/number}",
            "pulls_url": "https://api.github.com/repos/pytorch/pytorch/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/pytorch/pytorch/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/pytorch/pytorch/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/pytorch/pytorch/labels{/name}",
            "releases_url": "https://api.github.com/repos/pytorch/pytorch/releases{/id}",
            "deployments_url": "https://api.github.com/repos/pytorch/pytorch/deployments",
            "created_at": "2016-08-13T05:26:41Z",
            "updated_at": "2020-03-12T08:35:35Z",
            "pushed_at": "2020-03-12T08:04:16Z",
            "git_url": "git://github.com/pytorch/pytorch.git",
            "ssh_url": "git@github.com:pytorch/pytorch.git",
            "clone_url": "https://github.com/pytorch/pytorch.git",
            "svn_url": "https://github.com/pytorch/pytorch",
            "homepage": "https://pytorch.org",
            "size": 247786,
            "stargazers_count": 36834,
            "watchers_count": 36834,
            "language": "C++",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 9346,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 5244,
            "license": {
              "key": "other",
              "name": "Other",
              "spdx_id": "NOASSERTION",
              "url": null,
              "node_id": "MDc6TGljZW5zZTA="
            },
            "forks": 9346,
            "open_issues": 5244,
            "watchers": 36834,
            "default_branch": "master",
            "temp_clone_token": null,
            "organization": {
              "login": "pytorch",
              "id": 21003710,
              "node_id": "MDEyOk9yZ2FuaXphdGlvbjIxMDAzNzEw",
              "avatar_url": "https://avatars3.githubusercontent.com/u/21003710?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/pytorch",
              "html_url": "https://github.com/pytorch",
              "followers_url": "https://api.github.com/users/pytorch/followers",
              "following_url": "https://api.github.com/users/pytorch/following{/other_user}",
              "gists_url": "https://api.github.com/users/pytorch/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/pytorch/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/pytorch/subscriptions",
              "organizations_url": "https://api.github.com/users/pytorch/orgs",
              "repos_url": "https://api.github.com/users/pytorch/repos",
              "events_url": "https://api.github.com/users/pytorch/events{/privacy}",
              "received_events_url": "https://api.github.com/users/pytorch/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "network_count": 9346,
            "subscribers_count": 1418
          }
          ,
        readmeDetail: {
            "name": "README.md",
            "path": "README.md",
            "sha": "fbc9a6fb8a86038d01c99238eb6374519fc8a020",
            "size": 12683,
            "url": "https://api.github.com/repos/pcm-dpc/COVID-19/contents/README.md?ref=master",
            "html_url": "https://github.com/pcm-dpc/COVID-19/blob/master/README.md",
            "git_url": "https://api.github.com/repos/pcm-dpc/COVID-19/git/blobs/fbc9a6fb8a86038d01c99238eb6374519fc8a020",
            "download_url": "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/README.md",
            "type": "file",
            "content": "PGltZyBzcmM9Imh0dHA6Ly9vcGVuZGF0YWRwYy5tYXBzLmFyY2dpcy5jb20v\nc2hhcmluZy9yZXN0L2NvbnRlbnQvaXRlbXMvNWM4ZWY3NTE2YjViNGJiMTlm\nNjEwMzdiNGNkNjkwMTUvZGF0YSIgYWx0PSJDT1ZJRC0xOSIgZGF0YS1jYW5v\nbmljYWwtc3JjPSJodHRwOi8vb3BlbmRhdGFkcGMubWFwcy5hcmNnaXMuY29t\nL3NoYXJpbmcvcmVzdC9jb250ZW50L2l0ZW1zLzVjOGVmNzUxNmI1YjRiYjE5\nZjYxMDM3YjRjZDY5MDE1L2RhdGEiIHdpZHRoPSI0MDAiIC8+CgojIERhdGkg\nQ09WSUQtMTkgSXRhbGlhCgpbIVtHaXRIdWIgbGljZW5zZV0oaHR0cHM6Ly9p\nbWcuc2hpZWxkcy5pby9iYWRnZS9MaWNlbnNlLUNyZWF0aXZlJTIwQ29tbW9u\ncyUyMEF0dHJpYnV0aW9uJTIwNC4wJTIwSW50ZXJuYXRpb25hbC1ibHVlKV0o\naHR0cHM6Ly9naXRodWIuY29tL3BjbS1kcGMvQ09WSUQtMTkvYmxvYi9tYXN0\nZXIvTElDRU5TRSkKWyFbR2l0SHViIGNvbW1pdF0oaHR0cHM6Ly9pbWcuc2hp\nZWxkcy5pby9naXRodWIvbGFzdC1jb21taXQvcGNtLWRwYy9DT1ZJRC0xOSld\nKGh0dHBzOi8vZ2l0aHViLmNvbS9wY20tZHBjL0NPVklELTE5L2NvbW1pdHMv\nbWFzdGVyKQoKIyMgQXZ2aXNpCgpgYGBkaWZmCi0gMTAvMDMvMjAyMDogZGF0\naSBSZWdpb25lIExvbWJhcmRpYSBwYXJ6aWFsaS4KLSAxMS8wMy8yMDIwOiBk\nYXRpIFJlZ2lvbmUgQWJydXp6byBub24gcGVydmVudXRpLgpgYGAKIAoKW1Np\ndG8gZGVsIERpcGFydGltZW50byBkZWxsYSBQcm90ZXppb25lIENpdmlsZSAt\nIEVtZXJnZW56YSBDb3JvbmF2aXJ1czogbGEgcmlzcG9zdGEgbmF6aW9uYWxl\nXShodHRwOi8vd3d3LnByb3RlemlvbmVjaXZpbGUuaXQvYXR0aXZpdGEtcmlz\nY2hpL3Jpc2NoaW8tc2FuaXRhcmlvL2VtZXJnZW56ZS9jb3JvbmF2aXJ1cykK\nCgpJbCAzMSBnZW5uYWlvIDIwMjAsIGlsIENvbnNpZ2xpbyBkZWkgTWluaXN0\ncmkgZGljaGlhcmEgbG8gc3RhdG8gZGkgZW1lcmdlbnphLCBwZXIgbGEgZHVy\nYXRhIGRpIHNlaSBtZXNpLCBpbiBjb25zZWd1ZW56YSBkZWwgcmlzY2hpbyBz\nYW5pdGFyaW8gY29ubmVzc28gYWxsJ2luZmV6aW9uZSBkYSBDb3JvbmF2aXJ1\ncy4KCkFsIENhcG8gZGVsIERpcGFydGltZW50byBkZWxsYSBQcm90ZXppb25l\nIENpdmlsZSwgQW5nZWxvIEJvcnJlbGxpLCDDqCBhZmZpZGF0byBpbCBjb29y\nZGluYW1lbnRvIGRlZ2xpIGludGVydmVudGkgbmVjZXNzYXJpIGEgZnJvbnRl\nZ2dpYXJlIGwnZW1lcmdlbnphIHN1bCB0ZXJyaXRvcmlvIG5hemlvbmFsZS4g\nIAogIApMZSBwcmluY2lwYWxpIGF6aW9uaSBjb29yZGluYXRlIGRhbCBDYXBv\nIGRlbCBEaXBhcnRpbWVudG8gc29ubyB2b2x0ZSBhbCBzb2Njb3JzbyBlIGFs\nbCdhc3Npc3RlbnphIGRlbGxhIHBvcG9sYXppb25lIGV2ZW50dWFsbWVudGUg\naW50ZXJlc3NhdGEgZGFsIGNvbnRhZ2lvLCBhbCBwb3RlbnppYW1lbnRvIGRl\naSBjb250cm9sbGkgbmVsbGUgYXJlZSBhZXJvcG9ydHVhbGkgZSBwb3J0dWFs\naSwgaW4gY29udGludWl0w6AgY29uIGxlIG1pc3VyZSB1cmdlbnRpIGdpw6Ag\nYWRvdHRhdGUgZGFsIE1pbmlzdGVybyBkZWxsYSBzYWx1dGUsIGFsIHJpZW50\ncm8gaW4gSXRhbGlhIGRlaSBjaXR0YWRpbmkgY2hlIHNpIHRyb3Zhbm8gbmVp\nIFBhZXNpIGEgcmlzY2hpbyBlIGFsIHJpbXBhdHJpbyBkZWkgY2l0dGFkaW5p\nIHN0cmFuaWVyaSBuZWkgUGFlc2kgZGkgb3JpZ2luZSBlc3Bvc3RpIGFsIHJp\nc2NoaW8uCgpQZXIgaW5mb3JtYXJlIGkgY2l0dGFkaW5pIGUgbWV0dGVyZSBh\nIGRpc3Bvc2l6aW9uZSBpIGRhdGkgcmFjY29sdGksIHV0aWxpIGFpIHNvbGkg\nZmluaSBjb211bmljYXRpdmkgZSBkaSBpbmZvcm1hemlvbmUsIGlsIERpcGFy\ndGltZW50byBkZWxsYSBQcm90ZXppb25lIENpdmlsZSBoYSBlbGFib3JhdG8g\ndW4gY3J1c2NvdHRvIGdlb2dyYWZpY28gaW50ZXJhdHRpdm8gcmFnZ2l1bmdp\nYmlsZSBhZ2xpIGluZGlyaXp6aSAgW2h0dHA6Ly9hcmNnLmlzL0MxdW52XSho\ndHRwOi8vYXJjZy5pcy9DMXVudikgKHZlcnNpb25lIGRlc2t0b3ApIGUgW2h0\ndHA6Ly9hcmNnLmlzLzA4MWE1MV0oaHR0cDovL2FyY2cuaXMvMDgxYTUxKSAo\ndmVyc2lvbmUgbW9iaWxlKSBlIG1ldHRlIGEgZGlzcG9zaXppb25lLCBjb24g\nbGljZW56YSBDQy1CWS00LjAsIGxlIHNlZ3VlbnRpIGluZm9ybWF6aW9uaSBh\nZ2dpb3JuYXRlIHF1b3RpZGlhbmFtZW50ZSBhbGxlIDE4OjMwIChzdWNjZXNz\naXZhbWVudGUgbGEgY29uZmVyZW56YSBzdGFtcGEgZGVsIENhcG8gRGlwYXJ0\naW1lbnRvKToKCi0gQW5kYW1lbnRvIG5hemlvbmFsZQotIERhdGkganNvbgot\nIERhdGkgcHJvdmluY2UKLSBEYXRpIHJlZ2lvbmkKLSBTY2hlZGUgcmllcGls\nb2dhdGl2ZQotIEFyZWUKCiMjIFN0cnV0dHVyYSBkZWwgcmVwb3NpdG9yeQpg\nYGAKQ09WSUQtMTkvCuKUggrilJzilIDilIAgYW5kYW1lbnRvLW5hemlvbmFs\nZS8K4pSCICAg4pSc4pSA4pSAIGRwYy1jb3ZpZDE5LWl0YS1hbmRhbWVudG8t\nbmF6aW9uYWxlLXl5eXltbWRkLmNzdgrilJzilIDilIAgYXJlZS8K4pSCICAg\n4pSc4pSA4pSAIGdlb2pzb24K4pSCICAg4pSCICAg4pSc4pSA4pSAIGRwYy1j\nb3ZpZDE5LWl0YS1hcmVlLmdlb2pzb24K4pSCICAg4pSc4pSA4pSAIHNocAri\nlIIgICDilIIgICDilJzilIDilIAgZHBjLWNvdmlkMTktaXRhLWFyZWUuc2hw\nCuKUnOKUgOKUgCBkYXRpLXByb3ZpbmNlLwrilIIgICDilJzilIDilIAgZHBj\nLWNvdmlkMTktaXRhLXByb3ZpbmNlLXl5eXltbWRkLmNzdgrilJzilIDilIAg\nZGF0aS1qc29uLwrilIIgICDilJzilIDilIAgZHBjLWNvdmlkMTktaXRhLSou\nanNvbgrilJzilIDilIAgZGF0aS1yZWdpb25pLwrilIIgICDilJzilIDilIAg\nZHBjLWNvdmlkMTktaXRhLXJlZ2lvbmkteXl5eW1tZGQuY3N2CuKUnOKUgOKU\ngCBzY2hlZGUtcmllcGlsb2dhdGl2ZS8K4pSCICAg4pSc4pSA4pSAIHByb3Zp\nbmNlCuKUgiAgIOKUgiAgIOKUnOKUgOKUgCBkcGMtY292aWQxOS1pdGEtc2No\nZWRhLXByb3ZpbmNlLXl5eXltbWRkLnBkZgrilIIgICDilJzilIDilIAgcmVn\naW9uaQrilIIgICDilIIgICDilJzilIDilIAgZHBjLWNvdmlkMTktaXRhLXNj\naGVkYS1yZWdpb25pLXl5eXltbWRkLnBkZgpgYGAKCgojIyBGb3JtYXRvIGRl\naSBkYXRpCgojIyMgRGF0aSBwZXIgUmVnaW9uZQoKKipEaXJlY3Rvcnk6Kiog\nIGRhdGktcmVnaW9uaQoKKipTdHJ1dHR1cmEgZmlsZSBnaW9ybmFsaWVybzoq\nKiBkcGMtY292aWQxOS1pdGEtcmVnaW9uaS15eXl5bW1kZC5jc3YgKGRwYy1j\nb3ZpZDE5LWl0YS1yZWdpb25pLTIwMjAwMjI0LmNzdikKCioqRmlsZSBjb21w\nbGVzc2l2bzoqKiBkcGMtY292aWQxOS1pdGEtcmVnaW9uaS5jc3YKCnwgTm9t\nZSBjYW1wbyAgICAgICAgICAgICAgICAgIHwgRGVzY3JpemlvbmUgICAgICAg\nICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAg\nICAgICAgICAgICAgfCBGb3JtYXRvICAgICAgICAgICAgICAgICAgICAgICB8\nIEVzZW1waW8gICAgICAgICAgICAgfAp8LS0tLS0tLS0tLS0tLS0tLS0tLS0t\nLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18\nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0t\nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0t\nLS0tLXwKfCAqKmRhdGEqKiAgICAgICAgICAgICAgICAgICAgICAgIHwgRGF0\nYSBkZWxs4oCZaW5mb3JtYXppb25lICAgICAgICAgICAgfCBEYXRlIG9mIG5v\ndGlmaWNhdGlvbiAgICAgICAgICAgICAgICAgICB8IFlZWVktTU0tREQgSEg6\nTU06U1MgKElTTyA4NjAxKSBPcmEgaXRhbGlhbmEgfCAyMDIwLTAzLTA1IDEy\nOjE1OjQ1IHwKfCAqKnN0YXRvKiogICAgICAgICAgICAgICAgICAgICAgIHwg\nU3RhdG8gZGkgcmlmZXJpbWVudG8gICAgICAgICAgICAgIHwgQ291bnRyeSBv\nZiByZWZlcmVuY2UgICAgICAgICAgICAgICAgICAgfCBYWVogKElTTyAzMTY2\nLTEgYWxwaGEtMykgICAgICB8IElUQSAgICAgICAgICAgICAgICAgfAp8ICoq\nY29kaWNlX3JlZ2lvbmUqKiAgICAgICAgICAgICAgfCBDb2RpY2UgZGVsbGEg\nUmVnaW9uZSAoSVNUQVQgMjAxOSkgfCBDb2RlIG9mIHRoZSBSZWdpb24gKElT\nVEFUIDIwMTkpICAgICAgICB8IE51bWVybyAgICAgICAgICAgICAgICAgICAg\nICAgIHwgMTMgICAgICAgICAgICAgICAgICB8CnwgKipkZW5vbWluYXppb25l\nX3JlZ2lvbmUqKiAgICAgICB8IERlbm9taW5hemlvbmUgZGVsbGEgUmVnaW9u\nZSAgICAgICB8IE5hbWUgb2YgdGhlIFJlZ2lvbiAgICAgICAgICAgICAgICAg\nICAgIHwgVGVzdG8gICAgICAgICAgICAgICAgICAgICAgICAgfCBBYnJ1enpv\nICAgICAgICAgICAgIHwKfCAqKmxhdCoqICAgICAgICAgICAgICAgICAgICAg\nICAgIHwgTGF0aXR1ZGluZSAgICAgICAgICAgICAgICAgICAgICAgIHwgTGF0\naXR1ZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBXR1M4NCAg\nICAgICAgICAgICAgICAgICAgICAgICB8IDQyLjY1ODkxNzcgICAgICAgICAg\nfAp8ICoqbG9uZyoqICAgICAgICAgICAgICAgICAgICAgICAgfCBMb25naXR1\nZGluZSAgICAgICAgICAgICAgICAgICAgICAgfCBMb25naXR1ZGUgICAgICAg\nICAgICAgICAgICAgICAgICAgICAgICB8IFdHUzg0ICAgICAgICAgICAgICAg\nICAgICAgICAgIHwgMTMuNzA0Mzk5NzEgICAgICAgICB8CnwgKipyaWNvdmVy\nYXRpX2Nvbl9zaW50b21pKiogICAgICB8IFJpY292ZXJhdGkgY29uIHNpbnRv\nbWkgICAgICAgICAgICB8IEhvc3BpdGFsaXNlZCBwYXRpZW50cyB3aXRoIHN5\nbXB0b21zICAgIHwgTnVtZXJvICAgICAgICAgICAgICAgICAgICAgICAgfCAz\nICAgICAgICAgICAgICAgICAgIHwKfCAqKnRlcmFwaWFfaW50ZW5zaXZhKiog\nICAgICAgICAgIHwgUmljb3ZlcmF0aSBpbiB0ZXJhcGlhIGludGVuc2l2YSAg\nIHwgSW50ZW5zaXZlIENhcmUgICAgICAgICAgICAgICAgICAgICAgICAgfCBO\ndW1lcm8gICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgICAgICAgICAg\nICAgICAgfAp8ICoqdG90YWxlX29zcGVkYWxpenphdGkqKiAgICAgICAgfCBU\nb3RhbGUgb3NwZWRhbGl6emF0aSAgICAgICAgICAgICAgfCBUb3RhbCBob3Nw\naXRhbGlzZWQgcGF0aWVudHMgICAgICAgICAgICB8IE51bWVybyAgICAgICAg\nICAgICAgICAgICAgICAgIHwgMyAgICAgICAgICAgICAgICAgICB8CnwgKipp\nc29sYW1lbnRvX2RvbWljaWxpYXJlKiogICAgICB8IFBlcnNvbmUgaW4gaXNv\nbGFtZW50byBkb21pY2lsaWFyZSB8IEhvbWUgY29uZmluZW1lbnQgICAgICAg\nICAgICAgICAgICAgICAgIHwgTnVtZXJvICAgICAgICAgICAgICAgICAgICAg\nICAgfCAzICAgICAgICAgICAgICAgICAgIHwKfCAqKnRvdGFsZV9hdHR1YWxt\nZW50ZV9wb3NpdGl2aSoqIHwgVG90YWxlIGF0dHVhbG1lbnRlIHBvc2l0aXZp\nIChvc3BlZGFsaXp6YXRpICsgaXNvbGFtZW50byBkb21pY2lsaWFyZSkgICAg\nICB8IFRvdGFsIGFtb3VudCBvZiBjdXJyZW50IHBvc2l0aXZlIGNhc2VzIChI\nb3NwaXRhbGlzZWQgcGF0aWVudHMgKyBIb21lIGNvbmZpbmVtZW50KSAgfCBO\ndW1lcm8gICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgICAgICAgICAg\nICAgICAgfAp8ICoqbnVvdmlfYXR0dWFsbWVudGVfcG9zaXRpdmkqKiAgfCBO\ndW92aSBhdHR1YWxtZW50ZSBwb3NpdGl2aSAob3NwZWRhbGl6emF0aSArIGlz\nb2xhbWVudG8gZG9taWNpbGlhcmUpICAgICAgIHwgTmV3cyBhbW91bnQgb2Yg\nY3VycmVudCBwb3NpdGl2ZSBjYXNlcyAoSG9zcGl0YWxpc2VkIHBhdGllbnRz\nICsgSG9tZSBjb25maW5lbWVudCkgIHwgTnVtZXJvICAgICAgICAgICAgICAg\nICAgICAgICAgfCAzICAgICAgICAgICAgICAgICAgIHwKfCAqKmRpbWVzc2lf\nZ3Vhcml0aSoqICAgICAgICAgICAgIHwgUGVyc29uZSBkaW1lc3NlIGd1YXJp\ndGUgICAgICAgICAgIHwgUmVjb3ZlcmVkICAgICAgICAgICAgICAgICAgICAg\nICAgICAgICAgfCBOdW1lcm8gICAgICAgICAgICAgICAgICAgICAgICB8IDMg\nICAgICAgICAgICAgICAgICAgfAp8ICoqZGVjZWR1dGkqKiAgICAgICAgICAg\nICAgICAgICAgfCBQZXJzb25lIGRlY2VkdXRlICAgICAgICAgICAgICAgICAg\nfCBEZWF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE51\nbWVybyAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgICAgICAgICAg\nICAgICB8CnwgKip0b3RhbGVfY2FzaSoqICAgICAgICAgICAgICAgICB8IFRv\ndGFsZSBjYXNpIHBvc2l0aXZpICAgICAgICAgICAgICB8IFRvdGFsIGFtb3Vu\ndCBvZiBwb3NpdGl2ZSBjYXNlcyAgICAgICAgIHwgTnVtZXJvICAgICAgICAg\nICAgICAgICAgICAgICAgfCAzICAgICAgICAgICAgICAgICAgIHwKfCAqKnRh\nbXBvbmkqKiAgICAgICAgICAgICAgICAgICAgIHwgVG90YWxlIHRhbXBvbmkg\nICAgICAgICAgICAgICAgICAgIHwgVGVzdHMgcGVyZm9ybWVkICAgICAgICAg\nICAgICAgICAgICAgICAgfCBOdW1lcm8gICAgICAgICAgICAgICAgICAgICAg\nICB8IDMgICAgICAgICAgICAgICAgICAgfAoKCipMZSBQcm92aW5jZSBhdXRv\nbm9tZSBkaSBUcmVudG8gZSBCb2x6YW5vIHNvbm8gaW5kaWNhdGUgaW4gImRl\nbm9taW5hemlvbmUgcmVnaW9uZSIgZSBjb24gaWwgY29kaWNlIDA0IGRlbCBU\ncmVudGlubyBBbHRvIEFkaWdlLiogCgoqVmllbmUgbWVzc28gYSBkaXNwb3Np\nemlvbmUgdW4gZmlsZSBKU09OIGNvbXBsZXNzaXZvIGRpIHR1dHRlIGxlIGRh\ndGUgbmVsbGEgY2FydGVsbGEgImRhdGktanNvbiI6IGRwYy1jb3ZpZDE5LWl0\nYS1yZWdpb25pLmpzb24qIAoKIyMjIERhdGkgcGVyIFByb3ZpbmNpYQoKKipE\naXJlY3Rvcnk6KiogIGRhdGktcHJvdmluY2UKCioqU3RydXR0dXJhIGZpbGUg\nZ2lvcm5hbGllcm86KiogZHBjLWNvdmlkMTktaXRhLXByb3ZpbmNlLXl5eXlt\nbWRkLmNzdiAoZHBjLWNvdmlkMTktaXRhLXByb3ZpbmNlLTIwMjAwMjI0LmNz\ndikKCioqRmlsZSBjb21wbGVzc2l2bzoqKiBkcGMtY292aWQxOS1pdGEtcHJv\ndmluY2UuY3N2Cgp8IE5vbWUgY2FtcG8gICAgICAgICAgICAgIHwgRGVzY3Jp\nemlvbmUgICAgICAgICAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAg\nICAgICAgICAgICAgICAgICAgIHwgRm9ybWF0byAgICAgICAgICAgIHwgRXNl\nbXBpbyAgICAgICAgICAgICAgfAp8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t\nLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0t\nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0t\nLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfAp8ICoqZGF0YSoqICAgICAg\nICAgICAgICAgICAgICB8IERhdGEgZGVsbOKAmWluZm9ybWF6aW9uZSAgICAg\nICAgICAgICAgfCBEYXRlIG9mIG5vdGlmaWNhdGlvbiAgICAgICAgICAgIHwg\nWVlZWS1NTS1ERCBISDpNTTpTUyAoSVNPIDg2MDEpIE9yYSBpdGFsaWFuYSAg\nICAgICAgICAgfCAyMDIwLTAzLTA1IDEyOjE1OjQ1IHwgICAgICAgICAgICAg\nICAgICAgfAp8ICoqc3RhdG8qKiAgICAgICAgICAgICAgICAgICB8IFN0YXRv\nIGRpIHJpZmVyaW1lbnRvICAgICAgICAgICAgICAgIHwgQ291bnRyeSBvZiBy\nZWZlcmVuY2UgICAgICAgICAgICB8IElTTyAzMTY2LTEgYWxwaGEtMyB8IElU\nQSAgICAgICAgICAgICAgICAgIHwKfCAqKmNvZGljZV9yZWdpb25lKiogICAg\nICAgICAgfCBDb2RpY2UgZGVsbGEgUmVnaW9uZSAoSVNUQVQgMjAxOSkgICB8\nIENvZGUgb2YgdGhlIFJlZ2lvbiAoSVNUQVQgMjAxOSkgfCBOdW1lcm8gICAg\nICAgICAgICAgfCAxMyAgICAgICAgICAgICAgICAgICB8CnwgKipkZW5vbWlu\nYXppb25lX3JlZ2lvbmUqKiAgIHwgRGVub21pbmF6aW9uZSBkZWxsYSBSZWdp\nb25lICAgICAgICAgfCBOYW1lIG9mIHRoZSBSZWdpb24gICAgICAgICAgICAg\nIHwgVGVzdG8gICAgICAgICAgICAgIHwgQWJydXp6byAgICAgICAgICAgICAg\nfAp8ICoqY29kaWNlX3Byb3ZpbmNpYSoqICAgICAgICB8IENvZGljZSBkZWxs\nYSBQcm92aW5jaWEgKElTVEFUIDIwMTkpIHwgQ29kZSBvZiB0aGUgUHJvdmlu\nY2UgICAgICAgICAgICB8IE51bWVybyAgICAgICAgICAgICB8IDA2NyAgICAg\nICAgICAgICAgICAgIHwKfCAqKmRlbm9taW5hemlvbmVfcHJvdmluY2lhKiog\nfCBEZW5vbWluYXppb25lIGRlbGxhIHByb3ZpbmNpYSAgICAgICB8IE5hbWUg\nb2YgdGhlIFByb3ZpbmNlICAgICAgICAgICAgfCBUZXN0byAgICAgICAgICAg\nICAgfCBUZXJhbW8gICAgICAgICAgICAgICB8CnwgKipzaWdsYV9wcm92aW5j\naWEqKiAgICAgICAgIHwgU2lnbGEgZGVsbGEgUHJvdmluY2lhICAgICAgICAg\nICAgICAgfCBQcm92aW5jZSBhYmJyZXZpYXRpb24gICAgICAgICAgIHwgVGVz\ndG8gICAgICAgICAgICAgIHwgVEUgICAgICAgICAgICAgICAgICAgfAp8ICoq\nbGF0KiogICAgICAgICAgICAgICAgICAgICB8IExhdGl0dWRpbmUgICAgICAg\nICAgICAgICAgICAgICAgICAgIHwgTGF0aXR1ZGUgICAgICAgICAgICAgICAg\nICAgICAgICB8IFdHUzg0ICAgICAgICAgICAgICB8IDQyLjY1ODkxNzcgICAg\nICAgICAgIHwKfCAqKmxvbmcqKiAgICAgICAgICAgICAgICAgICAgfCBMb25n\naXR1ZGluZSAgICAgICAgICAgICAgICAgICAgICAgICB8IExvbmdpdHVkZSAg\nICAgICAgICAgICAgICAgICAgICAgfCBXR1M4NCAgICAgICAgICAgICAgfCAx\nMy43MDQzOTk3MSAgICAgICAgICB8CnwgKip0b3RhbGVfY2FzaSoqICAgICAg\nICAgICAgIHwgVG90YWxlIGNhc2kgcG9zaXRpdmkgICAgICAgICAgICAgICAg\nfCBUb3RhbCBhbW91bnQgb2YgcG9zaXRpdmUgY2FzZXMgIHwgTnVtZXJvICAg\nICAgICAgICAgIHwgMyAgICAgICAgICAgICAgICAgICAgfAoKKkxlIFByb3Zp\nbmNlIGF1dG9ub21lIGRpIFRyZW50byBlIEJvbHphbm8gc29ubyBpbmRpY2F0\nZSBpbiAiZGVub21pbmF6aW9uZSByZWdpb25lIiBlIGNvbiBpbCBjb2RpY2Ug\nMDQgZGVsIFRyZW50aW5vIEFsdG8gQWRpZ2UuKiAKCipPZ25pIFJlZ2lvbmUg\naGEgdW5hIFByb3ZpbmNpYSBkZW5vbWluYXRhICJJbiBmYXNlIGRpIGRlZmlu\naXppb25lL2FnZ2lvcm5hbWVudG8iIGNvbiBpbCBjb2RpY2UgcHJvdmluY2lh\nIGRhIDk3OSBhIDk5OSwgdXRpbGUgYWQgaW5kaWNhcmUgaSBkYXRpIGFuY29y\nYSBub24gYXNzZWduYXRpIGFsbGUgUHJvdmluY2UuKgoKKlZpZW5lIG1lc3Nv\nIGEgZGlzcG9zaXppb25lIHVuIGZpbGUgSlNPTiBjb21wbGVzc2l2byBkaSB0\ndXR0ZSBsZSBkYXRlIG5lbGxhIGNhcnRlbGxhICJkYXRpLWpzb24iOiBkcGMt\nY292aWQxOS1pdGEtcHJvdmluY2UuanNvbioKCiMjIyBBbmRhbWVudG8gbmF6\naW9uYWxlCgoqKkRpcmVjdG9yeToqKiAgZGF0aS1hbmRhbWVudG8tbmF6aW9u\nYWxlCgoqKlN0cnV0dHVyYSBmaWxlIGdpb3JuYWxpZXJvOioqIGRwYy1jb3Zp\nZDE5LWl0YS1hbmRhbWVudG8tbmF6aW9uYWxlLXl5eXltbWRkLmNzdiAoZHBj\nLWNvdmlkMTktaXRhLWFuZGFtZW50by1uYXppb25hbGUtMjAyMDAyMjQuY3N2\nKQoKKipGaWxlIGNvbXBsZXNzaXZvOioqIGRwYy1jb3ZpZDE5LWl0YS1hbmRh\nbWVudG8tbmF6aW9uYWxlLmNzdgoKCnwgTm9tZSBjYW1wbyAgICAgICAgICAg\nICAgICAgIHwgRGVzY3JpemlvbmUgICAgICAgICAgICAgICAgICAgICAgIHwg\nRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBGb3Jt\nYXRvICAgICAgICAgICAgICAgICAgICAgICB8IEVzZW1waW8gICAgICAgICAg\nICAgfAp8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0t\nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0t\nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0t\nLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwKfCAqKmRhdGEqKiAg\nICAgICAgICAgICAgICAgICAgICAgIHwgRGF0YSBkZWxs4oCZaW5mb3JtYXpp\nb25lICAgICAgICAgICAgfCBEYXRlIG9mIG5vdGlmaWNhdGlvbiAgICAgICAg\nICAgICAgICAgICB8IFlZWVktTU0tREQgSEg6TU06U1MgKElTTyA4NjAxKSBP\ncmEgaXRhbGlhbmEgfCAyMDIwLTAzLTA1IDEyOjE1OjQ1IHwKfCAqKnN0YXRv\nKiogICAgICAgICAgICAgICAgICAgICAgIHwgU3RhdG8gZGkgcmlmZXJpbWVu\ndG8gICAgICAgICAgICAgIHwgQ291bnRyeSBvZiByZWZlcmVuY2UgICAgICAg\nICAgICAgICAgICAgfCBYWVogKElTTyAzMTY2LTEgYWxwaGEtMykgICAgICB8\nIElUQSAgICAgICAgICAgICAgICAgfAp8ICoqcmljb3ZlcmF0aV9jb25fc2lu\ndG9taSoqICAgICAgfCBSaWNvdmVyYXRpIGNvbiBzaW50b21pICAgICAgICAg\nICAgfCBIb3NwaXRhbGlzZWQgcGF0aWVudHMgd2l0aCBzeW1wdG9tcyAgICB8\nIE51bWVybyAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgICAgICAg\nICAgICAgICB8CnwgKip0ZXJhcGlhX2ludGVuc2l2YSoqICAgICAgICAgICB8\nIFJpY292ZXJhdGkgaW4gdGVyYXBpYSBpbnRlbnNpdmEgICB8IEludGVuc2l2\nZSBDYXJlICAgICAgICAgICAgICAgICAgICAgICAgIHwgTnVtZXJvICAgICAg\nICAgICAgICAgICAgICAgICAgfCAzICAgICAgICAgICAgICAgICAgIHwKfCAq\nKnRvdGFsZV9vc3BlZGFsaXp6YXRpKiogICAgICAgIHwgVG90YWxlIG9zcGVk\nYWxpenphdGkgICAgICAgICAgICAgIHwgVG90YWwgaG9zcGl0YWxpc2VkIHBh\ndGllbnRzICAgICAgICAgICAgfCBOdW1lcm8gICAgICAgICAgICAgICAgICAg\nICAgICB8IDMgICAgICAgICAgICAgICAgICAgfAp8ICoqaXNvbGFtZW50b19k\nb21pY2lsaWFyZSoqICAgICAgfCBQZXJzb25lIGluIGlzb2xhbWVudG8gZG9t\naWNpbGlhcmUgfCBIb21lIGNvbmZpbmVtZW50ICAgICAgICAgICAgICAgICAg\nICAgICB8IE51bWVybyAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAg\nICAgICAgICAgICAgICB8CnwgKip0b3RhbGVfYXR0dWFsbWVudGVfcG9zaXRp\ndmkqKiB8IFRvdGFsZSBhdHR1YWxtZW50ZSBwb3NpdGl2aSAob3NwZWRhbGl6\nemF0aSArIGlzb2xhbWVudG8gZG9taWNpbGlhcmUpICAgICAgfCBUb3RhbCBh\nbW91bnQgb2YgY3VycmVudCBwb3NpdGl2ZSBjYXNlcyAoSG9zcGl0YWxpc2Vk\nIHBhdGllbnRzICsgSG9tZSBjb25maW5lbWVudCkgIHwgTnVtZXJvICAgICAg\nICAgICAgICAgICAgICAgICAgfCAzICAgICAgICAgICAgICAgICAgIHwKfCAq\nKm51b3ZpX2F0dHVhbG1lbnRlX3Bvc2l0aXZpKiogIHwgTnVvdmkgYXR0dWFs\nbWVudGUgcG9zaXRpdmkgKG9zcGVkYWxpenphdGkgKyBpc29sYW1lbnRvIGRv\nbWljaWxpYXJlKSAgICAgICB8IE5ld3MgYW1vdW50IG9mIGN1cnJlbnQgcG9z\naXRpdmUgY2FzZXMgKEhvc3BpdGFsaXNlZCBwYXRpZW50cyArIEhvbWUgY29u\nZmluZW1lbnQpICB8IE51bWVybyAgICAgICAgICAgICAgICAgICAgICAgIHwg\nMyAgICAgICAgICAgICAgICAgICB8CnwgKipkaW1lc3NpX2d1YXJpdGkqKiAg\nICAgICAgICAgICB8IFBlcnNvbmUgZGltZXNzZSBndWFyaXRlICAgICAgICAg\nICB8IFJlY292ZXJlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwg\nTnVtZXJvICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICAgICAgICAg\nICAgICAgIHwKfCAqKmRlY2VkdXRpKiogICAgICAgICAgICAgICAgICAgIHwg\nUGVyc29uZSBkZWNlZHV0ZSAgICAgICAgICAgICAgICAgIHwgRGVhdGggICAg\nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBOdW1lcm8gICAgICAg\nICAgICAgICAgICAgICAgICB8IDMgICAgICAgICAgICAgICAgICAgfAp8ICoq\ndG90YWxlX2Nhc2kqKiAgICAgICAgICAgICAgICAgfCBUb3RhbGUgY2FzaSBw\nb3NpdGl2aSAgICAgICAgICAgICAgfCBUb3RhbCBhbW91bnQgb2YgcG9zaXRp\ndmUgY2FzZXMgICAgICAgICB8IE51bWVybyAgICAgICAgICAgICAgICAgICAg\nICAgIHwgMyAgICAgICAgICAgICAgICAgICB8CnwgKip0YW1wb25pKiogICAg\nICAgICAgICAgICAgICAgICB8IFRvdGFsZSB0YW1wb25pICAgICAgICAgICAg\nICAgICAgICB8IFRlc3RzIHBlcmZvcm1lZCAgICAgICAgICAgICAgICAgICAg\nICAgIHwgTnVtZXJvICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICAg\nICAgICAgICAgICAgIHwKCgoKKlZpZW5lIG1lc3NvIGEgZGlzcG9zaXppb25l\nIHVuIGZpbGUgSlNPTiBjb21wbGVzc2l2byBkaSB0dXR0ZSBsZSBkYXRlIG5l\nbGxhIGNhcnRlbGxhICJkYXRpLWpzb24iOiBkcGMtY292aWQxOS1pdGEtYW5k\nYW1lbnRvLW5hemlvbmFsZS5qc29uKgoKKipMaWNlbnphOioqIFtDQy1CWS00\nLjBdKGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80\nLjAvZGVlZC5lbikgLSBbVmlzdWFsaXp6YSBsaWNlbnphXShodHRwczovL2dp\ndGh1Yi5jb20vcGNtLWRwYy9DT1ZJRC0xOS9ibG9iL21hc3Rlci9MSUNFTlNF\nKQoKCgoqKkVkaXRvcmUvQXV0b3JlIGRlbCBkYXRhc2V0OioqIERpcGFydGlt\nZW50byBkZWxsYSBQcm90ZXppb25lIENpdmlsZQoKKipUZW1pIGRlbCBkYXRh\nc2V0OioqIFtTYWx1dGUgdW1hbmEgZSBzaWN1cmV6emEgLSBIdW1hbiBoZWFs\ndGggYW5kIHNhZmV0eV0oaHR0cDovL2luc3BpcmUuZWMuZXVyb3BhLmV1L3Ro\nZW1lL2hoKSAoSW5zcGlyZSkKCioqQ2F0ZWdvcmlhIElTTyAxOTExNToqKiBT\nYWx1dGUKCipEYXRpIGZvcm5pdGkgZGFsIE1pbmlzdGVybyBkZWxsYSBTYWx1\ndGUqCgoqRWxhYm9yYXppb25lIGUgZ2VzdGlvbmUgZGF0aSBhIGN1cmEgZGVs\nIERpcGFydGltZW50byBkZWxsYSBQcm90ZXppb25lIENpdmlsZSo=\n",
            "encoding": "base64",
            "_links": {
              "self": "https://api.github.com/repos/pcm-dpc/COVID-19/contents/README.md?ref=master",
              "git": "https://api.github.com/repos/pcm-dpc/COVID-19/git/blobs/fbc9a6fb8a86038d01c99238eb6374519fc8a020",
              "html": "https://github.com/pcm-dpc/COVID-19/blob/master/README.md"
            }
          }
          
    },
    onLoad(option) {
        this.data.option = option;
        wx.setNavigationBarTitle({
            title: option.name||'test'
        });
        // this.init();
    },
    // 初始化
    init() {
        this.getRepoDetail();
    },
    // 获取仓库详情
    getRepoDetail() {
        const option = this.data.option;
        const api = url.getRepoDetail(option.author, option.name);
        request.get(api).then(data => {
            if (!data) return;
            this.setData({
                repoDetail: data
            });
            this.getReadme(data.full_name);
        }).catch(err => {
            utils.showTip(err);
        });
    },
    // 获取仓库readme
    getReadme(repoFullName) {
        const api = url.getRepoReadme(repoFullName);
        request.get(api).then(data => {
            this.setData({
                readmeDetail: data
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