//index.js
//获取应用实例
const app = getApp()


var template = require('../template1/template1.js');

Page({

  onLoad: function () {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    this.getData();
  },

  data: {
    imgUrls: [
      '../../assets/imgs/banner.png',
      '../../assets/imgs/banner.png',
      '../../assets/imgs/banner.png'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    indicatoractivecolor:'#F44225'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
  enterSearch() {
    wx.navigateTo({
      url: '../search1/search',
    })
  },
  allClass(){
    wx.switchTab({
      url: '../classify1/classify'
    })
  },
  hotGoods(){
    wx.navigateTo({
      url: '../goodsList/goodsList',
    })
  },
  myOrder(){
    wx.navigateTo({
      url: '../order1/order?id=0',
    })
  },
  mgFavor(){
    wx.navigateTo({
      url: '../mycollection/mycollection',
    })
  },
  togoodsDetail(){
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail',
    })
  },

  onLoad: function () {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
  //  this.getData();
  },


})
