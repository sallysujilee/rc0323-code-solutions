/* exported pick */
function pick(source, keys) {
  const result = {};
  for (const key in source) {
    if (source[key] !== undefined) {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
          result[key] = source[key];
        }
      }
    }
  }
  return result;
}

/*
Define a function, named 'pick', that accepts two arguments, 'source' and 'keys'
  Declare a variable named 'result' and assign it to an empty object
  Begin a loop that iterates through the 'key' variable in the 'source' argument
    Create an if statement for source at key is strictly not equal to 'undefined'
    Begin another loop that iterates through the 'keys' array, where
      For each index in the array:
        Create an if statement for the keys at 'i' index is strictly equal to the 'key' variable
          Assign 'source' at 'key' to 'result' at 'key'
  Return the value of the 'result' variable

*/
