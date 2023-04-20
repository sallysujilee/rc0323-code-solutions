/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `This shape has an area of ${this.area} and a perimeter of ${this.perimeter}.`;
  }
}

const myShape = new Shape(25, 20);
console.log(myShape.describe());
