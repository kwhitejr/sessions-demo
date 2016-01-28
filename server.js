var express = require('express');
var bodyParser = require('body-parser');

var PORT = 3000;
var count = 0;

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  count += 1;
  res.send('You are visitor #' + count);
});

app.get('/name', function (req, res) {
  res.render('get-name');
});

app.post('/name', function (req, res) {
  res.render('greet', {name: req.body.name});
});

var server = app.listen(PORT, function () {
  console.log('I am listening on Port ' + PORT);
});