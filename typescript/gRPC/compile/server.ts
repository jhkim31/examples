import messages from "../proto/todo_pb";
import services from "../proto/todo_grpc_pb";
import * as grpc from "@grpc/grpc-js";


//create gRPC server
const server = new grpc.Server();

function getUser(
  call: grpc.ServerUnaryCall<messages.UserRequest, messages.UserResponse>, 
  callback: grpc.sendUnaryData<messages.UserResponse>
  ){
    const reply = new messages.UserResponse();
    reply.setName(call.request.getName());
    callback(null, reply);
}

//start the Server
server.addService(services.UserServiceService, {getUser: getUser});
server.bindAsync(
    //port to serve on
    "127.0.0.1:5000",
    //authentication settings
    grpc.ServerCredentials.createInsecure(),
    //server start callback
    (error, port) => {
        console.log(`listening on port ${port}`);
        server.start();
    }
);
