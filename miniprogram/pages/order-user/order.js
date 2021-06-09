
var app = getApp()
Page({
  data: {
    totalIncome: 0.0,
    runningMoney: 0.0,
    publicWelfareMoney: 0.0,
    orderNum: 1111111,
    appointmentNum: 5,
    appointmentTime: '2020年3月30日  22:45',
    orderTime: '2020年3月30日  23:12',
    hasData: true,
    navTab: ["全部", "未付款", "待接待", "已完成"],
    moneyInfo: [, , , , , , ,],
    nickName: 'iscode',
    phoneNum: '1888888888',
    url: '/images/1.jpg',
    statusImage: ['/images/1.jpg'],
    currentNavtab: 1,
    statusText: ['未付款'],
    startPoint: [0, 0]
  },

  catchtouchstart: function (e) {
    var that = this;
    that.setData({
      startPoint: [e.touches[0].clientX, e.touches[0].clientY]
    })
  },

  catchtouchend: function (e) {
    var that = this;
    var currentNum = parseInt(this.data.currentNavtab);

    // that.endX = e.changedTouches[0].clientX;
    // that.endY = e.changedTouches[0].clientY;

    // if(that.endX  - that.startX > 10 && currentNum > 0){
    //   currentNum -= 1;
    // }

    // if(that.endX - that.startX < -10 && currentNum< this.data.navTab.length -1){
    //   currentNum=currentNum + 1;
    // }

    var endPoint = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    var startPoint = that.data.startPoint
    if (endPoint[0] <= startPoint[0]) {
      if (Math.abs(endPoint[0] - startPoint[0]) >= Math.abs(endPoint[1] - startPoint[1]) && currentNum < this.data.navTab.length - 1) {
        currentNum = currentNum + 1;
      }
    } else {
      if (Math.abs(endPoint[0] - startPoint[0]) >= Math.abs(endPoint[1] - startPoint[1]) && currentNum > 0) {
        currentNum -= 1;
      }
    }

    this.setData({
      currentNavtab: currentNum
    });
  },

  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },


  callEvent: function (e) {
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNum
    })
  },

  goDeatailEvent: function () {
   
  },

  // 加载
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '订单列表'
    })
    var that = this
    //更新数据
    that.setData({
    })
  }
})