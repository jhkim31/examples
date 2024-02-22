import paramiko
from paramiko import Channel
import asyncio
import websockets
from functools import partial
import threading
import concurrent
import os

pool = concurrent.futures.ThreadPoolExecutor(max_workers=3)

def recvThread(ws, ssh):
    print(threading.currentThread())
    async def recv_msg(ws, ssh:Channel):
        while ssh.closed == False:
            msg = ssh.recv(1000)
            print(msg)
            await ws.send(msg.decode(encoding='latin-1'))
        asyncio.get_event_loop().stop()
        print('recv Thread stop')

    asyncio.set_event_loop(asyncio.new_event_loop())
    asyncio.run(recv_msg(ws, ssh))

async def accept(websocket):
    client = paramiko.SSHClient()
    client.load_system_host_keys()
    hostname = ""
    username = ""
    password = ""

    client.connect(hostname, username=username, password=password)
    ssh = client.invoke_shell(term="xterm-256color")
    asyncio.get_running_loop().run_in_executor(pool, partial(recvThread, ws=websocket, ssh=ssh))

    while ssh.closed == False:
        try:
            msg = await websocket.recv()
            ssh.send(msg)
        except Exception as e:
            print(e)
            break

    print("ssh close")
    client.close()

print("pid : ", os.getpid())
start_server = websockets.serve(accept, "localhost", 8888, close_timeout=1, ping_interval=20, ping_timeout= 60)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
