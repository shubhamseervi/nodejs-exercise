var fs = require('fs');

var file = fs.readFile(process.argv[2], function(err, data) {
  if(err) throw err;

  var nl = data.toString().split('\n');
  console.log(nl.length - 1);
});
