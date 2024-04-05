import { Singleton } from "./singleton";
describe("Singleton Unit Test", () => {
  test("Singleton only instantiates 1 instance", () => {
    //arrange
    const instance1: Singleton = Singleton.getInstance();
    const instance2: Singleton = Singleton.getInstance();

    //act
    instance1.myValue = 10;

    expect(instance1.myValue === instance2.myValue).toBe(true);
  });
});
