const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {

  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);

  fs.appendFile('Server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to log file.');
    }
  });

next();
});

app.use((req, res, next) => {
  // res.render('maintenance.hbs');
  next();
});

app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});
hbs.registerHelper('ScreamIt', (text) => {
  return text.toUpperCase()
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageHeader: 'this the header',
    pageTitle: 'Home Page',
    pageHeading: 'Home Pageddjdjdj',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

// app.get('/bad', (req, res) => {
//   res.send({
//     errorMessage: 'shit went down the drain!'
//   });
// })

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
