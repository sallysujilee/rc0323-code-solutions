/* exported chunk */
function chunk(array, size) {
  if (size <= 0) {
    throw new Error('Chunk size must be a positive integer.');
  }

  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}
