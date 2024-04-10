import { CarFactory, Sedan } from "./car-factory";

describe("CarFactory ", () => {

  test("Create a new sedan", () => {
    //debugger;
    const factory = new CarFactory();
    const sedan = factory.createCar('sedan', 'Camry', 2024);

    expect(sedan.displayCarInfo()).toBe('Sedan Camry year: 2024');

  })

});