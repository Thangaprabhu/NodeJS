var fs = require("fs");

var data = fs.readFileSync('views/input.txt');

console.log(data.toString());
console.log("Program Ended");