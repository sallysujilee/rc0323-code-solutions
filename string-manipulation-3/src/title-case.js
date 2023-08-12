/* exported titleCase */
function titleCase(str) {
  const minorWords = [
    'and', 'or', 'nor', 'but',
    'a', 'an', 'the',
    'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'
  ];

  return str.split(': ').map((title, index) => {
    return title.split(' ').map(function (word, index) {
      const lowercaseWord = word.toLowerCase();

      if (lowercaseWord === 'javascript') {
        return 'JavaScript';
      }

      if (lowercaseWord === 'api') {
        return 'API';
      }

      if (minorWords.includes(lowercaseWord) && index !== 0) {
        return word.toLowerCase();
      }

      return word.split('-').map(function (part) {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
      }).join('-');
    }).join(' ');
  }).join(': ');
}
