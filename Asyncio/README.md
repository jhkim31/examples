# 비동기 처리
싱글스레드 비동기 처리에 대해 다룹니다.

## 1. Python
asyncio 라이브러리를 사용하여 Coroutine, Task 을 만들어 이벤트 루프에 추가합니다.

### 1.1 [blocking](/Asyncio/Python/blocking.py)
blocking 라이브러리를 사용하여 이벤트 루프가 블록킹 됩니다.

### 1.2 [non-blocking](/Asyncio/Python/non-blocking.py)
blocking 라이브러리를 사용하지만 별도의 executor(thread)에서 동작하기 때문에 이벤트 루프는 블록킹되지 않습니다.