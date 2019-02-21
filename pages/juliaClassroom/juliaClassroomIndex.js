// juliaClassroom/juliaClassroomIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categroyInfo:[
      {
        "id":0,
        "name": "Julia精品小班课",
        "url":"url1",
        "color":"#ff0000"
      },
      {
        "id": 1,
        "name": "优选教师课",
        "url": "url2",
        "color": "#44b549"
      },
      {
        "id": 2,
        "name": "Julia公开课",
        "url": "url3",
        "color": "#4eb8fb"
      },
      {
        "id": 0,
        "name": "Julia精品\n小班课",
        "url": "url4",
        "color": "#ff0000"
      },
      {
        "id": 1,
        "name": "优选教师课",
        "url": "url5",
        "color": "#44b549"
      },
      {
        "id": 2,
        "name": "Julia公开课",
        "url": "url6",
        "color": "#4eb8fb"
      }
    ]
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
  /**
   * 用户点击搜索
   */
  onSearchClick:function(){
    console.log("搜索");
  },
  onCateGroyItemClick:function(evt){
    let idx = evt.currentTarget.dataset.id;
    let info = this.data.categroyInfo[idx] || {};
    let url = info.url
    console.log(url);
  }
})