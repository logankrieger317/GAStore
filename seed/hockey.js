// const db = require('../db')
// const { Hockey } = require('../models')


// // Connect to the database
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {
//     const hockeyProducts = [
//     {
//         sport: 'hockey',
//         product:'hockey stick' ,
//         price: 79.99,
//         id: 1,
//         image: 'https://www.truetempersports.com/en-us/golf/media/catalog/product/v/e/ver4_2.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
//     },
//     {
//         sport: 'hockey',
//         product:'hockey puck 6-pack' ,
//         price: 19.99,
//         id: 2,
//         image: 'https://m.media-amazon.com/images/I/51xHobYhNUL._AC_UF1000,1000_QL80_.jpg'
//     },
//     {
//         sport: 'hockey',
//         product:'hockey helmet' ,
//         price: 89.99,
//         id: 3,
//         image: 'https://www.bauer.com/cdn/shop/products/622178__black_1.png?v=1661546512'
//     },
//     {
//         sport: 'hockey',
//         product:'hockey jersey' ,
//         price: 79.99,
//         id: 4,
//         image: 'https://cdn11.bigcommerce.com/s-hkcnhkyt08/images/stencil/1280x1280/products/341/2207/Movies_-_Star_Wars_Black_Squadron_Vader_01-COMBINED__93644.1615999175.jpg?c=1'
//     },
//     {
//         sport: 'hockey',
//         product:'hockey skates' ,
//         price: 249.99,
//         id: 5,
//         image: 'https://www.hockeyplusinc.com/wp-content/uploads/2022/08/Bauer-Supreme-Elite-Ice-Hockey-Skate2.png'
//     },
//     {
//         sport: 'hockey',
//         product:'mouth-guard' ,
//         price: 4.99,
//         id: 5,
//         image: 'https://www.msmfightshop.com/cdn/shop/products/1451_010_1_500x.jpg?v=1648750735'
//     },
//     {
//         sport: 'hockey',
//         product:'hockey gloves' ,
//         price: 64.99,
//         id: 6,
//         image: 'https://i.ebayimg.com/images/g/ruYAAOSw~z5jLeHF/s-l1600.jpg'
//     }

//     ]

//     await Hockey.insertMany(hockeyProducts)
//     console.log("Created some items!!!")
// }
// const run = async () => {
//     await main()
//     db.close()
// }

// run()