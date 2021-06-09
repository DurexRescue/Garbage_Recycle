var app = getApp()

Page({
  onLoad: function(){
    
  },

  data:{
    isShowUserName: false,
    userInfo: '',
  },

  getUserProfile:function(){
      console.log(app.globalData.userInfo)
      wx.getUserProfile({
        desc: '用于登录系统',
        success: (res) => {
          console.log("获取用户信息成功", res)
          getApp().globalData.userRes = res
          getApp().globalData.userInfo = res.userInfo
          //console.log(app.globalData.userInfo)
          let user = res.userInfo
          let res_ = res
          wx.setStorageSync('user', user)
          this.setData({
            isShowUserName: true,
            userInfo: user,
          })
        },
        fail: res => {
          console.log("获取用户信息失败", res)
        }
      })
    },

  OnTap:function(){
    if(this.data.isShowUserName){
      wx.switchTab({
        url: '../shouye-user/shouye',
      })
    }else{
      wx.showToast({
        title: '请先登录！',
      })
    }
    
  },

  OnTap1:function(){
    wx.redirectTo({
      url: '../shouye/shouye',
    })
    },
}

)