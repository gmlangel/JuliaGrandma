// pages/juliaClassroom/package/moreInfoListPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageType: "",
    currentSelectLevelIndex:0,
    levelGroup: [
      {
        gid: 0,
        name: "4-6岁",
        argName: "lowLevel",
        arr: [
          { categoryID: 0, gid: 0, title: "我的太阳系列", des: "特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx特点xxxxxxxxxx,适合xxxxxxxxxxxxxxxxxxxxxxxxx", tips: "这个系列的课非常值得上", curBonus: 5, sumBonus: 30 },
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
    let type = options.type;
    this.setData({
      pageType: type
    })
  },
  onSelectLevel:function(evt){
    let idx = evt.detail.value;
    this.setData({
      currentSelectLevelIndex:idx
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
  onCategroyClick:function(evt){
    let obj = evt.currentTarget.dataset.obj;
    let str = encodeURI(JSON.stringify(obj));
    wx.navigateTo({
      url: '/pages/juliaClassroom/package/BoutiqueGropList?arg=' + str,
    })
  },
  onLessonCategroyItemTipsClick:function(evt){
    let tips = evt.currentTarget.dataset.tips;
    wx.showModal({
      title: '提示',
      content: tips,
      showCancel:false
    })
  }
})