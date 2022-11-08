import grpc
import hello_pb2
import hello_pb2_grpc
from concurrent.futures import ThreadPoolExecutor


class Hello(hello_pb2_grpc.GRPCExampleServicer):
    def HelloWorld(self, request, context):
        print(request.field1)
        print(request.field2)
        return hello_pb2.ReplyMsg(helloworld='hello world!')

def serve():
    server = grpc.server(ThreadPoolExecutor(5))
    hello_pb2_grpc.add_GRPCExampleServicer_to_server(Hello(), server)

    server.add_insecure_port('[::]:50000')
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()

