import * as grpc from "@grpc/grpc-js";
import {loadSync} from "@grpc/proto-loader";
import {ProtoGrpcType} from "../interface/todo";
import {UserServiceClient} from "../interface/todo/UserService";
import { UserRequest } from "../interface/todo/UserRequest";
import { UserResponse__Output } from "../interface/todo/UserResponse";


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
const client: UserServiceClient = new packageDef.todo.UserService("localhost:5000", grpc.credentials.createInsecure());
const userRequest: UserRequest = {
    name: "kim"
}
client.getUser(userRequest, (err : grpc.ServiceError | null, UserResponse : UserResponse__Output | undefined) => {
    console.log(UserResponse)
})
