// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
const path = require("path");

//let fp = require("path");
// let unorganised = fp.join(__dirname, "unorganised");
//console.log(unorganised);
// if(!fs.existsSync(unorganised)){
//     fs.mkdirSync(unorganised);
// }

//let arr = ["audio", "video", "image", "software", "documents", "applications", "other"];
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     let newFolder = fp.join(unorganised,arr[i]);
//     if(!fs.existsSync(newFolder)){
//         fs.mkdirSync(newFolder);
//     }

//     for(let i = 0; i < 4; i++){
//         let file1 = fp.join(newFolder,"file1.txt");
//         fs.writeFileSync(file1, "content of file 1");
//         let file2 = fp.join(newFolder,"file2.txt");
//         fs.writeFileSync(file2,"content of file 2");
//         let file3 = fp.join(newFolder,"file3.txt");
//         fs.writeFileSync(file3,"content of file 3");
//         let file4 = fp.join(newFolder,"file4.txt");
//         fs.writeFileSync(file4,"content of file 4");
//     }
// }
             

let a = ["audio", "video", "image", "software", "documents", "applications", "other"];
let nameArr = ["abc","efg","hijk","lmn"];
let extArr = [".mp3",".mp4",".png", ".exe",".pdf", ".apk", ".rar"];

let organised = fp.join(__dirname, "Organise");

if(!fs.existsSync(organised)){
    fs.mkdirSync(organised);
}
for(let i = 0; i < a.length; i++){
    let folderKaPath = path.join(organised,a[i]);
    if(!fs.existsSync(folderKaPath)){
        fs.mkdirSync(folderKaPath);
    }

    for(let j = 0; j < nameArr.length; j++){
        let fileName = nameArr[j] + extArr[i];
        let fileKaPath = path.join(folderKaPath,fileName);
        fs.writeFileSync(fileKaPath, "");
    }
}

