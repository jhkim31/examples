import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {io} from "socket.io-client";

function App() {
    const sock = io("http://localhost:5000", {transports: ["websocket"]});
    sock.on('my event', (data) => {
        console.log('event : ', data);
    })
    sock.on("message", (data) => {
        console.log('message : ', data);
    });
    
    

    function event() {
        sock.emit("my event", "event!!");
    }
    function click() {
        sock.send("message");
    }
    return (
        <div className="App">
            <button onClick={event}>event!!</button>
            <button onClick={click}>message!!</button>
        </div>
    );
}

export default App;
