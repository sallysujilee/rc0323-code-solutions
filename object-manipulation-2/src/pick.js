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
