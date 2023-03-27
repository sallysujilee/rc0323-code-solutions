/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstInitial = person.firstName[0];
  const lastInitial = person.lastName[0];
  return firstInitial + lastInitial;
}

var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};

console.log(lea.firstName[0] + lea.lastName[0]);
