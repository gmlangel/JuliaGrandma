// pages/src/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "searchWidth":"100px",
    screenWidth:100,
    imgUrls: [
      'https://www.juliaol.cn/mainsceneMap_113.png',
      'https://www.juliaol.cn/mainsceneMap_139.png',
      'https://www.juliaol.cn/mainsceneMap_141.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 333
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let screenWidth = wx.getSystemInfoSync().windowWidth;
    //自适应搜索框的宽度
    this.setData({
      "searchWidth": (screenWidth - 85) + "px",
      "screenWidth": screenWidth
    })
    let self = this;
    wx.onWindowResize(function (res) {
      screenWidth = wx.getSystemInfoSync().windowWidth;
      //自适应搜索框的宽度
      self.setData({
        "searchWidth": (screenWidth - 85) + "px",
        "screenWidth": screenWidth
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
  onLunBoImgClick:function(evt){
    console.log(evt.target.dataset.imgid);
  }
})