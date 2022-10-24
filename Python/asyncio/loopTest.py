# import asyncio
# import requests
# import threading
# import time
#
# def get_data():
#     print('thread : ', threading.current_thread())
#     reply = requests.get('http://httpbin.org/ip')
#     print(reply.json())
#
# async def co1():
#     print("co1 start")
#     await asyncio.sleep(1)
#     print('co1 end')
#
# async def co2():
#     print("co2 start")
#     loop = asyncio.get_running_loop()
#     await loop.run_in_executor(None, get_data)
#     print('co2 end')
#
# def call_back(i: asyncio.Future):
#     print('done : ', i.done())
#     print('result : ', i.result())
#
# async def main():
#     print('thread : ', threading.current_thread())
#
#     print("start")
#     t1 = asyncio.create_task(co1())
#     t2 = asyncio.create_task(co1())
#     t3 = asyncio.create_task(co2())
#
#     await t2
#     await t3
#
#     print("end")
#
# if __name__ == "__main__":
#     asyncio.run(main())
import asyncio
import requests

def get_data():
    reply = requests.get('http://httpbin.org/delay/3')
    print(reply.status_code)

async def co2():
    print("co2 start")
    # get_data()
    loop = asyncio.get_running_loop()
    await loop.run_in_executor(None, get_data)
    print('co2 end')

async def main():
    print("start")
    t1 = asyncio.create_task(co2())
    t2 = asyncio.create_task(co2())

    await t1
    await t2

    print("end")

if __name__ == "__main__":
    asyncio.run(main())