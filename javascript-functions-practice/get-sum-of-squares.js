/* exported getSumOfSquares */
function getSumOfSquares(x, y) {
  const sumOfSquares = (x ** 2) + (y ** 2);
  return sumOfSquares;
}

const X1 = 3;
const Y1 = 8;
const sum = getSumOfSquares(X1, Y1);
console.log(sum);
