/**
 * @name: 赞赏组件
 * @author: haoluo2
 * @date: 2020-03-10
 * @desc:
*/

Component({
    methods: {
        // reward
        reward() {
            wx.navigateToMiniProgram({
                appId: 'wx18a2ac992306a5a4',
                path: 'pages/apps/largess/detail?id=n28eCNrAZGCgPc1CLmE7uw%3D%3D',
                // envVersion: 'develop',
                success(res) {
                    // 打开成功
                    console.log('点开了赞赏');
                }
            });
        }
    }
});
  