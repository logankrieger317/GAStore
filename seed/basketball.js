const db = require('../db')
const { Basketball } = require('../models')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const basketballProducts = [
    {
        sport: 'basketball',
        product:'basketball' ,
        price: 29.99,
        id: 1 
    },
    {
        sport: 'basketball',
        product:'basketball shoes' ,
        price: 84.99,
        id: 2 
    },
    {
        sport: 'basketball',
        product:'basketball shorts' ,
        price: 14.99,
        id: 3 
    },
    {
        sport: 'basketball',
        product:'basketball jersey' ,
        price: 14.99,
        id: 4 
    },
    {
        sport: 'basketball',
        product:'basketball air pump' ,
        price: 9.99,
        id: 5 
    },
    {
        sport: 'basketball',
        product:'mouth-guard' ,
        price: 4.99,
        id: 5
    }

    ]

    await Basketball.insertMany(basketballProducts)
    console.log("Created some items!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()