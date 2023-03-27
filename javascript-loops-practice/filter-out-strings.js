/* exported filterOutStrings */
function filterOutStrings(values) {
  const nonStringValues = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      nonStringValues.push(values[i]);
    }
  }
  return nonStringValues;
}
