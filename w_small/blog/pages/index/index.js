//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    welcome:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        welcome:app.world
      })
    })
  },
  onShareAppMessage:function(){
    return {
      title:'欢迎关注我的博客',
      path:'/page/index'
    }
  },
  viewClick:function(){
    this.setData({
      welcome:'点击了'
    })
  }
})
