const db = require('../db')
const Sports = require('../models/index')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const sports = [{
        sport: 'test sport',
        product:'test product' ,
        price: 'test $17.50', }
    ]

    await Sports.insertMany(sports)
    console.log("Created some Sports!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()