console.log('In order:');

const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach(function (e) {
  console.log(e);
});

console.log('Reverse order:');

// for (let index = values.length - 1; index >= 0; index--) {
//   const element = values[index];
//   console.log(element);
// }

values.forEach((n, index) => {
  console.log(values[values.length - 1 - index]);
});
