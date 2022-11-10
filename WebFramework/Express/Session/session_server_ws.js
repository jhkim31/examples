var express = require("express");
var session = require("express-session");
var RedisStore = require("connect-redis")(session);
const WebSocket = require("ws");
const {v4: uuidv4} = require("uuid");

var app = express();

const {createClient} = require("redis");
let redisClient = createClient({legacyMode: true});
redisClient.connect().catch(console.error);

// session 설정
app.use(
    session({
        store: new RedisStore({client: redisClient}),
        secret: "Rs89I67YEA55cLMgi0t6oyr8568e6KtD",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.static('/Users/jhkim/_git/Template/WebFramework/Express/Session/build'))

app.get('/', (req, res) => {
  var session = req.session;
  if (session && session.count) {
      session.count++;
  } else {
      session.count = 1;
  }

  console.log(session.id)
  res.sendFile('/Users/jhkim/_git/Template/WebFramework/Express/Session/index.html')
})
// routing 설정

app.get("/session-destroy", function (req, res) {
    req.session.destroy();
    res.send("Session Destroyed!");
});

var HTTPserver = app.listen(8888, function () {
    console.log("Express server listening on port " + 8888);
});

// 2. WebSocket 서버 생성/구동
const webSocketServer = new WebSocket.Server({
    server: HTTPserver,
});

webSocketServer.on("connection", (ws, request, b) => {
    ws.id = uuidv4();
    console.log(ws.id);        
    console.log(request.session);

    ws.on("message", (msg) => {
        
        console.log(`${ws.id} : ${msg}`);
        ws.send(`${ws.id} : ${msg.toString()}`);
    });
});
