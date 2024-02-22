import mongoose from "mongoose";

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

async function update() {
    const res = await Room.updateOne({id: "12345"}, {sessions : ['a!']});
    console.log(res);

    const updatedRoom = await Room.findOne({id: "12345"});    
    console.log(updatedRoom);
    mongoose.disconnect();
}
update();
