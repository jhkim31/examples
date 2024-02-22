# gRPC
gRPC 통신과, 각 언어별 사용 방법에 대해 다룹니다.



## 2. [Node](/gRPC/Node/)
노드에서 gRPC는 proto파일을 컴파일할수도 있고, loader를 통해 실시간으로 컴파일할 수 있습니다.

```bash
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./proto2 \
--grpc_out=grpc_js:./proto2 \
--plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
-I ./proto \
proto/todo.proto

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./proto \
--grpc_out=grpc_js:./proto proto/todo.proto
```

### [서버](/gRPC/Node/server.js)실행
```node
node server.js
```
### [클라](/gRPC/Node/client.js) 실행
```node
node client.js
```

## 3. [Python](/gRPC/Python/)
파이썬에서는 proto파일을 컴파일하여 사용합니다.

### 컴파일
패키지 설치
```bash
pip3 install grpcio-tools
```
[proto](/gRPC/Python/hello.proto)파일 컴파일
```bash
python3 -m grpc_tools.protoc -I . --python_out=. --grpc_python_out=. ./hello.proto
```
### [서버](/gRPC/Python/server.py) 실행
```bash
server.py
```

### [클라](/gRPC/Python/client.py) 실행
```bash
client.py
```

## 4. [Typescript]
```bash

```