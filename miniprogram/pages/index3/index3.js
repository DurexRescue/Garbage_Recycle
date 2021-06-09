Page({
  data: {
       typeArr:[{
    typename: '服务态度',
    stars: [0, 1, 2, 3, 4],
    normalSrc: '/images/kongxing.png',
    selectedSrc: '/images/xingxing.png',
    halfSrc: '/images/bangxing.png',
    key: 0
  },{
      typename: '产品描述',
      stars: [0, 1, 2, 3, 4],
      normalSrc: '/images/kongxing.png',
      selectedSrc: '/images/xingxing.png',
      halfSrc: '/images/bangxing.png',
      key: 0
  },{
      typename: '物流',
      stars: [0, 1, 2, 3, 4],
      normalSrc: '/images/kongxing.png',
      selectedSrc: '/images/xingxing.png',
      halfSrc: '/images/bangxing.png',
      key: 0
  }],

 },
  //点击左边,半颗星
selectLeft: function (e) {
  var that = this;
  var key = e.currentTarget.dataset.key;
  var liindex = e.currentTarget.dataset.index;//获取到点击的第几列
  var count = key
  var childkey = "typeArr[" + liindex + "].key"
  if (that.data.typeArr[liindex].key == 0.5 && e.currentTarget.dataset.key == 0.5) {
    //只有一颗星的时候,再次点击,变为0颗
    that.setData({
      [childkey]: 0
    })
  }else{
    that.setData({
      [childkey]: key
    })
  }
},
//点击右边,整颗星
selectRight: function (e) {
  var key = e.currentTarget.dataset.key;
  var liindex = e.currentTarget.dataset.index;//获取到点击的第几列
  var count = key
  var childkey = "typeArr[" + liindex + "].key"
  this.setData({
    [childkey]: key
  })
},
})    

