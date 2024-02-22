// var kafka = require("kafka-node");

// var client = new kafka.KafkaClient({kafkaHost: "localhost:9092", requestTimeout: 5000});
// var producer = new kafka.Producer(client);

// producer.on("ready", function () {
//     console.log("ready!");
//     data = {topic: "kafka-test", messages: "hi", partition: parseInt(Math.random() * 3)};
//     console.log(data);
//     producer.send([data], (err, res) => {
//         console.log("err : ", err);
//         console.log("res : ", res);
//         producer.close();
//     });
// });


const {Kafka, Partitioners} = require("kafkajs");

const kafka = new Kafka({
    brokers: ["localhost:9092"],
});

const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

async function run() {
    await producer.connect();
    await producer.send({
        topic: "ChangeText",
        messages: [{value: "Hello KafkaJS user!"}],        
    });

    producer.disconnect();
}

run();