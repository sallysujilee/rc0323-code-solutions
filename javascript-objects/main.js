const student = {
  firstName: 'Sally',
  lastName: 'Lee',
  age: 27
};

const fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Optician';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of studnet:', student);

// -----------------------

const vehicle = {
  make: 'Toyota',
  model: 'Supra',
  year: 2022
};

vehicle['color'] = 'ice grey';
vehicle['isConvertible'] = false;

console.log('value of vehicle color:', vehicle['color']);
console.log('value of vehicle isConvertible:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

// -----------------------

const pet = {
  name: 'Tony',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
