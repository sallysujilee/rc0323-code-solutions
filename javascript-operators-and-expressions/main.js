const width = 4;
const height = 6;

const area = width * height;

console.log('value of area', area);
console.log('typeof area', typeof area);

// ------

const bill = 10;
const payment = 8;

const change = bill - payment;

console.log('value of change', change);
console.log('typeof change', typeof change);

// --------

const quizzes = 60;
const midterm = 80;
const final = 80;

const grade = (quizzes + midterm + final) / 3;

console.log('value of grade', grade);
console.log('typeof grade', typeof grade);

// ---------

const firstName = 'Sally';
const lastName = 'Lee';

const fullName = firstName + ' ' + lastName;

console.log('value of fullName', fullName);
console.log('typeof fullName', typeof fullName);

// ---------

const pH = 6;

const isAcidic = pH < 7;

console.log('value of isAcidic', isAcidic);
console.log('typeof isAcidic', typeof isAcidic);

// -----------

const headCount = 300;

const isSparta = headCount === 300;

console.log('value of isSparta', isSparta);
console.log('typeof isSparta', typeof isSparta);

// --------

let motto = fullName;

motto += ' is the GOAT';
console.log('value of motto', motto);
console.log('typeof motto', typeof motto);
