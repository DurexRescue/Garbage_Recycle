var app = getApp()
const db = wx.cloud.database()

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

          //上传用户信息至云数据库
          // db.collection('user_info').add({
          //   data:{
          //     signature: res.signature,
          //     userInfo: res.userInfo,

          //   }
          // })


          db.collection('user_info').where({
            userInfo:{
              nickName: this.data.userInfo.nickName
            }
          }).get({
            success: function(res){
              console.log(res)
              console.log(res.data.length == 0)
              if(res.data.length == 0){
                console.log("En")
                db.collection('user_info').add({
                  data:{
                    signature: res_.signature,
                    userInfo: res_.userInfo,
                  }
                })

                db.collection('cart_merchant').add({
                  data:{
                    signature: res_.signature,
                    userInfo: res_.userInfo,
                    cart: '',
                  }
                })

              }
            },
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
    if(this.data.isShowUserName){
      wx.navigateTo({
        url: '../shouye/shouye',
      })
    }else{
      wx.showToast({
        title: '请先登录！',
      })
    }
    },
}

)