let cp = require('child_process');
//console.log(cp);
//cp.execFileSync("calc");

let content = cp.execSync("node test.js");
// console.log("output from test.js file: " + content);
console.log(""+content);
