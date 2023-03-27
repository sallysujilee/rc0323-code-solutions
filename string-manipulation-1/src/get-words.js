/* exported getWords */
function getWords(string) {
  var wordsArray = string.split(' ');
  var filteredArray = wordsArray.filter(function (word) {
    return word !== '';
  });

  return filteredArray;
}
