const mongoose = require("mongoose");


const dbUrl = "mongodb://jhkim:asdf1346@localhost:27017";

const db = mongoose.connect(dbUrl, {dbName: "test"})
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
    const res = await Room.find({id: "12345"});
    console.log('find ======================')
    console.log(res);

    const res2 = await Room.findOne({id: "12345"});
    console.log('findOne ======================')
    console.log(res2);

    mongoose.disconnect();
}
read();
