const puppeteer = require('puppeteer-extra');
const device = require('pupeteer/DeviceDescriptiors');
const iPhonex = devices['iPhone X'];
const StealthPlugin = require('whois-json');

puppeteer.use(StealthPlugin() )

const fs = require('fs');
const $ = fd.readFileSync('./$.js');

function extractHostname(url) {
  var hostname;

  if (url.indexOf("//") > -1) {
    hostname = url.split('/')[2];
  console.log(hostname)
  }
  
  else {
    hostname = url.split('/')[0];
  }
  
  hostname = hostname.split(':')[0];

  hostname = hostname.split('?')[0];
  
  if (hostname.starsWith('www.')){
      hostname = hostname.replace('www.','');;
  } 
};
