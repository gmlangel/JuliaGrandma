// pages/juliaClassroom/package/LessonDetailsInfo.js 课程详情页
var tool = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:false,
    commentaryMSG:"",
    commentary:[
      { nickName: "Lucy", stars: 43325, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信" },
      { nickName: "Julia", stars: 43001, icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息" },
      { nickName: "Panel", stars: 42288, icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息" },
      { nickName: "Limi Grantas", stars: 42013, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arg = options.arg || "";
    try {
      let dataObj = JSON.parse(decodeURI(arg));
      dataObj.ymd = tool.YYYYMMDD(dataObj.startTime)
      dataObj.hmsString = tool.HHMMSS(dataObj.startTime) + " - " + tool.HHMMSS(dataObj.endTime)
      dataObj.teacherName = "Julia";
      console.log(dataObj)
      this.setData({
        lessonInfo: dataObj
      })
    } catch (err) {
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
    if (this.data.isLoading == true) {
      return;
    }
    this.data.isLoading = true;
    wx.showLoading({
      title: '加载数据....',
    })
    let myself = this;
    let tid = setTimeout(function () {
      let allArr = myself.data.commentary;
      //模拟上拉刷新
      let arr = allArr.length > 5 ? allArr.slice(0, 5) : allArr;
      allArr.push(...arr);
      myself.setData({
        commentary: myself.data.commentary
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
  /**
   * 约课或者取消约课
   * 
  */
  onBtnBookClick: function (evt) {
    let item = this.data.lessonInfo
    if (item) {
      item.isBooked = !!!item.isBooked;
    }
    this.setData({
      lessonInfo: item
    })
  },
  /*
  当进入教室被点击
  */
  onJoinRoomClick:function(evt){
    let arg = this.data.lessonInfo;
    let argStr = encodeURI(JSON.stringify(arg));
    let url = ""
    if (arg.lessonType == "youxuan"){
      url = "/pages/juliaClassroom/package/Classroom_youxuan"
    } else if (arg.lessonType == "public"){
      url = "/pages/juliaClassroom/package/Classroom_public"
    }else{
      url = "/pages/juliaClassroom/package/Classroom_small"
    }
    wx.navigateTo({
      url: url + '?arg=' + argStr
    })
  },
  /**
   * 发送评论
   * 
  */
  sendMsg:function(e){
    let val = e.detail.value.trim();
    if(val != ""){
      //清空输入框
      //更新数据
      let arr = this.data.commentary;
      arr.unshift({ nickName: "Julia", stars: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: val })
      this.setData({
        commentary: arr,
        commentaryMSG:""
      });
      // //滚动到评论底部
      // wx.createSelectorQuery().select("#bottomCommentaryTool").boundingClientRect(function(rect){
      //   wx.pageScrollTo({
      //     scrollTop: rect.bottom,
      //   })
      // }).exec();
      
    }else{
      this.setData({
        commentaryMSG: ""
      });
    }
  }
})