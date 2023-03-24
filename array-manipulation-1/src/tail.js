/* exported tail */
function tail(array) {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}

/*
Define a function, named `tail`, that accepts one parameter, `array`.
  Declare a variable named `tailArray` and assign it to an empty array
  Begin a loop that iterates through the `array` array.
    Add it to the end of the `compactResult` array.
  Return `tailArray`.
*/
