//index.js
var app = getApp()
Page({

  data: {
    banners: [],
    recommends :[],
    page: 1,
    hasMore: true
  },
  
  onLoad: function () {
    this.setData({banners: banners})
    this.fetch(this.data.page)
  },
  fetch: function (page) {
    if (!this.data.hasMore) { return }
    wx.showLoading({ mask: true, title: '加载中',})
    // wx.request({
    //   url: 'api/status/'+status+"/page/"+page,
    // })
    setTimeout(()=>{
      wx.hideLoading()
      var result = recommends
      if (!result.length) {
        this.setData({
          hasMore: false
        })
        return
      }
      this.setData({
        page: page,
        recommends: this.data.recommends.concat(result)
      })
    }, 500)
  },
  onReachBottom: function () {
    this.fetch(this.data.page + 1)
  },
})
var banners = [
  { id: 1, src: "http://www.love11.com/mobile/data/attached/images/97d5b9b606dc0b10d8e594169020354b.jpg" },{ id: 2, src: "http://www.love11.com/mobile/data/attached/images/5a084ecee79a41a9b308fa7eb94d08ed.jpg" },{ id: 3, src: "http://www.love11.com/mobile/data/attached/images/d6510fe3851f4f2857600b6c5cf559e5.jpg" },{ id: 4, src: "http://www.love11.com/mobile/data/attached/images/30942b945b1d04a79026482d0567504e.jpg" }]
var recommends = [
  { id: 1, src: "http://www.love11.com/mobile/data/attached/images/1c2624b536ebcec7b79d496e6e3a7d24.jpg" },{ id: 2, src: "http://www.love11.com/mobile/data/attached/images/5a930b3d279dc5f7897fab413f55a432.jpg" },{ id: 3, src: "http://www.love11.com/mobile/data/attached/images/ec42dcc6dadb47fa16e43a41dcf52ab4.jpg" },{ id: 4, src: "http://www.love11.com/mobile/data/attached/images/5c80d5563a0e8967154c2a8b4b90f935.jpg" }]