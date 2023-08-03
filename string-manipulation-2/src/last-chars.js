/* exported lastChars */
function lastChars(length, string) {
  if (length >= string.length) {
    return string;
  }

  return string.substring(string.length - length);
}
