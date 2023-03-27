/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  return person.firstName + ' ' + person.lastName;
}
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};

console.log(getFullNameOfPerson(lea)); // "Lea Verou"
