//copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");


// let html = path.join(__dirname,"html");
// if(!fs.existsSync(html)){
//     fs.mkdirSync(html);
// }

//  let dirPath = "C:\\Users\\ASUS\\Desktop\\FJP6\\module1";

// const pathToFile = path.join(dirPath,"index.html")
// const pathToNewDestination = path.join(__dirname, "html", "index.html")

// fs.copyFile(pathToFile, pathToNewDestination, function(err) {
//   if (err) {
//     throw err
//   } else {
//     console.log("Successfully copied and moved the file!")
//   }
// })
//__dirname -> here is at question 
// ".." -> means to go back to your parent directory

let sourcepath = path.join(__dirname, "..", "..", "..", "module1", "index.html");

let destpath = path.join(__dirname, "..", "..", "index.html");

fs.copyFileSync(sourcepath,destpath);





// let sourcepath = path.join(dirPath,"index.html");
// // console.log(sourcepath);
// let destpath = path.join(__dirname,"questions", "html", "index.html");
// fs.copyFileSync(sourcepath,destpath);
