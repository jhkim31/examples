import * as grpc from "@grpc/grpc-js";
import {loadSync} from "@grpc/proto-loader";
import {ProtoGrpcType} from "../interface/todo";
import {UserRequest} from "../interface/todo/UserRequest";
import {UserResponse} from "../interface/todo/UserResponse";

const PROTO_FILE = "../proto/todo.proto";

const options = {
    keepCase: true,
    longs: Number,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protoDef = loadSync(PROTO_FILE, options);
const packageDef: ProtoGrpcType = grpc.loadPackageDefinition(protoDef) as any;
const server = new grpc.Server();

function GetUser(call: grpc.ServerUnaryCall<UserRequest, UserResponse>, callback: grpc.sendUnaryData<UserResponse>) {    
    const UserResponse: UserResponse = {
        name: call.request?.name ?? 'defaultName',
        age: 25,
    };
    try {
        callback(null, UserResponse);
    } catch (error: any) {
        callback(error, null);
    }
}

server.addService(packageDef.todo.UserService.service, {GetUser: GetUser});
server.bindAsync("127.0.0.1:5000", grpc.ServerCredentials.createInsecure(), (error, port) => {
    console.log(`listening on port ${port}`);
    server.start();
});
