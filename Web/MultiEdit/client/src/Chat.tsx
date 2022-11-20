import { useState, useEffect } from "react";
function Chat(props: {ws: WebSocket}) {
    const [msg, setMsg] = useState('');
    const ws = props.ws;
    useEffect(() => {
        ws.onmessage = (evt) => {
            setMsg(evt.data);
        }
    }, [])

    return (
        <div>
            <input value={msg} onChange={evt => {
                setMsg(evt.target.value)
                ws.send(evt.target.value)
            }}></input>
        </div>
    );
}

export default Chat;