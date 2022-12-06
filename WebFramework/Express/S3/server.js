const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
aws.config.loadFromPath("./config.json");
const cors = require("cors");

const s3 = new aws.S3();
const upload = multer(
    {
        storage: multerS3({
            s3: s3,
            bucket: "jcopy-storage",
            key: function (req, file, cb) {
                console.log(req.query);
                file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8");
                cb(null, req.query.room + "/" + file.originalname);
            },
        }),
    },
    "NONE"
);

var app = express();
app.use(cors());

app.put("/upload", (req, res) => {
    const upload_single = upload.single("file");
    console.log(req.headers["content-length"]);
    if (parseInt(req.headers["content-length"]) > 30000) {
        res.send("용량 초과");
    } else {
        upload_single(req, res, (err) => {
            console.log(err);
        });
        res.send("OK");
    }
});

// s3.deleteObject(
//     {
//         Bucket: "jcopy-storage", // 사용자 버켓 이름
//         Key: '1234/test.png',
//     },
//     (err, data) => {
//         if (err) {
//             throw err;
//         }
//         console.log("s3 deleteObject ", data);
//     }
// );

app.listen(3000);
