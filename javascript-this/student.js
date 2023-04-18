/* exported student */
let student = {
  firstName: 'Sally',
  lastName: 'Lee',
  subject: 'UI/UX',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }
};

console.log(student.getFullName());
console.log(student.getIntroduction());
