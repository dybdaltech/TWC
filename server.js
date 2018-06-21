const express = require('express');

//File dependencies:
const config = require('./config/config');
const controller_user = require('./routes/user');
//initializing
const app = express()

//Route handlers
app.use('/', controller_user);

app.listen(config.PORT);