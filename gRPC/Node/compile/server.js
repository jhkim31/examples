//dependencies
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const messages = require("../proto/todo_pb");
const services = require("../proto/todo_grpc_pb");


//create gRPC server
const server = new grpc.Server();

function getUser(call, callback){
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
