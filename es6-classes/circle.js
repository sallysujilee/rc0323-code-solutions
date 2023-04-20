/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    const area = Math.PI * radius ** 2;
    const perimeter = 2 * Math.PI * radius;
    super(area, perimeter);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()} It is also a circle with a radius of ${this.radius}.`;
  }
}

const myCircle = new Circle(3);
console.log(myCircle.describe());
