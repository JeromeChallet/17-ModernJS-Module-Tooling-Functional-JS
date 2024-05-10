const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jerome' },
  { value: -45, description: 'Groceries 🥑', user: 'jerome' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jerome' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jerome' },
  { value: -1100, description: 'New iPhone 📱', user: 'jerome' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jerome' },
];

const spendingLimits = {
  jerome: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jerome') {
  user = user.toLowerCase();
  //const limit = getLimit(user);

  // setting the limit to 0 if the name does not exist
  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  //const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  //const limit = spendingLimits?.[user] ?? 0;

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  // let lim;
  // if (spendingLimits[entry.user]) {
  //   lim = spendingLimits[entry.user];
  // } else {
  //   lim = 0;
  // }

  //const limit = spendingLimits?.[entry.user] ?? 0;

  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
    /*
    if (entry.value <= -bigLimit) {
      // emojis count as 2 characters thus the -2
      output += `${entry.description.slice(-2)} / '`; // Emojis are 2 chars
    }*/
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
console.log(budget);
logBigExpenses(100);
