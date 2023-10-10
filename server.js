const express = require('express');
const db = require('./db');
const logger = require('morgan');
const sportsController = require('./controllers/sportsController');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('this server is running on port 3001 and is connected to mongoDB')
})

app.get('sports', (req, res) => {
    sportsController.getAllSports();
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))