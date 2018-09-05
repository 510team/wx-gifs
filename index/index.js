Page({
  data: {
    imgs: [],
    vertical: true
  },
  onLoad() {
    wx.request({
      url: "https://www.adazhang.com/pic",
      method: 'get',
      success: (res) => {
        console.log(res);
        const pics = res.data.map(item => 'https://cdn.adazhang.com/gif_pics/' + item);

        this.setData({
          imgs: pics.slice(4, 8)
        });
      },
      fail: function (res) {

      }
    });
  }
})
