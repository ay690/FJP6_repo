//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Vidoe File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path = require("path");

let unorganisedFolder = path.join(__dirname,"..","..","unorganised");

let content = fs.readdirSync(unorganisedFolder); 
console.log(content);

// let Filename = [];

for(let i = 0; i < content.length; i++){
    let name = content[i];
    let extName = path.extname(name);

    if(extName == ".jpg"){
    console.log("Image file");
    }
    if(extName == ".mp3"){
        console.log("Audio file");
    }
     if(extName == ".mp4"){
        console.log("Video file");
    }
     if(extName == ".xlsx"){
        console.log("Excel file");
    } 
    if(extName == ".doc"){
        console.log("Word file");
    }
    if(extName == ".pdf"){
        console.log("PDf file");
    }
    
}