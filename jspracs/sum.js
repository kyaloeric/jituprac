// cmap is used to extract the price values from each dictionary and create an array of prices.
// reduce is used to calculate the sum of the prices in the array.
// The initial value for the sum is set to 0.


const items = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];

const sum = items.map(item => item.price).reduce((total, price) => total + price, 0);

console.log(sum);
