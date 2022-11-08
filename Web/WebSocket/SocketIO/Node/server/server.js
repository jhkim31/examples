const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
    res.send('this is http');
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("message", (msg) => {
        console.log(msg);
        socket.send(msg);
    });

    socket.on("my event", (msg) => {
        console.log(msg);
        socket.send(msg);
    });
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});
