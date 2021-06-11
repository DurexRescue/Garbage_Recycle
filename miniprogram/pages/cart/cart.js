// pages/cart/cart.js
var recordStartX = 0;
var currentOffsetX = 0;

<<<<<<< Updated upstream
var template = require('../template1/template1.js');
=======
var app = getApp()
const db = wx.cloud.database()
>>>>>>> Stashed changes

Page({

  
  onLoad: function () {
    template.tabbar("tabBar", 1, this)//0表示第一个tabbar
    this.getData();
  },
  /**
   * 页面的初始数据
   */
  data: {
    // input默认是1
    num: 1,
    // 使用data数据对象设置样式名
    minusStatus: 'disabled',
    chooseNum:0,
    listItem:[
<<<<<<< Updated upstream
      { id: '1', title: '攀升MaxBook P1 15.6英寸IPS轻薄便捷笔记本电脑商务办公学生四核手提上网超级本', img: '../../assets/imgs/listImg2.png', num: 2, price: 10, attr: '属性1;属性2', checked:false},
      { id: '2', title: 'Cuud女士包包斜挎小包女百搭鳄鱼纹牛皮链条包女单肩包 CXCA1624', img: '../../assets/imgs/listImg2.png', num: 3, price: 20, attr: '属性1;属性2', checked:false },

=======
      // { id: '1', title: 'Apple/苹果iPhone 11 ProMAX官网旗舰店256G全网通国行正品iPhone11手机', img: '../../assets/imgs/listImg2.png', num: 2, price: 10, attr: '属性1;属性2', checked:false},
      // { id: '2', title: 'Apple/苹果iPhone 11 ProMAX官网旗舰店256G全网通国行正品iPhone11手机', img: '../../assets/imgs/listImg2.png', num: 3, price: 20, attr: '属性1;属性2', checked:false },
      // { id: '3', title: 'Apple/苹果iPhone 11 ProMAX官网旗舰店256G全网通国行正品iPhone11手机', img: '../../assets/imgs/listImg2.png', num: 3, price: 20, attr: '属性1;属性2', checked: true }
>>>>>>> Stashed changes
        ],
    allPrice: 0,
    selectedAllStatus: false,
      },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },

  onShow: function (){
    var that = this;
    db.collection('cart_merchant').where({
      userInfo:{
        nickName: app.globalData.userInfo.nickName
      }
    }).get({
      success: function(res){
        console.log(res);
        if(res.data.length == 0){
          console.log("购物车为空")
        }
        that.setData({
          listItem: res.data
        })
        that.calculateTotal();

        

        console.log("获取成功，购物车列表为：",that.data.listItem)
        
      },
      fail(res){
        console.log("获取失败",res);
      },
      
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   // this.calculateTotal();
 
  },
   toConfirm() {
    wx.navigateTo({
      url: '../orderConfirm/orderConfirm'
    })
  },
  
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    let listItem = this.data.listItem;
    listItem[e.currentTarget.dataset.index].num=num;
    // 将数值与状态写回
    this.setData({
      listItem:listItem
    });
    this.calculateTotal();
  },
  toHomePage(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  /**
     * 删除购物车当前商品
     */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let listItem = this.data.listItem;
    listItem.splice(index, 1);
    this.setData({
      listItem: listItem
    });
    if (!listItem.length) {
      this.setData({
        iscart: true
      });
    } else {
      this.calculateTotal();
    }
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
      'chooseNum': chooseNum,
      'allPrice': allPrice
    })
  },

  /**
   * 用户点击商品减1
   */
  subtracttap: function (e) {
    var index = e.target.dataset.index;
    var listItem = this.data.listItem;
    var num = listItem[index].num;
    if (num <= 1) {
      return;
    } else {
      listItem[index].num--;
      this.setData({
        'listItem': listItem
      });
      this.calculateTotal();
    }
  },

  /**
   * 用户点击商品加1
   */
  addtap: function (e) {
    var index = e.target.dataset.index;
    var listItem = this.data.listItem;
    var num = listItem[index].num;
    listItem[index].num++;
    this.setData({
      'listItem': listItem
    });
    this.calculateTotal();
  },
  /**
   * 用户选择购物车商品
   */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e);
    var checkboxItems = this.data.listItem;
    var values = e.detail.value;
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0; j < values.length; ++j) {
        if (checkboxItems[i].id == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    var selectedAllStatus = false;
    if (checkboxItems.length == values.length) {
      selectedAllStatus = true;
    }

    this.setData({
      'listItem': checkboxItems,
      'selectedAllStatus': selectedAllStatus
    });
    this.calculateTotal();
  },

  /**
   * 用户点击全选
   */
  selectalltap: function (e) {
    // console.log('用户点击全选，携带value值为：', e.detail.value);
    var value = e.detail.value;
    var selectedAllStatus = false;
    if (value && value[0]) {
      selectedAllStatus = true;
    }
    var listItem = this.data.listItem;
    for (var i = 0; i < listItem.length; i++) {
      var good = listItem[i];
      good['checked'] = selectedAllStatus;
    }

    this.setData({
      'selectedAllStatus': selectedAllStatus,
      'listItem': listItem
    });
    this.calculateTotal();
  },
  recordStart: function (e) {
    recordStartX = e.touches[0].clientX;
    currentOffsetX = this.data.listItem[0].offsetX;
    console.log('start x ', recordStartX);
  }
  ,


  // 左滑删除
  recordMove: function (e) {
    var listItem = this.data.listItem;
    var item = listItem[0];
    var x = e.touches[0].clientX;
    var mx = recordStartX - x;
    console.log('move x ', mx);

    var result = currentOffsetX - mx;
    if (result >= -80 && result <= 0) {
      item.offsetX = result;
    }
    this.setData({
      listItem: listItem
    });
  }
  ,
  recordEnd: function (e) {
    var listItem = this.data.listItem;
    var item = listItem[0];
    console.log('end x ', item.offsetX);

    if (item.offsetX < -40) {
      item.offsetX = -80;

    } else {
      item.offsetX = 0;

    }
    this.setData({
      listItem: listItem
    });
<<<<<<< Updated upstream
  },


  onLoad: function () {
    template.tabbar("tabBar",1, this)//0表示第一个tabbar
    this.setData();
  },
=======
  }
>>>>>>> Stashed changes
})