interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}

  abstract clone(): Shape;
}

//extends a class
//implement an interface

export class Rectangle extends Shape {
  //extend a class/ implement an interface
  //you must explicitly call the parent constructor
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number,
  ) {
    super(properties);
  }
  clone(): Shape {
    const clonedProps: ShapeProperties = {
      ...this.properties,
    };
    return new Rectangle(clonedProps, this.width, this.height);
  }
}

export class Circle extends Shape {
  //extend a class/ implement an interface
  //you must explicitly call the parent constructor
  constructor(
    properties: ShapeProperties,
    public radius: number,
  ) {
    super(properties);
  }
  clone(): Shape {
    const clonedProps: ShapeProperties = {
      ...this.properties,
    };
    return new Circle(clonedProps, this.radius);
  }
}
