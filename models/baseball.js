const { Schema } = require('mongoose')
const baseballSchema = new Schema (
   {
      sport: { type: String, required: true },
      product: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true }
   },

   { timestamps: true})

module.exports = baseballSchema