//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require("path");

if(!fs.existsSync("newFolder")){
    fs.mkdirSync("newFolder");
} 

let filepath = path.join(__dirname, "newFolder", "newFile.txt");
fs.writeFileSync(filepath, "new file has been added");










