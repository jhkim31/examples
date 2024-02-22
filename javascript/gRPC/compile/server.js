//dependencies
const grpc = require("@grpc/grpc-js");

const messages = require("../proto/todo_pb");
const services = require("../proto/todo_grpc_pb");


const server = new grpc.Server();
function getUser(call, callback){
    const reply = new messages.UserResponse();
    reply.setName(call.request.getName());
    callback(null, reply);
}

server.addService(services.UserServiceService, {getUser: getUser});
server.bindAsync(    
    "127.0.0.1:5000",    
    grpc.ServerCredentials.createInsecure(),    
    (error, port) => {
        console.log(`listening on port ${port}`);
        server.start();
    }
);
