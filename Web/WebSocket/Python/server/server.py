import asyncio
import websockets
import time
wss = {}
msg = ""
async def accept(websocket, path):
    global wss, msg
    await websocket.send(msg)
    wss[websocket.id] = websocket
    while True:
        msg = await websocket.recv()
        print("receive : " + msg)

        for id in wss.keys():
            if id != websocket.id:
                await wss[id].send(msg)

start_server = websockets.serve(accept, "localhost", 8888)

res = asyncio.get_event_loop().run_until_complete(start_server)
print(res)
asyncio.get_event_loop().run_forever()
