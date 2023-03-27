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

/*
Define a function, named `compact`, that accepts one parameter, `array`.
  Declare a variable named `compactResult` and assign it to an empty array
  Begin a loop that iterates through the `array` array.
    If the element is true, add it to the end of the `compactResult` array.
    Otherwise, do nothing
  Return `compactResult`
 */
