import messages from "../proto/todo_pb";
import services from "../proto/todo_grpc_pb";
import grpc, {credentials} from "@grpc/grpc-js";

const client = new services.UserServiceClient("localhost:5000", credentials.createInsecure());
const request = new messages.UserRequest();
request.setName("test!")
client.getUser(request, function (err, response) {
    console.log(response.getName());
});
