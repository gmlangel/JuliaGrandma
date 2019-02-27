// pages/juliaClassroom/package/Julia_BoutiqueLesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType: "small",
    wonderfulInfo: {
      title: "精彩瞬间",
      arr: [
        {
          "id": 0,
          "name": "精彩瞬间1",
          "videoURL": "url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_113.png"
        },
        {
          "id": 1,
          "name": "精彩瞬间2",
          "videoURL": "url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_139.png"
        },
        {
          "id": 2,
          "name": "精彩瞬间3",
          "videoURL": "url2",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
        },
        {
          "id": 0,
          "name": "精彩瞬间1",
          "videoURL": "url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_113.png"
        },
        {
          "id": 1,
          "name": "精彩瞬间2",
          "videoURL": "url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_139.png"
        },
        {
          "id": 2,
          "name": "精彩瞬间3",
          "videoURL": "url2",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
        }
      ]
    },
    levelGroup: [
      {
        gid: 0,
        name: "4-6岁",
        argName: "lowLevel",
        arr: [
          { categoryID: 0, gid: 0, title: "我的太阳系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 1, gid: 0, title: "颜色系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 2, gid: 0, title: "动物系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 3, gid: 0, title: "xxx系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 4, gid: 0, title: "颜色系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 5, gid: 0, title: "动物系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 6, gid: 0, title: "xxx系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 }
        ]
      },
      {
        gid: 1,
        name: "7-12岁",
        argName: "middelLevel",
        arr: [
          { categoryID: 7, gid: 1, title: "我的太阳系列aaaaaa", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 8, gid: 1, title: "颜色系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 9, gid: 1, title: "动物系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 10, gid: 1, title: "xxx系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 11, gid: 1, title: "颜色系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 12, gid: 1, title: "动物系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 13, gid: 1, title: "xxx系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 }
        ]
      },
      {
        gid: 2,
        name: "12-16岁",
        argName: "highLevel",
        arr: [
          { categoryID: 14, gid: 2, title: "我的太阳系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 15, gid: 2, title: "颜色系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 16, gid: 2, title: "动物系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 17, gid: 2, title: "xxx系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 18, gid: 2, title: "颜色系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 19, gid: 2, title: "动物系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
          { categoryID: 20, gid: 2, title: "xxx系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 }
        ]
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pageType = options.type;
    this.setData({
      pageType: pageType
    })
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
  onSwitchClick:function(){
    if(this.data.pageType == "small"){
      this.data.pageType = "public"
    }else{
      this.data.pageType = "small"
    }
    this.setData({
      pageType:this.data.pageType
    })
  },
  onwonderfulInfoItemClick: function (evt) {
    let id = evt.currentTarget.dataset.id;
    let arr = this.data.wonderfulInfo.arr;
    let j = arr.length;
    let dataInfoObj = null;
    for (var i = 0; i < j; i++) {
      if (arr[i].id == id) {
        dataInfoObj = arr[i];
        break;
      }
    }
    if (dataInfoObj) {
      let str = encodeURI(JSON.stringify(dataInfoObj))
      wx.navigateTo({
        url: '/pages/juliaClassroom/package/wonderfulVideo?arg=' + str
      })
    }
  },
  onLessonCategroyClick:function(evt){
    let argObj = evt.currentTarget.dataset.arg;
    let str = encodeURI(JSON.stringify(argObj))
    wx.navigateTo({
      url: '/pages/juliaClassroom/package/BoutiqueGropList?arg=' + str,
    })
  },
  /**
   * 点击更多内容
  */
  onMoreClick: function (evt) {
    let arg = evt.currentTarget.dataset.type || "";
    if (arg != "") {
      wx.navigateTo({
        url: '/pages/juliaClassroom/package/moreInfoListPage?type=' + arg
      })
    }
  }
})