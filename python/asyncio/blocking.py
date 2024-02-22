import asyncio
import requests
import threading

async def co1():
    print("co1 start")
    get_data()
    print('co1 end')

def get_data():
    print(f'thread : {threading.current_thread()}')
    reply = requests.get('http://httpbin.org/delay/3')
    print(reply.status_code)

async def co2():
    print("co2")

async def main():
    print("start")
    t1 = asyncio.create_task(co1())
    t2 = asyncio.create_task(co2())

    await t1
    await t2

    print("end")

if __name__ == "__main__":
    asyncio.run(main())