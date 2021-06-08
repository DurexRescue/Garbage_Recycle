const db = wx.cloud.database()
Page({
  data: {
    keyword: "",
    isCommiting: false,
  },
  onLoad: function(options) {
    var keyword = options.keyword
    this.setData({
      keyword: keyword
    })
  },
  onCheckMsg: function(content, cb) {
    wx.cloud.callFunction({
      name: "checkMsg",
      data: {
        content: content
      },
      success: res => {
        return cb(res.result)
      },
      fail: err => {
        // return cb(err)
      },
    })
  },
  formSubmit: function(e) {
    console.log("aaaa")
    var that=this
    var keyword = e.detail.value.keyword
    if (keyword == undefined || keyword == null || keyword == "") {
      wx.showToast({
        title: '请输入垃圾名称',
        icon: "none"
      })
      return
    }
    this.setData({
      isCommiting: true
    })
    //console.log("res====" + JSON.stringify(res))
    that.onCommit(keyword)  
  },
  onCommit: function (keyword){
    db.collection('commit').add({
      data: {
        keyword: keyword
      },
      success: res => {
        console.log(res)
        wx.showToast({
          title: '提交成功',
          icon: "none"
        })
        this.setData({
          isCommiting: false
        })
        
        wx.switchTab({
          url: '/pages/ai/index',
        })
      },
      fail: res => {
        this.setData({
          isCommiting: false
        })
        wx.showToast({
          title: '提交失败',
          icon: "none"
        })
      }
    })
  }
})