interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

export class Product {
  private parts: string[] = [];

  add(part: string): void {
    this.parts.push(part);
  }

  listParts(): string {
    return `Product parts: ${this.parts.join(", ")}`;
  }
}

export class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product();
  }
  setPartA(): void {
    this.product.add("Part A");
  }
  setPartB(): void {
    this.product.add("Part B");
  }
  setPartC(): void {
    this.product.add("Part C");
  }

  getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

export class Director {
  private builder!: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  buildMinimumProduct(): void {
    this.builder.setPartA();
  }

  buildFullProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}
