const express = require("express");
const multer = require("multer");
const cors = require("cors");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads/");
    },
    filename: (req, file, callback) => {
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
        callback(null, file.originalname);
    },
});
const upload = multer({storage: storage});

var app = express();
app.use(cors());

app.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.headers);
    console.log(req.file);
});

app.listen(3000);
