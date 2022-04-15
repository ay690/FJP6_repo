//without parameters
function sayHello(){
    console.log("hello from function")
}
sayHello();

//by passing parameters

function addition(n1, n2){
    let add = n1 + n2;
    console.log("addition of 2 nos: " + add);
}
addition(4,5)

//function with return type
function mult(n1, n2){
    return n1 * n2;
}
let res = mult(3,6);
console.log(res);

//storing the function in variable
let a = function subtraction(n1,n2){
    return n1 - n2;
}
console.log(a(10,5));

//IIFE immediately invoked function
// without parameters

(function(){
    console.log("hello from IIFE");
})();

//IIFE with parameters
(function(n1,n2){
    console.log(n1 / n2);
})(10, 5);

