const app = getApp();

var template = require('../template1/template1.js');


Page({


  onLoad: function () {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    this.getData();
  },

  data: {
    ColorList: [
      "../../images/RecycleableWaste.jpg",
      "../../images/HazardouAwaste.jpg",
      "../../images/HouseholdfoodWaste.jpg",
      "../../images/ResidualWaste.png",
    ]
  },
  onLoad:function(){
  },
  goSearch: function () {
    wx.navigateTo({
      url: '/pages/ai/search',
    })
  },
  onClick:function(e){
    console.log(JSON.stringify(e))
    var index = e.currentTarget.dataset.index
    var indexClick=0;
    switch (index){
      case 0:
      indexClick=1
      break;
       case 1:
        indexClick = 2
      break;
      case 2:
        indexClick = 3
        break;
      case 3:
        indexClick = 4
        break;
    }
    wx.navigateTo({
      url: '/pages/ai/filter/filter?type=' + indexClick,
    })
  },


  onLoad: function () {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
   // this.getData();
  },

})