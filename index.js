var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function addToCart(item) {
  Object.assign({}, { [item]: `${getRandomArbitrary(1,100)}` });
  console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
