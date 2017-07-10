// pages/category/category.js
Page({
  // 页面的初始数据
  data: {
    page: 0,
    category: 0,
    hasMore: true,
    list: [],
    side: [
      { id: 0, name: "全部分类" },
      { id: 16, name: "经典慕斯" },
      { id: 330, name: "新派慕斯" },
      { id: 331, name: "3D慕斯" },
      { id: 315, name: "经典慕斯" },
      { id: 335, name: "场景蛋糕" },
      { id: 333, name: "花卉礼品" },
    ]
  },
  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    this.fetch(this.data.category,this.data.page)
  },
  // 获取数据函数
  fetch: function (category,page) {
    wx.showLoading({ mask: true, title: '加载中', })
    if (!this.data.hasMore) { return }
    // wx.request({
    //   url: 'api/category/'+category+"/page/"+page,
    // })
    setTimeout(() => {
      wx.hideLoading()
      var result = list
      if (!result.length){
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
  // 获取更多数据函数
  fetchMore: function () {
    this.fetch(this.data.category, this.data.page+1)
  },
  // 切换类别
  changeCategory: function (e) {
    this.setData({
      category: e.target.id,
      hasMore: true,
      page: 1,
      list: []
    })
    this.fetch(this.data.category,1)
  }  
})
var list = [
  { id: 1, src: "http://www.love11.com/images/201704/thumb_img/98_thumb_G_1491513268103.jpg", cn: "缤纷九宫格", en: "Nice Nine Flavor" },
  { id: 2, src: "http://www.love11.com/images/201704/thumb_img/234_thumb_G_1491868515077.jpg", cn: "缤纷九宫格", en: "Nice Nine Flavor" },
  { id: 3, src: "http://www.love11.com/images/201704/thumb_img/235_thumb_G_1491870747401.jpg", cn: "缤纷九宫格", en: "Nice Nine Flavor" },
  { id: 4, src: "http://www.love11.com/images/201703/thumb_img/230_thumb_G_1490910198764.jpg", cn: "缤纷九宫格", en: "Nice Nine Flavor" },
  { id: 5, src: "http://www.love11.com/images/201704/thumb_img/84_thumb_G_1491513320671.jpg", cn: "缤纷九宫格", en: "Nice Nine Flavor" },
  { id: 6, src: "http://www.love11.com/images/201704/thumb_img/69_thumb_G_1491513295839.jpg", cn: "缤纷九宫格", en: "Nice Nine Flavor" }
]