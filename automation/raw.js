const puppeteer = require("puppeteer");

let browserPromise = puppeteer.launch({headless:false});//jis page ka automation kar rahe ho woh uski visibility ke liye yeh line use karo

browserPromise.then(function(browserInstance){ //object name browserInstance it can be given any name
   console.log("browser is opened"); 
   let PagePromise = browserInstance.newPage();//will open page in new tab
   return PagePromise;
}).then(function(page){
    console.log("page is opened");
    let urlPromise = page.goto('https://www.google.com/');
    return urlPromise
}).then(function(){
    console.log("google is opened");
})