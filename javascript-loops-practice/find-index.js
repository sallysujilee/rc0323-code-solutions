/* exported findIndex */
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i; // i is just a placeholder - don't forget
    }
  }
  return -1;
}
