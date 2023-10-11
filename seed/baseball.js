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
        id: 1,
        image: 'https://cdn.shopify.com/s/files/1/0088/4208/4457/products/pendleton-pendleton-bat-co-maple-33-wood-baseball-bat-maple-28919419961449.jpg?v=1672334468'
    },
    {
        sport: 'baseball',
        product:'ball' ,
        price: 9.99,
        id: 2, 
        image: 'https://media.istockphoto.com/id/1302261744/vector/baseball-ball-realistic-sport-equipment-for-game-white-leather-with-red-lace-stitches-3d.jpg?s=612x612&w=0&k=20&c=38qJNdE74NMi01WSpSztzor_JCVA-WJd_B-KoJdFSkI='
    },
    {
        sport: 'baseball',
        product:'helmet' ,
        price: 58.68,
        id: 3,
        image: 'https://m.media-amazon.com/images/I/51UwT4zKCvL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        sport: 'baseball',
        product:'baseball mitt' ,
        price: 19.99,
        id: 4,
        image: 'https://target.scene7.com/is/image/Target/GUEST_6c6b3561-8fbb-4019-8e2d-7a7eb00ee749'
    },
    {
        sport: 'baseball',
        product:'catchers mitt' ,
        price: 84.95,
        id: 5,
        image: 'https://www.primesportsmw.com/cdn/shop/products/2669-10-22-coming-soon-wilson-a2000-superskin-m1d-spin-control-33-5--baseball-catchers-mitt--wbw100995335-36215_002_l_1200x.jpg?v=1673376660'
    },
    {
        sport: 'baseball',
        product:'cleats' ,
        price: 30.00,
        id: 5,
        image: 'https://cdn11.bigcommerce.com/s-dvvakqujk6/images/stencil/1280x1280/products/15112/1618614/L4040BK6_NEWBAL_BKWH_7_7_EA1__40538.1694294439.jpg?c=2'
    },
    {
        sport: 'baseball',
        product:'big league chew' ,
        price: 3.00,
        id: 6,
        image: 'https://www.opiescandystore.com/wp-content/uploads/2019/03/big-league-chew.jpg'
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