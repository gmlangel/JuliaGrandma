// pages/juliaClassroom/package/youxuan.js  优选教师课
var tool = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needShowLessonList:true,
    hot: {
      title: "热门课程", arr: [
        { name: "测试信息1", lessonType:"youxuan", book: 43325, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信",  startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息2", lessonType: "youxuan", book: 43001, icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息3", lessonType: "youxuan", book: 42288, icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息1", lessonType: "youxuan", book: 42013, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", startTime: 1550805237, endTime: 1550808837 }
      ]
    },
    allLesson:{
      title:"全部",
      arr:[
        { name: "测试信息1", lessonType: "youxuan", book: 43325, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信",  startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息2", lessonType: "youxuan", book: 43001, icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息3", lessonType: "youxuan", book: 42288, icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息1", lessonType: "youxuan", book: 42013, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", startTime: 1550805237, endTime: 1550808837 }
      ]
    },
    superTeacher: {
      title: "推荐教师", arr: [
        { name: "Lucy", stars: 43325, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信"},
        { name: "Julia", stars: 43001, icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息"},
        { name: "Panel", stars: 42288, icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息"},
        { name: "Limi Grantas", stars: 42013, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信"}
      ]
    },
    allTeacher: {
      title: "全部", arr: [
        { name: "Lucy", stars: 43325, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信" },
        { name: "Julia", stars: 43001, icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息"},
        { name: "Panel", stars: 42288, icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息"},
        { name: "Limi Grantas", stars: 42013, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信"}
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.isLoading = false;
    let arr = this.data.hot.arr;
    let self = this;
    arr.forEach((item, idx) => {
      let strfm = self.makeLessonTime(item.startTime, item.endTime)
      item.timeStr = strfm;
    });
    this.setData({
      hot: this.data.hot
    })
  },
  /*
    格式化上课时间字符串
  */
  makeLessonTime: function (st, et) {
    return tool.YYYYMMDDHHMMSS(st) + "-" + tool.HHMMSS(et);
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
    if (this.data.isLoading == true){
      return;
    }
    this.data.isLoading = true;
    wx.showLoading({
      title: '加载数据....',
    })
    let myself = this;
    let tid = setTimeout(function(){
      let allArr = myself.data.needShowLessonList ? myself.data.allLesson.arr : myself.data.allTeacher.arr;
      //模拟上拉刷新
      let arr = allArr.length > 5 ? allArr.slice(0, 5) : allArr;
      allArr.push(...arr);
      if (myself.data.needShowLessonList){
        myself.setData({
          allLesson: myself.data.allLesson
        })
      }else{
        myself.setData({
          allTeacher: myself.data.allTeacher
        })
      }
      
      clearTimeout(tid);
      wx.hideLoading();
      myself.data.isLoading = false;
    },2000)
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 当切换按钮 被点击
   * 
  */
  onSwitchClick:function(evt){
    let state = evt.currentTarget.dataset.state || "";
    this.setData({
      needShowLessonList: state === "youxuanke"
    })
  },
  onMoreClick:function(evt){
    let arg = evt.currentTarget.dataset.type || "";
    if (arg != "") {
      wx.navigateTo({
        url: '/pages/juliaClassroom/package/moreInfoListPage?type=' + arg
      })
    }
  },
  /**
   * 约课或者取消约课
   * 
  */
  onBtnBookClick:function(evt){
    let idx = evt.currentTarget.dataset.idx;
    let item = this.data.hot.arr[idx];
    if(item){
      item.isBooked = !!!item.isBooked;
    }
    this.setData({
      hot:this.data.hot
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
  },
  /**
   * 当某个老师被点击
   * 
  */
  onTeacherItemClick: function(evt){
    let arg = evt.currentTarget.dataset.arg;
    console.log(arg);
    let argStr = encodeURI(JSON.stringify(arg));
    wx.navigateTo({
      url: '/pages/juliaClassroom/package/TeacherDetailsInfo?arg=' + argStr
    })
  },
  /**
   * 当某个课程被点击
  */
  onLessonItemClick:function(evt){
    let arg = evt.currentTarget.dataset.arg;
    console.log(arg);
    let argStr = encodeURI(JSON.stringify(arg));
    wx.navigateTo({
      url: '/pages/juliaClassroom/package/LessonDetailsInfo?arg=' + argStr
    })
  }
})