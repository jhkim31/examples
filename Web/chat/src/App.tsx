import { useState, useEffect } from "react";
import Chat from "./Chat";

function App() {
    const ws = new WebSocket('ws://localhost:8888')


    return (
        <div className="App">
            <Chat ws={ws}></Chat>
        </div>
    );
}

export default App;
