const express = require("express");
const app = express();
const WebSocket = require("ws");
const {v4: uuidv4} = require("uuid");


app.use("/", (req, res) => {
    res.send('this is http')
});

const HTTPServer = app.listen(8888);


const webSocketServer = new WebSocket.Server({
    server: HTTPServer,
});

users = {}

webSocketServer.on("connection", (ws, request) => {
    ws.id = uuidv4();
    users[ws.id] = ws;
    console.log(`${ws.id} join`);

    ws.on("message", (msg) => {
        console.log(msg.toString())
        for (const id of Object.keys(users)){
            if (id  != ws.id){
                users[id].send(`${msg.toString()}`)
            }
        }
    });
});
