// pages/mytest/fortest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "simpleArr": ["选项1", "选项2", "选项3"],
    "arr":[
      {"name":"g1","age":13,"identity":"1"},
      { "name": "g2", "age": 14, "identity": "2"},
      { "name": "g3", "age": 15, "identity": "3"},
      { "name": "g1", "age": 13, "identity": "4"},
      { "name": "g2", "age": 14, "identity": "5"},
      { "name": "g3", "age": 15, "identity": "6"},
      { "name": "g1", "age": 13, "identity": "7"},
      { "name": "g2", "age": 14, "identity": "8"},
      { "name": "g3", "age": 15, "identity": "9"},
      { "name": "g1", "age": 13, "identity": "10"},
      { "name": "g2", "age": 14, "identity": "11"},
      { "name": "g3", "age": 15, "identity": "12" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

/**
 * 当 点击了 变更数组按钮
 * 
*/
  onClickChangeArr:function(e){
    let randI = parseInt(Math.random() * 4);
    switch (randI){
      case 0:
        this.data.arr.shift();
      break;
      case 1: 
        this.data.arr.push({ "name": "gbb", "age": 133, "identity": new Date().valueOf().toString(10)});
      break;
      case 2:
        if (this.data.arr.length > 2){
          let tem = this.data.arr[0];
          this.data.arr[0] = this.data.arr[2];
          this.data.arr[2] = tem;
        }
       break;
      default:
        if (this.data.arr.length > 2) {
          this.data.arr[2].age = 199;
        }
      break;
    }

    this.setData({
      arr: this.data.arr
    });
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

  }
})