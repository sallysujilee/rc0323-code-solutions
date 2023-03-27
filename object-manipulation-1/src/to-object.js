/* exported toObject */
function toObject(keyValuePair) {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

/*
Define a functioned named `toObject` with one parameter, named `keyValuePair`.
  Declare a variable named `object` and assign it with an empty object.
  The `object` variable should be assigned to the property named `keyValuePair`.
  Return the variable `object`.
*/
