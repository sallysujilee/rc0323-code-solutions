/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');

  const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());

  return capitalizedWords.join(' ');
}
