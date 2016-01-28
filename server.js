var express = require('express');

var PORT = 3000;
var count = 0;

var app = express();

app.get('/', function (req, res) {
  count += 1;
  res.send('You are visitor #' + count);
});

var server = app.listen(PORT, function () {
  console.log('I am listening on Port ' + PORT);
});