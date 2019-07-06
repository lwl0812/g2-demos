const data = {
  name: 'circle-packing-demo',
  category: 'all',
  children: [
    {
      name: '偶像明星',
      value: 3413138,
      children: [
        {
          name: '邓超',
          value: 955940,
        },
        {
          name: '谢娜',
          value: 839874,
        },
      ],
    },
    {
      name: '搞笑',
      value: 2578453,
      children: [
        {
          name: '微博搞笑排行榜',
          value: 407670,
        },
        {
          name: '冷笑话精选',
          value: 194184,
        },
      ],
    },
    {
      name: '时尚资讯',
      value: 2208096,
      children: [
        {
          name: '姐最会穿',
          value: 88288,
        },
        {
          name: 'Alinda艾琳达',
          value: 78320,
        },
      ],
    },
    {
      name: '综合新闻',
      value: 2187996,
      children: [{ name: '央视新闻', value: 459582 }, { name: '人民日报', value: 449218 }],
    },
    {
      name: '美容美妆',
      value: 2108292,
      children: [{ name: '牛尔', value: 83657 }, { name: '美妆第一线', value: 82062 }],
    },
    {
      name: '餐饮美食',
      value: 2072421,
      children: [{ name: '日食记', value: 217142 }, { name: '天天美食推荐', value: 175366 }],
    },
    {
      name: '综合娱乐',
      value: 2024603,
      children: [{ name: '新浪娱乐', value: 239140 }, { name: '全球娱乐趣事', value: 163990 }],
    },
    {
      name: '情感励志',
      value: 1957128,
      children: [{ name: '治愈系心理学', value: 135265 }, { name: '噗嗤大叔', value: 109635 }],
    },
    {
      name: '电影',
      value: 1815098,
      children: [
        { name: '陈翔橙', value: 107422 },
        { name: '电影工厂', value: 107042 },
        { name: '微博电影', value: 100856 },
        { name: '电影馆长', value: 76042 },
      ],
    },
    {
      name: '视频',
      value: 1735010,
      children: [
        { name: '微博视频', value: 290020 },
        { name: '最神奇的视频', value: 130623 },
        { name: 'inke映客', value: 121601 },
      ],
    },
  ],
};
data.children.forEach(obj => {
  if (obj.children.length) {
    const name = obj.name;
    obj.category = name;
    obj.children.forEach(childObj => {
      childObj.category = name;
    });
  }
});
export default data;
