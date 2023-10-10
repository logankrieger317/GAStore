const db = require('../db')
const Baseball = require('../models/baseball')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const baseballProducts = [{
        sport: 'baseball',
        product:'bat' ,
        price: 'test $17.50', }
    ]

    await Baseball.insertMany(baseballProducts)
    console.log("Created some items!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()