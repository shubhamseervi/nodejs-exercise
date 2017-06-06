var http  = require('http');
var path  = require('path');
var url   = require('url');
var fs    = require('fs');

//handling singal page request

http.createServer(function (request, response){
  var lookup = path.basename(decodeURI(request.url));


    var pages = [
      {route: '', output: 'hello theredddd'},
      {route: 'home', output: 'home page'},
      {route: 'about', output: 'about me ... '}
    ];

  pages.forEach(function(page){
    if(page.route === lookup){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(typeof page.output === 'function'
      ? page.output() : page.output);
    }
  });

  if(!response.finished){
    response.writeHead(404);
    response.end('page not found!');
  }
}).listen(8888);



// multi level request


   var pages = [
     {id: '1', route: '', output: 'Woohoo!'},
     {id: '2', route: 'about', output: 'A simple routing with Node example'},
     {id: '3', route: 'another page', output: function () {
       return 'Here\'s ' + this.route; }
     },
    ];


   http.createServer(function (request, response) {
     var id = url.parse(decodeURI(request.url), true) .query.id;
     if (id) {
       pages.forEach(function (page) {
         if (page.id === id) {
           response.writeHead(200, {'Content-Type': 'text/html'});
           response.end(typeof page.output === 'function'
           ? page.output() : page.output);
         }});

     }

     if (!response.finished) {
       response.writeHead(404);
       response.end('Page Not Found');
     }
}).listen(8880);


// handling static files using fs


var mimeTypes = {
  '.js'   : 'text/javascipt',
  '.html' : 'text/html',
  '.css'  : 'text/css'
};


http.createServer(function (request, response){
  var lookup = path.basename(decodeURI(request.url)) || 'index.html';
  var f = 'content/' + lookup;
  fs.stat(f, function (error, data){

    console.log(data);
    if(error){

      fs.readFile(f, function(err, data){
        // some error handling.
        if(err) {
          response.writeHead(500);
          response.end('Server Error!');
          return;
        }

        var headers = {'Content-Type': mimeTypes[path.extname(lookup)]};

        response.writeHead(200, headers);
        response.end(data);
      });
      return;
    }
    response.writeHead(404);
    response.end();

    console.log(exists ? lookup + " you found it!" : lookup + " doesn't exist you loner!");
  });
}).listen(8081);





http.createServer(function (request, response) {
    console.log('request starting...');

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){

                var contentType = 'text/html';
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8115);
console.log('Server running at http://localhost:8125/');
