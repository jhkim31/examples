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