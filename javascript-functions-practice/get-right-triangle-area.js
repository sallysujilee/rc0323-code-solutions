/* exported getRightTriangleArea */
function getRightTriangleArea(base, height) {
  const area = 0.5 * base * height;
  return area;
}

const myBase = 3;
const myHeight = 4;
const myArea = getRightTriangleArea(myBase, myHeight);

console.log(myArea);
