# Web SSH 예제입니다.

<img width="888" alt="스크린샷 2022-08-24 17 27 48" src="https://user-images.githubusercontent.com/89512794/186369614-baf0dcf5-406e-4265-ade2-c161c4143251.png">



## backend-server
python3
tornado
paramiko


## frontend-server
react
typescript

## ssh-server
raspberrypi


## Main Concept
백엔드 서버는 python paramiko 라이브러리를 통해 ssh 서버와 ssh 프로토콜로 통신

```python
self.client = paramiko.SSHClient()
self.client.load_system_host_keys()
self.client.connect("hostname", username="username", password="password")
self.ssh = self.client.invoke_shell(term="xterm-256color")

self.ssh.send({command})
self.ssh.recv(byten)
```

프론트 엔드 서버는 백엔드 서버와, 웹소캣으로 통신
```typescript
var ws = new WebSocket("ws://127.0.0.1:8888/ssh");
ws.send({command})
ws.onmessage = (msg) => {
    something
}
```
