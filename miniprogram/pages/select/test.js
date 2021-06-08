var app=getApp()
Page({

OnTap:function(){
wx.switchTab({
  url: '../shouye-user/shouye',
})
},

OnTap1:function(){
  wx.navigateTo({
    url: '../shouye/shouye',
  })
  }
}

)