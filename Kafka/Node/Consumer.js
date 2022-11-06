const kafka = require("kafka-node");
var Consumer = kafka.Consumer;
var client = new kafka.KafkaClient();
var consumer = new Consumer(
    client,
    [
        {topic: "jhkim", partition: 0},
    ],
    {
        autoCommit: false,
    }
);

var express = require('express');

var app = express();

app.get('/test', function(req, res) {
  console.log(req);

  res.send("hello world!")

});






consumer.on('message', function (message) {
  console.log(message);
});

app.listen(3000);