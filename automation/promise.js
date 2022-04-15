const fs = require("fs");

console.log("Before Promise");

let f1KaPromise = fs.promises.readFile("f1.txt");
let f2KaPromise = fs.promises.readFile("f2.txt");

console.log(f1KaPromise);
console.log(f2KaPromise);

f1KaPromise.then(function(data){
    console.log(data + "");
})

f1KaPromise.catch(function(error){
    console.log(error);
})

f2KaPromise.then(function(data){
    console.log(data + "");
})

f2KaPromise.catch(function(error){
    console.log(error);
})



console.log("After promise");

