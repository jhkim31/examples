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

consumer.on('message', function (message) {
  console.log(message);
});
