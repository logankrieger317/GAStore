const db = require('../db')
const { Football } = require('../models')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const footballProducts = [
    {
        sport: 'football',
        product:'football' ,
        price: 24.99,
        id: 1,
        image: 'https://scoutlife.org/wp-content/uploads/2016/12/football-future.jpg?w=620'
    },
    {
        sport: 'football',
        product:'football cleats' ,
        price: 44.99,
        id: 2,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e735a45-443e-4616-add8-a0ad3273e6f9/jordan-1-mid-td-mens-football-cleat-L05PM5.png'
    },
    {
        sport: 'football',
        product:'football helmet' ,
        price: 239.99,
        id: 3,
        image: 'https://bayerteamsports.s8.cdn-upgates.com/_cache/3/c/3caa0b9caba73067b61a5726f8b3dce2-royaltilt-1.png'
    },
    {
        sport: 'football',
        product:'football jersey' ,
        price: 39.99,
        id: 4,
        image: 'https://images.footballfanatics.com/colorado-buffaloes/mens-prosphere-number-1-white-colorado-buffaloes-endzone-football-jersey_pi5273000_ff_5273583-f14bbf9226443df5e31d_full.jpg?_hv=2&w=600'
    },
    {
        sport: 'football',
        product:'football air pump' ,
        price: 9.99,
        id: 5,
        image: 'https://m.media-amazon.com/images/I/51PI549qYSL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        sport: 'football',
        product:'mouth-guard' ,
        price: 4.99,
        id: 5,
        image: 'https://www.msmfightshop.com/cdn/shop/products/1451_010_1_500x.jpg?v=1648750735'
    }

    ]

    await Football.insertMany(footballProducts)
    console.log("Created some items!!!")
}
const run = async () => {
    await main()
    db.close()
}

run()