import paramiko
from paramiko import Channel
import asyncio
import websockets
from functools import partial
import threading

def recvThread(ws, ssh):
    print(threading.currentThread())
    asyncio.set_event_loop(asyncio.new_event_loop())
    async def recv_msg(ws, ssh:Channel):
        while ssh.closed == False:
            msg = ssh.recv(1000)
            await ws.send(msg.decode())
        asyncio.get_event_loop().stop()
    asyncio.run(recv_msg(ws, ssh))


async def accept(websocket):
    client = paramiko.SSHClient()
    client.load_system_host_keys()
    client.connect("hostname", username="username", password="password")
    ssh = client.invoke_shell(term="xterm-256color")
    asyncio.get_running_loop().run_in_executor(None, partial(recvThread, ws=websocket, ssh=ssh))

    while True:
        try:
            msg = await websocket.recv()
            ssh.send(msg)
        except Exception as e:
            break

start_server = websockets.serve(accept, "localhost", 8888)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()