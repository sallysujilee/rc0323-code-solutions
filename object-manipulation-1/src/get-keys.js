/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

/*
Define a function, named `getKeys`, with one parameter, named `object`
  Declare a variable named `keys` and assign it to  an empty array.
  Begin a loop with the `key` in `object`.
    Add the value of `key` to the end of the `keys` array.
  Return the value of the `keys` variable.
*/
