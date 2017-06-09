const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
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

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
