const express = require("express");
const app = express();
const WebSocket = require("ws");
const {v4: uuidv4} = require("uuid");

// 2. "/" 경로 라우팅 처리
app.use("/", (req, res) => {
    res.send('this is http')
});

// 3. 30001 port에서 서버 구동
const HTTPServer = app.listen(8888);



// 2. WebSocket 서버 생성/구동
const webSocketServer = new WebSocket.Server({
    server: HTTPServer,
});

webSocketServer.on("connection", (ws, request) => {
    ws.id = uuidv4();
    console.log(ws.id);

    ws.on("message", (msg) => {
        console.log(`${ws.id} : ${msg}`);
        ws.send(msg.toString());
    });
});
