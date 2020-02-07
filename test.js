const puppeteer = require('puppeteer-extra');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
const whois = require('whois-json');
// const whois = require('whois');

puppeteer.use(StealthPlugin())

const fs = require('fs');
const $ = fs.readFileSync('./$.js');

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
        console.log(hostname)
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    if (hostname.startsWith('www.')){
        hostname = hostname.replace('www.','');
    }

    return hostname;
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   

var results = [];

puppeteer.launch({ headless: false }).then(async browser => {

    const page = await browser.newPage();
    await page.emulate(iPhonex);
    var cat = 'Real+Estate';
    var loc = 'Downtown%2C+Austin%2C+TX';
    var offset = 0
    for (var i = offset; i < 10; i += 10) {
        await page.goto(`https://m.yelp.com/search?find_desc=${cat}&find_loc=${loc}&start=${i}`);


        const phoneNumbers = await page.evaluate(() => $.map($('.u-text-subtle.phone-number'), x => x.innerText));
        const titles = (await page.evaluate(() => $.map($('.title-beginning'), x => x.innerText))).slice(10);
        const urls = (await page.evaluate(() => $.map($(".search-biz-header a"), x => $(x).attr('href')))).slice(10);


        console.log(phoneNumbers);
        console.log(titles);
        console.log(urls);

        for (let i = 0; i < urls.length; i++) {
            await page.goto(`https://m.yelp.com${urls[i]}`);
            await page.evaluate(() => eval($));
            await sleep(500);
                        
            const innerText3 = await page.evaluate(() => $("[href^='/biz_redir']" ).attr('href'));
            // console.log(innerText3);
            var website = decodeURIComponent(innerText3.replace('/biz_redir?url=','')).split('&')[0];
            // console.log(website);
            // console.log( extractHostname(website));
            var results = await whois(extractHostname(website));
            console.log(titles[i], results.registrarWhoisServer);                    
        }

    }

})

