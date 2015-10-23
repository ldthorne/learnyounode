var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath,function(error, info){
	console.log(info.toString().split("\n").length-1);
});