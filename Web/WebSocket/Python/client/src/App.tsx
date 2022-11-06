import {useEffect, useState} from "react";
import "./App.css";
import Text from "./Text";

function App() {

    console.log('websocket!');
    var ws: WebSocket = new WebSocket("ws://127.0.0.1:8888/ws");;

    return (
        <div className="App">
            <Text ws={ws}></Text>
        </div>
    );
}

export default App;
