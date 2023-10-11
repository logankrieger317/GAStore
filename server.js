const express = require('express');
const db = require('./db');
const logger = require('morgan');
const baseballController = require('./controllers/baseballController');
const basketballController = require('./controllers/basketballController');
const footballController = require('./controllers/footballController');
const hockeyController = require('./controllers/hockeyController');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('this server is running on port 3001 and is connected to mongoDB')
})


app.get('/baseball', baseballController.getAllBaseball)
app.get('/baseball/:id', baseballController.getBaseballById)
app.post('/baseball', baseballController.createBaseball)
app.put('/baseball/:id', baseballController.updateBaseball)
app.delete('/baseball/:id', baseballController.deleteBaseball)

app.get('/basketball', basketballController.getAllBasketball)
app.get('/basketball/:id', basketballController.getBasketballById)
app.post('/basketball', basketballController.createBasketball)
app.put('/basketball/:id', basketballController.updateBasketball)
app.delete('/basketball/:id', basketballController.deleteBasketball)

app.get('/football', footballController.getAllFootball)
app.get('/football/:id', footballController.getFootballById)
app.post('/football', footballController.createFootball)
app.put('/football/:id', footballController.updateFootball)
app.delete('/football/:id', footballController.deleteFootball)

app.get('/hockey', hockeyController.getAllHockey)
app.get('/hockey/:id', hockeyController.getHockeyById)
app.post('/hockey', hockeyController.createHockey)
app.put('/hockey/:id', hockeyController.updateHockey)
app.delete('/hockey/:id', hockeyController.deleteHockey)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))