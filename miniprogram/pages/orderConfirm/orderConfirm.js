// pages/orderConfirm/orderConfirm.js
var app = getApp()
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // listItem: [
    //   { id: '1', title: 'Apple/苹果iPhone 11 ProMAX官网旗舰店256G全网通国行正品iPhone11手机', img: '../../assets/imgs/listImg2.png', num: '3', price: '34.99', attr: '属性1;属性2' },
    //   { id: '2', title: 'Apple/苹果iPhone 11 ProMAX官网旗舰店256G全网通国行正品iPhone11手机', img: '../../assets/imgs/listImg2.png', num: '3', price: '34.99', attr: '属性1;属性2' }
    // ],
    addr:{},
    listItem: [],
    allPrice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 
  },

  /**
   * 计算商品总数
   */
  calculateTotal: function () {
    var listItem = this.data.listItem;
    var chooseNum = 0;
    var allPrice = 0;
    console.log(this.data.listItem.length)
    for (var i = 0; i < 1; i++) {
      console.log(listItem[i].cart.price)
      var good = listItem[i].cart;
      console.log(good.price)
      //chooseNum += parseInt(good.num);
      allPrice += parseInt(good.price);
    }
    console.log(allPrice)
    allPrice = allPrice.toFixed(2);
    this.setData({
      //'chooseNum': chooseNum,
      'allPrice': allPrice
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    console.log(this.data.addr)
    db.collection('cart_merchant').where({
      userInfo:{
        nickName: app.globalData.userInfo.nickName
      }
    }).get({
      success: function(res){
        console.log(res);
        if(res.data.length == 0){
          console.log("数据库为空，无订单！")
        }
        that.setData({
          listItem: res.data
        })
        that.calculateTotal()
        console.log("获取成功，订单列表为：",that.data.listItem)
      },
      fail(res){
        console.log("获取失败",res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toPay() {
    wx.navigateTo({
      url: '../orderPay/orderPay?allPrice=' + this.data.allPrice,
    })
  },
  toAddr() {
    wx.navigateTo({
      url: '../addrMan/addrMan'
    })
  }
})