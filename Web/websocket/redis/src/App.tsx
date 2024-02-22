import { useState } from "react";
function App() {

    const ws = new WebSocket(`ws://localhost:8080`);
    ws.onmessage = (evt) => {
        console.log(evt.data);
    };

    function click() {
        ws.send("message!!");
    }

    function click2() {
        fetch(`http://localhost:8080/plus`);
    }

    return (
        <div className="App">
            <button onClick={click2}>세션 메시지 전송</button>
            <button onClick={click}>웹소캣 메시지 전송</button>
        </div>
    );
}

export default App;
