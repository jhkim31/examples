function App() {
    const ws = new WebSocket('ws://localhost:8888')
    ws.onmessage = (evt) => {
        console.log(evt.data);
    }
    
    function click() {
        ws.send('message!!')
    }
    return (
        <div className="App">            
            <button onClick={click}>메시지 전송</button>
        </div>
    );
}

export default App;
