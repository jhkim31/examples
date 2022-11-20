// const kafka = require("kafka-node");
// var client = new kafka.KafkaClient({kafkaHost: "172.31.36.85:9092"});
// var consumer = new kafka.Consumer(client, [{topic: "kafka-test",  partition: 0}], {
//     groupId: 'test',
//     fromBeginning: true,
//     autoCommit: true,
// });

// consumer.on("message", (message) => {
//     console.log(message);
// });


const {Kafka, Partitioners} = require("kafkajs");

const kafka = new Kafka({
    brokers: ["15.165.161.85:9092"],
});
const consumer = kafka.consumer({ groupId: 'keti-group123123'})


async function run() {
    await consumer.connect();
    console.log('connect!')
    await consumer.subscribe({ topics: ['kafka-test'], fromBeginning:true })    
    console.log('subscribe!')
    await consumer.run({        
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`topic : ${topic} | partition : ${partition}`)
            console.log(message)
        },
    })    
}

run();