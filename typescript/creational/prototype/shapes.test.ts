import { Circle, Rectangle } from "./shapes";

describe("Shapes Prototype Pattern", () => {
  test("expect cloned Circles to be different instances than parents", () => {
    const circle = new Circle({ color: "red", x: 1, y: 1 }, 17);

    const circle2 = circle.clone();

    expect(circle === circle2).not.toBe(true);
  });

  test("expect cloned Rectangles to be different instances than parents", () => {
    const rectangle = new Rectangle({ color: "red", x: 1, y: 1 }, 17, 25);

    const rectangle2 = rectangle.clone();

    expect(rectangle === rectangle2).not.toBe(true);
  });
});
