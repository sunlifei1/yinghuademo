const cheerio = require("cheerio")
const iconv = require("iconv-lite")

const getBrowseList = async () => {
  let response = await $http.get('http://www.imomoe.ai', {
    responseType: 'arraybuffer'
  })
  const $ = cheerio.load(iconv.decode(response.data, 'gb2312'))
  let items = []
  let categories = ['最近更新', '日本动漫', '国产动漫', '欧美动漫', '动漫电影']
  for (let i = 0; i < 5; i++) {
    const data = {}
    data.category = categories[i]
    data.list = []
    let list = $('div.imgs')[i]
    let categoryItems = $('li', list)
    categoryItems.each((_, item) => {
      let episode = $($('p', item)[1]).text()
      let title = $('p a', item).text().replace(/\s*/g, '')
      let img = $('a img', item).attr('src')
      let id = $('a', item).attr('href').split('/')[2].replace('.html', '')
      if (img.startsWith('/pic/uploadimg')) {
        img = 'http://www.imomoe.ai' + img
      }
      data.list.push({ episode, img, title, id })
    })
    items.push(data)
  }
  return items
}

const getInfo = async id => {
  let response = await $http.get('http://www.imomoe.ai/view/' + id + '.html', {
    responseType: 'arraybuffer'
  })
  const $ = cheerio.load(iconv.decode(response.data, 'gb2312'))
  let episodesList = $('div#play_0 li')
  let info = $('div.info')
  let img = $('div.tpic img').attr('src')
  return { intro: $(info[0]).text(), episodeNum: episodesList.length, img }
}

const getTimeTable = async () => {
  let response = await $http.get('http://www.imomoe.ai', {
      responseType: 'arraybuffer'
  })
  const $ = cheerio.load(iconv.decode(response.data, 'gb2312'))
  let timeTable = []
  let weekdayItems = $('div.tists ul')
  weekdayItems.each((_, items) => {
      let list = $('li', items)
      let weekdayList = []
      list.each((_, item) => {
          let episode = $($('a', item)[0]).text()
          let id = $($('a', item)[0]).attr('href').split('/')[2].replace('.html', '')
          let title = $($('a', item)[1]).text().replace(/\s*/g, '')
          weekdayList.push({ title, id, episode })
      })
      timeTable.push(weekdayList)
  })
  return timeTable
}

module.exports = {
  getBrowseList,
  getInfo,
  getTimeTable,
}
