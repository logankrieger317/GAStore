
const addItemsToCart = document.getElementsByClassName('add-to-cart')
console.log(addItemsToCart)

for (let i = 0; i < addItemsToCart.length; i++) {
  let button = addItemsToCart[i]
  button.addEventListener('click', () => {
    console.log('Clicked')
  })
}


   
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










const getAllBaseball = async () => {
    const sports = await axios.get('http://localhost:3001/baseball')
    console.log(sports)
}

getAllBaseball()


// Below this line is javascript for checkout page. Above this line is javascript for index page




console.log("i exist")
let deductBtnArr = document.querySelectorAll('.minus-btn');
let addButtonArr = document.querySelectorAll('.plus-btn');
// console.log(deductBtnArr)




deductBtnArr.forEach(deductBtn => {
    deductBtn.addEventListener('click', (e)=>{
        console.log("minus clicked")
        let currentInputBox = deductBtn.previousElementSibling
        currentInputBox.value =  parseInt(currentInputBox.value) - 1;
    } )  
});
 




let response = await axios.get(
    `http://localhost:3001/baseball`
 )
 let baseballArr=response.baseballProducts
baseballArr.forEach(baseballProduct => {
    
     
     let { data } = baseballProduct
     let productPic = data.image
        productInfo.innerHTML = `
        <li>Name: ${data.product}</li>
        <li>Price: ${data.price}</li>
        `
     productImage.src = actorPic
});

button2.addEventListener('click', async () => {
    console.log('button clicked')
    // const actorInput = document.getElementById('actorText')
    // const name = actorInput.value
    // console.log(actor)
    
 })
 console.log('working')