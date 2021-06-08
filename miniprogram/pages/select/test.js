var app=getApp()
Page({

onLoad: function(options) {
  var that = this;
  //查看是否授权
  wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("用户授权了");
        } else {
        //用户没有授权
          console.log("用户没有授权");
        }
      }
  });
},
OnTap:function(){
  var that = this;
  //查看是否授权
  wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("用户授权了");
          wx.getUserInfo({
            success(res){
              that.setData({
                name: res.userInfo.nickName
              })
            }
          })
        } else {
        //用户没有授权
          console.log("用户没有授权");
        }
      }
  });
  wx.switchTab({
    
    //url: '../shouye/shouye',
  });
},

OnTap1:function(){
  
  }
}

)