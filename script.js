/*
//////////////////IMPORTING AND EXPORTING VALUES IN ES6//////////////////
// importing module
//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
// console.log('importing module');

// import all the variables of a module at the same time
// this will create an object that contains everything that is exported from the module
// this will create a namespace for all of the values
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// will import the function as add
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// the import is not simply a copy of the value from the export
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apple', 2);
//console.log(price);

console.log(cart);

//////////////////TOP LEVEL AWAIT ES2022//////////////////
// since es2022 we can now use the await keyword outside of async function
// this only works in modules and blocks the entire module
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log('lastPost', lastPost);

// not better to use top level await
//lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log('lastPost2', lastPost2);

// if a module imports a module that has a top level await
// then the importing module will wait for the imported module to finish the blocking code
*/
// we create an EFI
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart, shipping cost is ${shippingCost}`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // we then return the stuff we want to make public
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
