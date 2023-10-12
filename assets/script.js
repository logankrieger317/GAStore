
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
















