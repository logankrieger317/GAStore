const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Sports = new Schema(
    {
        sport: { type: String, required: true },
        product: { type: String, required: true },
        price: { type: String, required: true },
       
    },
    { timestamps: true },
)

module.exports = mongoose.model('actors', actor)