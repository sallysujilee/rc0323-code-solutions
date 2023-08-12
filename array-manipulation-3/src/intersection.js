/* exported intersection */
function intersection(first, second) {
  const uniqueValues = [];
  const secondSet = new Set(second);

  for (const value of first) {
    if (secondSet.has(value)) {
      uniqueValues.push(value);
    }
  }

  return uniqueValues;
}
