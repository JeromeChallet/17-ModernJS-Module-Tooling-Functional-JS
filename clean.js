'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jerome' },
  { value: -45, description: 'Groceries 🥑', user: 'jerome' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jerome' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jerome' },
  { value: -1100, description: 'New iPhone 📱', user: 'jerome' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jerome' },
]);

// with Object.freeze, spendingLimits is not immutable
// we cannot put any more properties into it
// but it only freezes the first level of the object
const spendingLimits = Object.freeze({
  jerome: 1500,
  matilda: 100,
});
//spendingLimits.jay = 200; // wont work cause immutable

const getLimit = (limits, user) => limits?.[user] ?? 0;
//const limit = spendingLimits[user] ? spendingLimits[user] : 0;
//const limit = spendingLimits?.[user] ?? 0;
// a function that has side effects is called an impure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jerome'
) {
  const cleanUser = user.toLowerCase();
  //const limit = getLimit(user);

  // setting the limit to 0 if the name does not exist
  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  //budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
// };
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

// let lim;
// if (spendingLimits[entry.user]) {
//   lim = spendingLimits[entry.user];
// } else {
//   lim = 0;
// }

//const limit = spendingLimits?.[entry.user] ?? 0;

// for (const entry of budget)
//   if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  //.reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);
  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  //   /*
  //   if (entry.value <= -bigLimit) {
  //     // emojis count as 2 characters thus the -2
  //     output += `${entry.description.slice(-2)} / '`; // Emojis are 2 chars
  //   }*/
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
console.log(budget);
logBigExpenses(finalBudget, 100);
