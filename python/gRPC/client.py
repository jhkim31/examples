import grpc

import proto.todo_pb2_grpc as services
import proto.todo_pb2 as  messages
import sys

print(services.__file__)
print(messages.__file__)

def run():
    with grpc.insecure_channel('127.0.0.1:5000') as channel:
        stub = services.UserServiceStub(channel)
        request = messages.UserRequest(name='kim')
        reply = stub.GetUser(request)
        print(reply)

if __name__ == "__main__":
	run()