import { Demo } from "./oop/abstraction";
import { AccountDemo } from "./oop/encapsulation";
import { AnimalDemo } from "./oop/inheritance";

AccountDemo();
AnimalDemo();
//Demo();

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  makeSound(): void {
    console.log("woof woof");
  }

  constructor(name: string) {
    this.name = name;
  }
}

class Cat implements Animal {
  name: string;
  makeSound(): void {
    console.log("meow");
  }

  constructor(name: string) {
    this.name = name;
  }
}

const dog = new Dog("Brody");

//console.log(dog.makeSound());
