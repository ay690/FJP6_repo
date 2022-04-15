"C:\Users\ASUS\Desktop\FJP6\module 2\Nodes\childProcess.js"

let path = require("path");
//console.log(path);

let extname = path.extname("C:\Users\ASUS\Desktop\FJP6\module 2\Nodes\childProcess.js");
console.log(extname);
let basename = path.basename(__filename);
console.log(basename);
console.log(__dirname);

let dirPath = __dirname;
console.log(dirPath);

let newFilePath = path.join(dirPath,"test.js");
console.log(newFilePath);