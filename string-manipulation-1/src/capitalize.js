/* exported capitalize */
function capitalize(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    const cap = word[i];
    if (i === 0) {
      result += cap.toUpperCase();
    } else {
      result += cap.toLowerCase();
    }
  }
  return result;
}
