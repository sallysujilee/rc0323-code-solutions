const imTired = 1;
const imTooOld = 2;
const gravityIsTooHeavy = 3;

const maximumValue = Math.max(imTired, imTooOld, gravityIsTooHeavy);
console.log('maximumValue', maximumValue);

// Heroes

const heroes = ['Deadpool', 'Deckerd', 'Zack Fair', 'Dean Winchester'];

let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
const randomHero = heroes[randomIndex];

console.log('randomIndex', randomIndex);
console.log('randomHero', randomHero);

// Array Methods

const library = [
  { title: 'Twist and Shout', author: 'gabriel' },
  { title: 'Cat\'s Cradle', author: 'Kurt Vonnegut' },
  { title: 'A Study in Scarlet', author: 'Sherlock Holmes' }
];

const lastBook = library.pop();
console.log('lastBook', lastBook);

const firstBook = library.shift();
console.log('firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 2);

console.log('library', library);

// string methods

const fullName = 'Sally Lee';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
