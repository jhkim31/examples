import grpc
import hello_pb2
import hello_pb2_grpc


def run():
    with grpc.insecure_channel('localhost:50000') as channel:
        stub = hello_pb2_grpc.GRPCExampleStub(channel)

        reply = stub.HelloWorld(hello_pb2.RequestMsg(field1='12', field2=3, field3=1.23, field4=['asdf', 'asd2f']))
        print(reply)

if __name__ == "__main__":
	run()