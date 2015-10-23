var fs = require('fs');
var filePath = process.argv[2];
var content = fs.readFileSync(filePath).toString();
var lineNum = content.split('\n').length-1
console.log(lineNum)
