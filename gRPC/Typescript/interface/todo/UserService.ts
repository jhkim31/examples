// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { UserRequest as _todo_UserRequest, UserRequest__Output as _todo_UserRequest__Output } from '../todo/UserRequest';
import type { UserResponse as _todo_UserResponse, UserResponse__Output as _todo_UserResponse__Output } from '../todo/UserResponse';

export interface UserServiceClient extends grpc.Client {
  GetUser(argument: _todo_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _todo_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _todo_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _todo_UserRequest, callback: grpc.requestCallback<_todo_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _todo_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _todo_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _todo_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _todo_UserRequest, callback: grpc.requestCallback<_todo_UserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUser: grpc.handleUnaryCall<_todo_UserRequest__Output, _todo_UserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  GetUser: MethodDefinition<_todo_UserRequest, _todo_UserResponse, _todo_UserRequest__Output, _todo_UserResponse__Output>
}
