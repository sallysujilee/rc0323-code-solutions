/* exported invert */
function invert(source) {
  const invertedObj = {};

  Object.keys(source).forEach((key) => {
    invertedObj[source[key]] = key;
  });

  return invertedObj;
}
