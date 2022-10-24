var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var app = express();

app.get('/test', function(req, res) {
  console.log(req);

  res.send("hello world!")

});

app.listen(3000);

