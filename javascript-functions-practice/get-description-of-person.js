/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const { name, occupation, birthPlace } = person;
  const description = `${name} is a ${occupation} from ${birthPlace}.`;
  return description;
}
var lea = {
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece'
};
const leaDescription = getDescriptionOfPerson(lea);

console.log(leaDescription);

// ---------------

var tim = {
  name: 'Tim Berners-Lee',
  occupation: 'computer scientist',
  birthPlace: 'London, England'
};
const timDescription = getDescriptionOfPerson(tim);

console.log(leaDescription, timDescription);
