//dependencies
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

//path to our proto file
const PROTO_FILE = "../proto/todo.proto";
//options needed for loading Proto file
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const pkgDefs = protoLoader.loadSync(PROTO_FILE, options);

//load Definition into gRPC
const services = grpc.loadPackageDefinition(pkgDefs).todo;

//create the Client
const client = new services.UserService("localhost:5000", grpc.credentials.createInsecure());
//make a call to GetUser
const p = new Promise((resolve, reject) =>
    client.GetUser({}, (error, user) => {
        if (error) {
            reject(error);
        } else {
            resolve(user);
        }
    })
);
(async () => {    
    await p.then(d => console.log(d)).catch(e => console.log(e));    
})()
