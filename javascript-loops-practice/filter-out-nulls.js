/* exported filterOutNulls */
function filterOutNulls(values) {
  const filterArray = [];
  for (let i = 0; i < values.length; i++) {
    // filterArray.push(if (values[i] != null));
    if (values[i] != null) {
      filterArray.push(values[i]);
    }
  }
  return filterArray;
}
