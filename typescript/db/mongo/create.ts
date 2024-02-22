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

const room = new Room({
    id: "12345",
    sessions: ["95a7d7ec4a1236c123"],
    storages: ["36dbf3d8812353dasdfasdf"],
});


room.save()
.then(d => {
    console.log('save!')
    mongoose.disconnect();
})
.catch(e => {
    console.log('save error!')
})
