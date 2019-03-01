// pages/taokeba/package/pictureBookPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myTitle:"",
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 333,
    picArr:[
      "https://www.juliaol.cn/wx_resource/a_0.png",
      "https://www.juliaol.cn/wx_resource/a_1.jpg",
      "https://www.juliaol.cn/wx_resource/a_2.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let argStr = options.arg;
    try {
      let infoObj = JSON.parse(decodeURI(argStr));
      this.setData({
        infoObj: infoObj
      })
      let name = infoObj.name || "";
      let titleStr = name.length > 20 ? name.substring(0, 17) + "..." : name;
      this.setData({
        myTitle:titleStr
      })
    } catch (err) {

    }
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
  onShareAppMessage: function (arg) {
    return {title:"JuliaGrandma 分享测试"}//还可以自定义分享的page路径（path ’/‘开头）和分享的图片imageUrl只支持PNG和JPG
  },
  onClickGoback:function(){
    wx.navigateBack({
      
    })
  },
  /*
  *点赞
  */
  onClickGoZan:function(){

  },
  /*
  *收藏
  */
  onClickGoshowcang: function () {

  },
  /*
  *分享
  */
  onClickGoShare: function () {

  }
})