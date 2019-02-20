// pages/src/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunboImgUrls: [
      'https://www.juliaol.cn/mainsceneMap_113.png',
      'https://www.juliaol.cn/mainsceneMap_139.png',
      'https://www.juliaol.cn/mainsceneMap_141.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 333,
    content:[
      {title:"Hot",arr:[
        { name: "测试信息1", group: "Julia课堂", icon: "https://www.juliaol.cn/mainsceneMap_113.png", des:"这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信",link:"url1"},
        { name: "测试信息2", group: "滔客吧", icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息", link: "url2"},
        { name: "测试信息3", group: "国外精选", icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息", link: "url3"}
      ]}/*,
      { title: "Julia课堂" },
      { title: "滔客吧"},
      { title: "国外精选" }*/
    ],
    footInfo:{
      comName:"xxxx混沌科技责任有限公司",
      backupInfo:"京网xxxx备案",
      icpBackupInfo:"ICPxxxx备案xxxx"
    },
    connectNumber:"13011107437"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let screenWidth = wx.getSystemInfoSync().windowWidth;
    // //自适应搜索框的宽度
    // this.setData({
    //   "searchWidth": (screenWidth - 85) + "rpx",
    //   "screenWidth": screenWidth
    // })
    // let self = this;
    // wx.onWindowResize(function (res) {
    //   screenWidth = wx.getSystemInfoSync().windowWidth;
    //   //自适应搜索框的宽度
    //   self.setData({
    //     "searchWidth": (screenWidth - 85) + "rpx",
    //     "screenWidth": screenWidth
    //   })
    // })
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
  },
  onContentSubitemClick:function(evt){
    console.log(evt.currentTarget.dataset.arg);
    wx.navigateTo({
      url: '/juliaClassroom/juliaClassroomIndex',
    })
  }
})