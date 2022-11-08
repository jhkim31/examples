var kafka = require('kafka-node');
var Producer = kafka.Producer;
var KeyedMessage = kafka.KeyedMessage
var client = new kafka.KafkaClient()
var producer = new Producer(client)

producer.on('ready', function () {
    data = { topic: 'jhkim', messages: 'hi', partition: 0 };
    producer.send([data], (err, res) => {
        console.log(res);
    });
});

producer.on('error', function (err) {})