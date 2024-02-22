import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _todo_UserServiceClient, UserServiceDefinition as _todo_UserServiceDefinition } from './todo/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  todo: {
    UserRequest: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _todo_UserServiceClient> & { service: _todo_UserServiceDefinition }
  }
}

