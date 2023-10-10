const express = require('express');
const db = require('./db');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))