const express = require("express");
var session = require("express-session");
var RedisStore = require("connect-redis");
const WebSocket = require("ws");
const {v4: uuidv4} = require("uuid");
var cors = require('cors')

var app = express();



const {createClient} = require("redis");
let redisClient = createClient({legacyMode: true});
redisClient.connect().catch(console.error);

// session 설정

app.use(cors());
app.use(
    session({
        store: new RedisStore({client: redisClient}),
        secret: "Rs89I67YEA55cLMgi0t6oyr8568e6KtD",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(express.static("./client/build"));
// routing 설정

app.get("/", function (req, res) {
    if (req.session.count){
        req.session.count++;
    } else {
        req.session.id = uuidv4();
        req.session.count = 1;
        console.log(req.session.count);
    }

    console.log(req.session.id);
    console.log(req.session.count);
    res.sendFile("client/build/index.html", {root: "."});
});

app.get("/plus", function (req, res) {
    if (req.session.count){
        req.session.count++;
    } else {
        req.session.id = uuidv4();
        req.session.count = 1;
        console.log(req.session.count);
    }

    console.log(req.session.id);
    console.log(req.session.count);
    res.send("count is " + req.session.count);
});

app.get("/session-destroy", function (req, res) {
    req.session.destroy();
    res.send("Session Destroyed!");
});

const HTTPServer = app.listen(8888, function () {
    console.log("Express server listening on port " + 8888);
});

// 2. WebSocket 서버 생성/구동
const webSocketServer = new WebSocket.Server({
    server: HTTPServer,
});

webSocketServer.on("connection", (ws, request) => {
    ws.id = uuidv4();

    ws.on("message", (msg) => {
        console.log(`${ws.id} : ${msg}`);
        ws.send(`${ws.id} : ${msg.toString()}`);
    });
});
