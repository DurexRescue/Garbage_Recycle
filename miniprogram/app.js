//app.js
var Bmob = require('utils/bmob.js');
Bmob.initialize("a59374d37a4a78b74dd041115158fcb2", "ab6eeae50480842b42ce0d71fde17b84","c908bfed7938e1176673b67691cf0213");

App({
  onLaunch: function() {
    // var date = new Date();
    // console.log(date)

    
    var user = new Bmob.User();//开始注册用户
    var newOpenid = wx.getStorageSync('openid')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    if (!newOpenid) {
      wx.login({
        success: function (res) {
          user.loginWithWeapp(res.code).then(function (user) {
            var openid = user.get("authData").weapp.openid;
            console.log(user, 'user', user.id, res);

            if (user.get("nickName")) {
              // 第二次访问
              console.log(user.get("nickName"), 'res.get("nickName")');

              wx.setStorageSync('openid', openid)
            } else {

              //保存用户其他信息
              wx.getUserInfo({
                success: function (result) {
                  var userInfo = result.userInfo;
                  var nickName = userInfo.nickName;
                  var avatarUrl = userInfo.avatarUrl;
                  var gender = userInfo.gender;
                  var u = Bmob.Object.extend("_User");
                  var query = new Bmob.Query(u);
                  // 这个 id 是要修改条目的 id，你在生成这个存储并成功时可以获取到，请看前面的文档
                  query.get(user.id, {
                    success: function (result) {
                      // 自动绑定之前的账号
                      result.set('nickName', nickName);
                      result.set("userPic", avatarUrl);
                      result.set("openid", openid);
                      result.set("gender", gender);
                      
                      result.save();
                    }
                  });
                }
              });
            }
          }, function (err) {
            console.log(err, 'errr');
          });
        }
      });
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log("Status:"+res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserProfile({
            success: res => {
              console.log("获取用户信息成功", res)
              // 可以将 res 发送给后台解码出 unionId
              
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
            fail: res =>{
              console.log(res)
            },
          })
        }
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API

                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
        }
        else {
          //调用wx.getLocation的API
        }

      }
    })



    //
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function(res) {
      console.log(res.hasUpdate)
      if (res.hasUpdate) { 
        updateManager.onUpdateReady(function() {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function(res) {
              if (res.confirm) {
                updateManager.applyUpdate()
              }
            }
          })
        })
      }
    })
    updateManager.onUpdateFailed(function() {
      // 新版本下载失败
    })

  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {

          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  
  // 下拉刷新

  // 获取电影的数据URL
  globalData: {
    userRes: null,
    userInfo: null,
    // huanbaoBase: 'https://www.hukebme.com/',  //唤宝的网址
    huanbaoBase: 'http://192.168.0.111/',
    // doubanBase: 'https://douban.uieee.com',
    //huanbaoBase: 'http://localhost/',
    ResourcesURL: '/v2/movie/search?q=',
    inThearters: '/v2/movie/in_theaters',//热映
    comingSoon: '/v2/movie/coming_soon',//即将上映
    subject: '/v2/movie/subject/'
  },
})