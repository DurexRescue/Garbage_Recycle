//初始化数据


function tabbarinit() {
  return [
    {
      "text": "首页",
      "pagePath": "../../pages/shouye/shouye",
      "iconPath": "../../images/tabBar/home.png",
      "selectedIconPath": "../../images/tabBar/home.fill.png"
    },

   {
      "text": "购物车",
      "pagePath": "../../pages/shoppingCart/shoppingCart",
      "iconPath": "../../images/tabBar/shoppingCart.png",
      "selectedIconPath": "../../images/tabBar/shoppingCart.fill.png"
    },


    {
      "text": "订单",
      "pagePath": "../../pages/order/order",
      "iconPath": "../../images/tabBar/order.png",
      "selectedIconPath": "../../images/tabBar/order.fill.png"
    },
    {
      "text": "我的",
      "pagePath": "../../pages/my/my",
      "iconPath": "../../images/tabBar/mine.png",
      "selectedIconPath": "../../images/tabBar/mine.fill.png"
    },
    
    {
      "text": "查询",
      "pagePath": "../sort/sort",
      "iconPath": "images/tabBar/shou.png",
      "selectedIconPath": "images/tabBar/shou.png"
    }

  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']   //换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}
/*
function tabbarinit() {
  return [
    {
      "text": "首页",
      "pagePath": "../../pages/shouye/shouye",
      "iconPath": "../../images/tabBar/home.png",
      "selectedIconPath": "../../images/tabBar/home.fill.png"
    },

   {
      "text": "购物车",
      "pagePath": "../../pages/shoppingCart/shoppingCart",
      "iconPath": "../../images/tabBar/shoppingCart.png",
      "selectedIconPath": "../../images/tabBar/shoppingCart.fill.png"
    },


    {
      "text": "订单",
      "pagePath": "../../pages/order/order",
      "iconPath": "../../images/tabBar/order.png",
      "selectedIconPath": "../../images/tabBar/order.fill.png"
    },
    {
      "text": "我的",
      "pagePath": "../../pages/my/my",
      "iconPath": "../../images/tabBar/mine.png",
      "selectedIconPath": "../../images/tabBar/mine.fill.png"
    }

  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}
*/