const connection = require('../db/conn');
const client = require('../redis/redisClient');
const updateShowCache = async (req, res) => {
    console.log('Refreshing cache...');
    
    // Fetch data from the MySQL database
    await connection.query('SELECT * FROM code_entries', async (error, results) => {
        if (error) {
            console.error('Error fetching data from the database:', error);
            return;
        }

        console.log(results);
        client.set('code_entries', JSON.stringify(results), (err, reply) => {
            if (err) {
                console.error('Error setting data in Redis:', err);
                return;
            }
            console.log('Data set in Redis');
        
            // Set expiration time for the key
            
        });

        console.log('Cache refreshed');
    });
};

module.exports = { updateShowCache };