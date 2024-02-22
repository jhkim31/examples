const messages = require("../proto/todo_pb");
const services = require("../proto/todo_grpc_pb");

var grpc = require("@grpc/grpc-js");
const client = new services.UserServiceClient("localhost:5000", grpc.credentials.createInsecure());
const request = new messages.UserRequest();
request.setName("test!")
client.getUser(request, function (err, response) {
    console.log(response.getName());
});
