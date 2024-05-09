// exporting module
console.log('exporting module');

// all top level variable are scoped to this module
const shippingCost = 10;
export const cart = [];

// export always need to happen in top level code
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// we can export several variables at the same time using namedexport
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// default export are used when we only want to export one file per module
// its better to use them cause the import declartion does not need {} and we only have to deal with one name
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
