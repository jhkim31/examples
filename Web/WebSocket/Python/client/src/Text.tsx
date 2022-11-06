import { useState } from "react";

function Text(props: {ws: WebSocket}) {
    const [text, setText] = useState('')

    const ws = props.ws;

    ws.onmessage = function (evt) {
        const a = document.getElementById('text');
        if (a){
            setText(evt.data)
        }

        console.log('recv : ', evt.data)
    };

    return (
        <div className="App">
            <input id = "text" onChange={(e) => {

                setText(prev => {
                    ws.send(e.target.value)
                    return e.target.value
                })
            }} value={text}/>
        </div>
    );
}

export default Text;
