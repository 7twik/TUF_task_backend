// controller.js
const connection = require('../db/conn');
const client = require('../redis/redisClient');
const show = async (req, res) => {
    console.log("show");
    // Check if data is available in Redis cache
    let resp=await client.get('code_entries');
    
    if (resp) {
        console.log('Data available in Redis cache');
        res.json(JSON.parse(resp));
        return;
    }
    else
    {
        console.log('Data not available in Redis cache');
        res.json({message: 'Data not available in Redis cache'});
    }
};

const submit = async(req, res) => {
    const { username, language, stdin, code, stdout, timestamp } = req.body;
    console.log("here",username, language, stdin, code, stdout, timestamp)
    // Validate required fields
    
    if (!username || !language || !code) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Insert data into the database
    await connection.query('INSERT INTO code_entries (username, language, stdin, code, stdout, timestamp) VALUES (?, ?, ?, ?, ?, ?)', [username, language, stdin, code, stdout, timestamp], (error, results) => {
        if (error) {
            console.error('Error inserting data into the database: ' + error.stack);
            return res.status(500).json({ error: 'Failed to submit code' });
        }

        // Send success response
        res.status(201).json({ message: 'Code submitted successfully' });
    });
};

module.exports = { show, submit };
