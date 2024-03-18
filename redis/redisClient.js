var redis = require('redis');

const client = redis.createClient({
    password: 'WvMruQlaKSdf0sZQX2p0ga2sEmXQE3Nt',
    socket: {
        host: 'redis-10457.c11.us-east-1-2.ec2.cloud.redislabs.com',
        port: 10457
    }
});

client.on('ready', () => {
   console.log('redis is connected');
});

client.on('error', (err) => {
   console.log('redis is disconnected: ', err);
});

(async () => {
  try {
    await client.connect();
  } catch (error) {
    // console.error('error while connecting redis', error);
  }
})();
module.exports = client;