// pages/payment/payment.js
Page({

  data: {
    address: "请选择",
    time: "请选择",
    date: "请选择"
  },

  onLoad: function (options) {
    var total = 0
    prolist.forEach((item,index)=>{
      total += item.price
    })
    this.setData({
      prolist: prolist,
      total: total
    })
  },
  bindAddressCahnge: function (e) {
    var that = this
    wx.chooseAddress({
      success: function (res) {
        console.log(res)
        that.setData({
          address: res
        })
      }
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindCashOnDelivery: function () {
    wx.showModal({
      title: '提示',
      content: '购买成功',
      showCancel: false,
      success: function (res) {
        wx.switchTab({
          url: '/pages/home/home'
        })
      }
    })
  },
  bindweiChatPay: function () {
    wx.showModal({
      title: '提示',
      content: '购买成功',
      showCancel: false,
      success: function (res) {
        wx.switchTab({
          url: '/pages/home/home'
        })
      }
    })
  }
})
var prolist = [
  {
    id: 0,
    name: "恋十一蛋糕",
    url: "http://www.love11.com/images/201703/source_img/98_G_1490661481912.jpg",
    count: 1,
    price: 128,
  }
]