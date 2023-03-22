/* exported getLastNameOfPerson */
function getLastNameOfPerson(person) {
  return person.lastName;
}

const lea1 = {
  firstName: 'Lea',
  lastName: 'Verou'
};

console.log(getLastNameOfPerson(lea1));
