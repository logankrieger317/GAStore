// const addItemsToCart = document.getElementsByClassName("add-to-cart");
// console.log(addItemsToCart);

// for (let i = 0; i < addItemsToCart.length; i++) {
//   let button = addItemsToCart[i];
//   button.addEventListener("click", () => {
//     console.log("Clicked");
//   });
// }

// const products = [
//     { name: "Product 1", price: 19.99 },
//     { name: "Product 2", price: 24.99 },
//   ];
//   const cart = [];
//   function updateCart() {
//     const cartItems = document.querySelector(".cart-items");
//     cartItems.innerHTML = '';
//     let totalPrice = 0;
//     for (const item of cart) {
//       const listItem = document.createElement('li');
//       listItem.textContent = `${(item.price * item.quantity).toFixed(2)}`;
//       cartItems.appendChild(listItem);
//       totalPrice += item.price * item.quantity;
//     }
// }
//   updateCart()

// const getAllBaseball = async () => {
//     const sports = await axios.get('mongodb://127.0.0.1:27017/sportsDatabase')
//     console.log(sports)
// }
// getAllBaseball()

// Below this line is javascript for checkout page. Above this line is javascript for index page
console.log("i exist");
// let deductBtnArr = document.querySelectorAll('.minus-btn');
// let addButtonArr = document.querySelectorAll('.plus-btn');
// // console.log(deductBtnArr)
// deductBtnArr.forEach(deductBtn => {
//     deductBtn.addEventListener('click', (e)=>{
//         console.log("minus clicked")
//         let currentInputBox = deductBtn.previousElementSibling
//         currentInputBox.value =  parseInt(currentInputBox.value) - 1;
//     } )
// });

// console.log("i exist")
// let deductBtnArr = document.querySelectorAll('.minus-btn');
// let addButtonArr = document.querySelectorAll('.plus-btn');
// console.log(deductBtnArr)

// deductBtnArr.forEach(deductBtn => {
//     deductBtn.addEventListener('click', (e)=>{
//         console.log("minus clicked")
//         let currentInputBox = deductBtn.previousElementSibling
//         currentInputBox.value =  parseInt(currentInputBox.value) - 1;
//     } )
// });


let productInfo = document.querySelector("#productInformation");


let productInfo = document.querySelector("#productInformation");

const getAllBaseball = async () => {
  const sports = await axios.get("http://localhost:3001/baseball");
  // console.log(sports.data)
  let baseballStuff = sports.data;
  baseballStuff.forEach((baseballProduct) => {
    console.log(baseballProduct.product);
    //  let { data } = baseballProduct
    //  let productPic = data.image
    productInfo.innerHTML =
      productInfo.innerHTML +

      `<div class="product">
      <img src="${baseballProduct.image}">
      <h2>${baseballProduct.product}</h2>
      <span class="product-price">${baseballProduct.price}</span> 
      <button class="add-to-cart" data-product="Product 1" data-price="19.99">Add to Cart</button>
      </div>`;
  
};
<<



getAllBaseball();


// let getStuff = async ()=>{await axios.get(
//     `http://localhost:3001/baseball`
//  )}

//  getStuff()
//  console.log(response)


// let response = await axios.get(
//     `http://localhost:3001/baseball`
//  )
//  let baseballArr=response.baseballProducts
// baseballArr.forEach(baseballProduct => {
    
     
//      let { data } = baseballProduct
//      let productPic = data.image
//         productInfo.innerHTML = `
//         <li>Name: ${data.product}</li>
//         <li>Price: ${data.price}</li>
//         `
//      productImage.src = productPic
// });

// button2.addEventListener('click', async () => {
//     console.log('button clicked')
    // const actorInput = document.getElementById('actorText')
    // const name = actorInput.value
    // console.log(actor)
    
//  })
//  console.log('working')



const getBaseball = async () => {
    const baseball = await axios.get('http://localhost:3001/baseball')
    console.log(baseball)
 }
 
 getBaseball()
 
 
 button2.addEventListener('click', async () => {
    console.log('button clicked')
    const actorInput = document.getElementById('actorText')
    const name = actorInput.value
    console.log(actor)
    let response = await axios.get(
       `http://localhost:3001/actors/${name}`
    )
    console.log(response)
    let { data } = response
    let productI = data.image
       actorInfo.innerHTML = `
       <li>Product: ${data.product}</li>
       <li>Price: ${data.price}</li>
       `
    })




