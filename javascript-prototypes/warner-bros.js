/* exported yakko, wakko, dot */
const warnerPrototype = {
  describe: function () {
    const description = this.name + ' is a ' +
      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

const yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
};
Object.setPrototypeOf(yakko, warnerPrototype);

const wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'
};
Object.setPrototypeOf(wakko, warnerPrototype);

const dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
};
Object.setPrototypeOf(dot, warnerPrototype);
