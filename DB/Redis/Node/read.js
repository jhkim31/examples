const {createClient} = require("redis");
const client = createClient('redis://localhost:6379');

client.connect();

(async () => {
    const value = await client.get('key');
    console.log(value);
    client.disconnect();
})();
