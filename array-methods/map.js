const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salePrices = prices.map((price) => {
  return { price, salePrice: price / 2 };
});

console.log('Price objects');
console.log(salePrices);

const formattedPrices = prices.map((price) => {
  return '$' + price.toFixed(2);
});

console.log('Formatted prices');
console.log(formattedPrices);
