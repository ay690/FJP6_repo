const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

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
        let repository = document.querySelectorAll(".text-bold.wb-break-word");
        for(let i = 0; i < 8; i++){
            let repository_link = "https://github.com" + repository[i].href;
            //console.log(repository_link);
            request(repository_link, cb3);
        }
        
    }
}

function cb3(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let tab_sec = document.querySelector(".UnderlineNav-body.list-style-none");
        let tab_list= tab_sec.querySelectorAll("li");

        if(tab_list.length >= 7){
            let issue = tab_sec.querySelector("#issues-tab");
            let issue_link = "https://github.com" + issue.href;
           // console.log(issue_link);
           request(issue_link, cb4);
        }
    }
}
function cb4(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allIssues = document.querySelectorAll(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        if(allIssues.length > 5){
            for(let i = 0; i < 5; i++){
               let one_issue_link = allIssues[i].href;
               let full_issue_link = "https://github.com" + one_issue_link;
               //console.log(full_issue_link);
               let data = JSON.stringify(full_issue_link);
               let file_present = fs.existsSync("GithubScrap.json");

               if(file_present){
                   fs.appendFileSync("GithubScrap.json", data);
                   fs.appendFileSync("GithubScrap.json", "\n");
                }else{
                    fs.writeFileSync("GithubScrap.json", data);
                    fs.appendFileSync("GithubScrap.json", "\n");
                }
            }
        }
    }
}