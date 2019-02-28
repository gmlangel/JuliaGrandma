// pages/taokeba/package/moreContentPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isloading:false,
    currentArr:[],
    btnNameArr: [],
    content: [
      {
        type: 0, templateType: 0, title: "滔滔不绝", arr: [
          { name: "教师不可不知的心理学", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "教师不可不知的心理学2", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "教师不可不知的心理学3", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "教师不可不知的心理学4", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" }
        ]
      },
      {
        type: 2, templateType: 0, title: "单词世界", arr: [
          { name: "单词世界1", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "单词世界2", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "单词世界3", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "单词世界4", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" }
        ]
      },
      {
        type: 1, templateType: 1,
        title: "绘本馆",
        arr: [
          {
            "id": 0,
            "stars":445,
            "name": "小蝌蚪找妈妈1",
            "videoURL": "url1",
            "imgURL": "https://www.juliaol.cn/mainsceneMap_113.png"
          },
          {
            "id": 1,
            "stars":445,
            "name": "小蝌蚪找妈妈2",
            "videoURL": "url1",
            "imgURL": "https://www.juliaol.cn/mainsceneMap_139.png"
          },
          {
            "id": 2,
            "stars": 445,
            "name": "小蝌蚪找妈妈3",
            "videoURL": "url2",
            "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
          },
          {
            "id": 0,
            "stars": 445,
            "name": "小蝌蚪找妈妈1",
            "videoURL": "url1",
            "imgURL": "https://www.juliaol.cn/mainsceneMap_113.png"
          },
          {
            "id": 1,
            "stars": 445,
            "name": "小蝌蚪找妈妈2",
            "videoURL": "url1",
            "imgURL": "https://www.juliaol.cn/mainsceneMap_139.png"
          },
          {
            "id": 2,
            "stars": 445,
            "name": "小蝌蚪找妈妈3",
            "videoURL": "url2",
            "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
          }
        ]
      },
      {
        type: 3, templateType: 0, title: "教学法", arr: [
          { name: "教学法1", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "教学法2", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "教学法3", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" },
          { name: "教学法4", plateType: 0, icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "https://mp.weixin.qq.com/s/W4h7GlX0ydIs_cBWzbFm_A" }
        ]
      }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = parseInt(options.type || "");
    let arr = this.data.content;
    let j = arr.length
    for(let i=0;i<j;i++){
      if(arr[i].type == type){
        this.data.currentArr = arr[i].arr;
        this.data.templateType = arr[i].templateType;
        break;
      }
    }
    let btnName = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    this.setData({
      type: type,
      templateType:this.data.templateType,
      currentArr: this.data.currentArr,
      btnNameArr: btnName.split("")
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
  ontaokebawenzitupianClick: function (evt) {
    let arg = evt.currentTarget.dataset.arg;
    let str = encodeURI(JSON.stringify(arg))
    wx.navigateTo({
      url: "/pages/taokeba/package/textAndImgPage?arg=" + str,
    })
  },
  ontaokebatupianlunboClick: function (evt) {
    let arg = evt.currentTarget.dataset.arg;
    let str = encodeURI(JSON.stringify(arg))
    wx.navigateTo({
      url: "/pages/taokeba/package/pictureBookPage?arg=" + str,
    })
  },
  onWordClick:function(evt){
    let key = evt.currentTarget.dataset.arg;
    let idx = evt.currentTarget.dataset.idx;
    this.setData({
      currentWordBtnIdx:idx
    })
    console.log(key);
  }
})