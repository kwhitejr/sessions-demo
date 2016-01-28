var express = require('express');
var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
var session = require('express-session');

var PORT = 3000;
var count = 0;
var COOKIE_MAX_AGE = 3600000;

var app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  cookie: {
    httpOnly: true,
    maxAge: COOKIE_MAX_AGE
  }
}));

app.get('/', function (req, res) {
  count += 1;
  res.send('You are visitor #' + count);
});

app.get('/name', function (req, res) {
  console.log(req.session);
  res.render('get-name');
});

app.post('/name', function (req, res) {
  req.session.name = req.body.name;
  // res.cookie('name', req.body.name, {
  //   maxAge: COOKIE_MAX_AGE,
  //   httpOnly: true
  // });
  res.redirect('/greet');
});

app.get('/greet', function (req, res) {
  if (! req.session.name) {
    return res.redirect('/name');
  }
  res.render('greet', {name: req.session.name});
});

var server = app.listen(PORT, function () {
  console.log('I am listening on Port ' + PORT);
});