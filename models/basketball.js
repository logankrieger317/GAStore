const { Schema } = require('mongoose')
const basketballSchema = new Schema (
   {
      product: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true }
   },

   { timestamps: true})

module.epxorts = basketballSchema