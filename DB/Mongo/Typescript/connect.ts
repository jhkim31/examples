import mongoose from "mongoose";


const dbUrl = "mongodb://test:test@localhost:27017/test";

mongoose.connect(dbUrl)
.then((_d) => {
    console.log(`connect!`)        
})
.catch((_e) => {
    console.log(`error! : ${_e}`)
})

mongoose.disconnect();