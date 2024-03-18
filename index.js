const express = require('express');
const mysql = require('mysql');
const cron = require('node-cron'); // Import node-cron
const redis = require('redis');
const client = require('./redis/redisClient'); 
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(express.json());
const connection = require('./db/conn');
const router = require('./router/router');
const { updateShowCache } = require('./cron/cron');

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as ID ' + connection.threadId);
});

app.use(cors({ origin: '*' }));
app.use("", router);

cron.schedule('*/2 * * * *', updateShowCache);


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
