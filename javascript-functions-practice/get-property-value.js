/* exported getPropertyValue */
function getPropertyValue(object, key) {
  return object[key];
}

var lea2 = {
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece'
};

console.log(getPropertyValue(lea2, 'occupation'));
