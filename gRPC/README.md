# gRPC
gRPC 통신과, 각 언어별 사용 방법에 대해 다룹니다.

## 1. Proto 파일
proto파일은 구글의 프로토콜 버퍼를 사용하기 위한 인터페이스를 정의한 언어다.
자세한 가이드 : https://developers.google.com/protocol-buffers/docs/proto3
```proto
syntax = "proto3";

service GRPCExample {
    rpc HelloWorld (RequestMsg) returns (ReplyMsg)
}

message RequestMsg {
    optional string field1 = 1;
    int32 field2 = 2;
    double field3 = 3;
    repeated string field4 = 4;
}

message ReplyMsg {
    optional string helloworld = 1;
}
```


* syntax : "proto3" (default는 proto2)
* message : 데이터 객체 (RequestMsg, ReplyMsg)
    * 각 필드는 자료형과, 필드이름 그리고 id로 이루어짐
    * id 값이 1 ~ 15는 1바이트, 2 ~ 2047 은 2바이트를 사용함
    * 각 필드는 자료형으로 스칼라값 (int, double, string,... 등)을 사용할 수 있고, enum, message를 사용할수도 있다.
    * repeated : 배열과 같은 형태

* service : 메시지를 전달하기 위한 인터페이스, 메소드들을 정의함 (GRPCExample)
* 메소드 : message가 오가는 인터페이스를 정의 (HelloWorld)
    * 요청으로 RequestMsg형태가 오면 ReplyMsg를 리턴해준다.

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