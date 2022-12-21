// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo_pb = require('./todo_pb.js');

function serialize_todo_UserRequest(arg) {
  if (!(arg instanceof todo_pb.UserRequest)) {
    throw new Error('Expected argument of type todo.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UserRequest(buffer_arg) {
  return todo_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_UserResponse(arg) {
  if (!(arg instanceof todo_pb.UserResponse)) {
    throw new Error('Expected argument of type todo.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_UserResponse(buffer_arg) {
  return todo_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUser: {
    path: '/todo.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.UserRequest,
    responseType: todo_pb.UserResponse,
    requestSerialize: serialize_todo_UserRequest,
    requestDeserialize: deserialize_todo_UserRequest,
    responseSerialize: serialize_todo_UserResponse,
    responseDeserialize: deserialize_todo_UserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
