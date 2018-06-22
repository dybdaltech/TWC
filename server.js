const express = require('express');
const CORS = require('cors');
const bodyParser = require('body-parser');
//File dependencies:
const config = require('./config/config');
const controller_user = require('./routes/user');
const controller_sql = require('./routes/sql');
//initializing
const app = express()


//Middleware
app.use(CORS());
app.use(bodyParser.json());
//Route handlers
app.use('/', controller_user);
app.use('/sql', controller_sql)
app.listen(config.PORT);