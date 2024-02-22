import { useState, useEffect } from "react";
function Chat(props: {ws: WebSocket}) {
    const [chatList, setChatList] = useState<string[]>([])
    const [msg, setMsg] = useState('');
    const ws = props.ws;
    useEffect(() => {
        ws.onmessage = (evt) => {
            console.log(evt.data)
            setChatList(oldList => [...oldList, evt.data]);
        }
    }, [])


    function click() {
        ws.send(msg)
        setChatList(oldList => [...oldList, `내 메시지 : ${msg}`])
    }
    return (
        <div>
            <input value={msg} onChange={evt => setMsg(evt.target.value)}></input>
            <button onClick={click}>메시지 전송</button>
            <div id = "chatList">
                {
                    chatList.map(log => {
                        return <div key={Math.random()}>{log}</div>
                    })
                }
            </div>
        </div>
    );
}

export default Chat;