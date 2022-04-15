let fs =  require("fs");
//console.log(fs);
let path = require("path");

// let filePath = path.join(__dirname, "file.txt");
// console.log(filePath);

// //create
// //it creates file if it does not exist else it overrides
// fs.writeFileSync(filePath, "overiding on existing file");

// //read
// console.log("before update: ");
// let content = fs.readFileSync(filePath, 'utf-8');
// console.log(content);

// //update
// fs.appendFileSync(filePath, " newly added line");
// console.log("after update: ");
// console.log(fs.readFileSync(filePath, 'utf-8'));

// //delete
// fs.unlinkSync(filePath);

//create  a directory and checking a file
if(!fs.existsSync("humariDirectory"))
fs.mkdirSync("humariDirectory");

let folderPath = "C:\\Users\\ASUS\\Desktop\\FJP6\\module1";
let contentOfFile = fs.readdirSync(folderPath);
console.log(contentOfFile);

//deleting a directory
fs.rmdirSync("humariDirectory");

//copy a file
let sourcePath = path.join(__dirname,"file.txt");
let destinationPath = path.join(__dirname, "module","file.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath, destinationPath);