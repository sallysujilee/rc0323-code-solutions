/* exported union */
function union(first, second) {
  const combinedArray = first.concat(second);

  const uniqueValuesSet = new Set(combinedArray);

  const uniqueValuesArray = [];
  uniqueValuesSet.forEach(value => uniqueValuesArray.push(value));

  return uniqueValuesArray;
}
