const puppeteer = require('puppeteer-extra');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


puppeteer.launch({ headless: true }).then(async browser => {
    const page = await browser.newPage();
    await page.emulate(iPhonex);

    var cat = 'Real+Estate'; 
    var loc = 'Downtown%2C+Austin%2C+TX';
    var offset = 0;

    // var titleBegin = 'mark-str%C3%BCb-str%C3%BCb-residential-austin-3';

    // open this page

    for (var i = offset; i < 2000; i += 10) {
        await page.goto(`https://m.yelp.com/search?find_desc=${cat}&find_loc=${loc}&start=${i}`);
            
        // get some stuff from 

        const innerText = await page.evaluate(() => $.map($('.u-text-subtle.phone-number'), x => x.innerText));
        const innerText2 = await page.evaluate(() => $.map($('.title-beginning'), x => x.innerText));

    
        // run thru WHOIS API for external link
    

        // save to datbase
        console.log(innerText);
        console.log(innerText2.slice(10));

 }
    
    // for (var i = offset; i < 2000; i += 10) {

    // await page.goto(`https://m.yelp.com/biz/mark-str%C3%BCb-str%C3%BCb-residential-austin-3?osq=Real+Estate`);

    // const innerText = await page.evaluate(() => $.map($('.'), x =>innerText));

    // console.log(innerText.slice(10));

    // }

    // await page.screenshot({path: 'example.png'});



    // end session / close browser
    await browser.close()

})







