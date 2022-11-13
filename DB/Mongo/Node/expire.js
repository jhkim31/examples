const mongoose = require("mongoose");


const dbUrl = "mongodb://jhkim:asdf1346@localhost:27017";

const conn =  mongoose.connect(dbUrl, {dbName: "test"})
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
    expireAt: { type: Date,  expires: 300 },
    expireTime: Date

});

const Room = mongoose.model("Room", RoomSchema);


const room = new Room({
    id: "expire!",
    sessions: ["95a7d7ec4a1236c123"],
    storages: ["36dbf3d8812353dasdfasdf"],
    expireAt: new Date(),
    expireTime: new Date(new Date().getTime() + 300000)
});

room.save()
.then(d => {
    console.log('save!')
    mongoose.disconnect();
})
.catch(e => {
    console.log('save error!')
    console.log(e)
})
