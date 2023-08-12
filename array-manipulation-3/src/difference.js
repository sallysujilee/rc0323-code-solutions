/* exported difference */
function difference(first, second) {
  const firstSet = new Set(first);
  const secondSet = new Set(second);

  const symmetricDifference = [];

  for (const element of firstSet) {
    if (!secondSet.has(element)) {
      symmetricDifference.push(element);
    }
  }

  for (const element of secondSet) {
    if (!firstSet.has(element)) {
      symmetricDifference.push(element);
    }
  }

  return symmetricDifference;
}
