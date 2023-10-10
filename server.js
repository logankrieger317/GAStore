const express = require('express');
const db = require('./db');
const logger = require('morgan');
const sportsController = require('./controllers/sportsController');
const baseballController = require('./controllers/baseballController');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('this server is running on port 3001 and is connected to mongoDB')
})

app.get('/sports', sportsController.getAllSports);
app.get('/sports/:id', sportsController.getSportsById);

app.get('/baseball/:id', baseballController.getBaseballById);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))