<h1>DOCS for the backend</h1>

<h2>Frontend Link: <a href="https://github.com/7twik/TUF_task_frontend">https://github.com/7twik/TUF_task_frontend</a></h2>

<h2>Routes</h2>
Go to /show to read data(GET method)<br/>
/submit is a post route<br/>
<br />
Also cached redis server which gets updated every minute by cron job, why 1 minute so it becomes easier for reviewing the task.<br/>



<h2>RUN THE PROJECT</h2><br/>
step 1: git clone https://github.com/7twik/TUF_task_backend.git <br/>
step 2: cd into the folder<br/>
step 3: npm install<br/>
step 4: node index.js <br/>

<h3>also need to add .env</h3><br/>
mysql server details <br/>
DB_HOST=<br/>
DB_USER=<br/>
DB_PASSWORD=<br/>
DB_DATABASE=<br/>


<h2>Difficulty in understanding the code base ?</h2>
It's quiet simple, I have made the server in index.js file where I have also assembled the routes.js and made the cron-job<br/>
redis/redisClient.js Here I have made the redis initialization function<br/>
controller/controller.js Here I have made all the functions for the routes<br/>
router/router.js Here I have declared the routes<br/>
cron/cron.js Here I have made the cronjob function<br/>

