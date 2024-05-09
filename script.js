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
