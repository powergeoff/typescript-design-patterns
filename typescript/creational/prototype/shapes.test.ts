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

  test("screw around with deep copy vs shallow copy and NEW JS structuredClone method", () => {
    const original = {
      name: "Geoff",
      address: {
        city: "Boston",
        street: "Glade",
      },
    };

    const shallowCopy = { ...original };
    //you changed the orignal
    shallowCopy.address.city = "Los Angeles";

    expect(original.address.city).toBe("Los Angeles");
    expect(shallowCopy.address.city === original.address.city).toBe(true);

    const deepCopy = JSON.parse(JSON.stringify(original));
    deepCopy.address.city = "San Francisco";

    expect(deepCopy.address.city === original.address.city).not.toBe(true);

    const clone = structuredClone(original);
    clone.address.city = "Denver";

    expect(original.address.city).toBe("Los Angeles");
    expect(clone.address.city).toBe("Denver");
    expect(clone.address.city === original.address.city).not.toBe(true);
  });
});
