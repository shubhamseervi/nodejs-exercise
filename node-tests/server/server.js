const express = require('express');

var app = express();


app.get('/', (req, res) => {
  res.status(404).send({
    error: 'page not found.',
    name: 'todo app'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'mike',
    age: 21
  }, {
    name:'d',
    age: 22
  }]);
});

app.listen(3000);

console.log('at 3000');

module.exports.app = app;
