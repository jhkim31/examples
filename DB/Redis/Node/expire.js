const {createClient} = require("redis");
const client = createClient('redis://localhost:6379');

client.connect();

(async () => {
    await client.set('expireKey', 'expireValue', {EX: 60}); // 1분뒤에 파기되는 값
    await client.expire('key', 10);     // key라는 키값을 10초뒤 파기
    client.disconnect();
})();
