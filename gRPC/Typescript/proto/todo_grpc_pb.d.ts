// package: todo
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as todo_pb from "./todo_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IGetUser;
}

interface IUserServiceService_IGetUser extends grpc.MethodDefinition<todo_pb.UserRequest, todo_pb.UserResponse> {
    path: "/todo.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.UserRequest>;
    responseSerialize: grpc.serialize<todo_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.UserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getUser: grpc.handleUnaryCall<todo_pb.UserRequest, todo_pb.UserResponse>;
}

export interface IUserServiceClient {
    getUser(request: todo_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: todo_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: todo_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUser(request: todo_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: todo_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: todo_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
