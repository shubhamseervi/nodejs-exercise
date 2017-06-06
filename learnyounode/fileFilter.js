var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})


// var fs = require('fs');
// var path = require('path');
//
// var ls = fs.readdir(process.argv[2], function(err, data){
//   if(err) throw err;
//   //var filterBy = process.argv[3];
//
//   for (var i = 0; i < data.length; i++) {
//     if(process.argv[3] === path.extname(data[i])){
//
//       console.log(data[i]);
//     }
//   }
// })
