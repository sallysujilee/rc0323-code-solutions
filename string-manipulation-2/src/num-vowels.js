/* exported numVowels */
function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }

  return count;
}
