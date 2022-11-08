var kafka = require('kafka-node');
var Producer = kafka.Producer;
var client = new kafka.KafkaClient()
var producer = new Producer(client)

producer.on('ready', function () {
    data = { topic: 'jh2', messages: 'hi', partition: 0 };
    producer.send([data], (err, res) => {
        console.log(res);
        producer.close();
    });
});



// producer.on('error', function (err) {})