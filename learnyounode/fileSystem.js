var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var nl = file.toString().split('\n');

console.log(nl.length - 1);
