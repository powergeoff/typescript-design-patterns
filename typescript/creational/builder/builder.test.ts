import { Director, ConcreteBuilder, Product } from "./builder";

describe("Director", () => {
  const builder = new ConcreteBuilder();
  const director = new Director();
  director.setBuilder(builder);

  test("Minimum Viable Product only has Part A", () => {
    director.buildMinimumProduct();
    const minimumProduct: Product = builder.getProduct();
    const parts = minimumProduct.listParts();

    expect(parts === "Product parts: Part A").toBe(true);
  });

  test("Full Product has all parts A, B ,C", () => {
    director.buildFullProduct();
    const fullProduct: Product = builder.getProduct();
    const parts = fullProduct.listParts();

    expect(parts === "Product parts: Part A, Part B, Part C").toBe(true);
  });
});
