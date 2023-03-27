/* exported getValues */
function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

/*
Define a function, named `getValues`, that accepts one parameter, named `object`.
  Declare a variable `values` and assign it to an empty variable.
  Begin a loop that iterates through the `key` in `object`.
    Add the value of the `object` object with the `key` property at the end of the `values` array.
  Return the value of the `values` variable.
  */
