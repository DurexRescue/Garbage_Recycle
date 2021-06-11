// pages/mycollection/mycollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collections:[
      { title: '攀升MaxBook P1 15.6英寸IPS轻薄便捷笔记本电脑商务办公学生四核手提上网超级本', img:'../../assets/imgs/swiperImg.png',price:'48.00'},
      { title: 'Cuud女士包包斜挎小包女百搭鳄鱼纹牛皮链条包女单肩包 CXCA1624', img: '../../assets/imgs/swiperImg.png', price: '48.00' }
    ]
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  toHomePage(){
    wx.reLaunch({
      url: '../index/index'
    })
  },
  togoodsDetail() {
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail',
    })
  }
})