export abstract class Car {
  constructor(public model: string, public productionYear: number){}

  abstract displayCarInfo(): string;
}

//extends for inheritance
//implements for polymorphism

export class Sedan extends Car{ //extends = new class is a child
  displayCarInfo(): string {
    return `Sedan ${this.model} year: ${this.productionYear}`;
  }
}

class SUV extends Car{ //extends = new class is a child
  displayCarInfo(): string {
    return `SUV ${this.model} year: ${this.productionYear}`;
  }
}

class HatchBack extends Car{ //extends = new class is a child
  displayCarInfo(): string {
    return `HatchBack ${this.model} year: ${this.productionYear}`;
  }
}

export class CarFactory {
  public createCar(
    type: 'sedan' | 'suv' | 'hatchBack',
    model:string,
    productionYear: number
  ): Car {
    switch(type){
      case 'sedan':
        return new Sedan(model, productionYear);
      case 'suv':
        return new SUV(model, productionYear);
      case 'hatchBack':
        return new HatchBack(model, productionYear);
      default:
        throw new Error("Invalid Car Type")
    }
  }
}