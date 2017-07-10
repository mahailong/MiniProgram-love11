// pages/order/order.js
Page({

  data: {
    page: 1,
    status: 0,
    hasMore: true,
    list: [],
    statusObj: {
      "0": "待付款",
      "1": "待发货",
      "2": "待收获",
      "3": "待评价",
    }
  },

  onLoad: function (options) {
    this.fetch(this.data.status, this.data.page)
  },
  fetch: function (status, page) {
    wx.showLoading({ mask: true, title: '加载中', })
    if (!this.data.hasMore) { return }
    // wx.request({
    //   url: 'api/status/'+status+"/page/"+page,
    // })
    setTimeout(() => {
      wx.hideLoading()
      var result = list
      if (!result.length) {
        this.setData({
          hasMore: false
        })
        return
      }
      this.setData({
        page: page,
        list: this.data.list.concat(result)
      })
    },500)
  },
  onReachBottom: function () {
    this.fetch(this.data.status, this.data.page + 1)
  },
  changeTab: function (e) {
    this.setData({
      status: e.target.id,
      hasMore: true,
      list: []
    })
    this.fetch(this.data.status, 1)
  }  
})
var list = [
  {
    id: 2,
    status: 3,
    number: 2017060989541,
    price: 228,
    prolist: [
      {
        id: 0,
        name: "恋十一蛋糕",
        url: "http://www.love11.com/images/201703/source_img/98_G_1490661481912.jpg",
        count: 1
      },
    ]
  },
  { 
    id: 0,
    status: 1,
    number: 2017060989541,
    price: 228,
    prolist: [
      { 
        id: 0, 
        name: "恋十一蛋糕", 
        url: "http://www.love11.com/images/201704/source_img/234_G_1491868515394.jpg",
        count:1
      }
    ]
  },
  {
    id: 1,
    status: 2,
    number: 2017060989541,
    price: 228,
    prolist: [
      {
        id: 0,
        name: "恋十一蛋糕",
        url: "http://www.love11.com/images/201705/source_img/241_G_1493750081283.jpg",
        count: 1
      }
    ]
  },
  {
    id: 2,
    status: 3,
    number: 2017060989541,
    price: 228,
    prolist: [
      {
        id: 0,
        name: "恋十一蛋糕",
        url: "http://www.love11.com/images/201705/source_img/241_G_1493750081283.jpg",
        count: 1
      },
      {
        id: 0,
        name: "恋十一蛋糕",
        url: "http://www.love11.com/images/201703/source_img/98_G_1490661481912.jpg",
        count: 1
      },
    ]
  }
]