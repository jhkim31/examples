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

async function Delete() {
    const res = await Room.deleteOne({id: "12345"});
    console.log(res);

    const res2 = await Room.find({id: "12345"});    
    console.log(res2);

    mongoose.disconnect();
}
Delete();
