const puppeteer = require("puppeteer")
const cheerio = require("cheerio")
const casual = require("casual")

async function scrapeData(url) {
  try {
    let browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()
    
    await page.goto(url, { waitUntil: "load", timeout: 0 })
    const html = await page.evaluate(() => document.body.innerHTML)
    const $ = await cheerio.load(html)
    const list = [];
    $("ul[dir='auto'] > li > a").each((index, element) => {
      let obj = {}
      obj[casual.first_name] = $(element).text().toLowerCase().replace(/ /g, "-")
      list.push({name: casual.first_name, param: $(element).text().toLowerCase().replace(/ /g, "-")})
    })
    return list
  } catch (e) {
    console.log(e.message)
  }
}

module.exports =  scrapeData("https://github.com/sindresorhus/awesome")