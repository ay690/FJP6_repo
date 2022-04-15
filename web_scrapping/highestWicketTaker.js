const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        //console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let bowlersTable = document.querySelectorAll(".table.bowler");
        let mostWicket = 0;
        let nameOfHighestWicketTacker = "";
        for(let i=0;i<bowlersTable.length;i++){ // 2 bowler table
            let rows = bowlersTable[i].querySelectorAll("tbody tr"); //selecting each rows of table
            for(let j=0;j<rows.length;j++){
                let tds = rows[j].querySelectorAll("td"); //tackling the columns of the row
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    // if(max_wicket < wicket){
                    //     max_wicket = wicket;
                    //     name_of_highest_wicket_taker = name;
                    // }
                    if(wicket>mostWicket){
                        mostWicket = wicket;
                        nameOfHighestWicketTacker = name;
                    }
                    //console.log("Name of Bowler ---> ",name,"     Wickets ---> ",wicket);
                }
            }
        }

        // console.log("Name of highest wicket taker: "name_of_highest_wicket_taker);
        // console.log("maximum wicket taken: " max_wicket);
        console.log("Name of Highest Wicket Taker : ",nameOfHighestWicketTacker);
        console.log("Number of Wickets Taken      : ",mostWicket)
        
    }
}