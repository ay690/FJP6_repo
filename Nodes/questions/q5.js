//move a file
let fs = require("fs");
let path = require("path");
// let dirPath = "C:\\Users\\ASUS\\Desktop\\FJP6\\module1\\css_selector_questions";
// let sourcepath = path.join(dirPath,"q1.html");

// let movedpath = path.join(__dirname, "q1.html");

// fs.rename(sourcepath, movedpath, function(err){
//     if(err){
//         throw err;
//     }else{
//         console.log("File moved sucessfully!!!");
//     }
// })


//make file1.txt file manually

let srcPath = path.join(__dirname, "file1.txt");

let destpath = path.join(__dirname, "newFolder", "file1.txt");
fs.copyFileSync(srcPath,destpath);

fs.unlinkSync(srcPath);


