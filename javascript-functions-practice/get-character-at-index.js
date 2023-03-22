/* exported getCharacterAtIndex */
function getCharacterAtIndex(string, index) {
  const character = string[index];
  return character;
}

const myString = 'he who shall not be named';
const myIndex = 17;
const myCharacter = getCharacterAtIndex(myString, myIndex);

console.log(myCharacter);
