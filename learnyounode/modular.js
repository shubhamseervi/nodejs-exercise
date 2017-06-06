var fs = require('fs');
var ph= require('path');

module.exports = function (path, ext, callback) {
var extn = "." + ext;

    fs.readdir(path, function (err, files) {
        if (err)
            return callback(err);
        else {
            var listf = [];
            for (var i = 0; i < files.length; i++) {
                if (ph.extname(files[i]) === extn) {
                    listf.push(files[i]);
                }
 }
            callback(null, listf);
     }

    });
}
