// pages/src/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "searchWidth":"100px",
    imgUrls: [
      'https://www.juliaol.cn/mainsceneMap_113.png',
      'https://www.juliaol.cn/mainsceneMap_139.png',
      'https://www.juliaol.cn/mainsceneMap_141.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //自适应搜索框的宽度
    this.setData({
      "searchWidth": (wx.getSystemInfoSync().windowWidth - 85) + "px"
    })
    let self = this;
    wx.onWindowResize(function (res) {
      //自适应搜索框的宽度
      self.setData({
        "searchWidth": (wx.getSystemInfoSync().windowWidth - 75) + "px"
      })
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

  onSearchClick:function(){
    
  },
  /*显示每日一句*/
  onBtn_meiriyijvClick: function () {
    wx.navigateTo({
      url: '/pages/src/meiriyijv',
    })
  },
  /*显示口语打卡*/
  onBtn_kouyudakaClick: function () {
    wx.navigateTo({
      url: '/pages/src/kouyudaka',
    })
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})