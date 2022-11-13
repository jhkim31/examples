var express = require("express");
var session = require("express-session");
var RedisStore = require("connect-redis")(session);

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

// routing 설정
app.get("/create-room", function (req, res) {
    console.log(req.ip);
    const room_id = parseInt(Math.random() * 100);

    req.session.room = room_id;
    res.redirect(`/room/${room_id}`);
});


app.get("/room/*", (req, res) => {
    const n = req.path.split("/").pop();
    if (n == req.session.room) {
        res.send(`room : ${req.session.room}`);
    } else {
        res.send(`존재하지 않는 방입니다.`);
    }
});

app.get("/session-destroy", function (req, res) {
    req.session.destroy();
    res.send("Session Destroyed!");
});

app.listen(3000, function () {
    console.log("Express server listening on port " + 3000);
});
