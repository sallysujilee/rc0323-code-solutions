/* exported zip */
function zip(first, second) {
  const result = [];
  const minLength = Math.min(first.length, second.length);

  for (let i = 0; i < minLength; i++) {
    result.push([first[i], second[i]]);
  }

  return result;
}
