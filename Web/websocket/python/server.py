import asyncio
import websockets

async def accept(websocket):
    print("새로운 연결!")

    while True:
        try:
            msg = await websocket.recv()
            print("receive : " + msg)
            await websocket.send(msg)
        except Exception as e:
            print('연결 이상')
            break

start_server = websockets.serve(accept, "localhost", 8888)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
