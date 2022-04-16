const puppeteer = require("puppeteer");

let browserPromise = puppeteer.launch({headless:false});
let page;
browserPromise.then(function(browser){
    console.log("browser is opened");
    let PagePromise = browser.newPage();
    return PagePromise;
}).then(function(pageInstance){
    console.log("page is opened");
    page = pageInstance;
    let urlPromise = page.goto('https://www.hackerrank.com/');
    return urlPromise;
}).then(function(){
    console.log("HackerRank page is opened");
    let waitPromise = page.waitForSelector("ul.menu a");
    return waitPromise;
}).then(function(){
    let clickPage = page.click("ul.menu a");
    return;
})
