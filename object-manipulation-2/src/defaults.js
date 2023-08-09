/* exported defaults */
function defaults(target, source) {
  const sourceKeys = Object.keys(source);

  for (const key of sourceKeys) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
