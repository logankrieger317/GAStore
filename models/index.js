const mongoose = require('mongoose')
const baseballSchema = require('./baseball')
const basketballSchema = require('./basketball')
const footballSchema = require('./football')
const hockeySchema = require('./hockey')

const Baseball = mongoose.model('Baseball', baseballSchema)
const Basketball = mongoose.model('Basketball', basketballSchema)
const Football = mongoose.model('Football', footballSchema)
const Hockey = mongoose.model('Hockey', hockeySchema)

module.exports = {
    Baseball,
    Basketball,
    Football,
    Hockey
}
