/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    const area = width * width;
    const perimeter = 4 * width;
    super(area, perimeter);
    this.width = width;
  }

  describe() {
    return `${super.describe()} It is also a square with a width of ${this.width}.`;
  }
}

const mySquare = new Square(5);
console.log(mySquare.describe());
