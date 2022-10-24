var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var app = express();

const { createClient } = require("redis")
let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

// session 설정
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret : 'Rs89I67YEA55cLMgi0t6oyr8568e6KtD',
  resave: false,
  saveUninitialized: true
}));

// routing 설정
app.get('/radis-store-counter', function(req, res) {
  var session = req.session;
  if (session && session.count) {
    session.count++;
  } else {
    session.count = 1;
  }
  res.send('count is ' + session.count);
});

app.get('/session-destroy', function (req, res) {
  req.session.destroy();
  res.send('Session Destroyed!');
});

app.listen(3000, function() {
  console.log('Express server listening on port ' + 3000);
});

