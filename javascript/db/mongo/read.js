const mongoose = require("mongoose");


const dbUrl = "mongodb://test:test@localhost:27017/test";

mongoose.connect(dbUrl)
.then(e => {
    console.log('connect!')
})
.catch(e => {
    console.log('error!')
})

const RoomSchema = new mongoose.Schema({
    id: String,
    sessions: [String],
    storages: [String],
});
const Room = mongoose.model("Room", RoomSchema);

async function read() {    
    const res = await Room.findOne({id: "12345"});    
    console.log(res);

    mongoose.disconnect();
}
read();
