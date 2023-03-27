/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  const area = Math.PI * (radius ** 2);
  return area;
}

console.log(getAreaOfCircle(3));
