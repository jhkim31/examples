import {useEffect} from "react";
import "./App.css";

function App() {
    useEffect(() => {
        var ws = new WebSocket("ws://127.0.0.1:8888/ws");

        ws.onopen = (e) => {
            console.log("open!")
            console.log(e)
            ws.send("hello!")
        }

        ws.onmessage = function (evt) {
            console.log(evt.data)
        };
    }, []);

    return (
        <div className="App">
            <div id="terminal"></div>
        </div>
    );
}

export default App;
