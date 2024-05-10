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
/*
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
*/

/*
// Nodejs is a way to run JS on a web server outside of a browser
// Nodejs is the world repo for JS
// we export from a module using export.
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart, shipping cost is ${shippingCost}`
    );
};
  
// Import
const {addToCart} = require('./shoppingCart.js')
*/

//////////////////NPM//////////////////
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apple', 2);

console.log(cart);
// initialize the project by creating a package.json
//npm init
// this will create a "dependencies" field in the package.json
// with the name of the installed package and its version number
// all those packages get intalled in the node_modules folder
//npm install packageName - npm i packageName
// install all teh packages listed from the package.json
// npm i
//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
};

// copy the state object using js module (cloneDeep)
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

//state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
// the goal of parcel is to bundle the mdoules together ( cloneDeep, script, shoppingCart )
// npx parcel index.html
// installing with sudo gives more permissions
// sudo npm i parcel
// npm i packageName@1.2.3
// parcel creates a dist folder (distribution) because its the code in this folder that will be sent to the users

// with parcel whenever we change one of the module it will trigger a rebuild
// and that new modified bundle will get injected automatically into the browser
// but it wont reload the page, it maintains the state
if (module.hot) {
  module.hot.accept();
}

// npm script is another way to run installed packages in the command line
// in the package.son the script has been renamed to start so the command is now
// npm run start
// removed the line   "main": "clean.js", and then ran npm run build to build the solution
// npm i parcel -g will install the packages globally

//////////////////BABEL POLYFILLING//////////////////
// parcel automatically use babel to tanspile the code
// a plugin is a js feature that we want to configure
// babel
class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jerome = new Person('jerome');

console.log('jerome' ?? null);

console.log(cart.find(el => el.quantity >= 2));
// babel can only transpile es6 syntax
Promise.resolve('TEST').then(x => console.log(x));

// polyfilling
// when running polyfilling, it will polyfille everything
import 'core-js/stable';
// we can cherry pick what funciton to polyfile
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// polyfilling async functions
import 'regenerator-runtime/runtime';

//////////////////CLEAN MODERN JAVASCRIPT//////////////////
