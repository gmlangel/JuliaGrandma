// pages/juliaClassroom/package/Julia_BoutiqueLesson.js
var tool = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:false,
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
    ],
    allLesson: {
      title: "全部",
      arr: [
        { name: "测试信息1", lessonType: "public", book: 43325, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息2", lessonType: "public", book: 43001, icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息3", lessonType: "public", book: 42288, icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息1", lessonType: "public", book: 42013, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", startTime: 1550805237, endTime: 1550808837 }
      ]
    },hot: {
      title: "推荐", arr: [
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
    let pageType = options.type;
    this.setData({
      pageType: pageType
    })

    this.data.isLoading = false;
    this.forEachMakeTimeStr(this.data.hot.arr)
    this.forEachMakeTimeStr(this.data.allLesson.arr)
    this.setData({
      hot: this.data.hot,
      allLesson: this.data.allLesson
    })
  },
  forEachMakeTimeStr: function (arr) {
    let self = this;
    arr.forEach((item, idx) => {
      let strfm = self.makeLessonTime(item.startTime, item.endTime)
      item.timeStr = strfm;
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
    if (this.data.isLoading == true || this.data.pageType == "small") {
      return;
    }
    this.data.isLoading = true;
    wx.showLoading({
      title: '加载数据....',
    })
    let myself = this;
    let tid = setTimeout(function () {
      let allArr = myself.data.allLesson.arr;
      //模拟上拉刷新
      let arr = allArr.length > 5 ? allArr.slice(0, 5) : allArr;
      allArr.push(...arr);
        myself.setData({
          allLesson: myself.data.allLesson
        })

      clearTimeout(tid);
      wx.hideLoading();
      myself.data.isLoading = false;
    }, 2000)
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
  },
  /*
    格式化上课时间字符串
  */
  makeLessonTime: function (st, et) {
    return tool.YYYYMMDDHHMMSS(st) + "-" + tool.HHMMSS(et);
  },
  /**
   * 约课或者取消约课
   * 
  */
  onBtnBookClick: function (evt) {
    let idx = evt.currentTarget.dataset.idx;
    let item = this.data.hot.arr[idx];
    if (item) {
      item.isBooked = !!!item.isBooked;
    }
    this.setData({
      hot: this.data.hot
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
  }
})