/* exported dropRight */
function dropRight(array, count) {
  count = count >= 0 ? count : 0;

  if (count >= array.length) {
    return [];
  }

  return array.slice(0, array.length - count);
}
