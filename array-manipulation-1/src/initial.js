/* exported initial */
function initial(array) {
  const initialArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}

/*
Define a function, named `initial`, that accepts one parameter `array`.
  Declare a variable, named `initialArray`, and assign it to an empty array.
  Begin a loop that iterates through the `array` array, where
    If the element is true, add it to the end of the `initialArray` array.
    Otherwise, do nothing
  Return `initialArray`.
*/
