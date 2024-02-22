const mongoose = require("mongoose");


const dbUrl = "mongodb://test:test@localhost:27017/test";

mongoose.connect(dbUrl)
.then(e => {
    console.log('connect!')
})
.catch(e => {
    console.log(`error! : ${e}`)
})

mongoose.disconnect();