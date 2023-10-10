const db = require('../db')
const Actors = require('../models/sports')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [{
        sport: 'test sport',
        product:'test product' ,
        price: 'test $17.50', }
    ]

    await Actors.insertMany(actors)
    console.log("Created some Sports!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()