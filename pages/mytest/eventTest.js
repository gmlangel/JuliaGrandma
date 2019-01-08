// pages/mytest/eventTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  func1 : function(evt){
    console.log(evt);
  },
  func2:function(evt){
    console.log("手指触摸后马上离开");
  },
  func3: function (evt) {
    console.log("手指触摸动作开始");
  },
  func4: function (evt) {
    console.log("手指触摸后移动");
  },
  func5: function (evt) {
    console.log("手指触摸动作结束");
  },
  func6: function (evt) {
    console.log("手指触摸动作被打断，如来电提醒，弹窗");
  },
  func7:function(evt){
    console.log("手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发");
  },
  bindViewTap(event) {
    console.log(event.currentTarget.dataset.alphaBeta, event.currentTarget.dataset.alphabeta, event.currentTarget.dataset.alphaBeta == "1")
     // 大写会转为小写
    console.log("书写方式： 以data-开头，多个单词由连字符-链接，不能有大写(大写会自动转成小写)如data-element-type，最终在 event.currentTarget.dataset 中会将连字符转成驼峰elementType。")
  }
})