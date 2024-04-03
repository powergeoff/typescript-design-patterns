//css classes enforce inheritance - child elements display whatever the parent tells them unless explicitly modified
class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} feet`);
  }
}

class Dog extends Animal {
  constructor(public name: string = "Brody Lou") {
    super(name);
  }
}

export const AnimalDemo = () => {
  const brody = new Dog();
  brody.move(10);
};

class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
  ) {}

  public display(): void {
    console.log(
      `ID ${this.id} Product: ${this.description} costs: $${this.price}`,
    );
  }
}
//extends for inheritance
class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public author: string,
    public title: string,
  ) {
    super(id, price, description);
  }
}

class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string,
  ) {
    super(id, price, description);
  }
  public display(): void {
    super.display();
    console.log(`Electronic stuff....`);
  }
}

const myBook = new Book("", 10, "Some book", "Kingsolver", "Poisonwood Bible");
myBook.display();
