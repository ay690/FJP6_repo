// read content of unorganised folder and make  an array which has extension name of each file
let fs = require("fs");
let path = require("path");

// let dirPath = "C:\\Users\\ASUS\\Desktop\\FJP6\\module2\\Nodes\\questions\\unorganised";
// let arr = [];
// fs.readdirSync(dirPath,"utf-8").forEach(index =>{
//     //console.log(path.extname(index));
//     arr.push(path.extname(index));
// })
// arr.forEach(index => {
//     console.log(index);
// })

let folderKaPath = path.join(__dirname, "..", "..", "unorganised");

let content = fs.readdirSync(folderKaPath);
console.log(content);

let extArr = [];

for(let i = 0; i < content.length; i++){
    let name = content[i];
    let extname = path.extname(name);
    extArr.push(extname);
}
console.log(extArr);


