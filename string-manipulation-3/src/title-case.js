/* exported titleCase */
function titleCase(title) {
  const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  function capitalize(word) {
    for (let i = 0; i < word.length; i++) {
      if (word[i].includes('javascript')) {
        word[i] = word[i].replace('j', 'J');
        word[i] = word[i].replace('s', 'S');
      }
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const words = title.toLowerCase().split(' ');

  const titleCasedWords = words.map((word, index) => {
    for (let i = 0; i < word.length; i++) {
      if (word[i].includes('javascript')) {
        word[i] = word[i].replace('j', 'J');
        word[i] = word[i].replace('s', 'S');
      }
    }
    if (word === 'api') {
      return 'API';
    }
    if (index === 0 || !minorWords.includes(word)) {
      return capitalize(word);
    } else {
      return word;
    }
  });

  const titleCased = titleCasedWords.join(' ');

  return titleCased;
}
