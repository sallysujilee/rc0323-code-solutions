/* exported omit */
function omit(source, keys) {
  const result = {};
  for (const key in source) {
    if (keys.indexOf(key) === -1) {
      result[key] = source[key];
    }
  }
  return result;
}
