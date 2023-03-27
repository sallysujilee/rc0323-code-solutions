function addTwoNumbers(x, y) {
  const sum = x + y;
  return sum;
}

const addTwoNumbersResult = addTwoNumbers(3, 4);
console.log('addTwoNumbersResult:', addTwoNumbersResult);

// convertMinutesToSeconds(minutes)

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

// greet(name)

function greet(name) {
  return 'Hey, ' + name;
}

const greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

// getArea(width, height)

function getArea(width, height) {
  const area = width * height;
  return area;
}

const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

// getFirstName(person)

function getFirstName(person) {
  return person.firstName;
}

const ofAllAnimeCharactersWhyThisGuy = { firstName: 'Lelouche', lastName: 'Lamperouge' };
console.log(getFirstName(ofAllAnimeCharactersWhyThisGuy));

// getLastElement(array)

function getLastElement(array) {
  return array[array.length - 1];
}

const array1 = ['propane', 'and', 'propane', 'accessories'];
console.log('getLastElement:', getLastElement(array1));
