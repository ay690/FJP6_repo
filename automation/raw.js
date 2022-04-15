const puppeteer = require("puppeteer");

const browserPromise = puppeteer.launch({headless:false});//jis page ka automation kar rahe ho woh uski visibility ke liye yeh line use karo

browserPromise.then(function(browser){ //object name browserInstance it can be given any name
//    console.log("browser is opened"); 
   let PagePromise = browser.newPage();//will open page in new tab
   return PagePromise;
}).then(function(browserpage){
    //page =browserpage[0];
    // console.log("page is opened");
    let urlPromise = browserpage.goto('https://www.google.com/');
    return urlPromise
}).then(function(){
    console.log("google is opened");
})