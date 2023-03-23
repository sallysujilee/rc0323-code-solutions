/* exported compact */
function compact(array) {
  const compactResult = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactResult.push(array[i]);
    }
  }
  return compactResult;
}
