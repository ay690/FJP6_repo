//console.log("hello world");
// let inputArr = process.argv; //argv -> array
// console.log(inputArr);
// //['path to node', 'path to file', 'input passed in terminal']
// let input = inputArr[3];
// console.log(input);

let path = require("path");
let fs = require("fs");

let folderKaPath = process.argv[2];
//console.log(folderKaPath);

let folderExists = fs.existsSync(folderKaPath);

//making an object of extensions
let extensions ={
    Audio:[".mp3"],
    Video:[".mp4", ".mkv"],
    Document:[".doc", ".xlsx", ".pdf", ".txt"],
    Image:[".png", ".jpg", ".jpeg", ".gif"],
    Software:[".exe"]
};


if(folderExists){
    //we will code
    //console.log("Path is valid");
    let files = fs.readdirSync(folderKaPath);
    for(let i = 0; i < files.length; i++){
        let ext = path.extname(files[i]); //in downloads you will get the extension names
        let nameofFolder = givingFolderName(ext);
        //console.log("ext-->",ext, "Folder-->",nameofFolder);
        let pathOfFolder = path.join(folderKaPath, nameofFolder);//folder path and folder eg audio video etc
        //kis folder mein daale
        let exists = fs.existsSync(pathOfFolder);

        if(exists){
            //if folder already exists move the file
            moveFile(folderKaPath, pathOfFolder, files[i]);
        }else{
            //if pathOfFolder does not exist create and move the file
            fs.mkdirSync(pathOfFolder);
            moveFile(folderKaPath, pathOfFolder, files[i]);
        }
    }

}else{
    console.log("path is invalid!!!");
}

//defining ext function and returning its key values
function givingFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let i = 0; i < extArr.length; i++){
            if(extArr[i] == ext){
                return key;
            }
        }
    }
    return "Others";
}

// moving a file
function moveFile(folderKaPath, pathOfFolder, fileName){
    let sourcepath = path.join(folderKaPath, fileName);
    let destpath = path.join(pathOfFolder, fileName);
    
    fs.copyFileSync(sourcepath,destpath);
    fs.unlinkSync(sourcepath);
}

