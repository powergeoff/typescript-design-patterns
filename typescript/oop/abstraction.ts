//abstraction
interface Shape {
  //interface
  perimeter(): number;
  area(): number;
}
//implements for polymorphism
class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width * this.height);
  }
}

//polymorphism
//adhere to the contract and implement whatever you need
function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

export const Demo = () => {
  let circle: Circle = new Circle(5);
  let rectangle: Rectangle = new Rectangle(4, 6);

  console.log("Area Of Circle: ", calculateTotalArea(circle));
  console.log("Area Of Rectangle: ", calculateTotalArea(rectangle));

  const date = new Date();
  console.log("date", date);
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
};
