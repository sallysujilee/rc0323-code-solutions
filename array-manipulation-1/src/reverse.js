/* exported reverse */
function reverse(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

/*
Define a function, named `reverse`, that accepts one parameter `array`.
  Declare a variable named `reversedArray` and assign it to an empty array.
  Begin a loop that iterates through the `array` array.
    Add the element to the end of the `reversedArray` array.
  Return `reversedArray`
*/
