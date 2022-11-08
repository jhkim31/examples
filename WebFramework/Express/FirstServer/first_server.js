var express = require('express');

var app = express();

app.get('/test', function(req, res) {
  console.log(req);
  res.send("hello world!")

});

app.listen(3000);

