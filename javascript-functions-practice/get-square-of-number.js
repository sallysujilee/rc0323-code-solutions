/* exported getSquareOfNumber */
function getSquareOfNumber(number) {
  const square = number ** 2;
  return square;
}

const myNumber = 9;
const mySquare = getSquareOfNumber(myNumber);

console.log(mySquare);
