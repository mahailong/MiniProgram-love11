// pages/goods/goods.js
Page({
  data: {
    tab: 0,
    count: 0,
    data: {}
  },
  onLoad: function () {
    var data = result
    this.setData({
      data: data
    })
  },
  changeTab: function (e) {
    this.setData({
      tab: e.target.id
    })
  },
  goToCar: function () {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  addToCar: function () {
    // 调用API
    this.setData({
      count: this.data.count+1
    })
  },
  quickBuy: function () {
    // 调用API
    wx.navigateTo({
      url: '/pages/payment/payment'
    })
  }
})
var result = {
  banners: [
    { id: 1, src: "http://www.love11.com/mobile/data/attached/images/97d5b9b606dc0b10d8e594169020354b.jpg" },
    { id: 2, src: "http://www.love11.com/mobile/data/attached/images/5a084ecee79a41a9b308fa7eb94d08ed.jpg" },
    { id: 3, src: "http://www.love11.com/mobile/data/attached/images/d6510fe3851f4f2857600b6c5cf559e5.jpg" },
    { id: 4, src: "http://www.love11.com/mobile/data/attached/images/30942b945b1d04a79026482d0567504e.jpg" }
  ],
  en: "Matcha Gentleman",
  ch: "和风绅士",
  price: [198,298,398,498],
  format:[
    { weight: "1", area: "14*14com", people: "3-4", tableware: "3", time: "5"},
    { weight: "2", area: "18*18com", people: "7-8", tableware: "5", time: "5" },
    { weight: "3", area: "22*22com", people: "11-12", tableware: "8", time: "5" },
    { weight: "5", area: "30*30com", people: "15-20", tableware: "15", time: "48" }
  ]
}