const db = require('../db')
const { Baseball } = require('../models')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const baseballProducts = [
    {
        sport: 'baseball',
        product:'bat' ,
        price: 26.99,
        id: 1 
    },
    {
        sport: 'baseball',
        product:'ball' ,
        price: 9.99,
        id: 2 
    },
    {
        sport: 'baseball',
        product:'helmet' ,
        price: 58.68,
        id: 3 
    },
    {
        sport: 'baseball',
        product:'baseball mitt' ,
        price: 19.99,
        id: 4 
    },
    {
        sport: 'baseball',
        product:'catchers mitt' ,
        price: 84.95,
        id: 5 
    },
    {
        sport: 'baseball',
        product:'cleats' ,
        price: 30.00,
        id: 5
    },
    {
        sport: 'baseball',
        product:'big league chew' ,
        price: 3.00,
        id: 6 
    }

    ]

    await Baseball.insertMany(baseballProducts)
    console.log("Created some items!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()