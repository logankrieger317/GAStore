// const db = require('../db')
// const { Basketball } = require('../models')


// // Connect to the database
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//     const basketballProducts = [
//     {
//         sport: 'basketball',
//         product:'basketball' ,
//         price: 29.99,
//         id: 1,
//         image: 'https://m.media-amazon.com/images/I/81ADRpAX19L._AC_UF1000,1000_QL80_.jpg'
//     },
//     {
//         sport: 'basketball',
//         product:'basketball shoes' ,
//         price: 84.99,
//         id: 2,
//         image: 'https://blog.finishline.com/wp-content/uploads/2021/02/How_To_Buy_Choose_Basketball_Shoes-1024x683.jpg'
//     },
//     {
//         sport: 'basketball',
//         product:'basketball shorts' ,
//         price: 14.99,
//         id: 3,
//         image: 'https://basketzone.net/zdjecia/2020/02/04/902/57/NIKE_AIR_JORDAN_STOCK_BASKETBALL_SHORTS_TEAM_WHITE.jpg'
//     },
//     {
//         sport: 'basketball',
//         product:'basketball jersey' ,
//         price: 14.99,
//         id: 4,
//         image: 'https://www.umassstore.com/site/product-images/4001002_1.default.jpg?resizeid=2&resizeh=600&resizew=600'
//     },
//     {
//         sport: 'basketball',
//         product:'basketball air pump' ,
//         price: 9.99,
//         id: 5,
//         image: 'https://m.media-amazon.com/images/I/51PI549qYSL._AC_UF1000,1000_QL80_.jpg'
//     },
//     {
//         sport: 'basketball',
//         product:'mouth-guard' ,
//         price: 4.99,
//         id: 5,
//         image: 'https://www.msmfightshop.com/cdn/shop/products/1451_010_1_500x.jpg?v=1648750735'
//     }

//     ]

//     await Basketball.insertMany(basketballProducts)
//     console.log("Created some items!!!")
// }
// const run = async () => {
//     await main()
//     db.close()
// }

// run()