// index.js
// 获取应用实例
const app = getApp()

// pages/map/map.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    addmissage: '选的位置',
    // markers	 Array	标记点
    stitle:'故宫',
    latitude: "",
    longitude: "",
    scale: 18,
    markers: [],
    //controls控件 是左下角圆圈小图标,用户无论放大多少,点这里可以立刻回到当前定位(控件（更新一下,即将废弃，建议使用 cover-view 代替）)
    controls: [{
      id: 1,
      iconPath: '../../images/controls.png',
      position: {
        left: 15,
        top: 260 - 50,
        width: 40,
        height: 40
      },
      clickable: true
    }],
    distanceArr: []
  },

  initData(currentPage) {

    //写你自己的接口
    this.setData({
      orderList: [{ shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }, { shop: "某某名称", shopurl: "/images/1.jpg", origin: "TaoBao", orderstate: "已付款", pictureurl: "/images/1.jpg", couponname: "童装上衣童装上衣", orderdtt: "2020-04-05", productcount: 2, ordernum: "202054654654466", type: "购买", payamount: 100 }]
    })

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData(1);    //获取数据的方法
    var that = this
    //获取当前的地理位置、速度
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {    //之后需要改成从数据库里读取数据
        //赋值经纬度
        that.setData({       
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  //controls控件的点击事件
  bindcontroltap(e) {
    var that = this;
    if (e.controlId == 1) {
      that.setData({
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        scale: 19,
      })
    }
  },
  navTocomment(){
    wx.navigateTo({
      url: '../index2/index2',
    })
  }
  

})


