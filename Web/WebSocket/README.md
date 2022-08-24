# WebSocket 예제입니다.

## backend-server
python3
tornado

## frontend-server
react
typescript


## Main Concept

프론트엔드 웹소캣 코드
```typescript
var ws = new WebSocket("ws://127.0.0.1:8888/ws");

ws.onopen = (e) => {
    console.log("open!")
    console.log(e)
    ws.send("hello!")
}

ws.onmessage = function (evt) {
    console.log(evt.data)
};
```

백엔드 웹소캣 코드
```python
def on_message(self, message):
  print(message)
  self.write_message(message)
```

웹소캣 연결 수립시 서버로 데이터를 보내고, 서버에서 해당 데이터를 에코해주는 웹소캣 예제
