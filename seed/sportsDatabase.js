const db = require('../db')
const { Baseball, Basketball, Football, Hockey } = require('../models')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const baseballProducts = [
    {
        sport: 'baseball',
        product:'bat' ,
        price: 26.99,
        image: 'https://cdn.shopify.com/s/files/1/0088/4208/4457/products/pendleton-pendleton-bat-co-maple-33-wood-baseball-bat-maple-28919419961449.jpg?v=1672334468'
    },
    {
        sport: 'baseball',
        product:'ball' ,
        price: 9.99,
        image: 'https://media.istockphoto.com/id/1302261744/vector/baseball-ball-realistic-sport-equipment-for-game-white-leather-with-red-lace-stitches-3d.jpg?s=612x612&w=0&k=20&c=38qJNdE74NMi01WSpSztzor_JCVA-WJd_B-KoJdFSkI='
    },
    {
        sport: 'baseball',
        product:'helmet' ,
        price: 58.68,
        image: 'https://m.media-amazon.com/images/I/51UwT4zKCvL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        sport: 'baseball',
        product:'baseball mitt' ,
        price: 19.99,
        image: 'https://target.scene7.com/is/image/Target/GUEST_6c6b3561-8fbb-4019-8e2d-7a7eb00ee749'
    },
    {
        sport: 'baseball',
        product:'catchers mitt' ,
        price: 84.95,
        image: 'https://www.primesportsmw.com/cdn/shop/products/2669-10-22-coming-soon-wilson-a2000-superskin-m1d-spin-control-33-5--baseball-catchers-mitt--wbw100995335-36215_002_l_1200x.jpg?v=1673376660'
    },
    {
        sport: 'baseball',
        product:'cleats' ,
        price: 30.00,
        image: 'https://cdn11.bigcommerce.com/s-dvvakqujk6/images/stencil/1280x1280/products/15112/1618614/L4040BK6_NEWBAL_BKWH_7_7_EA1__40538.1694294439.jpg?c=2'
    },
    {
        sport: 'baseball',
        product:'big league chew' ,
        price: 3.00,
        image: 'https://www.opiescandystore.com/wp-content/uploads/2019/03/big-league-chew.jpg'
    }

    ]

    const basketballProducts = [
      {
          sport: 'basketball',
          product:'basketball' ,
          price: 29.99,
          image: 'https://m.media-amazon.com/images/I/81ADRpAX19L._AC_UF1000,1000_QL80_.jpg'
      },
      {
          sport: 'basketball',
          product:'basketball shoes' ,
          price: 84.99,
          image: 'https://blog.finishline.com/wp-content/uploads/2021/02/How_To_Buy_Choose_Basketball_Shoes-1024x683.jpg'
      },
      {
          sport: 'basketball',
          product:'basketball shorts' ,
          price: 14.99,
          image: 'https://basketzone.net/zdjecia/2020/02/04/902/57/NIKE_AIR_JORDAN_STOCK_BASKETBALL_SHORTS_TEAM_WHITE.jpg'
      },
      {
          sport: 'basketball',
          product:'basketball jersey' ,
          price: 14.99,
          image: 'https://www.umassstore.com/site/product-images/4001002_1.default.jpg?resizeid=2&resizeh=600&resizew=600'
      },
      {
          sport: 'basketball',
          product:'basketball air pump' ,
          price: 9.99,
          image: 'https://m.media-amazon.com/images/I/51PI549qYSL._AC_UF1000,1000_QL80_.jpg'
      },
      {
          sport: 'basketball',
          product:'mouth-guard' ,
          price: 4.99,
          image: 'https://www.msmfightshop.com/cdn/shop/products/1451_010_1_500x.jpg?v=1648750735'
      }
  
      ]

      const footballProducts = [
         {
             sport: 'football',
             product:'football' ,
             price: 24.99,
             image: 'https://scoutlife.org/wp-content/uploads/2016/12/football-future.jpg?w=620'
         },
         {
             sport: 'football',
             product:'football cleats' ,
             price: 44.99,
             image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e735a45-443e-4616-add8-a0ad3273e6f9/jordan-1-mid-td-mens-football-cleat-L05PM5.png'
         },
         {
             sport: 'football',
             product:'football helmet' ,
             price: 239.99,
             image: 'https://bayerteamsports.s8.cdn-upgates.com/_cache/3/c/3caa0b9caba73067b61a5726f8b3dce2-royaltilt-1.png'
         },
         {
             sport: 'football',
             product:'football jersey' ,
             price: 39.99,
             image: 'https://images.footballfanatics.com/colorado-buffaloes/mens-prosphere-number-1-white-colorado-buffaloes-endzone-football-jersey_pi5273000_ff_5273583-f14bbf9226443df5e31d_full.jpg?_hv=2&w=600'
         },
         {
             sport: 'football',
             product:'football air pump' ,
             price: 9.99,
             image: 'https://m.media-amazon.com/images/I/51PI549qYSL._AC_UF1000,1000_QL80_.jpg'
         },
         {
             sport: 'football',
             product:'mouth-guard' ,
             price: 4.99,
             image: 'https://www.msmfightshop.com/cdn/shop/products/1451_010_1_500x.jpg?v=1648750735'
         }
     
         ]
     
         const hockeyProducts = [
            {
                sport: 'hockey',
                product:'hockey stick' ,
                price: 79.99,
                image: 'https://www.truetempersports.com/en-us/golf/media/catalog/product/v/e/ver4_2.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700'
            },
            {
                sport: 'hockey',
                product:'hockey puck 6-pack' ,
                price: 19.99,
                image: 'https://m.media-amazon.com/images/I/51xHobYhNUL._AC_UF1000,1000_QL80_.jpg'
            },
            {
                sport: 'hockey',
                product:'hockey helmet' ,
                price: 89.99,
                image: 'https://www.bauer.com/cdn/shop/products/622178__black_1.png?v=1661546512'
            },
            {
                sport: 'hockey',
                product:'hockey jersey' ,
                price: 79.99,
                image: 'https://cdn11.bigcommerce.com/s-hkcnhkyt08/images/stencil/1280x1280/products/341/2207/Movies_-_Star_Wars_Black_Squadron_Vader_01-COMBINED__93644.1615999175.jpg?c=1'
            },
            {
                sport: 'hockey',
                product:'hockey skates' ,
                price: 249.99,
                image: 'https://www.hockeyplusinc.com/wp-content/uploads/2022/08/Bauer-Supreme-Elite-Ice-Hockey-Skate2.png'
            },
            {
                sport: 'hockey',
                product:'mouth-guard' ,
                price: 4.99,
                image: 'https://www.msmfightshop.com/cdn/shop/products/1451_010_1_500x.jpg?v=1648750735'
            },
            {
                sport: 'hockey',
                product:'hockey gloves' ,
                price: 64.99,
                image: 'https://i.ebayimg.com/images/g/ruYAAOSw~z5jLeHF/s-l1600.jpg'
            }
        
            ]
        
await Hockey.insertMany(hockeyProducts)
console.log('created Hockey')

await Football.insertMany(footballProducts)
console.log('created Football')
  
await Basketball.insertMany(basketballProducts)
console.log('created Basketball')

await Baseball.insertMany(baseballProducts)
console.log('created baseball')


}
const run = async () => {
    await main()
    db.close()
}

run()