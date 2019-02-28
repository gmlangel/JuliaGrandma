// pages/juliaClassroom/package/BoutiqueGropList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allLesson: {
      title: "全部",
      arr: [
        { name: "测试信息1", lessonType: "public", book: 43325, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息2", lessonType: "public", book: 43001, icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息3", lessonType: "public", book: 42288, icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息1", lessonType: "public", book: 42013, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", startTime: 1550805237, endTime: 1550808837 }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let argObjstr = decodeURI(options.arg)
    try{
      let argObj = JSON.parse(argObjstr);
      wx.setNavigationBarTitle({
        title: argObj.title
      })
    }catch(err){
      console.log(err);
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
  onShareAppMessage: function () {

  },
  /**
   * 约课或者取消约课
   * 
  */
  onBtnBookInAllClick: function (evt) {
    let idx = evt.currentTarget.dataset.idx;
    let item = this.data.allLesson.arr[idx];
    if (item) {
      item.isBooked = !!!item.isBooked;
    }
    this.setData({
      allLesson: this.data.allLesson
    })
  },
  /*
  当进入教室被点击
  */
  onJoinRoomClick: function (evt) {
    let arg = evt.currentTarget.dataset.obj
    let argStr = encodeURI(JSON.stringify(arg));
    let url = "/pages/juliaClassroom/package/Classroom_small"
    wx.navigateTo({
      url: url + '?arg=' + argStr
    })
  },
  /**
   * 当某个课程被点击
  */
  onLessonItemClick: function (evt) {
    let arg = evt.currentTarget.dataset.arg;
    console.log(arg);
    let argStr = encodeURI(JSON.stringify(arg));
    wx.navigateTo({
      url: '/pages/juliaClassroom/package/LessonDetailsInfo?arg=' + argStr
    })
  }
})