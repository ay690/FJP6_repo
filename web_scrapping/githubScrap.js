const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://github.com/topics";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allAnchorTags = document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");

        for(let i = 0; i < allAnchorTags.length; i++){
         let link = allAnchorTags[i].href;
         let completeLink = "https://github.com" + link;
         console.log(completeLink);
         request(completeLink, cb2);
        }
    }
}

function cb2(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let issues = document.querySelectorAll("flex-auto.min-width-0.p-2.pr-3.pr-md-2");
        
        for(let i = 0; i < 6; i++){
            let issue_names = issues[i].querySelectorAll(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
            console.log(issue_names[i].textContent);
        }
        
    }
}