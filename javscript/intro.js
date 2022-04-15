// console.log("swagat hai aap sabka");

// //variables in js
// let num = 10;
// console.log(num);

// let char = 'a';
// console.log(char);

// let str = 'i am good!!!'
// console.log(str)

// let bool = true;
// console.log(bool)

// //loops
// for(let i = 1; i < 5; i++){
//     console.log(i);
// }

// let count = 10;
// while(count > 0){
//     console.log(count)
//     count--
// }

// is prime

let count = 0;
let num = 24;

for(let div = 2; div * div <= num; div++){
    if(num % div == 0){
        count++;
        break;
    }
}

if(count == 0){
    console.log("is prime")
}else{
    console.log("not prime")
}