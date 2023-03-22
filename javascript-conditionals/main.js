/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const Sally = {
  name: 'Sally Lee',
  age: 27
};

console.log('Sally\'s age:', Sally.age);

// isUnderFive(number)

function isUnderFive(number) {
  return number < 5;
}

console.log('isUnderFive:', isUnderFive(Sally.age));

// isEven(number)

function isEven(number) {
  return number % 2 === 0;
}

console.log('isEven:', isEven(Sally.age));

// startsWithJ(string)

function startsWithJ(string) {
  return string[0] === 'J';
}

console.log('startsWithJ:', startsWithJ(Sally.name[0]));

// isOldEnoughToDrink(person)

function isOldEnoughToDrink(person) {
  return person.age > 21;
}

console.log('isOldEnoughToDrink:', isOldEnoughToDrink(Sally));

// isOldEnoughToDrive

function isOldEnoughToDrive(person) {
  return person.age > 16;
}

console.log('isOldEnoughToDrive:', isOldEnoughToDrive(Sally));

// isOldEnoughToDrinkAndDrive(person)

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(Sally));

// categorizeAcidity(pH)

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('categorizedAcidity(2):', categorizeAcidity(2));
console.log('categorizedAcidity(7):', categorizeAcidity(7));
console.log('categorizedAcidity(13):', categorizeAcidity(13));
console.log('categorizedAcidity(20):', categorizeAcidity(20));

// introduceWarnerBros(name)

function introduceWarnerBro(name) {
  switch (name) {
    case 'Yakko':
      return 'We\'re the warner brothers!';
    case 'Wakko':
      return 'We\'re the warner brothers!';
    case 'Dot':
      return 'I\'m cute~';
    default:
      return 'Goodnight everybody!';
  }
}

console.log(introduceWarnerBro('Yakko'));

// recommendMovie(genre)

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Rush Hour';
    case 'comedy':
      return 'White Chicks';
    case 'horror':
      return 'Sinister';
    case 'drama':
      return 'God\'s Own Country';
    case 'musical':
      return 'Sound of Music';
    case 'sci-fi':
      return 'Star Trek';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}

console.log(recommendMovie('horror'));
