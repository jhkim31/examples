import {useEffect} from "react";
import "./App.css";
import {Terminal} from "xterm";
import {FitAddon} from "xterm-addon-fit";
import "../node_modules/xterm/css/xterm.css";

function App() {
    useEffect(() => {
        var ws = new WebSocket("ws://127.0.0.1:8888/ssh");
        const terminal = new Terminal();
        const terminalDiv: HTMLElement = document.getElementById("terminal") as HTMLElement;

        terminal.open(terminalDiv);
        terminal.loadAddon(new FitAddon());
        terminal.onKey((e) => {
            ws.send(e.key);
        });

        ws.onmessage = function (evt) {
            terminal.write(evt.data);
        };
    }, []);

    return (
        <div className="App">
            <div id="terminal"></div>
        </div>
    );
}

export default App;
