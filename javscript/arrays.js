//Empty array
let arr = [];
console.log(arr);

//arrays with elements

let ele = [1,2,4,5,"hello this is string", false, 'd', 4.6];
console.log(ele);

console.log("array at 4th index: " + ele[4]);
ele[3] = "Nothing";
console.log(ele);

console.log("**************************************");

//arrays method

//1.push
console.log("arrays before push: ",ele);
ele.push("new item");
console.log("arrays after push: ", ele);

//2.pop
console.log("arrays before pop: ",ele);
ele.pop();
console.log("arrays after pop: ", ele);

//3.shift
console.log("arrays before shift: ",ele);
ele.shift();
console.log("arrays after shift: ", ele);

//4.unshift
console.log("arrays before unshift: ",ele);
ele.unshift();
console.log("arrays after unshift: ", ele);

//5.arrays length
let len = ele.length;
console.log(len);



