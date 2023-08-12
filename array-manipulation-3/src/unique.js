/* exported unique */
function unique(array) {
  const uniqueElements = [];
  const seen = {};

  for (const element of array) {
    if (!seen[element]) {
      seen[element] = true;
      uniqueElements.push(element);
    }
  }

  return uniqueElements;
}

// .has() is used for Set
// Set is specific to unique values whereas Array can have an infinite number of same values
