//index.js
//获取应用实例
const app = getApp()
const DB=wx.cloud.database().collection("order_user");

var template = require('../template1/template1.js');

Page({

  data: {
    orderList: [],
  },

  showOrderList: function(e){
    var that=this;
    DB.get({
      success: res=>{
        console.log(res);
        if(res.data.length == 0){
          console.log("数据库为空，无订单");
        }
        that.setData({
          orderList: res
        })
        console.log("获取成功，订单列表为：",that.data.orderList);
      },
      fail: function(res){
        console.log("获取失败",res)
      },
    })
  },

  onShow: function(){
    console.log("asdsadas");
    var that=this
    that.setData({

    })
    this.showOrderList();
  },

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
  
  },
  
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
